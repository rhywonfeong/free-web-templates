import { useState } from "react";

// Section « Tarifs, horaires et lieux » en format FAQ :
// chaque question se déplie / replie via un bouton.
const faqItems = [
  {
    id: "tarifs-particuliers",
    question: "Tarifs des cours particuliers",
    answer:
      "75 € / cours. Séance individuelle de 1h, entièrement sur mesure. Paiement en ligne : 1x, 3x ou 4x sans frais.",
  },
  {
    id: "tarifs-collectifs",
    question: "Tarifs des cours collectifs",
    answer:
      "400 € / an pour un atelier hebdomadaire (hors vacances scolaires). Paiement en ligne : 1x, 3x ou 4x sans frais.",
  },
  {
    id: "lieu",
    question: "Où se déroulent les ateliers ?",
    answer:
      "Espace Plouvier, 23 rue Alexopoulos, 95130 Le Plessis-Bouchard.",
  },
  {
    id: "horaires-mercredi",
    question: "Horaires du Mercredi",
    answer: "De 14h00 à 18h45 à l'Espace Plouvier.",
  },
  {
    id: "horaires-vendredi",
    question: "Horaires du Vendredi",
    answer: "De 19h00 à 22h00 à l'Espace Plouvier.",
  },
];

export default function FaqSection() {
  // Premier élément ouvert par défaut pour montrer le comportement.
  const [openId, setOpenId] = useState(faqItems[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="section_faq" id="infos-pratiques">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="faq_grid">
            <h2 className="scroll-into-view" style={{ transformStyle: "preserve-3d" }}>
              Tarifs, horaires et lieux
            </h2>
            <div className="faq_list faq-accordion_list">
              {faqItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`faq-accordion_item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-accordion_trigger"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      id={`faq-trigger-${item.id}`}
                    >
                      <span className="faq-accordion_question">
                        {item.question}
                      </span>
                      <span className="faq-accordion_icon" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 1V13"
                            className="faq-accordion_icon-vertical"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M1 7H13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      className="faq-accordion_panel"
                      hidden={!isOpen}
                    >
                      <p className="faq-accordion_answer">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}
