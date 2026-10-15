import React from 'react';

const steps = [
  {
    title: "Okres wypowiedzenia",
    description: "Jaki masz dokładnie okres wypowiedzenia. Musimy wspólnie ustalić i zweryfikować warunki czasowe w aktualnej umowie z operatorem.",
    icon: "solar:calendar-linear"
  },
  {
    title: "Kary umowne",
    description: "Czy w umowie są zapisane kary za wcześniejsze zerwanie współpracy. Określamy dokładne ryzyko finansowe szybkiego wyjścia.",
    icon: "solar:document-text-linear"
  },
  {
    title: "Baza klientów",
    description: "Czy obecny operator ma obowiązek wydać ci pełną bazę twoich dotychczasowych klientów po rozwiązaniu umowy.",
    icon: "solar:users-group-rounded-linear"
  },
  {
    title: "Własność domeny (Krytyczne)",
    description: "Czwarta i absolutnie najważniejsza sprawa. Do kogo formalnie należy obecny adres strony. Od tego zależy płynne przejście bez utraty stałych klientów.",
    icon: "solar:global-linear"
  }
];

const AuditChecklist = () => {
  return (
    <section className="scroll-mt-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          2. Audyt obecnej umowy i praw do domeny
        </h2>
        <p className="text-lg text-zinc-400">
          Zanim wbijemy pierwszą łopatę na budowie naszego systemu, musimy dokładnie zweryfikować twoją obecną sytuację prawną. Proszę cię o przygotowanie na następne spotkanie aktualnej umowy z operatorem. Musimy wspólnie ustalić cztery kluczowe rzeczy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 relative">
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent"></div>
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

        {steps.map((step, index) => (
          <div key={index} className="glass-panel rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors duration-300 group">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-zinc-500 transition-colors">
                <iconify-icon icon={step.icon} width="24" height="24"></iconify-icon>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded-md">Analiza {index + 1}</span>
                  <h3 className="text-xl font-medium text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuditChecklist;