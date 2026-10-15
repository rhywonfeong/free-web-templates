import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconName } from '../components/Icon';
import Reveal from '../components/Reveal';
import GlowButton from '../components/GlowButton';
import SpinePipeline from '../components/SpinePipeline';
import RoiCalculator from '../components/RoiCalculator';
import PricingTable from '../components/PricingTable';

const Hero = () => (
  <section className="hero">
    <div className="hero__glow hero__glow--amber" aria-hidden="true" />
    <div className="hero__glow hero__glow--blue" aria-hidden="true" />

    <div className="hero__inner">
      <Reveal delay={100}>
        <div className="pill pill--amber">
          <span className="pill__dot" />
          System Version 2.0 Live
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h1 className="h1">
          The Operating System for <br />
          <span className="text-gradient">Catering Revenue.</span>
        </h1>
      </Reveal>

      <Reveal delay={300}>
        <p className="hero__lede">
          Not a CRM. Not a disjointed toolkit. This is the commercial spine that governs every variable from the first
          inquiry to flawless execution.
        </p>
      </Reveal>

      <Reveal delay={400}>
        <div className="hero__actions">
          <GlowButton label="Generate My Command Node" to="/pricing" size="lg" />
          <Link to="/roi" className="btn btn--ghost">
            <Icon name="sliders" size={16} />
            Run the ROI calculator
          </Link>
        </div>
      </Reveal>

      <Reveal delay={500} className="hero__artifact-wrap">
        <div className="artifact">
          <div className="artifact__bar">
            <span className="artifact__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="artifact__title">
              <Icon name="radar" size={12} />
              Command Node Active
            </span>
          </div>
          <div className="artifact__body">
            {[
              { label: 'Active Pipeline', val: '$2.4M', icon: 'chart' as IconName, cls: 'text-emerald' },
              { label: 'Margin Variance', val: '+2.1%', icon: 'trending' as IconName, cls: 'text-amber' },
              { label: 'Readiness Index', val: '98%', icon: 'shield-check' as IconName, cls: 'text-blue' },
            ].map((s) => (
              <div key={s.label} className="stat glass">
                <span className="stat__icon">
                  <Icon name={s.icon} size={30} />
                </span>
                <span className="stat__label">{s.label}</span>
                <span className={`stat__value ${s.cls}`}>{s.val}</span>
              </div>
            ))}
            <div className="artifact__telemetry glass">
              <span className="artifact__scan" aria-hidden="true" />
              <Icon name="satellite" size={24} className="text-amber pulse" />
              <span className="artifact__telemetry-label">Listening for incoming telemetry...</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const FeatureGrid = () => {
  const features: {
    id: string;
    title: string;
    desc: string;
    icon: IconName;
    wide?: boolean;
    visual: React.ReactNode;
  }[] = [
    {
      id: 'quote',
      title: 'Quote Studio',
      desc: 'Live margins, dynamic pricing models, and instant generation. See the exact cost implications of every menu tweak before you hit send.',
      icon: 'pen-square',
      wide: true,
      visual: (
        <div className="mini-list">
          <div className="mini-row glass">
            <span>Premium Canapés (x150)</span>
            <strong>$3,450.00</strong>
          </div>
          <div className="mini-row glass mini-row--emerald">
            <span>Live Margin Projection</span>
            <strong className="text-emerald">68.4%</strong>
          </div>
        </div>
      ),
    },
    {
      id: 'leak',
      title: 'Revenue Leak Prevention',
      desc: 'Seal the gaps. Forgotten add-ons, unbilled staffing hours, and missed equipment rentals are automatically flagged.',
      icon: 'shield-alert',
      visual: (
        <div className="leak">
          <div className="leak__halo" aria-hidden="true" />
          <div className="leak__card glass">
            <span className="leak__icon">
              <Icon name="alert-triangle" size={16} />
            </span>
            <div>
              <strong>Unbilled Overtime</strong>
              <span>Blocked by protocol</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'payment',
      title: 'Payment Truth',
      desc: 'A single source of truth for deposits, schedules, and final balances tied directly to the execution timeline.',
      icon: 'wallet',
      visual: (
        <div className="paylogos">
          <span className="paylogos__word">stripe</span>
          <span className="paylogos__sep" />
          <Icon name="lock" size={26} />
        </div>
      ),
    },
    {
      id: 'continuity',
      title: 'Journey Continuity',
      desc: 'Connecting Front-of-House sales promises with Back-of-House operational reality. Zero disconnects.',
      icon: 'infinity',
      wide: true,
      visual: (
        <div className="bridge">
          <span className="bridge__line" aria-hidden="true" />
          <span className="bridge__end glass">Sales</span>
          <span className="bridge__hub">
            <Icon name="arrows" size={16} />
          </span>
          <span className="bridge__end glass">Kitchen</span>
        </div>
      ),
    },
  ];

  return (
    <section id="platform" className="section section--border">
      <div className="container">
        <div className="feature-grid">
          {features.map((f, i) => (
            <Reveal key={f.id} delay={i * 100} className={`feature-grid__item ${f.wide ? 'is-wide' : ''}`}>
              <div className="feature glass">
                <span className="feature__icon">
                  <Icon name={f.icon} size={18} />
                </span>
                <h3 className="h4">{f.title}</h3>
                <p className="muted feature__desc">{f.desc}</p>
                <div className="feature__visual">{f.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReadinessMatrix = () => {
  const categories = [
    { name: 'Menu Finalized', status: 'ready', val: '100%' },
    { name: 'Staff Assigned', status: 'warn', val: '8/10' },
    { name: 'Equipment Rental', status: 'ready', val: 'Secured' },
    { name: 'Client Payment', status: 'pending', val: 'Deposit Only' },
  ];

  return (
    <section id="readiness" className="section readiness">
      <div className="readiness__glow" aria-hidden="true" />
      <div className="container readiness__grid">
        <div>
          <Reveal>
            <div className="pill pill--blue">
              <Icon name="radar" size={12} />
              Pre-Flight Check
            </div>
            <h2 className="h2 h2--xl">
              Never execute blind. <br />
              <span className="text-dim">Know your readiness.</span>
            </h2>
            <p className="muted readiness__copy">
              The Job Readiness matrix sits between planning and execution. It acts as a safety valve, ensuring every
              variable—staffing, inventory, payments, and menus—is green-lit before the truck leaves the dock.
            </p>
            <div className="readiness__team">
              <div className="avatars">
                {[1, 2, 3].map((i) => (
                  <span key={i} className="avatars__item">
                    <img
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
                      alt=""
                    />
                  </span>
                ))}
              </div>
              <span className="muted-sm">Alerts ops team automatically</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} direction="left">
          <div className="matrix glass">
            <span className="matrix__spark" aria-hidden="true" />
            <div className="matrix__inner">
              <div className="matrix__head">
                <span className="matrix__job">
                  <Icon name="calendar" size={16} />
                  Gala Dinner #4092
                </span>
                <span className="tag tag--amber">48h Out</span>
              </div>
              <div className="matrix__rows">
                {categories.map((c) => (
                  <div key={c.name} className="matrix__row">
                    <span className="matrix__name">
                      <span className={`status-dot status-dot--${c.status}`} />
                      {c.name}
                    </span>
                    <span className="mono muted-sm">{c.val}</span>
                  </div>
                ))}
              </div>
              <div className="matrix__foot">
                <span className="eyebrow">Global Status</span>
                <span className="matrix__status">
                  <Icon name="alert-circle" size={14} />
                  Action Required
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="cta section--border">
    <div className="cta__fade" aria-hidden="true" />
    <div className="container cta__inner">
      <Reveal>
        <div className="cta__orb">
          <Icon name="power" size={30} />
        </div>
        <h2 className="h2 h2--xl">Initialize Your Spine.</h2>
        <p className="muted cta__copy">
          Stop leaking revenue through fragmented processes. Deploy the operating system built specifically for the
          complexities of catering execution.
        </p>
        <div className="cta__actions">
          <GlowButton label="Request Command Access" to="/pricing" size="lg" />
          <Link to="/#platform" className="btn btn--ghost">
            <Icon name="play" size={16} />
            Watch Architecture Overview
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <SpinePipeline />
      <FeatureGrid />
      <RoiCalculator />
      <ReadinessMatrix />
      <PricingTable />
      <CTA />
    </>
  );
}
