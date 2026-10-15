import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconName } from '../components/Icon';
import Reveal from '../components/Reveal';
import RoiCalculator from '../components/RoiCalculator';

const leaks: { icon: IconName; title: string; desc: string; share: string }[] = [
  {
    icon: 'users',
    title: 'Unbilled staffing hours',
    desc: 'Overtime and early call-times that never make it onto the final invoice.',
    share: '38%',
  },
  {
    icon: 'package',
    title: 'Missed rentals & add-ons',
    desc: 'Heat lamps, extra linens, late menu changes agreed verbally and forgotten.',
    share: '27%',
  },
  {
    icon: 'calculator',
    title: 'Stale quote margins',
    desc: 'Food cost moves between quote and event; the price does not.',
    share: '21%',
  },
  {
    icon: 'credit-card',
    title: 'Late or partial payments',
    desc: 'Balances chased after the event instead of captured on schedule.',
    share: '14%',
  },
];

export default function Roi() {
  return (
    <>
      <section className="page-hero">
        <div className="hero__glow hero__glow--amber" aria-hidden="true" />
        <div className="container page-hero__inner">
          <Reveal>
            <div className="pill pill--amber">
              <Icon name="sliders" size={12} />
              ROI Calculator
            </div>
            <h1 className="h1 h1--page">
              Put a number on <br />
              <span className="text-gradient">the margin you lose.</span>
            </h1>
            <p className="hero__lede">
              Four sliders. One honest estimate of what a governed spine returns to your operation each year.
            </p>
          </Reveal>
        </div>
      </section>

      <RoiCalculator compact />

      <section className="section section--border">
        <div className="container">
          <Reveal>
            <div className="section__head">
              <h2 className="h2">Where the leak usually comes from</h2>
              <p className="lede">
                Share of recovered margin by source, averaged across Enterprise Spine deployments in their first year.
              </p>
            </div>
          </Reveal>
          <div className="leak-grid">
            {leaks.map((l, i) => (
              <Reveal key={l.title} delay={i * 100}>
                <div className="leak-card glass">
                  <span className="leak-card__share">{l.share}</span>
                  <span className="feature__icon">
                    <Icon name={l.icon} size={18} />
                  </span>
                  <h3 className="h4">{l.title}</h3>
                  <p className="muted">{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="roi-footer">
              <span className="muted">Ready to see which tier fits the number above?</span>
              <Link to="/pricing" className="btn btn--outline">
                Compare plans
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
