import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import PricingTable from '../components/PricingTable';
import GlowButton from '../components/GlowButton';

const faqs = [
  {
    q: 'What counts as a kitchen?',
    a: 'Any production site with its own inventory and roster. Satellite prep spaces that share a roster count as one kitchen.',
  },
  {
    q: 'Can I start on Operator and move to Enterprise Spine?',
    a: 'Yes. Upgrades apply immediately and your spine data, stage history, and actuals carry over untouched.',
  },
  {
    q: 'Is there a per-seat charge?',
    a: 'No. Pricing is per kitchen. Add as many sales, ops, and kitchen users as the operation needs.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Operator deploys in a day. Enterprise Spine includes a dedicated onboarding engineer and typically goes live inside two weeks.',
  },
];

export default function Pricing() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="hero__glow hero__glow--amber" aria-hidden="true" />
        <div className="container page-hero__inner">
          <Reveal>
            <div className="pill pill--amber">
              <Icon name="wallet" size={12} />
              Pricing
            </div>
            <h1 className="h1 h1--page">
              Priced per kitchen. <br />
              <span className="text-gradient">Never per seat.</span>
            </h1>
            <p className="hero__lede">
              Every deployment runs the full 10-stage Commercial Spine. Choose the tier that matches the size of fleet
              you need to govern, then{' '}
              <Link to="/roi" className="link">
                check the math with the ROI calculator
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <PricingTable compact />

      <section className="section section--border">
        <div className="container faq-grid">
          <Reveal>
            <div>
              <h2 className="h2">Questions before you deploy</h2>
              <p className="lede">Straight answers. If yours is not here, the form on the right reaches the fleet ops desk directly.</p>
              <dl className="faq">
                {faqs.map((f) => (
                  <div key={f.q} className="faq__item">
                    <dt>{f.q}</dt>
                    <dd>{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={150} direction="left">
            <form
              id="contact"
              className="contact glass"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="eyebrow eyebrow--amber">
                <Icon name="mail" size={14} />
                Talk to Fleet Ops
              </div>
              <h3 className="h3">Scope your deployment</h3>
              {sent ? (
                <div className="contact__done">
                  <span className="contact__done-icon">
                    <Icon name="check" size={22} strokeWidth={2.5} />
                  </span>
                  <strong>Request received.</strong>
                  <span>A fleet ops engineer will reply within one business day.</span>
                </div>
              ) : (
                <>
                  <label className="field">
                    <span>Work email</span>
                    <input type="email" required placeholder="you@yourcatering.com" />
                  </label>
                  <div className="field-row">
                    <label className="field">
                      <span>Kitchens</span>
                      <select defaultValue="1">
                        <option value="1">1</option>
                        <option value="2-5">2 to 5</option>
                        <option value="6-20">6 to 20</option>
                        <option value="20+">20+</option>
                      </select>
                    </label>
                    <label className="field">
                      <span>Events / month</span>
                      <input type="number" min={1} placeholder="32" />
                    </label>
                  </div>
                  <label className="field">
                    <span>What is leaking today?</span>
                    <textarea rows={3} placeholder="Unbilled overtime, missed rentals, slow proposals..." />
                  </label>
                  <GlowButton
                    label="Request deployment scope"
                    avatar=""
                    icon="arrow-right"
                    className="glow-btn--block"
                    type="submit"
                  />
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
