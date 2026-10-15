import React from 'react';

export default function Outcomes() {
  return (
    <section className="outcomes-section-v1">
      <div className="outcomes-shell-v1">
        <div className="outcomes-frame-v1">
          <div className="outcomes-inner-v1">

            <div className="outcomes-top-v1">
              <div className="outcomes-eyebrow-v1 reveal-fade">Recovery Outcomes</div>

              <h2 className="outcomes-title-v1 font-head reveal-trigger">
                <span className="reveal-line" style={{ transitionDelay: '0.10s' }}>What changes when</span>
                <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>recovery becomes routine.</span>
              </h2>

              <p className="outcomes-text-v1 reveal-para" style={{ transitionDelay: '0.18s' }}>
                Stillpoint is designed to do more than provide a single reset. The aim is to help the body come down
                from overload, restore usable energy, and make recovery feel easier to return to consistently.
              </p>
            </div>

            <div className="outcomes-grid-v1">

              <article className="outcome-card-v1 reveal-fade" style={{ transitionDelay: '0.20s' }}>
                <div className="outcome-card-media-v1">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03e3bf84-a049-41e8-9238-c44b7ba8abde_800w.jpg" alt="Recovery session focused on calm movement" className="outcome-card-image-v1" />
                  <div className="outcome-card-frame-v1"></div>
                </div>

                <div className="outcome-card-body-v1">
                  <span className="outcome-index-v1">01 — Nervous System Downshift</span>
                  <h3 className="outcome-title-v1 font-head">Feel more settled, faster.</h3>
                  <p className="outcome-text-v1">
                    Sessions are structured to reduce stress load, help the body settle faster, and create a more
                    grounded internal state that extends beyond the studio.
                  </p>
                </div>
              </article>

              <article className="outcome-card-v1 reveal-fade" style={{ transitionDelay: '0.35s' }}>
                <div className="outcome-card-media-v1">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef35cb7d-0c6c-4939-b48e-97b474688382_1600w.jpg" alt="Physical recovery and release work" className="outcome-card-image-v1" />
                  <div className="outcome-card-frame-v1"></div>
                </div>

                <div className="outcome-card-body-v1">
                  <span className="outcome-index-v1">02 — Physical Release</span>
                  <h3 className="outcome-title-v1 font-head">Move with less resistance.</h3>
                  <p className="outcome-text-v1">
                    The body feels less held, less compressed, and more ready to move, train, and recover with greater
                    ease across the rest of the week.
                  </p>
                </div>
              </article>

              <article className="outcome-card-v1 reveal-fade" style={{ transitionDelay: '0.50s' }}>
                <div className="outcome-card-media-v1">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/702af30c-e0ea-4555-999f-176514db6a5c_800w.jpg" alt="Sustainable weekly recovery rhythm" className="outcome-card-image-v1" />
                  <div className="outcome-card-frame-v1"></div>
                </div>

                <div className="outcome-card-body-v1">
                  <span className="outcome-index-v1">03 — Sustainable Recovery Rhythm</span>
                  <h3 className="outcome-title-v1 font-head">Make recovery easier to keep.</h3>
                  <p className="outcome-text-v1">
                    Instead of treating restoration as an occasional fix, members build a steadier rhythm that supports
                    energy, resilience, and long-term recovery habits.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}