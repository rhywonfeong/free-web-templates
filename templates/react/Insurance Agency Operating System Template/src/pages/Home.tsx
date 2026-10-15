import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  Activity,
  Users,
  FileText,
  Wallet,
  MapPin,
  ShieldCheck,
  BadgeCheck,
  ArrowUpRight,
  ArrowRight,
  MoreHorizontal,
  Bot,
  GraduationCap,
  Files,
  Trophy,
  CalendarDays,
  LifeBuoy,
  Network,
  Target,
  Landmark,
  Search,
  Bell,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Layers,
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

const carriers = [
  'MERIDIAN LIFE',
  'ATLAS ANNUITY',
  'SUMMIT MUTUAL',
  'PIONEER FINANCIAL',
  'GUARDIAN WEST',
  'CRESTPOINT',
];

const modules = [
  { icon: LayoutGrid, label: 'Agent Dashboard', desc: 'Your daily money map' },
  { icon: Users, label: 'CRM & Pipeline', desc: 'Lead to active client' },
  { icon: Target, label: 'Lead Marketplace', desc: 'FE, IUL, Term, Medicare' },
  { icon: Search, label: 'Quoting Center', desc: 'Life, annuity & health' },
  { icon: FileText, label: 'E-App Center', desc: 'iPipeline & FireLight' },
  { icon: Layers, label: 'Case Management', desc: 'Submitted to paid' },
  { icon: Wallet, label: 'Commissions', desc: 'Expected, paid, chargebacks' },
  { icon: Activity, label: 'Persistency Engine', desc: '3 / 6 / 9 / 12-month' },
  { icon: GraduationCap, label: 'Training / LMS', desc: 'Certifications tracked' },
  { icon: Files, label: 'Document Center', desc: 'Guides, grids & forms' },
  { icon: Network, label: 'Hierarchy & Agency', desc: 'Upline to downline' },
  { icon: Trophy, label: 'Leaderboards', desc: 'Contests & bonuses' },
];

const roadmap = [
  {
    phase: 'Phase 1',
    name: 'Foundation',
    desc: 'The single login and everything an agent needs to become ready to sell.',
    items: [
      'SSO + agent dashboard & roles',
      'SureLC licensing & contracting',
      'Ready-to-Sell carrier matrix',
      'LMS, document center & onboarding',
      'Quoting / eApp launch points',
    ],
  },
  {
    phase: 'Phase 2',
    name: 'Operating Data',
    desc: 'Every application, commission and lead becomes trackable operating data.',
    items: [
      'CRM integration & case management',
      'Production & commission feeds',
      'Persistency & lead attribution',
      'Hierarchy & agency-owner dashboards',
      'Bonus tracking & operational alerts',
    ],
  },
  {
    phase: 'Phase 3',
    name: 'Intelligence',
    desc: 'A normalized data warehouse powering AI across the whole agency.',
    items: [
      'Veritas data warehouse',
      'Product intelligence engine',
      'AI underwriting assistant',
      'Veritas AI & agent scoring',
      'Predictive management reporting',
    ],
  },
];

const endState = [
  'Get Licensed',
  'Get Contracted',
  'Get Trained',
  'Get Leads',
  'Quote',
  'Submit Business',
  'Track Underwriting',
  'Get Paid',
  'Track Persistency',
  'Recruit Agents',
  'Build an Agency',
];

const testimonials = [
  {
    org: 'Summit Legacy Group',
    quote:
      '"Before Veritas my agents lived in eleven browser tabs. Now contracting, quoting and commissions are one login — new producers write their first app in days, not weeks."',
    statA: '38%',
    statALabel: 'Faster agent activation',
    statB: '91%',
    statBLabel: '12-month persistency',
    person: 'Marcus Bell',
    role: 'Agency Owner',
    avatar: 'https://i.pravatar.cc/150?u=veritas-marcus',
  },
  {
    org: 'Northline Financial',
    quote:
      '"The Ready-to-Sell check alone pays for itself. My team knows exactly what they can write by carrier, product and state — nobody calls operations to ask anymore."',
    statA: '2.4x',
    statALabel: 'Applications per agent',
    statB: '-63%',
    statBLabel: 'Contracting tickets',
    person: 'Alana Reyes',
    role: 'Managing Partner',
    avatar: 'https://i.pravatar.cc/150?u=veritas-alana',
  },
  {
    org: 'Ironwood Agency',
    quote:
      '"Lead attribution changed how we buy. We finally see CPL through to paid premium, chargebacks and persistency — we cut two vendors and doubled ROI in a quarter."',
    statA: '2.1x',
    statALabel: 'Lead ROI in 90 days',
    statB: '$1.8M',
    statBLabel: 'Issued paid premium',
    person: 'Devon Okafor',
    role: 'Director of Growth',
    avatar: 'https://i.pravatar.cc/150?u=veritas-devon',
  },
];

