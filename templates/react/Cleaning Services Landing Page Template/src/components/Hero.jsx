import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-homecare">
      <div className="hero-shell">
        <div className="hero-frame">
          <div className="hero-bg">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b9f293f-1d43-45a5-8afa-a26a8259ca55_1600w.png" alt="Warm premium residential interior" />
          </div>

          <div className="hero-grid-lines">
            <div className="hero-grid-line"></div>
            <div className="hero-grid-line"></div>
            <div className="hero-grid-line"></div>
            <div className="hero-grid-line"></div>
          </div>

          <div className="hero-content">
            <div className="hero-copy hero-fade-up" style={{ animationDelay: '0.14s' }}>
              <div className="hero-eyebrow">
                Cleaning Company Koh Samui
              </div>

              <h1 className="hero-title">
                Cleaned with precision.<br />
                <span className="hero-title-accent hero-font-serif">Maintained with care.</span>
              </h1>

              <p className="hero-description font-medium text-stone-950">
                Reliable cleaning and housekeeping services for hotels, villas, and private homes across Koh Samui. Our team delivers consistent quality, flexible support, and spaces that are ready to impress.
              </p>

              <div className="hero-actions">
                <a href="#quote" className="hero-btn-primary">
                  Get a Quote
                  <iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
                </a>

                <a href="#services" className="hero-btn-secondary">
                  See Services
                </a>
              </div>

              <div className="hero-trust">
                <div className="hero-trust-stack">
                  <span className="hero-trust-dot"></span>
                  <span className="hero-trust-dot bg-[url(https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80)] bg-cover"></span>
                  <span className="hero-trust-dot bg-[url(https://images.unsplash.com/photo-1604364721460-0cbc5866219d?w=800&q=80)] bg-cover bg-center"></span>
                </div>
                <div className="hero-trust-text">Trusted by HOTELS, VILLAS & PRIVATE HOMES</div>
              </div>
            </div>

            <div className="hero-visual hero-fade-up" style={{ animationDelay: '0.32s' }}>
              <div className="hero-floating-card hero-float-soft">
                <span className="hero-card-kicker">THE CLEANECS STANDARD</span>

                <h3 className="hero-card-title">Professional cleaning, delivered with consistency.</h3>

                <ul className="hero-card-list">
                  <li className="hero-card-item">
                    <iconify-icon className="hero-card-icon" icon="solar:shield-check-linear" width="18"></iconify-icon>
                    <div>
                      <strong>Trained and trusted professionals</strong>
                      <span>Reliable cleaning teams selected for professionalism, attention to detail, and consistent service quality.</span>
                    </div>
                  </li>

                  <li className="hero-card-item">
                    <iconify-icon className="hero-card-icon" icon="solar:calendar-linear" width="18"></iconify-icon>
                    <div>
                      <strong>Flexible teams and scheduling</strong>
                      <span>From one-time villa cleaning to ongoing hotel housekeeping, our service adapts to your requirements.</span>
                    </div>
                  </li>

                  <li className="hero-card-item">
                    <iconify-icon className="hero-card-icon" icon="solar:leaf-linear" width="18"></iconify-icon>
                    <div>
                      <strong>Standards tailored to your property</strong>
                      <span>Structured cleaning procedures designed for hotels, holiday villas, private homes, and guest-ready spaces.</span>
                    </div>
                  </li>
                </ul>

                <div className="hero-card-footer">
                  <span className="hero-card-meta">Every space, guest-ready.</span>
                  <a href="#services" className="hero-card-link">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}