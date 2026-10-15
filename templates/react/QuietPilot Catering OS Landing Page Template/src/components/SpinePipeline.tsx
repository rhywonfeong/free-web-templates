import React, { useState } from 'react';
import Icon, { IconName } from './Icon';
import Reveal from './Reveal';

interface Stage {
  id: string;
  icon: IconName;
  label: string;
  title: string;
  desc: string;
  metric: { label: string; value: string };
}

const stages: Stage[] = [
  {
    id: 'inquiry',
    icon: 'inbox',
    label: 'Inquiry',
    title: 'Inquiry Protocol',
    desc: 'Every email, form, and call lands in one structured intake queue. Nothing waits in a personal inbox.',
    metric: { label: 'Median response', value: '11 min' },
  },
  {
    id: 'lead',
    icon: 'user-circle',
    label: 'Lead',
    title: 'Lead Protocol',
    desc: 'Inquiries are scored on event size, date pressure, and margin potential so your team chases the right ones first.',
    metric: { label: 'Qualification rate', value: '64%' },
  },
  {
    id: 'quote',
    icon: 'calculator',
    label: 'Quote',
    title: 'Quote Protocol',
    desc: 'Generate live-margin quotes. Every line item updates inventory and staffing projections in real time.',
    metric: { label: 'Live margin', value: '68.4%' },
  },
  {
    id: 'proposal',
    icon: 'file-plus',
    label: 'Proposal',
    title: 'Proposal Protocol',
    desc: 'Branded proposals with locked pricing, menu versions, and a tracked signature flow. No PDF ping-pong.',
    metric: { label: 'Open-to-sign', value: '2.1 days' },
  },
  {
    id: 'acceptance',
    icon: 'check-check',
    label: 'Acceptance',
    title: 'Acceptance Protocol',
    desc: 'A signature instantly converts the proposal into a governed job. Dates, headcounts, and terms become immutable.',
    metric: { label: 'Close rate', value: '41%' },
  },
  {
    id: 'payment',
    icon: 'credit-card',
    label: 'Payment',
    title: 'Payment Protocol',
    desc: 'Bridging a signed proposal and cash in the bank. Automated deposit schedules and secure capture.',
    metric: { label: 'Collected on time', value: '97%' },
  },
  {
    id: 'inventory',
    icon: 'package',
    label: 'Inventory',
    title: 'Inventory Protocol',
    desc: 'Menu quantities drive purchase orders and rental holds automatically. Shortfalls flag weeks out, not hours.',
    metric: { label: 'Stock coverage', value: '92%' },
  },
  {
    id: 'staffing',
    icon: 'users',
    label: 'Staffing',
    title: 'Staffing Protocol',
    desc: 'Role-based rosters built from the quote. Overtime and unbilled hours are blocked before they happen.',
    metric: { label: 'Roster filled', value: '8 / 10' },
  },
  {
    id: 'readiness',
    icon: 'list-checks',
    label: 'Readiness',
    title: 'Readiness Protocol',
    desc: 'The final checklist before execution. A real-time matrix of staff, gear, menu, and venue status.',
    metric: { label: 'Readiness index', value: '98%' },
  },
  {
    id: 'execution',
    icon: 'rocket',
    label: 'Execution',
    title: 'Execution Protocol',
    desc: 'Load-out, run-of-show, and strike tracked live. Post-event actuals feed back into the next quote.',
    metric: { label: 'On-time strike', value: '100%' },
  },
];

