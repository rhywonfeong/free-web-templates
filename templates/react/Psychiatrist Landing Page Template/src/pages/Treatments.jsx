import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Treatments() {
  const treatments = [
    {
      id: "ansiedade",
      title: "Transtornos de Ansiedade",
      desc: "Abordagem para Transtorno de Ansiedade Generalizada (TAG), Síndrome do Pânico, Fobias e Ansiedade Social. O tratamento visa reduzir os sintomas autonômicos e cognitivos, devolvendo a funcionalidade ao paciente.",
      icon: "solar:graph-up-linear"
    },
    {
      id: "depressao",
      title: "Depressão",
      desc: "Tratamento de episódios depressivos leves, moderados e graves. Utilizamos estratégias farmacológicas e orientações de estilo de vida para remissão dos sintomas e prevenção de recaídas.",
      icon: "solar:cloud-water-linear"
    },
    {
      id: "tdah",
      title: "TDAH em Adultos",
      desc: "Avaliação criteriosa para diagnóstico do Transtorno de Déficit de Atenção e Hiperatividade na fase adulta. Intervenções voltadas para a melhora do foco, organização e regulação emocional.",
      icon: "solar:bolt-linear"
    },
    {
      id: "bipolar",
      title: "Transtorno Bipolar",
      desc: "Manejo estabilizador do humor para pacientes com Transtorno Bipolar tipo I e II. O objetivo principal é prevenir as flutuações extremas (mania/hipomania e depressão) e garantir qualidade de vida a longo prazo.",
      icon: "solar:infinity-linear"
    },
    {
      id: "insonia",
      title: "Insônia e Transtornos do Sono",
      desc: "Investigação das causas subjacentes da dificuldade de dormir. Tratamento focado na higiene do sono e intervenção medicamentosa racional, evitando a dependência de sedativos.",
      icon: "solar:moon-sleep-linear"
    },
    {
      id: "burnout",
      title: "Síndrome de Burnout",
      desc: "Acolhimento para quadros de esgotamento profissional crônico. Avaliação da necessidade de afastamento, reestruturação da rotina e tratamento de comorbidades como ansiedade e depressão.",
      icon: "solar:battery-charge-minimalistic-linear"
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
            Tratamentos e Especialidades
          </h1>
          <p className="text-lg text-slate-600">
            Cada quadro clínico é único. O plano de tratamento é construído após uma avaliação minuciosa e sempre alinhado aos objetivos e valores do paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item) => (
            <Card key={item.id} className="flex flex-col h-full bg-white">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <iconify-icon icon={item.icon} width="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-white rounded-3xl border border-slate-200 shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Não encontrou o que procurava?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            A psiquiatria abrange um espectro vasto de condições. Se você está em sofrimento mental, independente de um diagnóstico fechado, a avaliação médica inicial é o primeiro passo adequado.
          </p>
          <Button as={Link} to="/contato" size="lg">
            Agendar Avaliação
          </Button>
        </div>

      </div>
    </div>
  );
}