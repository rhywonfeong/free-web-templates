import { useParams, Link } from 'react-router-dom'
import BlockImage from '../components/BlockImage'

// Detail page demonstrating functional routing and rebranding alignment
export default function Protocol() {
  const { id } = useParams()
  
  const protocolData = {
    origin: {
      title: "The Origin",
      desc: "Base state. Breaking down physical barriers to establish the raw foundation of capability.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80"
    },
    resistance: {
      title: "The Resistance",
      desc: "Applying force against opposition. The conscious decision to remain in tension.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80"
    },
    becoming: {
      title: "The Becoming",
      desc: "Synthesis of form and intent. The metamorphosis from potential to kinetic reality.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80"
    }
  }

  const data = protocolData[id] || protocolData.origin

  return (
    <div className="min-h-screen p-6 md:p-12 flex flex-col xl:flex-row gap-12 mt-10">
      <div className="w-full xl:w-1/3 flex flex-col">
        <Link to="/" className="inline-flex items-center gap-2 text-[#AAAAAA] hover:text-[#E8151B] font-barlow-condensed uppercase font-bold tracking-widest text-sm transition-colors mb-16 w-fit border border-[#2C2C2C] px-4 py-2">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
          Return to System
        </Link>
        
        <h1 className="font-barlow-condensed font-black text-[5rem] md:text-[8rem] leading-[0.85] tracking-tighter uppercase text-white mb-8">
          {data.title}
        </h1>
        
        <div className="w-24 h-1 bg-[#E8151B] mb-8"></div>
        
        <p className="font-barlow text-[#AAAAAA] text-lg leading-relaxed max-w-md">
          {data.desc}
        </p>
        
        <div className="mt-auto pt-12">
          <div className="font-barlow text-xs tracking-widest text-[#5A5A5A] uppercase flex gap-4">
            <span>Protocol: Active</span>
            <span>Phase: {id.toUpperCase()}</span>
          </div>
        </div>
      </div>
      
      <div className="w-full xl:w-2/3 h-[50vh] xl:h-[calc(100vh-12rem)] relative bg-[#111111] overflow-hidden group">
        <BlockImage 
          src={data.image} 
          alt={data.title}
          className="opacity-70 mix-blend-luminosity"
        />
        {/* Kinetic overlay effect */}
        <div className="absolute inset-0 bg-[#E8151B] mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
        <div className="absolute top-6 right-6 border border-[#E8151B] text-[#E8151B] font-barlow-condensed font-bold text-xs tracking-widest px-3 py-1 uppercase z-10 backdrop-blur-sm">
          Live Feed
        </div>
      </div>
    </div>
  )
}