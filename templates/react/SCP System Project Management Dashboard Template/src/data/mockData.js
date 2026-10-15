export const kpis = {
  emExecucao: 12,
  nfEmitida: 5,
  pagos: 28,
  parados: 3,
  metaMensal: 90000,
  faturadoAtual: 65400
};

export const projetos = [
  {
    id: '1',
    tco: '145.24',
    cliente: 'Petrobras S.A.',
    tipo: 'PROJ.CA+IA',
    engenheiro: 'Roberto',
    valor: 45000,
    status: 'em_execucao',
    prazo: 12, // dias
    dataAbertura: '2024-03-01'
  },
  {
    id: '2',
    tco: '146.24',
    cliente: 'Braskem',
    tipo: 'CAIA',
    engenheiro: 'Lucas',
    valor: 18500,
    status: 'faturado',
    prazo: 2,
    dataAbertura: '2024-03-10'
  },
  {
    id: '3',
    tco: '142.24',
    cliente: 'Bayer',
    tipo: 'CA',
    engenheiro: 'Roberto',
    valor: 12000,
    status: 'pago',
    prazo: -5,
    dataAbertura: '2024-02-15'
  },
  {
    id: '4',
    tco: '148.24',
    cliente: 'Raízen',
    tipo: 'PROJ.CA',
    engenheiro: 'Jana',
    valor: 28000,
    status: 'aberto',
    prazo: null,
    dataAbertura: '2024-03-20'
  }
];

export const faturas = [
  {
    id: 'INV-2024-089',
    empresa: 'Braskem Indústria',
    nf: 'NF-e 4592',
    valor: 18500,
    status: 'pendente',
    vencimento: '2024-04-15',
    avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80',
    items: [
      { desc: 'Classificação de Área - Fase 1', valor: 10000 },
      { desc: 'Inspeção Visual Inicial', valor: 8500 }
    ]
  },
  {
    id: 'INV-2024-088',
    empresa: 'Vale S.A.',
    nf: 'NF-e 4591',
    valor: 32000,
    status: 'pago',
    vencimento: '2024-03-28',
    avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=80',
    items: [
      { desc: 'Projeto Completo CA+IA', valor: 32000 }
    ]
  }
];

export const user = {
  name: 'Eduardo',
  role: 'GESTOR',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
};