import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles.css";

const teamMembers = {
  en: [
    {
      name: "Joan Gambin",
      role: "CEO & Technical Director",
      desc: "Mechanical Engineer with postgraduate studies in Computer-Aided Design.",
      tags: ["Engineering", "CAD Design", "Leadership"],
      imgPrimary: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b3d6257-3675-4ebe-8b5b-5eb9ca267fbe_1600w.jpg"
    },
    {
      name: "Daisel Olivares",
      role: "Administration Manager",
      desc: "Ensuring our workshop runs as smoothly as the boats we deliver.",
      tags: ["Operations", "Client Relations"],
      imgPrimary: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa3b2acf-a753-4b84-abbd-2952d9d1925a_1600w.jpg",
    },
    {
      name: "Hector Gonzalez",
      role: "Workshop Manager",
      desc: "Mastering the craft across BodhiTubes, BodhiRIBs & BodhiFenders.",
      tags: ["BodhiTubes", "BodhiRIBs", "BodhiFenders"],
      imgPrimary: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/435658fc-f2ac-447c-b1c3-b1ec16160c56_1600w.png"
    },
    {
      name: "Raffaele Ghiara",
      role: "BodhiRIBs Manager",
      desc: "Specialized expertise across BodhiTubes & BodhiFenders.",
      tags: ["BodhiTubes", "BodhiFenders", "Assembly"],
      imgPrimary: "default"
    },
    {
      name: "Oriol Febrer",
      role: "Junior Technician",
      desc: "The next generation of marine craftsmanship, learning hands-on.",
      tags: ["Workshop", "Marine Tech"],
      imgPrimary: "default"
    }
  ],
  es: [
    {
      name: "Joan Gambin",
      role: "CEO y Director Técnico",
      desc: "Ingeniero Mecánico con posgrado en Diseño Asistido por Ordenador.",
      tags: ["Ingeniería", "Diseño CAD", "Dirección"],
      imgPrimary: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b3d6257-3675-4ebe-8b5b-5eb9ca267fbe_1600w.jpg"
    },
    {
      name: "Daisel Olivares",
      role: "Responsable de Administración",
      desc: "Asegurando que nuestro taller funcione con la misma precisión que nuestras embarcaciones.",
      tags: ["Operaciones", "Relación con Clientes"],
      imgPrimary: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa3b2acf-a753-4b84-abbd-2952d9d1925a_1600w.jpg",
    },
    {
      name: "Hector Gonzalez",
      role: "Jefe de Taller",
      desc: "Dominando el oficio en BodhiTubes, BodhiRIBs y BodhiFenders.",
      tags: ["BodhiTubes", "BodhiRIBs", "BodhiFenders"],
      imgPrimary: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/435658fc-f2ac-447c-b1c3-b1ec16160c56_1600w.png"
    },
    {
      name: "Raffaele Ghiara",
      role: "Responsable BodhiRIBs",
      desc: "Experiencia especializada en BodhiTubes y BodhiFenders.",
      tags: ["BodhiTubes", "BodhiFenders", "Ensamblaje"],
      imgPrimary: "default"
    },
    {
      name: "Oriol Febrer",
      role: "Técnico Junior",
      desc: "La nueva generación de artesanía naval, aprendiendo a pie de taller.",
      tags: ["Taller", "Técnica Naval"],
      imgPrimary: "default"
    }
  ]
};

const content = {
  en: {
    eyebrow: "The people behind the workshop",
    title: <>Five people.<br /><em>One workshop.</em></>,
    intro: "BodhiNautic is a small, highly specialized, hands-on technical team. The same people shown on this page are directly involved in the projects, manufacturing, engineering, workshop operations, and customer relationships.",
    label: "Meet the crew",
    approachTitle: <>Built on care.<br /><em>Finished with purpose.</em></>,
    approach: "We combine our hands-on workshop roots with advanced marine engineering. Every member of our team brings both a dedication to artisanal quality and a mastery of modern technical tools to your project.",
    contact: "Talk to the team",
  },
  es: {
    eyebrow: "Las personas detrás del taller",
    title: <>Cinco personas.<br /><em>Un taller.</em></>,
    intro: "BodhiNautic es un equipo técnico pequeño, altamente especializado y práctico. Las mismas personas que aparecen en esta página están directamente involucradas en los proyectos, la fabricación, la ingeniería, las operaciones del taller y las relaciones con los clientes.",
    label: "Conoce al equipo",
    approachTitle: <>Construido con cuidado.<br /><em>Terminado con propósito.</em></>,
    approach: "Combinamos nuestras raíces de taller artesanal con ingeniería avanzada. Cada miembro de nuestro equipo aporta dedicación a la calidad manual y dominio de las herramientas técnicas modernas.",
    contact: "Hablar con el equipo",
  }
};

export default function Team({ language = "en" }) {
  const copy = content[language];
  const members = teamMembers[language];
  const heroBackgroundImage = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c6d3877-47be-4ff1-8ddd-a18c36cf6d7d_1600w.jpg";

  return (
    <main className="team-page" lang={language}>
      <Navigation language={language} />
      
      <section className="team-hero">
        <div className="team-hero__content">
          <p className="team-kicker">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="team-hero__intro">{copy.intro}</p>
          <div className="team-hero__stats">
            <div className="team-hero__stat">
              <strong>100%</strong>
              <span>{language === 'es' ? 'Implicación Directa' : 'Direct Involvement'}</span>
            </div>
            <div className="team-hero__stat">
              <strong>1</strong>
              <span>{language === 'es' ? 'Taller Especializado' : 'Specialized Workshop'}</span>
            </div>
          </div>
        </div>
        <div className="team-hero__visual">
          <img src={heroBackgroundImage} alt="Workshop" className="team-hero__img-main" />
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c56b1b09-a3a6-4ca5-8b2c-ed1d5cebc3b2_800w.jpg" alt="Detail" className="team-hero__img-detail" />
        </div>
      </section>

      <section className="team-showcase-section" aria-labelledby="team-roster-title">
        <div className="team-showcase-header">
          <p className="team-kicker">{copy.label}</p>
          <h2 id="team-roster-title">The Makers</h2>
        </div>
        
        <div className="team-showcase-list">
          {members.map((member, index) => (
            <article className={`team-person team-person--${index % 2 === 0 ? 'left' : 'right'}`} key={member.name}>
              <div className="team-person__visuals">
                <div className="team-person__img-primary">
                  <img src={member.imgPrimary} alt={member.name} />
                </div>
                {member.imgSecondary && (
                  <div className="team-person__img-secondary">
                    <img src={member.imgSecondary} alt={`${member.name} working`} />
                  </div>
                )}
              </div>
              
              <div className="team-person__info">
                <div className="team-person__meta">
                  <span className="team-person__number">0{index + 1}</span>
                  <span className="team-person__role">{member.role}</span>
                </div>
                <h3 className="team-person__name">{member.name}</h3>
                <p className="team-person__desc">{member.desc}</p>
                <div className="team-person__tags">
                  {member.tags.map(tag => (
                    <span key={tag} className="team-person__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-approach">
        <div className="team-approach__photo" />
        <div className="team-approach__copy">
          <p className="team-kicker">BodhiNautic</p>
          <h2>{copy.approachTitle}</h2>
          <p>{copy.approach}</p>
          <a href="mailto:info@bodhinautic.com">{copy.contact} <span>→</span></a>
        </div>
      </section>
      
      <Footer language={language} />
    </main>
  );
}
