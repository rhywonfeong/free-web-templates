import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Landmark,
  Database,
  Fingerprint,
  ShieldCheck,
  Network,
  Lock,
  Layers,
  Sparkles,
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

const flow = [
  'One Login',
  'Agent Profile',
  'Contracting',
  'Training',
  'Quoting',
  'CRM',
  'Applications',
  'Production',
  'Commissions',
  'Compliance',
  'Agency Building',
];

const pillars = [
  {
    icon: Fingerprint,
    title: 'Veritas Owns the Experience',
    desc: 'The user experience, hierarchy, compensation, production, leads, CRM, business intelligence and AI layer all live in Veritas — one coherent surface for the agent.',
  },
  {
    icon: Landmark,
    title: 'SureLC Stays the Engine',
    desc: 'Licensing, contracting and appointments are not rebuilt. SureLC remains the specialized infrastructure underneath, reached through embedded SSO with no second login.',
  },
  {
    icon: Database,
    title: 'We Own the Relationship Data',
    desc: 'Agent → Lead → Sale → Carrier → Policy → Commission → Persistency. A normalized warehouse of core objects powers true lead economics and agent scoring.',
  },
];

const roles = [
  'Agent',
  'Manager',
  'Agency Owner',
  'Contracting',
  'New Business',
  'Commissions',
  'Marketing',
  'Admin',
  'Executive',
  'Super Admin',
];

const stats = [
  { value: '37', label: 'Platform modules under one login' },
  { value: '6', label: 'Contracting statuses tracked live' },
  { value: '3/6/9/12', label: 'Month persistency windows' },
  { value: '10', label: 'Permission-based roles' },
];

export default function About() {
  useReveal();

  return (
    <>
      {/* Vision hero */}
      <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c6f91f]/5 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#c6f91f]/25 bg-[#c6f91f]/5 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-[#c6f91f]"></span>
            <p className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
              Our Vision
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 font-geist font-light tracking-tighter max-w-4xl reveal-on-scroll">
            The operating layer between the agent and the{' '}
            <span className="text-white/60">insurance ecosystem.</span>
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-12 font-light font-geist text-white/80 reveal-on-scroll">
            Veritas should not be a collection of carrier links. It is a single
            sign-on platform and agency operating system that answers one question
            every morning: what do I need to do today to make money and keep my
            business in good standing?
          </p>

          <div className="flex flex-wrap items-center gap-y-3 max-w-4xl reveal-on-scroll">
            {flow.map((step, i) => (
              <React.Fragment key={step}>
                <span
                  className={`text-xs font-geist rounded-full px-4 py-2 border ${
                    i === 0 || i === flow.length - 1
                      ? 'bg-[#c6f91f] text-black border-[#c6f91f] font-semibold'
                      : 'text-white/80 border-white/10 bg-white/[0.03]'
                  }`}
                >
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-white/30 mx-2 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase text-xs font-semibold text-[#c6f91f] tracking-widest font-geist">
              Principles
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-light tracking-tighter mb-16 font-geist leading-[1.1] reveal-on-scroll">
            How Veritas is built.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-9 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group reveal-on-scroll"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#c6f91f]/10 border border-[#c6f91f]/20 flex items-center justify-center mb-6">
                  <p.icon className="w-5 h-5 text-[#c6f91f]" />
                </div>
                <h3 className="text-white font-medium text-lg mb-3 font-geist">{p.title}</h3>
                <p className="text-sm leading-relaxed font-geist text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-7 rounded-3xl border border-dashed border-white/10 bg-white/[0.015] text-center reveal-on-scroll"
              >
                <div className="text-3xl md:text-4xl font-light tracking-tighter text-[#c6f91f] font-geist">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-medium text-white/50 font-geist uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 md:col-span-5 p-9 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.02] flex flex-col justify-center reveal-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <Network className="w-4 h-4 text-[#c6f91f]" />
                <span className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                  Integration Layer
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl text-white font-light tracking-tighter mb-4 font-geist reveal-on-scroll">
                API-first, systems of record respected.
              </h2>
              <p className="text-sm leading-relaxed font-geist text-white/70 reveal-on-scroll">
                Veritas connects SureLC, CRM, eApps, communication systems,
                calendars, payments, carrier production and commission feeds, and
                lead platforms — preferring systems of record over duplicating
                regulated or carrier-owned data.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  { top: 'VERITAS', sub: 'Experience · Hierarchy · Comp · CRM · BI · AI', hot: true },
                  { top: 'SURELC', sub: 'Licensing · Contracting · Appointments', hot: false },
                  { top: 'CARRIERS & VENDORS', sub: 'eApps · Feeds · Quoting · Leads', hot: false },
                ].map((layer) => (
                  <div
                    key={layer.top}
                    className={`rounded-2xl px-5 py-4 border ${
                      layer.hot
                        ? 'bg-[#c6f91f]/10 border-[#c6f91f]/30'
                        : 'bg-white/[0.03] border-white/10'
                    }`}
                  >
                    <div
                      className={`text-xs font-semibold tracking-widest font-geist ${
                        layer.hot ? 'text-[#c6f91f]' : 'text-white/80'
                      }`}
                    >
                      {layer.top}
                    </div>
                    <div className="text-[10px] text-white/50 font-geist mt-1">{layer.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
              <div className="p-9 rounded-[2rem] border border-white/10 bg-white/[0.02] flex-1 reveal-on-scroll">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-[#c6f91f]" />
                  <span className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                    Role-Based Permissions
                  </span>
                </div>
                <h3 className="text-2xl text-white font-light tracking-tighter mb-4 font-geist">
                  Permission-aware from day one.
                </h3>
                <p className="text-sm leading-relaxed font-geist text-white/60 mb-6">
                  Hierarchy-based visibility from Veritas → Agency → Agency Owner →
                  Manager → Agent, with a full audit trail for sensitive actions
                  and data access.
                </p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <span
                      key={r}
                      className="text-[10px] uppercase tracking-widest font-geist text-white/60 border border-white/10 rounded-full px-3.5 py-1.5 bg-white/[0.02]"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-9 rounded-[2rem] border border-white/10 bg-white/[0.02] flex-1 reveal-on-scroll">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#c6f91f]" />
                  <span className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                    Intelligence Layer
                  </span>
                </div>
                <h3 className="text-2xl text-white font-light tracking-tighter mb-4 font-geist">
                  Data that compounds.
                </h3>
                <p className="text-sm leading-relaxed font-geist text-white/60">
                  Normalized objects — Agent, Agency, Carrier, Product, Contract,
                  License, Lead, Application, Policy, Commission, Chargeback — feed
                  product intelligence, the AI underwriting assistant and the
                  Veritas Agent Score.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#c6f91f] text-black p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8 reveal-on-scroll">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest uppercase font-geist">
                  Join the platform
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter font-geist">
                Ready to run your agency on Veritas?
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-black/80 transition-colors font-geist"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/30 text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-black/10 transition-colors font-geist"
              >
                Agent Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
