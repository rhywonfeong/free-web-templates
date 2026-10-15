import Reveal from './Reveal';

const skills = [
  {
    title: "Video Editing",
    description: "Seamless cuts, precise pacing, and cinematic color grading that tells a story.",
    icon: "solar:video-frame-linear",
    delay: 0
  },
  {
    title: "Thumbnail Design",
    description: "High-conversion, visually striking imagery designed to capture attention instantly.",
    icon: "solar:gallery-wide-linear",
    delay: 100
  },
  {
    title: "Content Creation",
    description: "End-to-end strategy and execution for digital platforms with a cohesive aesthetic.",
    icon: "solar:pen-new-square-linear",
    delay: 200
  },
  {
    title: "Creative Direction",
    description: "Guiding the overall vibe, ensuring brand consistency across all visual touchpoints.",
    icon: "solar:magic-stick-3-linear",
    delay: 300
  }
];

export default function Skills() {
  return (
    <section id="work" className="py-24 relative bg-black overflow-hidden">
      
      {/* Background ambient liquid shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-800/20 mix-blend-screen blur-[100px] animate-liquid animate-float pointer-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 drop-shadow-lg">Areas of Expertise</h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-zinc-400/50 to-transparent mx-auto"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={index} delay={skill.delay}>
              <div className="group relative h-full liquid-glass rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] overflow-hidden glass-shine-effect">
                
                {/* Interactive Hover Glow Blob inside card */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-300/10 blur-[30px] rounded-full -translate-y-1/2 translate-x-1/2 animate-liquid"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl liquid-glass flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                    <iconify-icon icon={skill.icon} class="text-3xl text-zinc-200"></iconify-icon>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4 tracking-tight drop-shadow-md">{skill.title}</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}