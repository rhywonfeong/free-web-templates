import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconName } from './Icon';
import Reveal from './Reveal';
import GlowButton from './GlowButton';

type Billing = 'monthly' | 'annual';

interface Tier {
  id: string;
  name: string;
  icon: IconName;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  cta: string;
  featured?: boolean;
  features: string[];
  limits: string;
}

const tiers: Tier[] = [
  {
    id: 'operator',
    name: 'Operator',
    icon: 'user-circle',
    tagline: 'For single-kitchen caterers who need the spine without the fleet.',
    monthly: 249,
    annual: 199,
    cta: 'Start with Operator',
    limits: '1 kitchen · up to 40 events / month',
    features: [
      'All 10 Commercial Spine stages',
      'Quote Studio with live margins',
      'Proposal e-signature flow',
      'Deposit & milestone payments',
      'Readiness matrix alerts',
      'Email support, 1-day response',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Spine',
    icon: 'infinity',
    tagline: 'Multi-venue operations that cannot afford a single broken link.',
    monthly: 749,
    annual: 599,
    cta: 'Deploy Enterprise Spine',
    featured: true,
    limits: 'Up to 5 kitchens · unlimited events',
    features: [
      'Everything in Operator',
      'Revenue Leak Prevention engine',
      'Inventory & rental auto-holds',
      'Staffing rosters with overtime blocks',
      'Post-event actuals fed back into quotes',
      'Command Node dashboard & API',
      'Dedicated onboarding engineer',
    ],
  },
  {
    id: 'fleet',
    name: 'Custom Fleet',
    icon: 'truck',
    tagline: 'Regional and national groups running dozens of kitchens on one spine.',
    monthly: null,
    annual: null,
    cta: 'Talk to Fleet Ops',
    limits: 'Unlimited kitchens · custom SLAs',
    features: [
      'Everything in Enterprise Spine',
      'Private deployment & SSO',
      'Cross-kitchen inventory routing',
      'Custom stage protocols',
      'Finance system integrations',
      '24/7 execution-day hotline',
    ],
  },
];

interface Props {
  compact?: boolean;
}

export default function PricingTable({ compact = false }: Props) {
  const [billing, setBilling] = useState<Billing>('annual');

  return (
    <section id="pricing" className="section section--border pricing-section">
      <div className="pricing-section__glow" aria-hidden="true" />
      <div className="container">
        {!compact && (
          <Reveal>
            <div className="section__head section__head--center">
              <div className="eyebrow eyebrow--amber">
                <Icon name="wallet" size={14} />
                Pricing
              </div>
              <h2 className="h2">One spine. Three deployments.</h2>
              <p className="lede">
                Priced per kitchen, not per seat. Every plan runs the full Commercial Spine; the tiers change how much
                fleet you can govern.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={100}>
          <div className="billing-toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={`billing-toggle__btn ${billing === 'monthly' ? 'is-active' : ''}`}
              onClick={() => setBilling('monthly')}
              aria-pressed={billing === 'monthly'}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`billing-toggle__btn ${billing === 'annual' ? 'is-active' : ''}`}
              onClick={() => setBilling('annual')}
              aria-pressed={billing === 'annual'}
            >
              Annual
              <span className="billing-toggle__badge">Save 20%</span>
            </button>
            <span className={`billing-toggle__thumb ${billing === 'annual' ? 'is-right' : ''}`} aria-hidden="true" />
          </div>
        </Reveal>

        <div className="pricing-grid">
          {tiers.map((tier, i) => {
            const price = billing === 'monthly' ? tier.monthly : tier.annual;
            return (
              <Reveal key={tier.id} delay={150 + i * 100} className="pricing-grid__item">
                <article className={`price-card ${tier.featured ? 'price-card--featured' : ''}`}>
                  {tier.featured && (
                    <span className="price-card__badge">
                      <Icon name="sparkles" size={12} />
                      Most deployed
                    </span>
                  )}
                  <div className="price-card__head">
                    <span className="price-card__icon">
                      <Icon name={tier.icon} size={18} />
                    </span>
                    <h3 className="price-card__name">{tier.name}</h3>
                    <p className="price-card__tagline">{tier.tagline}</p>
                  </div>

                  <div className="price-card__price" key={billing}>
                    {price === null ? (
                      <>
                        <strong className="price-card__amount price-card__amount--custom">Custom</strong>
                        <span className="price-card__period">scoped per fleet</span>
                      </>
                    ) : (
                      <>
                        <strong className="price-card__amount">
                          <sup>$</sup>
                          {price}
                        </strong>
                        <span className="price-card__period">
                          per kitchen / month
                          {billing === 'annual' && <em>billed annually</em>}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="price-card__limits">
                    <Icon name="building" size={14} />
                    {tier.limits}
                  </div>

                  <ul className="price-card__features">
                    {tier.features.map((f) => (
                      <li key={f}>
                        <span className="price-card__check">
                          <Icon name="check" size={12} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="price-card__cta">
                    {tier.featured ? (
                      <GlowButton label={tier.cta} to="/pricing#contact" avatar="" icon="arrow-right" className="glow-btn--block" />
                    ) : (
                      <Link to="/pricing#contact" className="btn btn--outline btn--block">
                        {tier.cta}
                        <Icon name="arrow-right" size={14} />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
