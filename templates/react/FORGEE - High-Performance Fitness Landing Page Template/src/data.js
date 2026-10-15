export const navLinks = [
  { label: 'Espaço', href: '#espaco' },
  { label: 'Programas', href: '#programas' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Planos', href: '#planos' },
];

export const heroStats = [
  { label: 'Horário de funcionamento', value: '05H–23H' },
  { label: 'Dias da semana', value: '7 DIAS' },
  { label: 'Área', value: '1.800M²' },
  { label: 'Base de alunos', value: '+1.200 ALUNOS' },
  { label: 'Ano de fundação', value: 'DESDE 2018' },
];

export const pillars = [
  {
    title: 'Intensidade',
    desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.',
    icon: 'solar:fire-bold'
  },
  {
    title: 'Precisão',
    desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.',
    icon: 'solar:target-bold'
  },
  {
    title: 'Controle',
    desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.',
    icon: 'solar:slider-vertical-bold'
  }
];

export const aboutStats = [
  { value: '+1.200', label: 'Alunos ativos' },
  { value: '94%', label: 'Retenção 6 meses' },
  { value: '8 anos', label: 'Em operação' },
  { value: '1.8K', label: 'M² Dedicados' },
];

export const testimonials = [
  {
    name: 'Rafael M.',
    role: 'Engenheiro · Aluno há 3 anos',
    text: '"Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80'
  },
  {
    name: 'Juliana T.',
    role: 'Professora · Aluna há 2 anos',
    text: '"Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."',
    img: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=800&q=80'
  },
  {
    name: 'Lucas O.',
    role: 'Empresário · Aluno há 4 anos',
    text: '"A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."',
    img: 'https://images.unsplash.com/photo-1567598508481-65985588e295?w=800&q=80'
  }
];

export const equipmentCategories = [
  {
    name: 'CARDIO & CONDITIONING',
    items: [
      { name: 'Assault Bike Concept2', qty: '8 UNIDADES' },
      { name: 'Remo Concept2 Model D', qty: '6 UNIDADES' },
      { name: 'SkiErg Concept2', qty: '4 UNIDADES' },
      { name: 'Esteiras NordicTrack com inclinação negativa', qty: '—' },
      { name: 'Cordas de batalha 15m e 20m', qty: '—' }
    ]
  },
  { name: 'FORÇA LIVRE', items: [] },
  { name: 'MÁQUINAS', items: [] },
  { name: 'FUNCIONAL & MOBILITY', items: [] },
  { name: 'INFRAESTRUTURA', items: [] },
];

export const programs = [
  {
    id: 'strength',
    name: 'FORGEE STRENGTH',
    desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.',
    target: 'Iniciantes a avançados em hipertrofia e força.',
    freq: '3–5× por semana.',
    highlight: false
  },
  {
    id: 'conditioning',
    name: 'FORGEE CONDITIONING',
    desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.',
    target: 'Condicionamento, perda de gordura.',
    schedule: '06H · 07H · 12H · 18H · 19H30',
    highlight: true
  },
  {
    id: 'mobility',
    name: 'FORGEE MOBILITY',
    desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.',
    highlight: false
  },
  {
    id: 'personal',
    name: 'PERSONAL TRAINING',
    desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.',
    highlight: false
  }
];

export const plans = [
  {
    name: 'LIVRE',
    price: '149',
    features: [
      'Acesso ilimitado 05H–23H',
      'Avaliação física de entrada',
      'Planilha de treino inicial',
      'App FORGEE'
    ],
    popular: false
  },
  {
    name: 'PLUS',
    price: '229',
    features: [
      'Tudo do Livre +',
      '2 sessões de Personal/mês',
      '1 aula Conditioning/semana',
      'Revisão planilha a cada 4 semanas',
      'Acesso ao Mobility'
    ],
    popular: true
  },
  {
    name: 'ELITE',
    price: '389',
    features: [
      'Tudo do Plus +',
      '4 sessões Personal/mês',
      'Acesso ilimitado às classes',
      'Bioimpedância mensal',
      'WhatsApp com coach dedicado'
    ],
    popular: false
  }
];

export const team = [
  { init: 'RF', name: 'RODRIGO FARIAS', role: 'Head Coach', cref: 'CREF 045821-G/SP' },
  { init: 'AL', name: 'ANA LUÍSA', role: 'Conditioning', cref: 'CREF 078342-G/SP' },
  { init: 'BT', name: 'BRUNO T.', role: 'Mobility & Rehab', cref: 'CREF 091205-G/SP' },
  { init: 'CD', name: 'CAMILA D.', role: 'Personal Trainer', cref: 'CREF 063417-G/SP' }
];

export const faqs = [
  {
    q: 'Preciso ter experiência?',
    a: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.'
  },
  {
    q: 'Posso treinar sozinho?',
    a: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.'
  },
  {
    q: 'Como funciona o cancelamento?',
    a: 'Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.'
  },
  {
    q: 'Posso visitar antes de assinar?',
    a: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.'
  }
];