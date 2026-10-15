import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';

const FAQ = () => {
  const faqItems = [
    {
      title: "Preciso ter experiência?",
      content: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual e o treino é prescrito para o seu momento atual."
    },
    {
      title: "Posso treinar sozinho?",
      content: "Sim. A maioria dos alunos treina de forma autônoma com a planilha elaborada. Nossos coaches estão disponíveis no salão para dúvidas pontuais e correções, mas não ficam 'em cima' se você não quiser."
    },
    {
      title: "Como funciona o cancelamento?",
      content: "Basta avisar com 30 dias de antecedência. O plano será encerrado no próximo ciclo de faturamento. Sem multas escondidas, sem justificativa obrigatória. Você fica pelo resultado, não pelo contrato."
    },
    {
      title: "Posso visitar antes de assinar?",
      content: "Sim — e nós incentivamos que você faça isso. Agende uma visita pelo site. Você conhece a estrutura, conversa com um coach sobre seus objetivos e pode fazer uma aula experimental gratuita."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#111111] border-t border-subtle">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="max-w-3xl mx-auto">
          <SectionTitle 
            eyebrow="Dúvidas"
            title="PERGUNTAS E"
            titleAccent="RESPOSTAS."
            align="center"
          />
          <div className="mt-12">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;