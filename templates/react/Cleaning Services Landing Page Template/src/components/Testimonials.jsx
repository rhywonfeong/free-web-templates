import React, { useEffect, useState } from 'react';

const slides = [
  [
    {
      initials: 'SJ',
      quote: (
        <>
          “The attention to detail is unmatched. Walking into my home after each
          visit feels like{' '}
          <span className="testimonial-quote-accent hero-font-serif">
            a complete reset.
          </span>{' '}
          It has changed how I experience my weekends.”
        </>
      ),
      name: 'Sarah Jenkins',
      detail: 'Recurring Care · Client Since 2023',
    },
    {
      initials: 'MT',
      quote:
        '“I’ve tried multiple services over the years, but none have felt this polished. They respect the space, they’re reliable, and the results are consistently flawless week after week.”',
      name: 'Michael T.',
      detail: 'Bi-Weekly Service · Client Since 2022',
    },
    {
      initials: 'ER',
      quote:
        '“Booking was effortless, the team was incredibly professional, and coming home to a beautifully reset kitchen before guests arrived felt like a luxury I don’t want to give up.”',
      name: 'Elena R.',
      detail: 'Host-Ready Styling · Client Since 2024',
    },
  ],
  [
    {
      initials: 'CL',
      quote:
        '“The consistency is what impressed me most. I never have to wonder how the home will look before family visits or busy workweeks.”',
      name: 'Claire L.',
      detail: 'Custom Home Plan · Client Since 2023',
    },
    {
      initials: 'DM',
      quote:
        '“Their move-in service made the entire transition feel lighter. The house was immaculate, organized, and ready from the first day.”',
      name: 'Daniel M.',
      detail: 'Move In / Move Out · Client Since 2024',
    },
    {
      initials: 'AP',
      quote:
        '“What I value most is how calm and dependable the whole experience feels. It saves time, yes, but it also removes a surprising amount of mental load.”',
      name: 'Ava P.',
      detail: 'Apartment Refresh · Client Since 2024',
    },
  ],
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => clearInterval(autoPlay);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="reviews" className="testimonials-section">
      <div className="testimonials-shell">
        <div
          className="testimonials-head testimonials-reveal"
          style={{ animationDelay: '0.08s' }}
        >
          <span className="testimonials-kicker">CLIENT EXPERIENCES</span>

          <h2 className="testimonials-title">
            <span className="testimonials-title-line">What our clients</span>
            <span className="testimonials-title-accent hero-font-serif">
              value most.
            </span>
          </h2>

          <p className="testimonials-description">
            Real feedback from hotel teams, villa managers, and homeowners who rely on Cleanecs for consistent quality and dependable service.
          </p>
        </div>

        <div
          className="testimonials-carousel-wrap testimonials-reveal"
          style={{ animationDelay: '0.14s' }}
        >
          <div className="testimonials-carousel-viewport">
            <div
              className="testimonials-carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="testimonials-slide">
                  <div className="testimonials-grid">
                    {slide.map((t, idx) => (
                      <article key={idx} className="testimonial-card">
                        <div className="testimonial-avatar-row">
                          <div className="testimonial-avatar">{t.initials}</div>
                        </div>

                        <div className="testimonial-stars">
                          <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                          <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                          <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                          <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                          <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                        </div>

                        <p className="testimonial-quote">{t.quote}</p>

                        <div className="testimonial-footer">
                          <div className="testimonial-name">{t.name}</div>
                          <div className="testimonial-detail">{t.detail}</div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-controls">
            <button
              className="testimonials-nav-btn"
              aria-label="Previous testimonials"
              onClick={prevSlide}
              type="button"
            >
              <iconify-icon
                icon="solar:alt-arrow-left-linear"
                width="18"
              ></iconify-icon>
            </button>

            <div className="testimonials-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials-indicator ${
                    index === currentSlide ? 'is-active' : ''
                  }`}
                  data-slide={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  type="button"
                />
              ))}
            </div>

            <button
              className="testimonials-nav-btn"
              aria-label="Next testimonials"
              onClick={nextSlide}
              type="button"
            >
              <iconify-icon
                icon="solar:alt-arrow-right-linear"
                width="18"
              ></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}