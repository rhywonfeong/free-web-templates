import React from 'react';

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="lifestyle-section">
      <div className="lifestyle-shell">
        <div className="lifestyle-grid">
          <div
            className="lifestyle-copy lifestyle-reveal"
            style={{ animationDelay: '0.08s' }}
          >
            <h2 className="lifestyle-title">
              <span className="lifestyle-title-line">More time for what</span>
              <span className="lifestyle-title-accent hero-font-serif">
                truly matters.
              </span>
            </h2>

            <p className="lifestyle-description">
              A professionally maintained property does more than look clean. It creates a better guest experience, protects your reputation, and gives you more time to focus on operations, bookings, or simply enjoying life in Koh Samui.
            </p>

            <div className="lifestyle-outcomes">
              <p className="lifestyle-outcomes-label">Everyday outcomes</p>

              <ul className="lifestyle-outcomes-list">
                <li>
                  <iconify-icon icon="solar:brain-linear" width="18"></iconify-icon>
                  <span>Less time managing cleaning</span>
                </li>
                <li>
                  <iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                  <span>Guest-ready rooms and villas</span>
                </li>
                <li>
                  <iconify-icon icon="solar:cup-hot-linear" width="18"></iconify-icon>
                  <span>Consistent presentation standards</span>
                </li>
              </ul>
            </div>

            <div className="lifestyle-note">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0084eec-5f7f-4a16-91cc-f32c1151c832_320w.jpg"
                alt="Founder portrait"
                className="lifestyle-note-avatar"
              />
              <div>
                <p className="lifestyle-note-quote">
                  “We built Cleanecs around one belief: a well-kept property should feel
                  effortless for those who own and manage it.”
                </p>
                <p className="lifestyle-note-meta">Suzy — Founder</p>
              </div>
            </div>

            <a href="#quote" className="lifestyle-cta">
              Request a Quote
              <iconify-icon
                icon="solar:arrow-right-up-linear"
                width="16"
              ></iconify-icon>
            </a>
          </div>

          <div
            className="lifestyle-visual lifestyle-reveal"
            style={{ animationDelay: '0.16s' }}
          >
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0c742dd-ae46-47c8-a64d-0cc8538061a3_1600w.png"
              alt="Warm premium residential interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}