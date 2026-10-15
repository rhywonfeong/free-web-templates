import SectionHeading from '../ui/SectionHeading';

const About = () => {
  const differentials = [
    {
      icon: "solar:test-tube-minimalistic-bold",
      title: "Metodologia Baseada em Evidência",
      desc: "Cada protocolo aplicado na FORGELAB é fundamentado em ciência do esporte. Nada de modismo. Nada de achismo. Apenas o que funciona."
    },
    {
      icon: "solar:bolt-bold",
      title: "Ambiente de Alta Performance",
      desc: "Estrutura pensada para reduzir fricção e maximizar foco. Você entra, treina e sai melhor do que chegou — sempre."
    },
    {
      icon: "solar:user-bold",
      title: "Acompanhamento Individual",
      desc: "Mesmo em grupo, você nunca é um número. Cada aluno tem seu plano, sua evolução rastreada e um coach que conhece sua história."
    }
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#141414] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <div>
            <SectionHeading 
              supertitle="Sobre a ForgeLab"
              title="Construída para quem leva o corpo a sério."
            />
          </div>
          <div className="flex flex-col gap-6 text-lg text-neutral-300 leading-relaxed font-medium">
            <p>
              A FORGELAB nasceu de uma convicção simples: ambientes mediocres produzem resultados mediocres. Por isso, construímos uma academia onde cada detalhe foi pensado para elevar a performance — do ar condicionado de precisão ao piso de alta absorção de impacto.
            </p>
            <p className="text-neutral-400 text-base">
              Não somos uma academia convencional. Somos um sistema. Um ecossistema de treinamento onde coaches certificados, tecnologia de avaliação e uma comunidade de alta performance convergem para entregar o que nenhum app, nenhuma academia comum e nenhum vídeo no YouTube consegue: <strong className="text-white">resultados reais, mensuráveis e sustentáveis.</strong>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, idx) => (
            <div key={idx} className="bg-[#1E1E1E] p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-[#E84E1B]/30 transition-colors group">
              <div className="w-14 h-14 bg-[#0D0D0D] rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#E84E1B] transition-colors">
                <iconify-icon icon={item.icon} class="text-2xl text-[#E84E1B] group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;