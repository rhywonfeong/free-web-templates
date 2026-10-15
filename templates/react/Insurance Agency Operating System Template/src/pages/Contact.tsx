import React, { useState } from 'react';
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Headset,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

const inquiryTypes = [
  'Get Contracted',
  'Agency Partnership',
  'Platform Demo',
  'Carrier Integration',
  'Commissions Question',
  'Support',
];

const proofItems = [
  {
    icon: Clock,
    title: 'Same-Day Response',
    desc: 'Contracting and licensing tickets are answered within one business day — SLA reported monthly.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support Desk',
    desc: 'Contracting, Licensing, Commissions, New Business, Leads, CRM, Underwriting and Technology queues.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance First',
    desc: 'Role-based access and a full audit trail on every sensitive action, from comp changes to case notes.',
  },
];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    agency: '',
    inquiry: 'Get Contracted',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-2xl bg-white/[0.04] border border-white/10 focus:border-[#c6f91f]/60 focus:outline-none focus:ring-2 focus:ring-[#c6f91f]/20 px-5 py-3.5 text-sm text-white placeholder-white/30 font-geist transition-colors';

  return (
    <section className="border-dashed bg-[#05080A] border-white/10 border-b py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#c6f91f]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* CTA copy */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#c6f91f]/25 bg-[#c6f91f]/5 px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-[#c6f91f]"></span>
              <p className="text-[#c6f91f] font-mono text-xs tracking-widest uppercase font-geist">
                Contact Veritas
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 font-geist font-light tracking-tighter reveal-on-scroll">
              Let&apos;s get you
              <br />
              <span className="text-white/60">ready to sell.</span>
            </h1>

            <p className="text-lg leading-relaxed font-light font-geist text-white/80 mb-10 max-w-md reveal-on-scroll">
              Whether you&apos;re an independent agent, an agency owner bringing a
              downline, or a carrier partner — tell us what you need and the right
              team will reach out.
            </p>

            <div className="flex flex-wrap gap-2 mb-10 reveal-on-scroll">
              {['No second logins', '1-day contracting SLA', 'Live onboarding tracker'].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-geist text-[#c6f91f] border border-[#c6f91f]/25 rounded-full px-3.5 py-1.5 bg-[#c6f91f]/5"
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {b}
                </span>
              ))}
            </div>

            <div className="space-y-4 mb-12">
              <a
                href="mailto:hello@veritas.insure"
                className="flex items-center gap-4 group reveal-on-scroll"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#c6f91f]/40 transition-colors">
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-[#c6f91f] transition-colors" />
                </div>
                <div>
                  <div className="text-white text-sm font-geist">hello@veritas.insure</div>
                  <div className="text-[10px] text-slate-500 font-geist uppercase tracking-wide">
                    General inquiries
                  </div>
                </div>
              </a>
              <a href="tel:+18885550137" className="flex items-center gap-4 group reveal-on-scroll">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#c6f91f]/40 transition-colors">
                  <Phone className="w-4 h-4 text-slate-400 group-hover:text-[#c6f91f] transition-colors" />
                </div>
                <div>
                  <div className="text-white text-sm font-geist">+1 (888) 555-0137</div>
                  <div className="text-[10px] text-slate-500 font-geist uppercase tracking-wide">
                    Mon–Fri, 8am–6pm CT
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 reveal-on-scroll">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-geist">
                    900 Producer Way, Suite 400
                  </div>
                  <div className="text-[10px] text-slate-500 font-geist uppercase tracking-wide">
                    Dallas, TX 75201
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {proofItems.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-4 p-5 rounded-3xl border border-white/5 bg-white/[0.015] reveal-on-scroll"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#c6f91f]/10 border border-[#c6f91f]/20 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-4 h-4 text-[#c6f91f]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium font-geist mb-1">{p.title}</h4>
                    <p className="text-xs text-slate-500 font-geist leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] border border-white/10 bg-[#0B0F13] p-8 md:p-12 shadow-[0_45.8px_36.6px_rgba(0,0,0,0.147),_0_85.8px_68.5px_rgba(0,0,0,0.176)] reveal-on-scroll">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-3xl bg-[#c6f91f]/10 border border-[#c6f91f]/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#c6f91f]" />
                  </div>
                  <h2 className="text-3xl text-white font-light tracking-tighter font-geist mb-3">
                    Request received.
                  </h2>
                  <p className="text-white/60 font-geist text-sm max-w-sm mx-auto mb-8">
                    Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''}. Our{' '}
                    {form.inquiry.toLowerCase()} team will reach out within one
                    business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:bg-white/5 text-white text-xs uppercase tracking-widest px-7 py-3.5 transition-colors font-geist"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl md:text-3xl text-white font-light tracking-tighter font-geist mb-2">
                    Tell us about your business.
                  </h2>
                  <p className="text-white/50 font-geist text-sm mb-8">
                    A few details and we&apos;ll route you to the right desk.
                  </p>

                  <div className="mb-8">
                    <label className="block text-[11px] uppercase tracking-widest text-white/50 font-geist mb-3">
                      What do you need? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update('inquiry', t)}
                          className={`text-xs font-geist rounded-full px-4 py-2.5 border transition-colors ${
                            form.inquiry === t
                              ? 'bg-[#c6f91f] text-black border-[#c6f91f] font-semibold'
                              : 'text-white/70 border-white/10 bg-white/[0.03] hover:border-white/30'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] uppercase tracking-widest text-white/50 font-geist mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Jordan Avery"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-widest text-white/50 font-geist mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="you@agency.com"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] uppercase tracking-widest text-white/50 font-geist mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="agency"
                        className="block text-[11px] uppercase tracking-widest text-white/50 font-geist mb-2"
                      >
                        Agency / NPN
                      </label>
                      <input
                        id="agency"
                        type="text"
                        placeholder="Agency name or NPN"
                        value={form.agency}
                        onChange={(e) => update('agency', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-widest text-white/50 font-geist mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your production, your downline, or the carriers and states you need..."
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c6f91f] hover:bg-[#d4ff45] text-black font-semibold text-xs uppercase tracking-widest px-9 py-4 transition-colors font-geist"
                    >
                      Submit Request
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <p className="text-[10px] text-white/40 font-geist leading-relaxed">
                      By submitting you agree to be contacted about Veritas.
                      <br className="hidden sm:block" />
                      We never share producer data.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
