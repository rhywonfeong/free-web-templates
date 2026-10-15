import { pricingPlans, pricingBanner } from "../data/pricing.js";

export default function PricingSection() {
  return (
    <section className="section_pricing" id="tarifs">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="pricing_header">
            <div className="pricing_header-badge">NOS TARIFS</div>
            <h2 className="pricing_title">Des formules simples et accessibles</h2>
            <p className="pricing_intro">
              Chantez, écrivez, montez sur scène : choisissez la formule qui
              vous ressemble.
            </p>
          </div>
          <div className="pricing_grid">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={`pricing_card${plan.featured ? " is-featured" : ""}`}
              >
                {plan.featured && plan.featuredBadge ? (
                  <div className="pricing_featured-badge">
                    {plan.featuredBadge}
                  </div>
                ) : null}
                {plan.cornerBadge ? (
                  <span className="pricing_corner-badge">
                    {plan.cornerBadge}
                  </span>
                ) : null}
                <h3 className="pricing_card-name">{plan.name}</h3>
                <p className="pricing_card-description">{plan.description}</p>
                <div className="pricing_price-row">
                  <span className="pricing_price">{plan.priceLabel}</span>
                  <span className="pricing_period">/ {plan.period}</span>
                </div>
                <div className="pricing_features-label">
                  Inclus dans la formule
                </div>
                <ul className="pricing_features">
                  {plan.features.map((feature) => (
                    <li key={feature} className="pricing_feature">
                      <span className="pricing_check" aria-hidden="true">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6.2 4.8 9 10 3.4"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`pricing_cta${plan.featured ? " is-featured" : ""}`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="pricing_banner">
            <div className="pricing_banner-content">
              <h3 className="pricing_banner-title">{pricingBanner.title}</h3>
              <p className="pricing_banner-text">{pricingBanner.text}</p>
            </div>
            <a href="#" className="pricing_banner-cta">
              {pricingBanner.cta}
            </a>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}
