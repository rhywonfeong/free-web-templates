import { useState } from "react";

// Section « La musique comme outil de transformation » en format FAQ :
// chaque valeur se déplie / replie via un bouton.
const items = [
  {
    id: "bienveillance",
    question: "Bienveillance absolue",
    answer:
      "Aucun jugement sur la voix, le corps ou le texte de chacun. Nous offrons un cadre sécurisant pour s'exprimer librement.",
  },
  {
    id: "authenticite",
    question: "Authenticité",
    answer:
      "Une expression sincère mais imparfaite vaut toujours mieux qu'une performance froide. L'art comme chemin vers la vérité.",
  },
  {
    id: "accessibilite",
    question: "Accessibilité",
    answer:
      "Des tarifs et programmes ouverts à tous, quel que soit le niveau, l'origine sociale ou l'expérience préalable.",
  },
  {
    id: "lacher-prise",
    question: "Lâcher prise",
    answer:
      "Ateliers collectifs de libération émotionnelle pour développer sa confiance en soi par l'art.",
  },
  {
    id: "intervenants",
    question: "Intervenants formés",
    answer:
      "Nos intervenants sont formés directement par le fondateur à cette pédagogie, avec qualité et bienveillance.",
  },
];

export default function TransformationFaq() {
  // Premier élément ouvert par défaut pour montrer le comportement.
  const [openId, setOpenId] = useState(items[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="faq_list faq-accordion_list">
      {items.map((item) => {
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
              aria-controls={`transfo-panel-${item.id}`}
              id={`transfo-trigger-${item.id}`}
            >
              <span className="faq-accordion_question">{item.question}</span>
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
              id={`transfo-panel-${item.id}`}
              role="region"
              aria-labelledby={`transfo-trigger-${item.id}`}
              className="faq-accordion_panel"
              hidden={!isOpen}
            >
              <p className="faq-accordion_answer">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
