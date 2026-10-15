import React from 'react';

const techCategories = [
  {
    title: "Backend & ML",
    icon: "solar:server-square-bold-duotone",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    skills: [
      { name: "Python", icon: "simple-icons:python" },
      { name: "FastAPI", icon: "simple-icons:fastapi" },
      { name: "Scikit-Learn", icon: "simple-icons:scikitlearn" },
      { name: "Pandas", icon: "simple-icons:pandas" },
      { name: "NumPy", icon: "simple-icons:numpy" },
    ]
  },
  {
    title: "Frontend & UI",
    icon: "solar:monitor-smartphone-bold-duotone",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    skills: [
      { name: "HTML5 & CSS3", icon: "simple-icons:html5" },
      { name: "React", icon: "simple-icons:react" },
      { name: "TailwindCSS", icon: "simple-icons:tailwindcss" },
      { name: "PWA", icon: "simple-icons:pwa" },
    ]
  },
  {
    title: "Architecture",
    icon: "solar:code-square-bold-duotone",
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "border-purple-500/20",
    skills: [
      { name: "WebSockets", icon: "solar:feed-bold" },
      { name: "REST API", icon: "solar:api-bold" },
      { name: "TG Bot API", icon: "simple-icons:telegram" },
    ]
  },
  {
    title: "Infrastructure",
    icon: "solar:hard-drive-bold-duotone",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20",
    skills: [
      { name: "Linux VPS", icon: "simple-icons:linux" },
      { name: "Git", icon: "simple-icons:git" },
      { name: "Systemd", icon: "solar:settings-bold" },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="scroll-mt-32">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Технологический Стек</h2>
        <p className="text-slate-400 text-center max-w-2xl">Инструменты, которые я использую для создания надежных, быстрых и масштабируемых продуктов.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((category, idx) => (
          <div 
            key={idx} 
            className={`glass-panel p-8 rounded-3xl transition-all duration-300 group hover:border-white/20`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} border ${category.border} flex items-center justify-center`}>
                <iconify-icon icon={category.icon} class="text-2xl text-white"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default"
                >
                  <iconify-icon icon={skill.icon} class="text-slate-300"></iconify-icon>
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}