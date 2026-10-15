import React from 'react';

export default function StandardCare() {
  return (
    <section id="standard" className="standard-care">
      <div className="standard-care-shell">
        <div
          className="standard-care-head standard-care-reveal"
          style={{ animationDelay: '0.08s' }}
        >
          <div className="standard-care-head-copy">
            <h2 className="standard-care-title">Cleaning you can rely on.</h2>
            <p className="standard-care-description">
              Professional cleaning built around reliable teams, clear processes, and consistent results across every property.
            </p>
          </div>

          <a href="#quote" className="standard-care-link">
            Request a Quote
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
          </a>
        </div>

        <div className="standard-care-grid">
          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.14s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                Trained
              </div>
              <span className="standard-care-card-index">01</span>
            </div>

            <h3 className="standard-care-card-title">Professional Teams</h3>
            <p className="standard-care-card-text">
              Reliable cleaners and housekeeping staff selected for professionalism, efficiency, and attention to detail.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Trained and supervised staff
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Respectful, reliable service
              </li>
            </ul>
          </article>

          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.22s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
                Flexible
              </div>
              <span className="standard-care-card-index">02</span>
            </div>

            <h3 className="standard-care-card-title">Flexible Support</h3>
            <p className="standard-care-card-text">
              From private villa cleaning to ongoing hotel housekeeping, our teams adapt to your schedule and workload.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                One-time or recurring service
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Flexible team sizes and schedules
              </li>
            </ul>
          </article>

          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.30s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
                Consistent
              </div>
              <span className="standard-care-card-index">03</span>
            </div>

            <h3 className="standard-care-card-title">Clear Standards</h3>
            <p className="standard-care-card-text">
              Structured cleaning processes help us deliver dependable quality across rooms, villas, and shared spaces.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Consistent results visit after visit
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Detail-focused quality checks
              </li>
            </ul>
          </article>

          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.38s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
                Local
              </div>
              <span className="standard-care-card-index">04</span>
            </div>

            <h3 className="standard-care-card-title">Samui-Based Service</h3>
            <p className="standard-care-card-text">
              Local coordination and responsive support for hotels, villas, holiday rentals, and private homes across Koh Samui.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Fast and direct communication
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Service tailored to local properties
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}