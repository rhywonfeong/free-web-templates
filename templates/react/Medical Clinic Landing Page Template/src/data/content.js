export const clinicInfo = {
  name: "Clínica Harmonia",
  established: 2006,
  address: "Praça Santo Agostinho, 70",
  neighborhood: "Liberdade, São Paulo - SP",
  near: "Próximo ao Metrô Vergueiro",
  hours: "Segunda a Sexta, das 08:00 às 18:00",
  phone: "(11) 99999-9999",
  bio: "Atendimento multidisciplinar, individualizado e humanizado. O paciente acima da doença, promovendo bem-estar em um ambiente acolhedor.",
  stats: [
    { label: "Anos de história", value: "18+" },
    { label: "Especialidades", value: "6" },
    { label: "Corpo Clínico", value: "6" }
  ]
};

export const doctors = [
  {
    id: 1,
    name: "Dr. Paulo C. Romero",
    specialty: "Neurocirurgia",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
  },
  {
    id: 2,
    name: "Dr. Renato L. Romero",
    specialty: "Neurologia",
    image: "https://images.unsplash.com/photo-1537368910025-7028a4115132?w=800&q=80"
  },
  {
    id: 3,
    name: "Dra. Mayara Batistella",
    specialty: "Dermatologia",
    image: "https://images.unsplash.com/photo-1594824432258-294967341e41?w=800&q=80"
  },
  {
    id: 4,
    name: "Dr. Alex J. Schmidt",
    specialty: "Ortopedia",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80"
  },
  {
    id: 5,
    name: "Dra. Raissa L. Schmidt",
    specialty: "Acupuntura",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
  },
  {
    id: 6,
    name: "Dra. Ludma de Moura",
    specialty: "Psiquiatria",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=800&q=80"
  }
];

export const specialties = [
  { id: 'neuro', name: "Neurocirurgia", icon: "solar:brain-linear" },
  { id: 'neurology', name: "Neurologia", icon: "solar:pulse-linear" },
  { id: 'derm', name: "Dermatologia", icon: "solar:leaf-linear" },
  { id: 'acup', name: "Acupuntura", icon: "solar:magic-stick-3-linear" },
  { id: 'psych', name: "Psiquiatria", icon: "solar:user-speak-rounded-linear" },
  { id: 'ortho', name: "Ortopedia", icon: "solar:bone-linear" }
];