import React from 'react';
import Badge from '../components/Badge';

export default function Protocol() {
  const steps = [
    {
      num: "01",
      title: "Avaliação de Entrada",
      desc: "Avaliação física completa, composição corporal, análise postural e conversa sobre histórico e objetivos."
    },
    {
      num: "02",
      title: "Prescrição Personalizada",
      desc: "Montagem do protocolo individual com fases, ciclos de periodização e metas mensuráveis."
    },
    {
      num: "03",
      title: "Execução Supervisionada",
      desc: "Treinos acompanhados por coaches especializados com foco em técnica, segurança e progressão."
    },
    {
      num: "04",
      title: "Monitoramento Contínuo",
      desc: "App APEX para registro de treinos, métricas de performance e comunicação direta com o coach."
    },
    {
      num: "05",
      title: "Reavaliação Periódica",
      desc: "Check-ins mensais para ajuste do protocolo conforme evolução e novos objetivos."
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#100F0F] relative overflow-hidden">
      {/* Decorative large numbers */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[300px] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none">
        MÉTODO
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div className="sticky top-32 self-start">
          <Badge className="mb-6" dotColor="#FF8040">Metodologia</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
            O Protocolo <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">APEX</span>
          </h2>
          <p className="text-xl font-medium text-[#C8F135] mb-6">
            Não vendemos treinos. Desenvolvemos performance.
          </p>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-8">
            <p>
              O Protocolo APEX é um sistema de treinamento proprietário desenvolvido ao longo de 10 anos de prática clínica e esportiva. Ele integra avaliação funcional, periodização inteligente e monitoramento contínuo para garantir que cada sessão tenha um propósito claro e mensurável.
            </p>
            <p>
              Diferente de planos genéricos, o Protocolo adapta variáveis como volume, intensidade e recuperação à realidade individual de cada aluno — considerando histórico, objetivos, agenda e resposta ao treinamento.
            </p>
          </div>
          <blockquote className="border-l-4 border-[#FF8040] pl-6 py-2 text-lg italic text-white/90">
            "Cada treino tem um porquê. Cada resultado tem um método."
          </blockquote>
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-8 rounded-[24px] border border-white/5 relative overflow-hidden group hover:bg-[#202020] transition-colors">
              <div className="absolute top-0 right-0 p-6 text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors leading-none tracking-tighter">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-bold text-[#C8F135] bg-[#C8F135]/10 px-3 py-1 rounded-full">Etapa {step.num}</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed pr-12">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}