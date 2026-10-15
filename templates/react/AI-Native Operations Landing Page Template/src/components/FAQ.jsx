import React, { useState, useEffect, useRef } from 'react';

const faqData = [
  { id: 1, delay: '0.16s', category: 'membership', q: 'Do I need a membership to visit Stillpoint?', a: 'No. You can begin with an intro session or book an individual visit. Membership simply makes recovery easier to return to if you want a more consistent rhythm.' },
  { id: 2, delay: '0.22s', category: 'recovery', q: 'Is this only for athletes or highly active people?', a: 'Not at all. Stillpoint is for anyone who wants a calmer, more intentional way to recover — including professionals, creatives, and people dealing with stress, fatigue, or physical tension.' },
  { id: 3, delay: '0.28s', category: 'services', q: 'What should I expect during my first visit?', a: 'Your first visit is designed to feel guided and clear. You’ll be introduced to the space, the pacing of the rituals, and the recovery flow that best fits your needs and comfort level.' },
  { id: 4, delay: '0.34s', category: 'recovery', q: 'How often should I come to feel the benefits?', a: 'That depends on your routine, but most people notice the difference most clearly when recovery becomes consistent rather than occasional. Even a simple weekly rhythm can change how the body resets.' },
  { id: 5, delay: '0.40s', category: 'services', q: 'Can I combine contrast, mobility, and breathwork?', a: 'Yes. The studio is designed around sequencing, so different modalities can work together in a way that feels calm and complementary rather than overwhelming.' },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(1);

  // When category changes, open the first visible item
  useEffect(() => {
    const visibleItems = faqData.filter(item => activeCategory === 'all' || item.category === activeCategory);
    if (visibleItems.length > 0 && !visibleItems.some(item => item.id === openFaq)) {
      setOpenFaq(visibleItems[0].id);
    }
  }, [activeCategory]);

  return (
    <section id="faq" className="final-section-v1">
      <div className="final-shell-v1">
        <div className="final-frame-v1">
          <div className="final-inner-v1">
            <div className="final-head-v1">
              <div className="final-eyebrow-v1 reveal-fade">Questions + Next Step</div>

              <h2 className="final-title-v1 font-head reveal-trigger">
                <span className="reveal-line" style={{ transitionDelay: '0.10s' }}>Everything you need</span>
                <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>to know before you</span>
                <span className="reveal-line" style={{ transitionDelay: '0.38s' }}>begin your rhythm.</span>
              </h2>

              <p className="final-text-v1 reveal-para" style={{ transitionDelay: '0.18s' }}>
                A few practical answers before your first visit — and when you’re ready, a simple way to take the next
                step.
              </p>
            </div>

            <div className="faq-grid-v1">
              <div className="faq-side-v1 reveal-fade" style={{ transitionDelay: '0.12s' }}>
                <p className="faq-side-note-v1">
                  Stillpoint is designed to feel approachable from the start. Whether you are coming in for recovery,
                  nervous system reset, or a more consistent membership rhythm, the experience is built to feel guided,
                  calm, and easy to return to.
                </p>

                <div className="faq-filter-v1">
                  <p className="faq-filter-label-v1">Browse by category</p>

                  <div className="faq-filter-tags-v1">
                    <button 
                      className={`faq-filter-tag-v1 ${activeCategory === 'all' ? 'active' : ''}`} 
                      onClick={() => setActiveCategory('all')}
                    >
                      <span className="faq-filter-dot-v1"></span>
                      All Questions
                    </button>

                    <button 
                      className={`faq-filter-tag-v1 ${activeCategory === 'recovery' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('recovery')}
                    >
                      <span className="faq-filter-dot-v1"></span>
                      Recovery Visits
                    </button>

                    <button 
                      className={`faq-filter-tag-v1 ${activeCategory === 'services' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('services')}
                    >
                      <span className="faq-filter-dot-v1"></span>
                      Services &amp; Flow
                    </button>

                    <button 
                      className={`faq-filter-tag-v1 ${activeCategory === 'membership' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('membership')}
                    >
                      <span className="faq-filter-dot-v1"></span>
                      Membership
                    </button>
                  </div>

                  <p className="faq-filter-note-v1">
                    Select a category to focus the questions on the right, or view everything at once.
                  </p>
                </div>
              </div>

              <div className="faq-list-v1">
                {faqData.map((item) => {
                  const isVisible = activeCategory === 'all' || item.category === activeCategory;
                  const isActive = openFaq === item.id;

                  return (
                    <div 
                      key={item.id}
                      className={`faq-item-v1 reveal-fade ${isActive ? 'active' : ''}`} 
                      style={{ 
                        display: isVisible ? 'block' : 'none',
                        transitionDelay: item.delay
                      }}
                    >
                      <button 
                        className="faq-question-v1" 
                        type="button"
                        onClick={() => setOpenFaq(isActive ? null : item.id)}
                      >
                        <span>{item.q}</span>
                        <div className="faq-icon-v1">+</div>
                      </button>
                      <div 
                        className="faq-answer-v1"
                        style={{ maxHeight: isActive ? '500px' : '0' }} // Simple max-height toggle as CSS does the transition
                      >
                        <div className="faq-answer-inner-v1">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="final-cta-wrap-v1">
              <div className="final-cta-panel-v1 reveal-fade" style={{ transitionDelay: '0.18s' }}>
                <div className="final-cta-grid-v1">
                  <div className="final-cta-copy-v1">
                    <span className="final-cta-kicker-v1">Begin your first visit</span>
                    <h3 className="final-cta-title-v1 font-head">Start with one session, then build your rhythm from there.
                    </h3>
                    <p className="final-cta-text-v1">
                      Whether you want to explore the studio, try a guided intro, or compare membership options,
                      Stillpoint is built to feel calm from the very first step.
                    </p>
                  </div>

                  <div className="final-cta-actions-v1">
                    <a href="#" className="final-btn-v1 primary">Book Intro Session</a>
                    <a href="#" className="final-btn-v1 secondary">Explore Membership</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}