function SectionHeading({
  kicker,
  title,
  sub,
  cta,
  ctaTo,
}: {
  kicker: string;
  title: React.ReactNode;
  sub: string;
  cta?: string;
  ctaTo?: string;
}) {
  return (
    <div className="mb-16 relative">
      <div
        className="absolute -top-12 -left-12 w-32 h-32 bg-[#c6f91f]/5 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase text-xs font-semibold text-[#c6f91f] tracking-widest font-geist">
              {kicker}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
            {title}
          </h2>
          <p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll">{sub}</p>
        </div>
        {cta && ctaTo && (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to={ctaTo}
              className="sm:w-auto hover:bg-slate-200 transition-colors font-medium text-black font-geist text-center bg-white w-full rounded-full py-3 px-7"
            >
              {cta}
            </Link>
          </div>
        )}
      </div>
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent"></div>
    </div>
  );
}

function CountUp({
  value,
  prefix = '',
  duration = 1800,
}: {
  value: number;
  prefix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
    </span>
  );
}

const BASE_TILT = { rx: 7, ry: -12 };

function Home() {
  useReveal();

  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(BASE_TILT);

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: BASE_TILT.rx + py * -7,
      ry: BASE_TILT.ry + px * 11,
    });
  };

  const handleTiltLeave = () => setTilt(BASE_TILT);

  return (
    <>
      {/* HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-dashed border-white/10 border-b">
        <div className="relative overflow-hidden flex flex-col lg:px-20 lg:py-24 pt-16 px-6 pb-16 justify-center border-dashed border-white/10 lg:border-r bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900/40 via-[#05080A] to-[#05080A] reveal-on-scroll">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#c6f91f]/25 bg-[#c6f91f]/5 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6f91f] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6f91f]"></span>
              </span>
              <p className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                SSO Platform &amp; Agency OS
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 font-geist font-light tracking-tighter reveal-on-scroll">
              One login.
              <br />
              <span className="text-white/60">Your entire</span>
              <br />
              <span className="text-shimmer">insurance business.</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed max-w-lg mb-12 font-light font-geist text-white/80 reveal-on-scroll">
              Veritas is the operating layer between the agent and the insurance
              ecosystem — contracting, licensing, quoting, CRM, applications,
              commissions and agency building in one place, with SureLC as the
              infrastructure underneath.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Link
                to="/login"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#c6f91f] hover:bg-[#d4ff45] transition-all duration-300 reveal-on-scroll"
              >
                <span className="text-black font-semibold tracking-wide text-xs uppercase font-geist">
                  Agent Login
                </span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:bg-white/5 transition-all duration-300 reveal-on-scroll"
              >
                <span className="text-white font-medium tracking-wide text-xs uppercase font-geist">
                  Book a Walkthrough
                </span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {['Ready-to-Sell checks', 'SureLC SSO', 'Live commissions', 'Persistency tracking'].map(
                (t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-widest font-geist text-white/50 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.02]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Dashboard mockup — 3D tilted stage */}
        <div
          ref={stageRef}
          onMouseMove={handleTiltMove}
          onMouseLeave={handleTiltLeave}
          className="overflow-hidden reveal-on-scroll bg-gradient-to-r from-[#c6f91f] to-[#000000] z-10 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#c6f91f]/10 via-[#05080A] to-[#05080A] opacity-40"></div>
          <div className="hero-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c6f91f]/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>

          <div className="z-10 flex lg:p-16 h-full p-6 sm:p-8 relative items-center justify-center">
            <div className="hero-entrance w-full max-w-2xl">
              <div
                className="hero-tilt-card relative"
                style={{
                  transform: `perspective(1300px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                }}
              >
                {/* Floating stat chips */}
                <div
                  className="float-chip absolute -top-5 -left-2 sm:-left-6 z-30 flex items-center gap-2.5 rounded-2xl border border-[#c6f91f]/30 bg-[#0B0F13]/95 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  style={{ '--z': '90px' } as React.CSSProperties}
                >
                  <div className="w-8 h-8 rounded-xl bg-[#c6f91f]/10 border border-[#c6f91f]/25 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-[#c6f91f]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white font-geist font-medium leading-tight">
                      Commission paid
                    </div>
                    <div className="text-[10px] text-[#c6f91f] font-geist font-semibold">
                      +$2,140 · just now
                    </div>
                  </div>
                </div>

                <div
                  className="float-chip absolute -bottom-5 -right-2 sm:-right-6 z-30 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#0B0F13]/95 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  style={{ '--z': '65px', animationDelay: '-2.8s' } as React.CSSProperties}
                >
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#c6f91f]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white font-geist font-medium leading-tight">
                      Ready to Sell
                    </div>
                    <div className="text-[10px] text-slate-400 font-geist">
                      Verified · 42 carriers
                    </div>
                  </div>
                </div>

                <div className="card-shine overflow-hidden flex flex-col md:flex-row md:h-[520px] bg-[#0B0F13] w-full border-white/10 border rounded-[2rem] shadow-[0_25.7px_20.5px_rgba(0,0,0,0.123),_0_85.8px_68.5px_rgba(0,0,0,0.176),_0_205px_163.4px_rgba(0,0,0,0.246)] backdrop-blur-xl">
              {/* Sidebar */}
              <div className="md:w-56 flex flex-col bg-[#080B0E]/60 w-full border-white/5 md:border-r p-4">
                <div className="flex items-center gap-3 mb-8 px-2">
                  <div className="w-9 h-9 rounded-2xl bg-[#c6f91f] flex items-center justify-center text-black font-geist font-semibold">
                    V
                  </div>
                  <div>
                    <div className="text-white text-xs font-geist font-medium">VERITAS</div>
                    <div className="text-[9px] text-slate-500 font-geist">Agent Portal</div>
                  </div>
                </div>

                <div className="space-y-1 overflow-y-auto no-scrollbar flex-1">
                  <div className="flex items-center gap-3 px-3 py-2 bg-[#c6f91f]/10 text-[#c6f91f] border border-[#c6f91f]/20 rounded-full cursor-pointer text-xs font-medium font-geist">
                    <LayoutGrid className="w-4 h-4" />
                    Home
                  </div>
                  {[
                    { icon: Users, label: 'CRM' },
                    { icon: Target, label: 'Leads' },
                    { icon: Search, label: 'Quoting' },
                    { icon: FileText, label: 'Applications' },
                    { icon: BadgeCheck, label: 'Contracting' },
                    { icon: Wallet, label: 'Commissions' },
                    { icon: Bot, label: 'Veritas AI' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-300 cursor-pointer text-xs font-geist rounded-full hover:bg-white/[0.03] transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main panel */}
              <div className="flex-1 p-6 flex flex-col bg-transparent relative">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-white font-medium text-sm font-geist">Paid Premium</h3>
                  <span className="text-[10px] bg-white/5 px-3 py-1 rounded-full text-slate-400 border border-white/5 font-geist">
                    This Month
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-4xl text-white mb-1 font-geist font-light tracking-tighter">
                    <CountUp value={184270} prefix="$" />
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-2 font-geist">
                    <span className="text-[#c6f91f] bg-[#c6f91f]/10 px-2 py-0.5 rounded-full">
                      +12.4%
                    </span>
                    vs last month
                  </div>
                </div>

                <div className="bg-[#0E1216]/60 border border-white/5 rounded-3xl p-5 reveal-on-scroll">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-xs text-slate-400 mb-1 font-geist">Submitted Premium</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-medium text-white font-geist">$241,900</span>
                        <span className="text-[10px] font-medium text-[#c6f91f] font-geist">
                          +18 apps this week
                        </span>
                      </div>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-slate-600" />
                  </div>

                  <div className="h-24 w-full relative mt-2">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 310 100">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#c6f91f" stopOpacity="0.2"></stop>
                          <stop offset="100%" stopColor="#c6f91f" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        className="chart-area"
                        d="M0,85 C30,80 50,68 80,72 C110,76 140,52 170,56 C200,60 230,38 260,22 C270,18 290,26 310,8 L310,100 L0,100 Z"
                        fill="url(#chartGradient)"
                      ></path>
                      <path
                        className="chart-line"
                        pathLength={1}
                        d="M0,85 C30,80 50,68 80,72 C110,76 140,52 170,56 C200,60 230,38 260,22 C270,18 290,26 310,8"
                        fill="none"
                        stroke="#c6f91f"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { label: 'Placement', value: '87%' },
                    { label: '12-mo Persist.', value: '91%' },
                    { label: 'Pending Cases', value: '14' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/[0.03] border border-white/5 rounded-2xl px-3 py-3 text-center"
                    >
                      <div className="text-sm text-white font-geist font-medium">{s.value}</div>
                      <div className="text-[9px] text-slate-500 font-geist uppercase tracking-wide mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between bg-[#c6f91f]/5 border border-[#c6f91f]/20 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c6f91f]" />
                    <span className="text-[11px] text-white font-geist">
                      Ready to Sell — Meridian IUL · TX
                    </span>
                  </div>
                  <span className="text-[9px] text-[#c6f91f] font-geist uppercase tracking-widest">
                    Verified
                  </span>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARRIER MARQUEE */}
      <div className="border-dashed bg-[#05080A] border-white/10 border-b group/footer">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-12 md:col-span-2 py-8 px-6 md:px-10 border-b md:border-b-0 md:border-r border-dashed border-white/10 flex items-center bg-[#05080A] relative z-20 reveal-on-scroll">
              <span className="text-xs font-medium tracking-widest text-slate-500 uppercase font-geist">
                Carrier Network
              </span>
            </div>

            <div
              className="col-span-12 md:col-span-10 relative overflow-hidden h-20 flex items-center reveal-on-scroll"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              }}
            >
              <div className="animate-marquee">
                {[...carriers, ...carriers, ...carriers].map((c, i) => (
                  <div
                    key={`${c}-${i}`}
                    className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity"
                  >
                    <span className="text-lg font-semibold text-white tracking-tighter font-geist">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 01 PLATFORM */}
      <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            kicker="01. Platform"
            title={
              <>
                Every system your
                <br />
                agents need. One login.
              </>
            }
            sub="Not a collection of carrier links — an operating layer connecting licensing, contracting, quoting, CRM, new business and commissions."
            cta="Explore the platform"
            ctaTo="/about"
          />

          {/* Feature trio */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            <div className="col-span-12 md:col-span-4 p-8 md:p-10 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.02] flex flex-col justify-center reveal-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="w-4 h-4 text-[#c6f91f]" />
                <span className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                  SureLC Inside
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl text-white font-light tracking-tighter mb-4 font-geist reveal-on-scroll">
                Built on real infrastructure.
              </h2>
              <p className="text-sm leading-relaxed font-geist text-white/70 reveal-on-scroll">
                SureLC powers licensing, contracting and appointments underneath.
                Producer data, NPN, licenses, lines of authority, appointments and
                E&amp;O sync automatically — agents enter SureLC without a second
                login.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] group hover:bg-white/[0.04] transition-colors relative overflow-hidden reveal-on-scroll">
              <div className="mb-6 relative w-full bg-slate-900/50 rounded-2xl border border-white/5 flex flex-col p-4 overflow-hidden">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="font-mono text-[10px] text-slate-500 space-y-1.5">
                  <p className="text-white/70">
                    <span className="text-[#c6f91f]">~</span> ready_to_sell --check
                  </p>
                  <p className="text-slate-500">carrier: Meridian · product: IUL · state: TX</p>
                  <p>
                    <span className="text-[#c6f91f]">✓ Contract active</span> · writing #48291
                  </p>
                  <p>
                    <span className="text-[#c6f91f]">✓ License</span> · <span className="text-[#c6f91f]">✓ AML</span> ·{' '}
                    <span className="text-[#c6f91f]">✓ Product training</span>
                  </p>
                  <p className="text-white">RESULT: READY TO SELL</p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#c6f91f]/10 blur-[40px] rounded-full group-hover:bg-[#c6f91f]/20 transition-colors"></div>
              </div>
              <h3 className="text-white font-medium mb-2 font-geist reveal-on-scroll">
                Ready-to-Sell Check
              </h3>
              <p className="text-xs leading-relaxed font-geist text-white/60 reveal-on-scroll">
                Instant Can-Sell verification by carrier + product + state — with
                exact reasons when you are not: missing contract, license,
                appointment, AML or training.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] group hover:bg-white/[0.04] transition-colors relative overflow-hidden reveal-on-scroll">
              <div className="mb-6 relative h-[132px] w-full rounded-2xl border border-white/5 bg-slate-900/40 overflow-hidden p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#c6f91f]" />
                  <span className="text-[10px] uppercase tracking-widest text-white/60 font-geist">
                    Licensing Map
                  </span>
                </div>
                <div className="grid grid-cols-8 gap-1.5">
                  {[
                    2, 1, 1, 0, 1, 1, 2, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1,
                  ].map((v, i) => (
                    <div
                      key={i}
                      className={`h-4 rounded-md ${
                        v === 1
                          ? 'bg-[#c6f91f]/70'
                          : v === 2
                          ? 'bg-yellow-500/50'
                          : v === 3
                          ? 'bg-red-500/50'
                          : 'bg-white/5'
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex gap-3 mt-3 text-[8px] uppercase tracking-wider text-slate-500 font-geist">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#c6f91f]/70"></span>Active
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>Expiring
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500/50"></span>Expired
                  </span>
                </div>
              </div>
              <h3 className="text-white font-medium mb-2 font-geist reveal-on-scroll">
                Interactive Licensing Map
              </h3>
              <p className="text-xs leading-relaxed font-geist text-white/60 reveal-on-scroll">
                Active, expiring and expired states at a glance. Click any state for
                lines of authority, expirations and proactive renewal alerts.
              </p>
            </div>
          </div>

          {/* Module grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-4 group hover:bg-white/[0.04] hover:-translate-y-1 hover:border-[#c6f91f]/25 transition-all duration-300 p-5 rounded-3xl border border-white/5 bg-white/[0.015] reveal-on-scroll"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#c6f91f]/40 transition-colors">
                  <m.icon className="w-5 h-5 text-slate-400 group-hover:text-[#c6f91f] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium font-geist">{m.label}</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-geist">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 VERITAS AI */}
      <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            kicker="02. Veritas AI"
            title={
              <>
                Intelligence built into
                <br />
                every workflow.
              </>
            }
            sub="A permission-aware assistant that knows your comp, your cases, your Ready-to-Sell status and every underwriting guide in the vault."
            cta="Talk to our team"
            ctaTo="/contact"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Orchestration */}
            <div className="col-span-12 md:col-span-4 relative h-[380px] overflow-hidden group rounded-[2rem] border border-white/10 bg-white/[0.02] reveal-on-scroll">
              <div className="absolute inset-0 flex items-center justify-center -translate-y-14 opacity-80">
                <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5"></div>
                <div className="absolute w-[200px] h-[200px] rounded-full border border-white/5"></div>
                <div className="absolute w-[120px] h-[120px] rounded-full border border-white/5"></div>
                <div className="absolute w-[280px] h-[280px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_240deg,rgba(198,249,31,0.2)_360deg)] animate-[spin_4s_linear_infinite]"></div>
                <div className="absolute top-8 left-8 flex items-center gap-2 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></div>
                  <span className="text-[10px] text-[#c6f91f] uppercase tracking-widest font-geist font-medium">
                    Veritas AI Active
                  </span>
                </div>
                <Sparkles className="w-10 h-10 text-[#c6f91f] relative z-10" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-gradient-to-t from-[#05080A] via-[#05080A]/80 to-transparent pt-20">
                <h3 className="text-white font-medium text-lg mb-2 font-geist reveal-on-scroll">
                  AI UNDERWRITING ASSISTANT
                </h3>
                <p className="text-xs leading-relaxed font-geist pr-4 text-white/70 reveal-on-scroll">
                  Enter age, build, tobacco and conditions — get advisory carrier
                  matches with explanations sourced from real underwriting guides.
                </p>
              </div>
            </div>

            {/* Notifications */}
            <div className="col-span-12 md:col-span-4 p-8 flex flex-col h-[380px] rounded-[2rem] border border-white/10 bg-white/[0.02] reveal-on-scroll">
              <div className="mb-6">
                <h3 className="text-white font-medium text-lg mb-2 font-geist reveal-on-scroll">
                  UNIFIED NOTIFICATIONS
                </h3>
                <p className="text-xs leading-relaxed font-geist text-white/70 reveal-on-scroll">
                  One alert stream for cases, licensing, contracting, commissions
                  and training — push, email or SMS.
                </p>
              </div>

              <div className="flex-1 space-y-4">
                {[
                  {
                    icon: AlertTriangle,
                    label: 'Case Requirement — APS Needed',
                    active: true,
                    w: 'w-2/3',
                  },
                  { icon: MapPin, label: 'GA License Expiring in 30 Days', active: false, w: 'w-1/2' },
                  { icon: DollarSign, label: 'Commission Paid — $2,140', active: false, w: 'w-1/3' },
                  { icon: Trophy, label: 'Bonus Progress — 82% to Tier 2', active: false, w: 'w-1/4' },
                ].map((n) => (
                  <div key={n.label} className="group cursor-pointer reveal-on-scroll">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center border transition-colors ${
                            n.active
                              ? 'bg-[#c6f91f]/10 border-[#c6f91f]/20 text-[#c6f91f]'
                              : 'bg-white/5 border-white/10 text-slate-500 group-hover:text-white group-hover:border-white/20'
                          }`}
                        >
                          <n.icon className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wide font-geist transition-colors ${
                            n.active ? 'text-[#c6f91f]' : 'text-slate-500 group-hover:text-white'
                          }`}
                        >
                          {n.label}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-600 font-mono">NOW</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${n.w} ${
                          n.active
                            ? 'bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]'
                            : 'bg-slate-700 group-hover:bg-slate-500'
                        } transition-colors rounded-full`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipeline */}
            <div className="col-span-12 md:col-span-4 h-[380px] p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] flex flex-col reveal-on-scroll">
              <div className="mb-5">
                <h3 className="text-white font-medium text-lg mb-2 font-geist">CRM PIPELINE</h3>
                <p className="text-xs leading-relaxed font-geist text-white/70">
                  New Lead to Active Client — every stage tracked and attributed.
                </p>
              </div>
              <div className="flex-1 space-y-2 overflow-hidden">
                {[
                  { stage: 'New Lead', n: 42, pct: 'w-full' },
                  { stage: 'Contacted', n: 31, pct: 'w-[75%]' },
                  { stage: 'Quoted', n: 19, pct: 'w-[48%]' },
                  { stage: 'Application', n: 12, pct: 'w-[30%]' },
                  { stage: 'Underwriting', n: 8, pct: 'w-[20%]' },
                  { stage: 'Issued / Paid', n: 6, pct: 'w-[14%]', hot: true },
                ].map((s) => (
                  <div key={s.stage} className="reveal-on-scroll">
                    <div className="flex justify-between text-[10px] font-geist mb-1">
                      <span className={s.hot ? 'text-[#c6f91f]' : 'text-slate-400'}>{s.stage}</span>
                      <span className="text-slate-600">{s.n}</span>
                    </div>
                    <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${s.pct} rounded-full ${
                          s.hot ? 'bg-[#c6f91f]' : 'bg-white/15'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Big stat row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] pt-16 px-8 pb-8 relative reveal-on-scroll">
              <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end gap-[1px] opacity-100 pointer-events-none pr-8">
                <div className="w-24 h-[20%] bg-white/[0.02] border-t border-l border-r border-dashed border-white/10 rounded-t-2xl"></div>
                <div className="w-24 h-[40%] bg-white/[0.02] border-t border-l border-r border-dashed border-white/10 rounded-t-2xl"></div>
                <div className="w-24 h-[60%] bg-white/[0.02] border-t border-l border-r border-dashed border-white/10 rounded-t-2xl"></div>
                <div className="w-24 h-[80%] bg-[#c6f91f]/5 border-t border-l border-r border-dashed border-[#c6f91f]/30 rounded-t-2xl relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#c6f91f]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <div className="text-[64px] leading-none font-light text-[#c6f91f] tracking-tighter font-geist mb-2">
                  91%
                </div>
                <h3 className="text-white font-medium text-lg mb-2 uppercase tracking-wide font-geist reveal-on-scroll">
                  12-Month Persistency
                </h3>
                <p className="text-sm leading-relaxed font-geist max-w-md text-white/70 reveal-on-scroll">
                  Veritas separates raw production from profitable, durable
                  production — tracking 3, 6, 9 and 12-month persistency by agent,
                  carrier, product, lead source and campaign.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-8 flex flex-col justify-end rounded-[2rem] border border-white/10 bg-white/[0.02] min-h-[300px] reveal-on-scroll">
              <div className="mt-auto">
                <div className="w-11 h-11 rounded-2xl bg-[#c6f91f]/10 border border-[#c6f91f]/20 flex items-center justify-center mb-5">
                  <BadgeCheck className="w-5 h-5 text-[#c6f91f]" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2 uppercase tracking-wide font-geist reveal-on-scroll">
                  Veritas Agent Score
                </h3>
                <p className="text-sm leading-relaxed font-geist text-white/70 reveal-on-scroll">
                  A proprietary score combining production, placement, persistency,
                  compliance and activity — unlocking lead access, comp promotions
                  and bonus eligibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 AGENCIES */}
      <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            kicker="03. Agencies"
            title={
              <>
                Built for agency
                <br />
                builders.
              </>
            }
            sub="See how agency owners run contracting, production and overrides on Veritas."
            cta="Become a partner"
            ctaTo="/contact"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-geist items-stretch">
            {testimonials.map((t) => (
              <div
                key={t.org}
                className="group relative flex h-full flex-col bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden reveal-on-scroll hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-300"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"></div>
                </div>
                <div className="relative flex-1 flex flex-col p-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <ShieldCheck className="w-4 h-4 text-[#c6f91f]" />
                    <span className="text-sm font-semibold tracking-wide">{t.org}</span>
                  </div>
                  <p className="mt-6 text-[15px] leading-relaxed text-white/85 min-h-[170px] reveal-on-scroll">
                    {t.quote}
                  </p>
                </div>
                <div className="grid grid-cols-2 border-t border-white/10 divide-x divide-white/10">
                  <div className="p-6 flex flex-col justify-center reveal-on-scroll">
                    <div className="text-3xl font-semibold tracking-tight text-white">{t.statA}</div>
                    <div className="mt-2 text-xs font-medium text-white/60">{t.statALabel}</div>
                  </div>
                  <div className="p-6 flex flex-col justify-center reveal-on-scroll">
                    <div className="text-3xl font-semibold tracking-tight text-white">{t.statB}</div>
                    <div className="mt-2 text-xs font-medium text-white/60">{t.statBLabel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-white/10 p-6">
                  <img
                    src={t.avatar}
                    alt={t.person}
                    className="w-10 h-10 rounded-full object-cover bg-slate-800 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.person}</div>
                    <div className="text-xs text-white/60">
                      {t.role} · <span className="text-white/80">{t.org}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 ROADMAP */}
      <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            kicker="04. Roadmap"
            title={
              <>
                From foundation
                <br />
                to intelligence.
              </>
            }
            sub="Three phases. One operating system. Veritas owns the experience — SureLC stays the engine underneath."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((p, i) => (
              <div
                key={p.phase}
                className={`flex flex-col group transition-colors duration-300 h-full border rounded-[2rem] p-9 relative reveal-on-scroll ${
                  i === 1
                    ? 'border-[#c6f91f]/40 bg-[#c6f91f]/[0.04] hover:bg-[#c6f91f]/[0.07]'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
              >
                <div className="mb-7">
                  <span
                    className={`inline-block px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 font-geist ${
                      i === 1
                        ? 'text-black bg-[#c6f91f] border border-[#c6f91f]'
                        : 'text-slate-300 border border-white/10 bg-white/5 group-hover:text-[#c6f91f] group-hover:border-[#c6f91f]/50'
                    }`}
                  >
                    {p.phase}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-medium text-white tracking-tight font-geist">
                    {p.name}
                  </span>
                </div>
                <p className="text-white/60 text-sm mb-8 font-geist font-light reveal-on-scroll">
                  {p.desc}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-3.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            i === 1 ? 'text-[#c6f91f]' : 'text-white/40'
                          }`}
                        />
                        <span className="text-white/70 text-sm font-light font-geist">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* End state */}
          <div className="mt-16 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.015] p-8 md:p-10 reveal-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-4 h-4 text-[#c6f91f]" />
              <span className="uppercase text-xs font-semibold text-[#c6f91f] tracking-widest font-geist">
                The End State
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-y-3">
              {endState.map((step, i) => (
                <React.Fragment key={step}>
                  <span
                    className={`text-xs font-geist rounded-full px-4 py-2 border ${
                      i === endState.length - 1
                        ? 'bg-[#c6f91f] text-black border-[#c6f91f] font-semibold'
                        : 'text-white/80 border-white/10 bg-white/[0.03]'
                    }`}
                  >
                    {step}
                  </span>
                  {i < endState.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-white/30 mx-2 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#c6f91f] hover:bg-[#d4ff45] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-colors font-geist"
            >
              Get Contracted with Veritas
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:bg-white/5 text-white text-xs uppercase tracking-widest px-8 py-4 transition-colors font-geist"
            >
              Agent Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
