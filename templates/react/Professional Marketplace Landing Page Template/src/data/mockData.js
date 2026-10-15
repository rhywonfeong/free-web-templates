export const CATEGORIES = [
  { id: 'design', name: 'Design & Creative', icon: 'solar:pen-new-square-linear' },
  { id: 'dev', name: 'Development', icon: 'solar:code-square-linear' },
  { id: 'home', name: 'Home Services', icon: 'solar:home-angle-linear' },
  { id: 'marketing', name: 'Marketing', icon: 'solar:graph-up-linear' },
  { id: 'consulting', name: 'Consulting', icon: 'solar:users-group-two-rounded-linear' },
  { id: 'writing', name: 'Writing', icon: 'solar:document-text-linear' },
];

export const PROFESSIONALS = [
  {
    id: 'p1',
    name: 'Sarah Jenkins',
    category: 'design',
    title: 'Senior UX/UI Designer',
    rating: 4.9,
    reviews: 124,
    hourlyRate: 85,
    location: 'Remote',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    bio: 'Crafting digital experiences with a focus on human-centered design. Over 8 years of experience helping startups build their products.',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Testing'],
    portfolio: [
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80'
    ]
  },
  {
    id: 'p2',
    name: 'Marcus Chen',
    category: 'dev',
    title: 'Full Stack React Developer',
    rating: 4.8,
    reviews: 89,
    hourlyRate: 95,
    location: 'San Francisco, CA',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    bio: 'Specializing in React, Node.js, and modern web architectures. I build scalable applications from zero to production.',
    skills: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    portfolio: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    ]
  },
  {
    id: 'p3',
    name: 'Elena Rodriguez',
    category: 'home',
    title: 'Master Electrician',
    rating: 5.0,
    reviews: 210,
    hourlyRate: 120,
    location: 'Austin, TX',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    bio: 'Licensed master electrician with 15 years serving the Austin area. Residential and commercial troubleshooting, upgrades, and installs.',
    skills: ['Residential Wiring', 'Panel Upgrades', 'Smart Home Setup'],
    portfolio: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
    ]
  },
  {
    id: 'p4',
    name: 'David Kim',
    category: 'marketing',
    title: 'Growth Marketing Consultant',
    rating: 4.7,
    reviews: 56,
    hourlyRate: 110,
    location: 'Remote',
    verified: false,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    bio: 'I help B2B SaaS companies scale their organic and paid acquisition channels efficiently.',
    skills: ['SEO', 'Google Ads', 'Content Strategy'],
    portfolio: []
  }
];

export const JOBS = [
  {
    id: 'j1',
    title: 'Need a complete redesign of our e-commerce site',
    company: 'TechStyle Co.',
    budget: '$5k - $10k',
    type: 'Project',
    category: 'design',
    postedAt: '2 hours ago',
    description: 'Looking for an experienced UX/UI designer to revamp our entire Shopify storefront. We need a modern, clean aesthetic with high conversion focus.'
  },
  {
    id: 'j2',
    title: 'React Native Developer for Fitness App MVP',
    company: 'FitStartup',
    budget: '$80/hr',
    type: 'Hourly',
    category: 'dev',
    postedAt: '5 hours ago',
    description: 'We have wireframes ready. Need a solid React Native dev to build out the MVP within 2 months.'
  },
  {
    id: 'j3',
    title: 'Electrical Panel Upgrade for Older Home',
    company: 'Private Owner',
    budget: '$1.5k - $2k',
    type: 'Fixed Price',
    category: 'home',
    postedAt: '1 day ago',
    description: 'Need to upgrade a 100A panel to 200A. Permit required. Must be licensed and insured.'
  }
];

export const CHAT_HISTORY = [
  { id: 1, sender: 'them', text: 'Hi Sarah, are you available for a new design project next month?', time: '10:30 AM' },
  { id: 2, sender: 'me', text: 'Hi! Yes, I currently have availability starting the 15th. What kind of project is it?', time: '10:45 AM' },
  { id: 3, sender: 'them', text: 'We are building a fintech dashboard and need help with the initial wireframes and design system.', time: '11:00 AM' },
  { id: 4, sender: 'me', text: 'That sounds right up my alley. Do you have a project brief or requirements document I could look over?', time: '11:05 AM' },
];