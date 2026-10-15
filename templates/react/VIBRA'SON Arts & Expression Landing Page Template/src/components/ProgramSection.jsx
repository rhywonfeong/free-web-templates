import {
  Mic,
  Star,
  Heart,
  PenLine,
  Camera,
  GraduationCap,
} from "lucide-react";

const programs = [
  {
    icon: Mic,
    number: "01",
    category: "Chant",
    title: "Atelier chant",
    description:
      "Travailler sa voix, sa respiration et sa présence dans un cadre bienveillant, du premier son jusqu'à la scène.",
  },
  {
    icon: Star,
    number: "02",
    category: "Scène",
    title: "Scène ouverte",
    description:
      "Des restitutions publiques régulières pour oser se présenter devant un public et partager sa progression.",
  },
  {
    icon: Heart,
    number: "03",
    category: "Bien-être",
    title: "Confiance en soi",
    description:
      "Un accompagnement par l'expression créative pour se reconnecter à soi, dépasser ses blocages et s'affirmer.",
  },
  {
    icon: PenLine,
    number: "04",
    category: "Écriture",
    title: "Écriture créative",
    description:
      "Mettre des mots sur ses émotions : textes, slam et chansons, de la page blanche à l'interprétation.",
  },
  {
    icon: Camera,
    number: "05",
    category: "Studio",
    title: "Studio & enregistrement",
    description:
      "Découvrir l'enregistrement, l'image et la production pour garder une trace concrète de son parcours artistique.",
  },
  {
    icon: GraduationCap,
    number: "06",
    category: "Stages",
    title: "Stages intensifs",
    description:
      "Des semaines immersives pendant les vacances pour progresser vite, créer ensemble et monter un projet complet.",
    featured: true,
  },
];

export default function ProgramSection() {
  return (
    <section id="programme" className="section_programs">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="programs_header">
            <div className="programs_badge">Nos programmes</div>
            <div className="max-heading is-48rem">
              <h2 className="programs_heading">
                Un programme pour chaque envie d'expression
              </h2>
            </div>
            <p className="programs_lead">
              Des ateliers accessibles à tous, sans condition d'origine ou
              d'expérience, pour explorer sa voix, ses mots et sa présence.
            </p>
          </div>
          <div className="spacer">
            <div style={{ height: "3.75rem" }} className="spacer-desktop"></div>
            <div style={{ height: "2.5rem" }} className="spacer-tablet"></div>
            <div style={{ height: "2rem" }} className="spacer-mobile"></div>
          </div>
          <div className="programs_grid">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <article
                  key={program.number}
                  className={
                    program.featured ? "program_card is-dark" : "program_card"
                  }
                >
                  <div className="program_card-top">
                    <div className="program_icon">
                      <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <div className="program_badge">
                      {program.number}
                      <span className="program_badge-dot" aria-hidden="true">
                        •
                      </span>
                      {program.category}
                    </div>
                  </div>
                  <h3 className="program_title">{program.title}</h3>
                  <p className="program_text">{program.description}</p>
                  <a href="#tarifs" className="program_link">
                    En savoir plus
                    <span className="program_link-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}
