import React from 'react';

export default function Services() {
  return (
    <section id="services" className="services-catalog">
      <div className="services-catalog-shell">
        <div className="services-catalog-head">
          <h2 className="services-catalog-title">
            Professional cleaning for<br />
            <span className="services-catalog-title-accent hero-font-serif">
              every kind of property.
            </span>
          </h2>

          <p className="services-catalog-description">
            Flexible cleaning and housekeeping services for hotels, villas, holiday rentals, and private homes across Koh Samui.
          </p>
        </div>

        <div className="services-catalog-grid">
          {/* Column 1 */}
          <div className="service-catalog-column is-outer">
            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.10s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1763d73d-3c63-491f-b0ca-91474cc6c887_1600w.png"
                  alt="Recurring cleaning service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Hotel Housekeeping</h3>
                <p className="service-catalog-meta">HOTELS / RESORTS / DAILY SUPPORT</p>
                <p className="service-catalog-copy">
                  Professional housekeeping teams for guest rooms, common areas, and daily hotel operations.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>

            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.18s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ac34355-0ed0-45e6-8eb8-5f9d1aca5a48_1600w.png"
                  alt="Deep reset service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Deep Cleaning</h3>
                <p className="service-catalog-meta">INTENSIVE / DETAILED / THOROUGH</p>
                <p className="service-catalog-copy">
                  A complete top-to-bottom clean for properties that need extra care, preparation, or a fresh start.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>
          </div>

          {/* Column 2 */}
          <div className="service-catalog-column is-middle">
            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.26s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a49edbad-d129-4523-b69f-c1c181a042bf_1600w.png"
                  alt="Move in move out service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Villa Cleaning</h3>
                <p className="service-catalog-meta">PRIVATE VILLAS / REGULAR CARE</p>
                <p className="service-catalog-copy">
                  Reliable cleaning for private villas, tailored to your property, schedule, and lifestyle.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>

            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.34s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb5ef409-561f-43a4-81cf-0ea62c173517_1600w.png"
                  alt="Apartment refresh service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Private Home Cleaning</h3>
                <p className="service-catalog-meta">HOMES / CONDOS / FLEXIBLE CARE</p>
                <p className="service-catalog-copy">
                  Professional cleaning for homes and condominiums, available as a one-time or recurring service.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>
          </div>

          {/* Column 3 */}
          <div className="service-catalog-column is-outer">
            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.42s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7efdba9f-f6bf-4e66-86b7-060d557301ea_1600w.png"
                  alt="Host-ready styling service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Guest Turnover Cleaning</h3>
                <p className="service-catalog-meta">CHECK-OUT / RESET / GUEST-READY</p>
                <p className="service-catalog-copy">
                  Fast, detail-focused cleaning between stays to ensure your property is ready for every arrival.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>

            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.50s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cb4edb7-579b-4c0d-99b1-1f79aae0b603_1600w.png"
                  alt="Custom home plan service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Custom Cleaning Plans</h3>
                <p className="service-catalog-meta">TAILORED / FLEXIBLE / SCALABLE</p>
                <p className="service-catalog-copy">
                  A personalised cleaning plan built around your property, service standards, and operational needs.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="services-catalog-cta-wrap">
          <a href="#quote" className="services-catalog-button">
            GET A QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}