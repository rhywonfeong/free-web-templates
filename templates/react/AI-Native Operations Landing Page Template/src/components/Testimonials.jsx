import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials-section-v1">
      <div className="testimonials-shell-v1">
        <div className="testimonials-frame-v1">
          <div className="testimonials-inner-v1">
            <div className="testimonials-head-v1">
              <div className="testimonials-eyebrow-v1 reveal-fade">Member Perspective</div>

              <h2 className="testimonials-title-v1 font-head reveal-trigger">
                <span className="reveal-line" style={{ transitionDelay: '0.10s' }}>What recovery starts</span>
                <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>to feel like when it</span>
                <span className="reveal-line" style={{ transitionDelay: '0.38s' }}>becomes consistent.</span>
              </h2>

              <p className="testimonials-text-v1 reveal-para" style={{ transitionDelay: '0.18s' }}>
                Stillpoint is designed to be returned to. These reflections capture what members tend to notice first:
                less friction, steadier energy, and a recovery rhythm that feels easier to keep.
              </p>
            </div>

            <div className="testimonials-grid-v1">
              <article className="testimonial-featured-v1 reveal-fade" style={{ transitionDelay: '0.12s' }}>
                <div>
                  <div className="testimonial-featured-top-v1">
                    <div className="testimonial-rating-v1" aria-label="5 star rating">
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                    </div>

                    <span className="testimonial-badge-v1">Most repeated feedback</span>
                  </div>

                  <h3 className="testimonial-quote-v1 font-head">
                    “It made recovery feel easier to return to, instead of one more thing to schedule.”
                  </h3>

                  <p className="testimonial-body-v1">
                    I originally came in for contrast therapy, but what kept me coming back was the pacing of the whole
                    experience. The studio feels calm without being sleepy, and I leave feeling clearer, lighter, and more
                    put back together than when I arrived.
                  </p>
                </div>

                <div className="testimonial-featured-footer-v1">
                  <div className="testimonial-person-v1">
                    <span className="testimonial-name-v1">Maya R.</span>
                    <span className="testimonial-role-v1">Creative Director · Weekly member</span>
                  </div>

                  <span className="testimonial-meta-v1">Mobility + Contrast + Breath</span>
                </div>
              </article>

              <div className="testimonials-side-v1">
                <article className="testimonial-card-v1 reveal-fade" style={{ transitionDelay: '0.18s' }}>
                  <div className="testimonial-card-head-v1">
                    <div>
                      <div className="testimonial-card-name-v1">Daniel K.</div>
                      <div className="testimonial-card-role-v1">Founder · Biweekly visits</div>
                    </div>
                    <div className="testimonial-rating-v1" aria-label="5 star rating">
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                    </div>
                  </div>
                  <p className="testimonial-card-text-v1">
                    “The biggest shift was how quickly I could move from work mode into a calmer state.”
                  </p>
                </article>

                <article className="testimonial-card-v1 reveal-fade" style={{ transitionDelay: '0.24s' }}>
                  <div className="testimonial-card-head-v1">
                    <div>
                      <div className="testimonial-card-name-v1">Sophie T.</div>
                      <div className="testimonial-card-role-v1">Trainer · Membership</div>
                    </div>
                    <div className="testimonial-rating-v1" aria-label="5 star rating">
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                    </div>
                  </div>
                  <p className="testimonial-card-text-v1">
                    “It feels structured without being clinical. That balance is what makes it special.”
                  </p>
                </article>

                <article className="testimonial-card-v1 reveal-fade" style={{ transitionDelay: '0.30s' }}>
                  <div className="testimonial-card-head-v1">
                    <div>
                      <div className="testimonial-card-name-v1">Ethan L.</div>
                      <div className="testimonial-card-role-v1">Runner · Contrast + Breath</div>
                    </div>
                    <div className="testimonial-rating-v1" aria-label="5 star rating">
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                    </div>
                  </div>
                  <p className="testimonial-card-text-v1">
                    “I started coming for physical recovery, but the nervous system reset is what I notice the most now.”
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