function StagePreview({ stage }: { stage: Stage }) {
  switch (stage.id) {
    case 'inquiry':
      return (
        <div className="preview-list">
          {[
            { from: 'Harper & Co. Events', subj: 'Corporate gala, 320 guests', tag: 'New', hot: true },
            { from: 'St. Augustine Parish', subj: 'Fundraiser dinner, 140 guests', tag: 'New', hot: false },
            { from: 'Lumen Studios', subj: 'Product launch reception', tag: 'Routed', hot: false },
          ].map((m) => (
            <div key={m.from} className={`preview-row ${m.hot ? 'is-hot' : ''}`}>
              <span className="preview-row__dot" />
              <div className="preview-row__text">
                <strong>{m.from}</strong>
                <span>{m.subj}</span>
              </div>
              <span className="preview-tag">{m.tag}</span>
            </div>
          ))}
        </div>
      );
    case 'lead':
      return (
        <div className="preview-lead">
          <div className="preview-lead__avatar">HC</div>
          <div className="preview-lead__body">
            <strong>Harper &amp; Co. Events</strong>
            <span>Corporate gala · 320 guests · Oct 24</span>
            <div className="preview-score">
              <span>Lead score</span>
              <div className="preview-score__bar">
                <span style={{ width: '86%' }} />
              </div>
              <em>86</em>
            </div>
          </div>
        </div>
      );
    case 'quote':
      return (
        <div className="preview-list">
          <div className="preview-row">
            <span>Premium canapés (x320)</span>
            <strong>$7,360</strong>
          </div>
          <div className="preview-row">
            <span>Service staff (12 × 7h)</span>
            <strong>$3,780</strong>
          </div>
          <div className="preview-row">
            <span>Rentals &amp; glassware</span>
            <strong>$1,240</strong>
          </div>
          <div className="preview-row preview-row--accent">
            <span>Live margin projection</span>
            <strong className="text-emerald">68.4%</strong>
          </div>
        </div>
      );
    case 'proposal':
      return (
        <div className="preview-doc">
          <div className="preview-doc__line preview-doc__line--title" />
          <div className="preview-doc__line" />
          <div className="preview-doc__line" style={{ width: '80%' }} />
          <div className="preview-doc__line" style={{ width: '60%' }} />
          <div className="preview-doc__sig">
            <span>Signature</span>
            <svg viewBox="0 0 120 30" className="preview-doc__ink" aria-hidden="true">
              <path d="M4 22c10-18 18-14 22-4s10 8 18-4 14-6 20 2 12 4 18-6 14-4 20 4 10 2 14-2" />
            </svg>
          </div>
        </div>
      );
    case 'acceptance':
      return (
        <div className="preview-accept">
          <div className="preview-accept__ring">
            <Icon name="check" size={34} strokeWidth={2.4} />
          </div>
          <strong>Proposal #4092 accepted</strong>
          <span>Converted to governed job · terms locked</span>
          <div className="preview-accept__chips">
            <span>Date locked</span>
            <span>Headcount 320</span>
            <span>Net 14</span>
          </div>
        </div>
      );
    case 'payment':
      return (
        <div className="preview-pay">
          {[
            { label: 'Deposit 30%', amt: '$3,714', pct: 100, state: 'paid' },
            { label: 'Milestone 40%', amt: '$4,952', pct: 100, state: 'paid' },
            { label: 'Final 30%', amt: '$3,714', pct: 35, state: 'scheduled' },
          ].map((p) => (
            <div key={p.label} className="preview-pay__row">
              <div className="preview-pay__meta">
                <span>{p.label}</span>
                <strong>{p.amt}</strong>
              </div>
              <div className="preview-pay__bar">
                <span className={p.state} style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      );
    case 'inventory':
      return (
        <div className="preview-grid">
          {[
            { n: 'Chafers', v: 24, max: 24 },
            { n: 'Glassware', v: 380, max: 400 },
            { n: 'Linens', v: 42, max: 48 },
            { n: 'Platters', v: 60, max: 60 },
            { n: 'Flatware', v: 310, max: 360 },
            { n: 'Heat lamps', v: 6, max: 6 },
          ].map((i) => {
            const pct = Math.round((i.v / i.max) * 100);
            return (
              <div key={i.n} className={`preview-cell ${pct < 90 ? 'is-low' : ''}`}>
                <Icon name="package" size={14} />
                <strong>{i.n}</strong>
                <span>
                  {i.v}/{i.max}
                </span>
              </div>
            );
          })}
        </div>
      );
    case 'staffing':
      return (
        <div className="preview-staff">
          <div className="preview-staff__row">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className={`preview-staff__seat ${i < 8 ? 'is-filled' : ''}`}>
                {i < 8 ? 'S' + (i + 1) : '+'}
              </span>
            ))}
          </div>
          <div className="preview-staff__legend">
            <span>
              <i className="is-filled" /> 8 confirmed
            </span>
            <span>
              <i /> 2 open shifts
            </span>
            <span className="text-amber">Overtime blocked</span>
          </div>
        </div>
      );
    case 'readiness':
      return (
        <div className="preview-list">
          {[
            { n: 'Menu finalized', s: 'ready', v: '100%' },
            { n: 'Staff assigned', s: 'warn', v: '8/10' },
            { n: 'Equipment rental', s: 'ready', v: 'Secured' },
            { n: 'Client payment', s: 'ready', v: 'Collected' },
          ].map((c) => (
            <div key={c.n} className="preview-row">
              <span className={`status-dot status-dot--${c.s}`} />
              <span className="preview-row__grow">{c.n}</span>
              <strong className="mono">{c.v}</strong>
            </div>
          ))}
        </div>
      );
    case 'execution':
    default:
      return (
        <div className="preview-exec">
          <div className="preview-exec__track">
            {['Load-out', 'Arrival', 'Service', 'Strike'].map((s, i) => (
              <div key={s} className={`preview-exec__step ${i < 3 ? 'is-done' : 'is-live'}`}>
                <span className="preview-exec__node">{i < 3 ? <Icon name="check" size={12} strokeWidth={3} /> : <Icon name="truck" size={12} />}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="preview-exec__status">
            <span className="status-dot status-dot--ready" />
            Live · Strike in progress · 00:42:17
          </div>
        </div>
      );
  }
}

export default function SpinePipeline() {
  const [active, setActive] = useState(4);
  const stage = stages[active];

  return (
    <section id="spine" className="section section--border">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">The Commercial Spine</h2>
            <p className="lede">
              A linear, unbreakable chain of events. When one link breaks, margin bleeds. QuietPilot enforces the
              process from first contact to final strike. Click any stage to inspect it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="spine">
            <div className="spine__line" aria-hidden="true">
              <span style={{ width: `${(active / (stages.length - 1)) * 100}%` }} />
            </div>

            <div className="spine__steps" role="tablist" aria-label="Commercial Spine stages">
              {stages.map((s, idx) => {
                const isActive = idx === active;
                const isPast = idx < active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="spine-preview"
                    className={`spine__step ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                    onClick={() => setActive(idx)}
                  >
                    <span className="spine__node">
                      {isPast && (
                        <span className="spine__tick">
                          <Icon name="check" size={8} strokeWidth={3.5} />
                        </span>
                      )}
                      <Icon name={s.icon} size={22} />
                    </span>
                    <span className="spine__label">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="spine__detail glass" id="spine-preview" role="tabpanel">
            <div className="spine__copy" key={`copy-${stage.id}`}>
              <div className="eyebrow eyebrow--amber">
                <Icon name="target" size={14} />
                Stage {active + 1} of {stages.length}
              </div>
              <h3 className="h3">{stage.title}</h3>
              <p className="muted">{stage.desc}</p>
              <div className="spine__metric">
                <span>{stage.metric.label}</span>
                <strong>{stage.metric.value}</strong>
              </div>
              <div className="spine__nav">
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  disabled={active === 0}
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  disabled={active === stages.length - 1}
                  onClick={() => setActive((a) => Math.min(stages.length - 1, a + 1))}
                >
                  Next stage
                  <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>

            <div className="preview-card" key={`card-${stage.id}`}>
              <div className="preview-card__bar">
                <span className="preview-card__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="preview-card__title">
                  <Icon name={stage.icon} size={12} />
                  {stage.label} · Node {String(active + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="preview-card__body">
                <StagePreview stage={stage} />
              </div>
              <div className="preview-card__watermark" aria-hidden="true">
                <Icon name={stage.icon} size={140} strokeWidth={0.8} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
