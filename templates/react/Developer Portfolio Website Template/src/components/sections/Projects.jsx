import React from 'react';

const projects = [
  {
    title: "Liquid Signals",
    subtitle: "ML Trading Platform",
    description: "Полноценная платформа аналитики криптовалют. ML-ядро на Python для поиска корреляций, WebSockets для мгновенного обновления цен, PWA-фронтенд и Telegram бот для доставки сигналов. Интеграции с PocketOption и Binance.",
    icon: "solar:graph-up-bold-duotone",
    accent: "bg-blue-500",
    tags: ["Python", "ML", "PWA", "WebSockets"]
  },
  {
    title: "Автоматизация Агро-бизнеса",
    subtitle: "Enterprise Solution",
    description: "Комплексная система Telegram-ботов для оптимизации процессов в сельскохозяйственном секторе. Разработана надежная система трекинга, обработки данных и система важных уведомлений для менеджмента.",
    icon: "solar:leaf-bold-duotone",
    accent: "bg-emerald-500",
    tags: ["Telegram API", "Architecture", "Python"]
  },
  {
    title: "Боты для Influencers",
    subtitle: "High-load Monetization",
    description: "Высоконагруженные боты для кастомной монетизации (Telegram Stars) и взаимодействия с десятками тысяч пользователей. Акцент на бесперебойную работу при пиковых наплывах трафика.",
    icon: "solar:star-fall-bold-duotone",
    accent: "bg-purple-500",
    tags: ["High-load", "Payments", "FastAPI"]
  },
  {
    title: "Бот-инфраструктура",
    subtitle: "EdTech Solution",
    description: "Интерактивная система взаимодействия студентов и преподавателей для колледжа. Интеграция расписаний, удобная база знаний и система уведомлений для академического состава.",
    icon: "solar:diploma-bold-duotone",
    accent: "bg-orange-500",
    tags: ["Education", "Integrations", "UX/UI"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Избранные Проекты</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="group glass-panel rounded-[2rem] p-8 relative overflow-hidden flex flex-col h-full"
          >
            {/* Hover Glow Effect */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 ${project.accent}/10 rounded-full blur-[80px] group-hover:${project.accent}/20 transition-colors duration-500`}></div>
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500`}>
                <iconify-icon icon={project.icon} class="text-3xl text-white"></iconify-icon>
              </div>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <iconify-icon icon="solar:arrow-right-up-linear" class="text-xl text-slate-300"></iconify-icon>
              </a>
            </div>

            <div className="relative z-10 flex-grow">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">{project.title}</h3>
              <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-4`}>
                {project.subtitle}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 relative z-10">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}