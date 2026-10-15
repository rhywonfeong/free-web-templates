import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
  const features = [
    {
      title: "Avaliação Completa",
      desc: "Diagnóstico preciso considerando aspectos biológicos, psicológicos e sociais do paciente.",
      icon: "solar:clipboard-list-linear"
    },
    {
      title: "Medicina Baseada em Evidências",
      desc: "Condutas terapêuticas pautadas nos protocolos científicos internacionais mais recentes.",
      icon: "solar:test-tube-minimalistic-linear"
    },
    {
      title: "Acolhimento Humanizado",
      desc: "Um espaço seguro, livre de julgamentos, onde sua história é ouvida com real empatia.",
      icon: "solar:heart-angle-linear"
    }
  ];

  const mainTreatments = [
    { title: "Ansiedade", icon: "solar:graph-up-linear" },
    { title: "Depressão", icon: "solar:cloud-water-linear" },
    { title: "TDAH", icon: "solar:bolt-linear" },
    { title: "Burnout", icon: "solar:battery-charge-minimalistic-linear" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 md:pt-24 pb-24 md:pb-32">
        {/* Abstract background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-100/50 blur-[100px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Atendimento Presencial e Telemedicina
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                Saúde Mental com <span className="text-teal-700 bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent">Ciência</span> e Acolhimento.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Atendimento psiquiátrico focado na sua qualidade de vida. Construímos juntos um plano de tratamento individualizado e respaldado pelas melhores evidências médicas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as={Link} to="/contato" size="lg" icon="solar:calendar-linear">
                  Agendar Consulta
                </Button>
                <Button as={Link} to="/sobre" variant="outline" size="lg">
                  Conhecer o Doutor
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] md:aspect-[3/2] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ambiente de consultório calmo e acolhedor" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                    <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Especialista Registrado</p>
                    <p className="text-xs text-slate-500">RQE e CRM Ativos</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Methodology/Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-3">Nossa Abordagem</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Um compromisso com o seu bem-estar integral.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="flex flex-col items-start text-left bg-slate-50/50">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6">
                  <iconify-icon icon={feature.icon} width="28"></iconify-icon>
                </div>
                <h4 className="text-xl font-medium text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Treatments Area */}
      <section className="py-24 bg-slate-900 text-white rounded-t-[3rem] mt-[-3rem] relative z-10 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Áreas de Atuação Clínicas</h2>
              <p className="text-slate-400 text-lg">
                Foco no diagnóstico preciso e tratamento eficaz dos principais transtornos que afetam a saúde mental na atualidade.
              </p>
            </div>
            <Button as={Link} to="/tratamentos" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white border-white/20">
              Ver Todos os Tratamentos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainTreatments.map((treatment, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors duration-300">
                <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <iconify-icon icon={treatment.icon} width="24"></iconify-icon>
                </div>
                <h4 className="text-lg font-medium">{treatment.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <iconify-icon icon="solar:chat-square-call-linear" width="48" className="text-teal-200 mb-6"></iconify-icon>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">
            Dê o primeiro passo para cuidar de você.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            O tratamento psiquiátrico não precisa ser um tabu. É um cuidado com a sua biologia, sua história e seu futuro.
          </p>
          <Button as={Link} to="/contato" size="lg" className="px-10 py-4 text-lg">
            Solicitar Agendamento
          </Button>
        </div>
      </section>
    </div>
  );
}