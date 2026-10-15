import React from 'react';

export default function FinalConversion() {
  return (
    <section id="quote" className="final-conversion-section">
      <div className="final-conversion-shell">
        <div
          className="final-conversion-intro final-conversion-reveal"
          style={{ animationDelay: '0.04s' }}
        >
          <span className="final-conversion-intro-kicker">Next Step</span>

          <h2 className="final-conversion-intro-title">
            Tell us about your home.
          </h2>

          <p className="final-conversion-intro-text">
            A few details is all we need to recommend the right service rhythm for your
            home.
          </p>
        </div>

        <div
          className="final-conversion-quote final-conversion-reveal"
          style={{ animationDelay: '0.08s' }}
        >
          <div className="final-conversion-context">
            <span className="final-conversion-kicker">Tailored Quote</span>

            <h2 className="final-conversion-title">
              Request your
              <br />
              <span className="final-conversion-title-accent hero-font-serif">
                tailored quote.
              </span>
            </h2>

            <p className="final-conversion-description">
              Tell us a bit about your home and your preferred routine. We’ll send back
              a clear, personalized quote designed around the way you actually live.
            </p>

            <ul className="final-conversion-points">
              <li>
                <iconify-icon
                  icon="solar:check-circle-linear"
                  width="18"
                ></iconify-icon>
                Transparent pricing with no hidden fees
              </li>

              <li>
                <iconify-icon
                  icon="solar:calendar-linear"
                  width="18"
                ></iconify-icon>
                Flexible scheduling that can adjust over time
              </li>

              <li>
                <iconify-icon
                  icon="solar:shield-check-linear"
                  width="18"
                ></iconify-icon>
                Thoughtful service for modern homes, families, and pets
              </li>
            </ul>
          </div>

          <div className="final-conversion-form-wrap">
            <form className="final-conversion-form">
              <div className="final-conversion-form-grid">
                <div className="final-conversion-field">
                  <label className="final-conversion-field-label">First Name</label>
                  <input
                    type="text"
                    className="final-conversion-input"
                    placeholder="Jane"
                  />
                </div>

                <div className="final-conversion-field">
                  <label className="final-conversion-field-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="final-conversion-input"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="final-conversion-field">
                  <label className="final-conversion-field-label">Bedrooms</label>
                  <select className="final-conversion-select">
                    <option>Select</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>4+ Bedrooms</option>
                  </select>
                </div>

                <div className="final-conversion-field">
                  <label className="final-conversion-field-label">Bathrooms</label>
                  <select className="final-conversion-select">
                    <option>Select</option>
                    <option>1 Bathroom</option>
                    <option>2 Bathrooms</option>
                    <option>3 Bathrooms</option>
                    <option>4+ Bathrooms</option>
                  </select>
                </div>
              </div>

              <div className="final-conversion-field">
                <label className="final-conversion-field-label">
                  Service Interest
                </label>

                <div className="final-conversion-checkbox-wrap">
                  <label className="final-conversion-check">
                    <input type="checkbox" />
                    <span className="final-conversion-check-box"></span>
                    <span className="final-conversion-check-text">
                      Recurring Cleaning
                    </span>
                  </label>

                  <label className="final-conversion-check">
                    <input type="checkbox" />
                    <span className="final-conversion-check-box"></span>
                    <span className="final-conversion-check-text">
                      Deep Reset
                    </span>
                  </label>

                  <label className="final-conversion-check">
                    <input type="checkbox" />
                    <span className="final-conversion-check-box"></span>
                    <span className="final-conversion-check-text">
                      Move In / Move Out
                    </span>
                  </label>

                  <label className="final-conversion-check">
                    <input type="checkbox" />
                    <span className="final-conversion-check-box"></span>
                    <span className="final-conversion-check-text">
                      Custom Home Plan
                    </span>
                  </label>
                </div>
              </div>

              <button type="button" className="final-conversion-submit">
                Get My Quote
                <iconify-icon
                  icon="solar:arrow-right-up-linear"
                  width="16"
                ></iconify-icon>
              </button>
            </form>
          </div>
        </div>

        <div
          className="final-conversion-faq final-conversion-reveal"
          style={{ animationDelay: '0.16s' }}
        >
          <div className="final-conversion-faq-head">
            <h3 className="final-conversion-faq-title">Common questions.</h3>
            <p className="final-conversion-faq-description">
              A few final details to make the process feel even easier before you
              request your quote.
            </p>
          </div>

          <div className="final-conversion-faq-list">
            <details className="final-conversion-faq-item">
              <summary>
                <span>What is included in a standard recurring visit?</span>
                <iconify-icon
                  className="final-conversion-faq-icon"
                  icon="solar:alt-arrow-down-linear"
                  width="18"
                ></iconify-icon>
              </summary>
              <div className="final-conversion-faq-answer">
                Our recurring visits typically include dusting surfaces, vacuuming and
                mopping floors, sanitizing bathrooms, wiping kitchen exteriors, and
                restoring the home to a calm, polished baseline.
              </div>
            </details>

            <details className="final-conversion-faq-item">
              <summary>
                <span>Do I need to be home during the service?</span>
                <iconify-icon
                  className="final-conversion-faq-icon"
                  icon="solar:alt-arrow-down-linear"
                  width="18"
                ></iconify-icon>
              </summary>
              <div className="final-conversion-faq-answer">
                No. Many clients prefer to provide a key, entry code, or lockbox access
                so they can return to a fully refreshed space without interrupting
                their day.
              </div>
            </details>

            <details className="final-conversion-faq-item">
              <summary>
                <span>Do you bring your own supplies and equipment?</span>
                <iconify-icon
                  className="final-conversion-faq-icon"
                  icon="solar:alt-arrow-down-linear"
                  width="18"
                ></iconify-icon>
              </summary>
              <div className="final-conversion-faq-answer">
                Yes. We arrive fully equipped with modern, carefully selected products
                and professional tools. We can also accommodate preferred products for
                specific surfaces when needed.
              </div>
            </details>

            <details className="final-conversion-faq-item">
              <summary>
                <span>How often can I book service?</span>
                <iconify-icon
                  className="final-conversion-faq-icon"
                  icon="solar:alt-arrow-down-linear"
                  width="18"
                ></iconify-icon>
              </summary>
              <div className="final-conversion-faq-answer">
                We offer weekly, bi-weekly, monthly, and one-time services depending on
                your needs. Custom care cadences are also available for homes with more
                specific routines.
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}