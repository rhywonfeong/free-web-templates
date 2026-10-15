import React, { useState } from 'react';
import { clsx } from 'clsx';

// --- DESIGN TOKENS & UTILITIES ---
const COLORS = {
  bg: 'bg-[#F0F0F0]',
  fg: 'bg-[#121212]',
  red: 'bg-[#D02020]',
  blue: 'bg-[#1040C0]',
  yellow: 'bg-[#F0C020]',
  white: 'bg-white',
};

// --- REUSABLE COMPONENTS ---

const BauhausButton = ({ children, variant = 'primary', shape = 'square', className, onClick, type = 'button', fullWidth }) => {
  const baseClasses = "relative inline-flex items-center justify-center font-bold uppercase tracking-wider border-4 border-[#121212] transition-mechanical active:translate-x-[4px] active:translate-y-[4px] active:shadow-none px-8 py-4 text-lg md:text-xl";
  
  const variants = {
    primary: "bg-[#D02020] text-white shadow-[6px_6px_0px_0px_#121212] hover:bg-[#D02020]/90",
    secondary: "bg-[#1040C0] text-white shadow-[6px_6px_0px_0px_#121212] hover:bg-[#1040C0]/90",
    tertiary: "bg-[#F0C020] text-[#121212] shadow-[6px_6px_0px_0px_#121212] hover:bg-[#F0C020]/90",
    outline: "bg-white text-[#121212] shadow-[6px_6px_0px_0px_#121212] hover:bg-gray-100",
  };

  const shapes = {
    square: "rounded-none",
    pill: "rounded-full",
  };

  return (
    <button 
      type={type}
      className={clsx(baseClasses, variants[variant], shapes[shape], fullWidth && "w-full", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const BauhausCard = ({ children, decorationColor = 'red', decorationShape = 'circle', className }) => {
  const decorColors = {
    red: "bg-[#D02020]",
    blue: "bg-[#1040C0]",
    yellow: "bg-[#F0C020]",
    black: "bg-[#121212]"
  };

  const decorShapes = {
    circle: "rounded-full h-4 w-4",
    square: "rounded-none h-4 w-4",
    triangle: "clip-triangle h-4 w-4 bg-[#121212]" // Force black for triangle to ensure contrast if needed, or use color
  };

  return (
    <div className={clsx(
      "relative bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 md:p-8 transition-mechanical hover:-translate-y-2",
      className
    )}>
      {/* Decorative corner element */}
      <div className={clsx(
        "absolute top-4 right-4",
        decorShapes[decorationShape],
        decorationShape !== 'triangle' && decorColors[decorationColor]
      )} />
      {children}
    </div>
  );
};

// --- MODALS ---

const Modal = ({ isOpen, onClose, title, children, bgColor = 'bg-white' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/80 backdrop-blur-sm">
      <div 
        className={clsx(
          "relative w-full max-w-md border-4 border-[#121212] shadow-[12px_12px_0px_0px_#121212] flex flex-col max-h-[90vh]",
          bgColor
        )}
      >
        <div className="flex items-center justify-between p-4 border-b-4 border-[#121212] bg-white">
          <h2 className="text-2xl font-black uppercase tracking-tighter">{title}</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-[#D02020] hover:text-white transition-colors border-2 border-transparent hover:border-[#121212] rounded-none flex items-center justify-center"
          >
            <iconify-icon icon="solar:close-square-linear" width="32" height="32"></iconify-icon>
          </button>
        </div>
        <div className="p-6 overflow-y-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- SECTIONS ---

const Navbar = ({ onJoinClick, onCreateClick }) => (
  <nav className="flex items-center justify-between px-6 py-4 border-b-4 border-[#121212] bg-white sticky top-0 z-40">
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-[#D02020] border-2 border-[#121212] -mr-2 z-10 group-hover:-translate-y-1 transition-transform"></div>
        <div className="w-6 h-6 rounded-none bg-[#1040C0] border-2 border-[#121212] -mr-2 z-20 group-hover:translate-y-1 transition-transform"></div>
        <div className="w-6 h-6 clip-triangle bg-[#F0C020] border-2 border-[#121212] z-30 group-hover:-translate-y-1 transition-transform"></div>
      </div>
      <span className="ml-4 text-3xl font-black uppercase tracking-tighter">QUIZBLOK</span>
    </div>
    <div className="hidden md:flex gap-4">
      <button onClick={onJoinClick} className="font-bold uppercase tracking-widest text-lg hover:text-[#1040C0] transition-colors">Join</button>
      <button onClick={onCreateClick} className="font-bold uppercase tracking-widest text-lg hover:text-[#D02020] transition-colors">Create</button>
    </div>
    <button className="md:hidden">
      <iconify-icon icon="solar:hamburger-menu-linear" width="32" height="32"></iconify-icon>
    </button>
  </nav>
);

const Hero = ({ onJoinClick, onCreateClick }) => (
  <section className="relative flex flex-col lg:flex-row border-b-4 border-[#121212] min-h-[85vh]">
    {/* Left Content */}
    <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-[#F0F0F0] lg:border-r-4 border-[#121212] z-10">
      <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
        The <span className="text-[#D02020]">Construct</span><br/>
        Of <span className="text-[#1040C0]">Trivia</span>
      </h1>
      <p className="text-xl md:text-2xl font-medium max-w-xl mb-12 border-l-4 border-[#F0C020] pl-6 py-2">
        A constructivist approach to multiplayer quiz battles. Pure geometry. Pure competition. Build your room, challenge your rivals.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <BauhausButton variant="primary" onClick={onCreateClick}>
          Create Room
          <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="24" height="24"></iconify-icon>
        </BauhausButton>
        <BauhausButton variant="tertiary" onClick={onJoinClick}>
          Join Existing
        </BauhausButton>
      </div>
    </div>
    
    {/* Right Geometric Composition */}
    <div className="flex-1 bg-[#1040C0] relative overflow-hidden min-h-[400px] flex items-center justify-center pattern-dots-white border-t-4 lg:border-t-0 border-[#121212]">
      {/* Abstract composition */}
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        {/* Massive Yellow Circle */}
        <div className="absolute top-10 right-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[#F0C020] border-4 border-[#121212] shadow-[16px_16px_0px_0px_#121212] animate-[spin_60s_linear_infinite]" />
        
        {/* Rotated Red Square */}
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-none bg-[#D02020] border-4 border-[#121212] shadow-[16px_16px_0px_0px_#121212] rotate-45 flex items-center justify-center">
           <div className="w-[100px] h-[100px] rounded-full bg-[#121212]" />
        </div>

        {/* Floating White Triangle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] clip-triangle bg-white border-4 border-[#121212] z-10 flex items-end justify-center pb-8 shadow-[8px_8px_0px_0px_#121212]">
          <span className="font-black text-6xl tracking-tighter text-[#121212]">Q</span>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Construct', desc: 'Define your parameters. Categories, timers, and difficulty levels.', color: 'text-[#D02020]' },
    { num: '02', title: 'Connect', desc: 'Distribute your unique geometric room code to your challengers.', color: 'text-[#1040C0]' },
    { num: '03', title: 'Compete', desc: 'Answer with precision. Speed and accuracy define the victor.', color: 'text-[#F0C020]' },
  ];

  return (
    <section className="bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24 border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center">
          The <span className="text-[#F0C020]">Process</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-[#444] z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-8 bg-white text-[#121212] flex items-center justify-center font-black text-4xl border-4 border-[#121212] shadow-[8px_8px_0px_0px_#F0C020] rotate-12 hover:rotate-0 transition-mechanical">
                <span className={clsx("-rotate-12 hover:rotate-0 transition-mechanical block", step.color)}>
                  {step.num}
                </span>
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-lg text-gray-300 font-medium max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'Real-Time Sync', icon: 'solar:bolt-linear', color: 'red', shape: 'circle' },
    { title: 'Global Leaderboards', icon: 'solar:cup-star-linear', color: 'blue', shape: 'square' },
    { title: 'Infinite Categories', icon: 'solar:layers-minimalistic-linear', color: 'yellow', shape: 'triangle' },
    { title: 'Custom Rulesets', icon: 'solar:tuning-square-2-linear', color: 'black', shape: 'square' },
    { title: 'Instant Rewards', icon: 'solar:gift-linear', color: 'red', shape: 'circle' },
    { title: 'Cross-Platform', icon: 'solar:devices-linear', color: 'blue', shape: 'square' },
  ];

  return (
    <section className="bg-[#F0F0F0] py-24 px-6 md:px-12 lg:px-24 border-b-4 border-[#121212] pattern-dots">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter bg-white inline-block p-4 border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212]">
            Platform<br/>Specs
          </h2>
          <p className="text-xl font-bold uppercase tracking-widest max-w-sm text-right bg-[#1040C0] text-white p-4 border-4 border-[#121212]">
            Engineered for optimal competitive performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <BauhausCard key={i} decorationColor={f.color} decorationShape={f.shape} className="group">
              <div className="w-16 h-16 border-4 border-[#121212] flex items-center justify-center mb-6 bg-[#F0F0F0] group-hover:bg-[#F0C020] transition-colors">
                <iconify-icon icon={f.icon} width="32" height="32"></iconify-icon>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{f.title}</h3>
              <p className="font-medium text-gray-700">Standardized modules for maximum functionality and minimal latency.</p>
            </BauhausCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-[#F0C020] border-b-4 border-[#121212] flex flex-col md:flex-row">
    <div className="flex-1 p-12 md:p-24 border-b-4 md:border-b-0 md:border-r-4 border-[#121212] flex flex-col items-center justify-center text-center">
      <div className="text-7xl md:text-8xl font-black tracking-tighter mb-4 text-[#D02020]">1.2M</div>
      <div className="text-2xl font-bold uppercase tracking-widest border-t-4 border-[#121212] pt-4 w-full">Matches Played</div>
    </div>
    <div className="flex-1 p-12 md:p-24 border-b-4 md:border-b-0 md:border-r-4 border-[#121212] flex flex-col items-center justify-center text-center bg-white">
      <div className="text-7xl md:text-8xl font-black tracking-tighter mb-4 text-[#1040C0]">500K</div>
      <div className="text-2xl font-bold uppercase tracking-widest border-t-4 border-[#121212] pt-4 w-full">Active Users</div>
    </div>
    <div className="flex-1 p-12 md:p-24 flex flex-col items-center justify-center text-center">
      <div className="text-7xl md:text-8xl font-black tracking-tighter mb-4 text-[#121212]">10K+</div>
      <div className="text-2xl font-bold uppercase tracking-widest border-t-4 border-[#121212] pt-4 w-full">Question Banks</div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { quote: "The brutalist efficiency of this platform makes every quiz feel like a high-stakes architectural review.", author: "Walter G.", role: "Trivia Master" },
    { quote: "Finally, a platform that strips away the unnecessary gradients and focuses purely on form and function.", author: "Marianne B.", role: "Top Player" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-b-4 border-[#121212] bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center">
          User <span className="text-[#1040C0]">Feedback</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((r, i) => (
            <div key={i} className="relative border-4 border-[#121212] p-8 md:p-12 shadow-[8px_8px_0px_0px_#121212] bg-[#F0F0F0]">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#D02020] border-4 border-[#121212] flex items-center justify-center">
                <iconify-icon icon="solar:quote-right-bold" width="24" height="24" className="text-white"></iconify-icon>
              </div>
              <p className="text-2xl font-bold leading-tight mb-8 uppercase tracking-tight">"{r.quote}"</p>
              <div className="flex items-center gap-4 border-t-4 border-[#121212] pt-6">
                <div className="w-16 h-16 rounded-full border-4 border-[#121212] overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <img src={`https://images.unsplash.com/photo-${i === 0 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?w=200&q=80`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-black text-xl uppercase tracking-wider">{r.author}</div>
                  <div className="font-bold text-[#D02020] uppercase">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "How do I initiate a room?", a: "Click 'Create Room', define your geometric parameters, select a category, and generate your unique entry code." },
    { q: "Is registration mandatory?", a: "Negative. Guest access is permitted for joining. Room creation requires a verified identity." },
    { q: "What is the maximum capacity?", a: "Rooms dynamically scale to support up to 100 simultaneous connections without structural integrity loss." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-b-4 border-[#121212] bg-[#D02020]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-white text-center">
          Inquiries
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={clsx(
                "border-4 border-[#121212] transition-mechanical overflow-hidden",
                isOpen ? "bg-white shadow-[8px_8px_0px_0px_#121212]" : "bg-[#F0F0F0] hover:bg-white"
              )}>
                <button 
                  className="w-full p-6 md:p-8 flex items-center justify-between font-black text-xl md:text-3xl uppercase tracking-tight text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {faq.q}
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    width="32" 
                    height="32"
                    className={clsx("transition-transform duration-300", isOpen && "rotate-180")}
                  ></iconify-icon>
                </button>
                <div className={clsx(
                  "overflow-hidden transition-all duration-300 bg-[#FFF9C4]",
                  isOpen ? "max-h-48 border-t-4 border-[#121212]" : "max-h-0"
                )}>
                  <p className="p-6 md:p-8 text-lg font-medium">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#121212] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-[#D02020] border-2 border-white"></div>
          <span className="text-4xl font-black uppercase tracking-tighter">QUIZBLOK</span>
        </div>
        <p className="text-gray-400 font-medium max-w-sm mb-8">
          Constructing the future of competitive trivia through pure geometry and rigid rulesets.
        </p>
      </div>
      <div>
        <h4 className="font-bold uppercase tracking-widest mb-6 border-b-2 border-[#444] pb-2 inline-block">System</h4>
        <ul className="space-y-4 text-gray-400 font-medium">
          <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Server Status</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold uppercase tracking-widest mb-6 border-b-2 border-[#444] pb-2 inline-block">Legal</h4>
        <ul className="space-y-4 text-gray-400 font-medium">
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Protocol</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t-4 border-[#444] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-medium">
      <p>© {new Date().getFullYear()} QUIZBLOK CONSTRUCT.</p>
      <div className="flex gap-4">
        <iconify-icon icon="simple-icons:x" width="24" height="24" className="hover:text-white cursor-pointer"></iconify-icon>
        <iconify-icon icon="simple-icons:github" width="24" height="24" className="hover:text-white cursor-pointer"></iconify-icon>
        <iconify-icon icon="simple-icons:discord" width="24" height="24" className="hover:text-white cursor-pointer"></iconify-icon>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [joinCode, setJoinCode] = useState('');

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (joinCode.length > 0) {
      alert(`Initiating connection to room: ${joinCode}`);
      setIsJoinModalOpen(false);
      setJoinCode('');
    }
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    alert('Constructing new room parameters...');
    setIsCreateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Navbar 
        onJoinClick={() => setIsJoinModalOpen(true)} 
        onCreateClick={() => setIsCreateModalOpen(true)} 
      />
      
      <main>
        <Hero 
          onJoinClick={() => setIsJoinModalOpen(true)} 
          onCreateClick={() => setIsCreateModalOpen(true)} 
        />
        <HowItWorks />
        <Features />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* JOIN MODAL */}
      <Modal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
        title="Connect to Room"
        bgColor="bg-[#F0C020]"
      >
        <form onSubmit={handleJoinSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block font-bold uppercase tracking-widest mb-2">Room Coordinate Code</label>
            <input 
              type="text" 
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              placeholder="e.g. ALPHA-99"
              className="w-full p-4 border-4 border-[#121212] text-xl font-black uppercase tracking-widest focus:outline-none focus:bg-[#F0F0F0] transition-colors"
              required
            />
          </div>
          <BauhausButton type="submit" variant="primary" fullWidth>
            Establish Connection
          </BauhausButton>
        </form>
      </Modal>

      {/* CREATE MODAL */}
      <Modal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
        title="Construct Room"
        bgColor="bg-[#1040C0]"
      >
        <form onSubmit={handleCreateSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block font-bold uppercase tracking-widest mb-2 text-white">Database Selection</label>
            <select className="w-full p-4 border-4 border-[#121212] text-lg font-bold focus:outline-none bg-white appearance-none rounded-none cursor-pointer">
              <option>General Knowledge</option>
              <option>Science & Technology</option>
              <option>Architecture & Design</option>
              <option>Historical Events</option>
            </select>
          </div>
          <div>
            <label className="block font-bold uppercase tracking-widest mb-2 text-white">Participant Limit</label>
            <div className="flex gap-4">
              {[10, 50, 100].map(num => (
                <label key={num} className="flex-1 cursor-pointer">
                  <input type="radio" name="limit" className="peer sr-only" defaultChecked={num === 10} />
                  <div className="border-4 border-[#121212] p-4 text-center font-black text-xl bg-white peer-checked:bg-[#F0C020] peer-checked:shadow-[4px_4px_0px_0px_#121212] transition-all">
                    {num}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <BauhausButton type="submit" variant="tertiary" fullWidth className="mt-4">
            Initialize Room
          </BauhausButton>
        </form>
      </Modal>
    </div>
  );
}