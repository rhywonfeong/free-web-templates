import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

export default function About() {
  return (
    <section id="quem-somos" className="py-24 bg-[#0B0D14]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <SectionLabel>Quem Somos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            A KMAS <br/> Artes Marciais
          </h2>
          
          <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
            <p>
              Somos uma organização brasileira empenhada desde 1995 no ensino de artes marciais coreanas tradicionais, estruturada na vasta experiência de nossos renomados Mestres e Instrutores.
            </p>
            <p>
              O nosso objetivo vai além da prática desportiva. Buscamos o caminho do autoconhecimento, da disciplina e o desenvolvimento pessoal de cada um de nossos alunos através do tripé:
            </p>
            <ul className="text-white font-semibold space-y-2 pl-4 border-l-2 border-[#E8193C]">
              <li>— Saúde física.</li>
              <li>— Saúde mental.</li>
              <li>— Defesa pessoal eficaz.</li>
            </ul>
            <p className="pt-4 text-[#6B7280] text-base">
              Na KMAS cultivamos um ambiente de respeito mútuo, onde honramos nossos pais e professores como pilares de sabedoria e guia. Acreditamos que a superação é uma jornada contínua, trilhada com dedicação em cada movimento, em cada técnica executada e em cada desafio.
            </p>
          </div>

          <blockquote className="mt-10 p-6 bg-[#12151F] border border-[#2B3045] rounded-sm relative">
            <iconify-icon icon="solar:quote-left-bold" className="absolute top-4 left-4 text-4xl text-[#2B3045] opacity-50"></iconify-icon>
            <p className="text-white italic relative z-10 text-lg mb-4">
              "A ideia de ensinar artes marciais coreanas com respeito e honestidade, sem deixar para trás as tradições — esse é o sonho que move a KMAS desde 1995."
            </p>
            <footer className="text-[#D4A017] font-bold text-sm tracking-widest uppercase">
              — Mestre Ivo Rodrigo Heck, Fundador
            </footer>
          </blockquote>

          <div className="mt-10 flex gap-6 items-center">
            <Button variant="outline">Conhecer nossa história</Button>
          </div>
        </div>

        <div className="relative h-[600px] hidden lg:block">
          <div className="absolute inset-0 bg-[#E8193C] translate-x-4 translate-y-4"></div>
          <img 
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80" 
            alt="Mestre ensinando aluno" 
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          />
        </div>

      </div>
    </section>
  );
}