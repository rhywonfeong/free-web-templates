import React, { useMemo, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import GlowButton from './GlowButton';

const money = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

const compact = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1 }).format(n);

// Model assumptions (shown to the user in the footnote)
const RECOVERY_RATE = 0.72; // share of leaked margin QuietPilot recaptures
const ADMIN_REDUCTION = 0.55; // share of admin hours removed
const HOURLY_COST = 38; // blended ops/admin hourly cost
const ENTERPRISE_ANNUAL = 599 * 12; // Enterprise Spine, billed annually

interface Props {
  compact?: boolean;
}

export default function RoiCalculator({ compact: isCompact = false }: Props) {
  const [revenue, setRevenue] = useState(1_800_000);
  const [events, setEvents] = useState(32);
  const [leak, setLeak] = useState(6);
  const [adminHours, setAdminHours] = useState(28);

  const result = useMemo(() => {
    const recovered = revenue * (leak / 100) * RECOVERY_RATE;
    const hoursSaved = adminHours * ADMIN_REDUCTION * 52;
    const laborValue = hoursSaved * HOURLY_COST;
    const total = recovered + laborValue;
    const perEvent = total / Math.max(1, events * 12);
    const roi = total / ENTERPRISE_ANNUAL;
    return { recovered, hoursSaved, laborValue, total, perEvent, roi };
  }, [revenue, events, leak, adminHours]);

  // Meter scale: cap at $750k for the visual bar
  const meter = Math.min(100, (result.total / 750_000) * 100);

  return (
    <section id="roi" className="section section--border">
      <div className="container">
        {!isCompact && (
          <Reveal>
            <div className="section__head">
              <div className="eyebrow eyebrow--amber">
                <Icon name="sliders" size={14} />
                ROI Calculator
              </div>
              <h2 className="h2">How much margin are you leaking?</h2>
              <p className="lede">
                Drag the sliders to match your operation. Estimates update instantly using the same leak model QuietPilot
                enforces in production.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={150}>
          <div className="roi glass">
            <div className="roi__inputs">
              <RangeField
                label="Annual catering revenue"
                value={revenue}
                display={compact(revenue)}
                min={250_000}
                max={10_000_000}
                step={50_000}
                onChange={setRevenue}
                hint="Gross billed, all event types"
              />
              <RangeField
                label="Events per month"
                value={events}
                display={`${events}`}
                min={4}
                max={120}
                step={1}
                onChange={setEvents}
                hint="Average across the year"
              />
              <RangeField
                label="Estimated margin leak"
                value={leak}
                display={`${leak}%`}
                min={1}
                max={15}
                step={0.5}
                onChange={setLeak}
                hint="Unbilled add-ons, overtime, missed rentals"
              />
              <RangeField
                label="Admin hours per week"
                value={adminHours}
                display={`${adminHours} h`}
                min={5}
                max={80}
                step={1}
                onChange={setAdminHours}
                hint="Quoting, chasing, re-keying data"
              />
            </div>

            <div className="roi__output">
              <div className="roi__total">
                <span className="eyebrow">Estimated annual savings</span>
                <strong key={Math.round(result.total)} className="roi__number">
                  {money(result.total)}
                </strong>
                <div className="roi__meter" aria-hidden="true">
                  <span style={{ width: `${meter}%` }} />
                </div>
                <span className="roi__roi">
                  <Icon name="trending" size={14} />
                  {result.roi.toFixed(1)}× return on Enterprise Spine
                </span>
              </div>

              <div className="roi__breakdown">
                <div className="roi__stat">
                  <span>Recovered margin</span>
                  <strong className="text-emerald">{money(result.recovered)}</strong>
                </div>
                <div className="roi__stat">
                  <span>Admin hours returned</span>
                  <strong className="text-blue">{Math.round(result.hoursSaved).toLocaleString()} h</strong>
                </div>
                <div className="roi__stat">
                  <span>Labor value reclaimed</span>
                  <strong className="text-amber">{money(result.laborValue)}</strong>
                </div>
                <div className="roi__stat">
                  <span>Savings per event</span>
                  <strong>{money(result.perEvent)}</strong>
                </div>
              </div>

              <GlowButton label="Lock in these savings" to="/pricing" avatar="" icon="arrow-right" />
              <p className="roi__note">
                Model assumes {Math.round(RECOVERY_RATE * 100)}% of leaked margin recaptured,{' '}
                {Math.round(ADMIN_REDUCTION * 100)}% admin reduction at ${HOURLY_COST}/h, compared to Enterprise Spine
                billed annually.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface RangeFieldProps {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  hint: string;
  onChange: (v: number) => void;
}

function RangeField({ label, value, display, min, max, step, hint, onChange }: RangeFieldProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label className="range">
      <div className="range__head">
        <span className="range__label">{label}</span>
        <span className="range__value">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--pct': `${pct}%` } as React.CSSProperties}
        aria-label={label}
      />
      <span className="range__hint">{hint}</span>
    </label>
  );
}
