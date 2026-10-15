import { motion } from 'framer-motion';

export default function FeaturedTalent() {
  const talents = [
    {
      name: 'Sarah Jenkins',
      title: 'Senior Product Designer',
      rate: '$120/hr',
      rating: '4.9',
      reviews: 128,
      skills: ['UI/UX', 'Design Systems', 'Framer'],
      badge: 'Top 1%',
      availability: 'Available soon',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80'
    },
    {
      name: 'Michael Chen',
      title: 'Full Stack Engineer',
      rate: '$150/hr',
      rating: '5.0',
      reviews: 94,
      skills: ['React', 'Node.js', 'PostgreSQL'],
      badge: 'Available Now',
      availability: 'Ready to work',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
    },
    {
      name: 'Elena Rodriguez',
      title: 'Brand Strategist',
      rate: '$110/hr',
      rating: '4.8',
      reviews: 67,
      skills: ['Positioning', 'Copywriting', 'GTM'],
      badge: 'Highly Rated',
      availability: 'Part-time',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
    },
    {
      name: 'David Kim',
      title: 'Web3 Developer',
      rate: '$180/hr',
      rating: '5.0',
      reviews: 42,
      skills: ['Solidity', 'Smart Contracts', 'Rust'],
      badge: 'Expert',
      availability: 'Ready to work',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#098178]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-100 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#098178] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Elite Network
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-6 leading-tight">
              World-class talent, <br className="hidden md:block" />ready to engage.
            </h2>
            <p className="text-zinc-500 text-lg">
              Stop settling for average. Connect with verified industry leaders who have proven track records at top-tier companies.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors shrink-0">
            View directory
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 hover:border-[#098178]/40 hover:shadow-2xl hover:shadow-[#098178]/10 transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={talent.image} 
                  alt={talent.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                  <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-zinc-900 shadow-sm flex items-center gap-1.5">
                    <span className="text-[#098178]">
                      <iconify-icon icon="solar:verified-check-bold"></iconify-icon>
                    </span>
                    {talent.badge}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-zinc-900 shadow-sm cursor-pointer hover:bg-[#098178] hover:text-white transition-colors">
                    <iconify-icon icon="solar:bookmark-linear" width="16"></iconify-icon>
                  </div>
                </div>

                {/* Bottom Gradient & Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-1">{talent.name}</h3>
                  <p className="text-zinc-300 text-sm font-medium">{talent.title}</p>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow bg-white relative z-20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:star-bold" className="text-[#098178] text-lg"></iconify-icon>
                    <span className="font-semibold text-zinc-900">{talent.rating}</span>
                    <span className="text-zinc-400 text-sm">({talent.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                    <span className={`w-1.5 h-1.5 rounded-full ${talent.availability === 'Ready to work' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                    {talent.availability}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {talent.skills.map(skill => (
                    <span key={skill} className="bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-xs px-3 py-1.5 rounded-lg font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 font-medium mb-0.5">Hourly Rate</span>
                    <span className="font-semibold text-zinc-950 text-lg">{talent.rate}</span>
                  </div>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-900 group-hover:bg-[#098178] group-hover:border-[#098178] group-hover:text-white transition-all duration-300">
                    <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-950 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors w-full justify-center">
            View directory
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
          </button>
        </div>
      </div>
    </section>
  );
}