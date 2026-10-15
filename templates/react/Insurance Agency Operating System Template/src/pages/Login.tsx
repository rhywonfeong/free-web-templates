import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Fingerprint,
  CheckCircle2,
  Landmark,
  Wallet,
  Search,
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

const ssoUnlocks = [
  { icon: Landmark, label: 'SureLC Contracting & Licensing' },
  { icon: Search, label: 'Quoting & E-Application Center' },
  { icon: Wallet, label: 'Commissions & Production' },
  { icon: Fingerprint, label: 'CRM, Leads & Veritas AI' },
];

export default function Login() {
  useReveal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
  };

  const inputClass =
    'w-full rounded-2xl bg-white/[0.04] border border-white/10 focus:border-[#c6f91f]/60 focus:outline-none focus:ring-2 focus:ring-[#c6f91f]/20 px-5 py-3.5 text-sm text-white placeholder-white/30 font-geist transition-colors';

  return (
    <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24 relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c6f91f]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#c6f91f]/25 bg-[#c6f91f]/5 px-4 py-1.5">
              <Lock className="w-3 h-3 text-[#c6f91f]" />
              <p className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                Single Sign-On
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 font-geist font-light tracking-tighter reveal-on-scroll">
              One login.
              <br />
              <span className="text-white/60">Everything unlocked.</span>
            </h1>

            <p className="text-lg leading-relaxed font-light font-geist text-white/80 mb-10 max-w-md reveal-on-scroll">
              Your Veritas credentials open every system you work in — no second
              login for SureLC, quoting tools or eApps.
            </p>

            <div className="space-y-3 max-w-md">
              {ssoUnlocks.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 p-4 rounded-3xl border border-white/5 bg-white/[0.015] reveal-on-scroll"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#c6f91f]/10 border border-[#c6f91f]/20 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 h-4 text-[#c6f91f]" />
                  </div>
                  <span className="text-sm text-white/80 font-geist">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="rounded-[2.5rem] border border-white/10 bg-[#0B0F13] p-8 md:p-10 shadow-[0_45.8px_36.6px_rgba(0,0,0,0.147),_0_85.8px_68.5px_rgba(0,0,0,0.176)] reveal-on-scroll">
              {signedIn ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 rounded-3xl bg-[#c6f91f]/10 border border-[#c6f91f]/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#c6f91f]" />
                  </div>
                  <h2 className="text-2xl text-white font-light tracking-tighter font-geist mb-3">
                    Welcome back.
                  </h2>
                  <p className="text-white/60 font-geist text-sm mb-8">
                    This is a preview environment — your agent dashboard would load
                    here.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#c6f91f] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#d4ff45] transition-colors font-geist"
                  >
                    Back to Home
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-2xl bg-[#c6f91f] flex items-center justify-center text-black">
                      <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="text-white font-geist font-semibold tracking-[0.2em] text-sm">
                        VERITAS
                      </div>
                      <div className="text-[10px] text-white/50 font-geist tracking-widest uppercase">
                        Agent Portal
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="login-email"
                      className="block text-[11px] uppercase tracking-widest text-white/50 font-geist mb-2"
                    >
                      Email or NPN
                    </label>
                    <input
                      id="login-email"
                      required
                      type="text"
                      placeholder="you@agency.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="login-password"
                        className="block text-[11px] uppercase tracking-widest text-white/50 font-geist"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-[11px] text-[#c6f91f]/80 hover:text-[#c6f91f] font-geist transition-colors"
                      >
                        Forgot?
                      </a>
                    </div>
                    <input
                      id="login-password"
                      required
                      type="password"
                      placeholder="••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <label className="flex items-center gap-2.5 mb-7 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded accent-[#c6f91f] bg-white/10 border-white/20"
                    />
                    <span className="text-xs text-white/60 font-geist">
                      Keep me signed in on this device
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#c6f91f] hover:bg-[#d4ff45] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-colors font-geist mb-4"
                  >
                    Sign In
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3 my-5">
                    <div className="h-px flex-1 bg-white/10"></div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-geist">
                      or continue with
                    </span>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>

                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 hover:bg-white/5 text-white text-xs uppercase tracking-widest px-8 py-4 transition-colors font-geist"
                  >
                    <Landmark className="w-4 h-4 text-[#c6f91f]" />
                    SureLC Producer SSO
                  </button>

                  <p className="text-center text-xs text-white/40 font-geist mt-7">
                    New to Veritas?{' '}
                    <Link to="/contact" className="text-[#c6f91f] hover:underline">
                      Request contracting
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
