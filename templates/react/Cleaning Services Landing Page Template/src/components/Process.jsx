import React from 'react';

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-shell">
        <div className="process-grid">
          <div
            className="process-visual process-reveal"
            style={{ animationDelay: '0.08s' }}
          >
            <div className="process-stage">
              <div className="process-plane-back"></div>
              <div className="process-plane-mid"></div>

              <div className="process-plane-front">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f42366c-2b2a-4608-b1b6-126ee36f1d71_1600w.png"
                  alt="Beautifully maintained premium living room"
                />
              </div>

              <div className="process-chip-row top-left">
                <span className="process-step-number">01</span>
                <div className="process-chip">
                  <iconify-icon
                    icon="solar:clipboard-text-linear"
                    width="14"
                  ></iconify-icon>
                  Quote
                </div>
              </div>

              <div className="process-chip-row mid-right">
                <div className="process-chip">
                  <iconify-icon
                    icon="solar:calendar-linear"
                    width="14"
                  ></iconify-icon>
                  Plan
                </div>
                <span className="process-step-number">02</span>
              </div>

              <div className="process-chip-row bottom-left">
                <span className="process-step-number">03</span>
                <div className="process-chip">
                  <iconify-icon
                    icon="solar:home-smile-linear"
                    width="14"
                  ></iconify-icon>
                  Reset
                </div>
              </div>
            </div>
          </div>

          <div
            className="process-copy process-reveal"
            style={{ animationDelay: '0.16s' }}
          >
            <p className="process-kicker">Process Overview</p>

            <h2 className="process-title">
              From request to reliable cleaning support.
            </h2>

            <p className="process-description">
              A simple process for hotels, villas, and private homes that need dependable cleaning or housekeeping in Koh Samui.
            </p>

            <div className="process-steps">
              <div className="process-step">
                <div className="process-step-index">01</div>
                <div>
                  <h3 className="process-step-title">Request a Quote</h3>
                  <p className="process-step-text">
                    Tell us about your property, location, cleaning needs, and preferred schedule.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-step-index">02</div>
                <div>
                  <h3 className="process-step-title">Get Your Cleaning Plan</h3>
                  <p className="process-step-text">
                    We recommend the right service, team size, and schedule based on your property and requirements.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-step-index">03</div>
                <div>
                  <h3 className="process-step-title">We Take Care of It</h3>
                  <p className="process-step-text">
                    Our cleaning team arrives as planned and keeps your space fresh, prepared, and guest-ready.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-cta-wrap">
              <a href="#quote" className="process-cta">
                Request a Quote
                <iconify-icon
                  icon="solar:arrow-right-up-linear"
                  width="16"
                ></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}