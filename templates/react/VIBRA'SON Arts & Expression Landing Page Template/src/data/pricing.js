// Données tarifaires de VIBRA'SON.
// La section Prix est générée dynamiquement à partir de ce tableau.
export const pricingPlans = [
  {
    id: "decouverte",
    name: "Cours d'essai",
    description: "Découvrez la méthode VIBRA'SON sans engagement.",
    priceLabel: "Gratuit",
    period: "premier cours",
    featured: false,
    cornerBadge: "Tous âges",
    features: [
      "1 séance découverte de 1h",
      "Chant, écriture ou scène au choix",
      "Tous âges et tous niveaux",
      "Sans engagement",
    ],
    cta: "Réserver mon essai",
  },
  {
    id: "collectif-jeunes",
    name: "Collectif jeunes",
    description: "Un atelier hebdomadaire pour révéler les jeunes talents.",
    priceLabel: "350 €",
    period: "par an",
    featured: false,
    cornerBadge: "12 ans et +",
    features: [
      "1 atelier hebdomadaire de 1h30",
      "Chant, écriture et scène",
      "Groupes de 8 à 12 participants",
      "Restitution sur scène en fin d'année",
    ],
    cta: "Rejoindre un groupe",
  },
  {
    id: "collectif-adultes",
    name: "Collectif adultes",
    description: "L'énergie du groupe pour progresser toute l'année.",
    priceLabel: "400 €",
    period: "par an",
    featured: true,
    featuredBadge: "Le plus populaire",
    cornerBadge: "Adultes",
    features: [
      "1 atelier hebdomadaire de 2h",
      "Chant, écriture et coaching scénique",
      "Groupes de 8 à 12 participants",
      "Paiement en 1x, 3x ou 4x sans frais",
    ],
    cta: "Rejoindre un groupe",
  },
  {
    id: "particulier",
    name: "Cours particuliers",
    description: "Un accompagnement individuel entièrement sur mesure.",
    priceLabel: "75 €",
    period: "par cours",
    featured: false,
    cornerBadge: "Sur mesure",
    features: [
      "Séance individuelle de 1h",
      "Programme personnalisé à vos objectifs",
      "Coaching vocal et scénique dédié",
      "Horaires flexibles mercredi et vendredi",
    ],
    cta: "Réserver un cours",
  },
];

export const pricingBanner = {
  title: "Stages, ateliers ponctuels et tarifs solidaires",
  text: "Adhésion annuelle incluse dans chaque formule. Tarifs solidaires possibles sur demande : aucune situation n'est un obstacle. Les cours ont lieu à l'Espace Plouvier, 23 rue Alexopoulos, 95130 Le Plessis-Bouchard.",
  cta: "Nous contacter",
};
