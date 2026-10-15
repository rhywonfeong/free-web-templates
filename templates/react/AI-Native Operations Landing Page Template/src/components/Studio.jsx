import React from 'react';

export default function Studio() {
  return (
    <section id="studio-experience" className="studio-section">
      <div className="studio-shell">
        <div className="studio-frame">
          <div className="studio-grid">
            <div className="studio-copy">
              <div>
                <p className="studio-kicker reveal-fade" style={{ transitionDelay: '0s' }}>The studio experience</p>

                <h2 className="studio-title font-head reveal-trigger">
                  <span className="reveal-line" style={{ transitionDelay: '0.1s' }}>An architecture </span>
                  <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>designed to grant control </span>
                  <span className="reveal-line" style={{ transitionDelay: '0.38s' }}>before it scales.</span>
                </h2>

                <p className="studio-text reveal-para" style={{ transitionDelay: '0.5s' }}>
                  Transformation means moving from the fog of daily operations to the clarity of a system. We deliver a digital twin of your business logic, allowing you to see every dependency and process with surgical precision. This is not just a report; it is a live instrument of management.
                </p>

                <div className="studio-note reveal-fade" style={{ transitionDelay: '0.62s' }}>
                  The outcome is a frictionless organization where decisions are based on the exhaustive mechanics of your business, not on assumptions or tribal knowledge.
                </div>
              </div>

              <div className="studio-points">
                <div className="studio-point reveal-fade" style={{ transitionDelay: '0.72s' }}>
                  <span className="studio-point-index">01</span>
                  <p className="studio-point-text">
                    A complete map of your org structure and processes that grants you total visibility over how work actually happens.
                  </p>
                </div>

                <div className="studio-point reveal-fade" style={{ transitionDelay: '0.80s' }}>
                  <span className="studio-point-index">02</span>
                  <p className="studio-point-text">
                    A live RAG system that answers your most critical questions within hours, providing a single source of truth for the entire leadership.
                  </p>
                </div>

              </div>
            </div>

            <div className="studio-media">
              <div className="studio-main-card reveal-img">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cc45272-bd4e-423d-94e0-2657b8ce7ba8_1600w.jpg" alt="Stillpoint studio interior" />
                {/* <div className="studio-main-label">AI-brain</div> */}
              </div>

              <div className="studio-subgrid">
                <article className="studio-subcard reveal-fade" style={{ transitionDelay: '0.76s' }}>
                  <span className="studio-subcard-eyebrow">01 / PROCESS CLARITY</span>
                  <h3 className="studio-subcard-title font-head">Documented Logic</h3>
                  <p className="studio-subcard-text">
                    A comprehensive guide to your processes that replaces tribal knowledge with a clear, scalable architecture.
                  </p>
                </article>

                <article className="studio-subcard reveal-fade" style={{ transitionDelay: '0.98s' }}>
                  <span className="studio-subcard-eyebrow">02 / SYSTEMIC SCALE</span>
                  <h3 className="studio-subcard-title font-head">Bottleneck Removal</h3>
                  <p className="studio-subcard-text">
                   A roadmap that identifies and eliminates structural weaknesses to support immediate business growth.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}