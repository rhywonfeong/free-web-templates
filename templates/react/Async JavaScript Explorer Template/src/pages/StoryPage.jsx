import React, { useEffect, useState } from 'react';
import { GridBackground, SceneContainer } from '../components/ui/Layout';
import { Headline, MonoText } from '../components/ui/Typography';
import { StickerChip } from '../components/ui/StickerChip';
import { CodeWindow, ConsoleWindow } from '../components/ui/Windows';
import { Reveal } from '../components/ui/Reveal';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Helper component for colored code lines
const hl = (code, color) => `<span style="color: ${color}">${code}</span>`;
const keyword = (code) => hl(code, '#F71E6A'); // Pink
const string = (code) => hl(code, '#FECB24'); // Yellow
const func = (code) => hl(code, '#34F58A'); // Green

export default function StoryPage() {
  return (
    <div className="snap-y-container relative">
      <GridBackground />
      
      {/* Scene 01: Glitch to Clean */}
      <Scene01 />

      {/* Scene 02: Massive Ecosystem */}
      <Scene02 />

      {/* Scene 03: Eat the Internet */}
      <Scene03 />

      {/* Scene 04: Asynchronous (Split) */}
      <Scene04 />

      {/* Scene 05: Understand This First */}
      <Scene05 />

      {/* Scene 06: Clarity Mode */}
      <Scene06 />

      {/* Scene 07: One Task at a Time */}
      <Scene07 />

      {/* Scene 08: Single Threaded? */}
      <Scene08 />

      {/* Scene 09: 2 Tables 1 Waiter */}
      <Scene09 />

      {/* Scene 10: Take Order */}
      <Scene10 />

      {/* Scene 11: Blocked -> Free */}
      <Scene11 />

      {/* Scene 12: Same Cycle */}
      <Scene12 />

      {/* Scene 13: Synchronous Blocking */}
      <Scene13 />

      {/* Scene 14: Idle Waiting */}
      <Scene14 />

      {/* Scene 15: Code Example */}
      <Scene15 />

    </div>
  );
}

// SCENE IMPLEMENTATIONS

function Scene01() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <SceneContainer id="scene-01">
      <div ref={ref} className="flex flex-col items-center justify-center w-full h-full relative">
        <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
          <Headline className="text-[200px] text-accent-red animate-glitch opacity-80">MOST UGLY</Headline>
          <Headline className="text-[200px] text-accent-red animate-glitch opacity-80">LANGUAGE</Headline>
        </div>
        
        <div className={`absolute transition-all duration-1000 delay-500 flex flex-col items-center ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <CodeWindow 
            title="modern.js"
            className="w-[800px] h-[400px] mb-12 shadow-[0_0_100px_rgba(30,110,247,0.3)]"
            codeLines={[
              `${keyword('const')} ${func('evolve')} = ${keyword('async')} () => {`,
              `  ${keyword('await')} System.upgrade();`,
              `  ${keyword('return')} ${string('"Powerful"')};`,
              `};`
            ]}
          />
          <Reveal delay={1000} animation="fade-up">
            <StickerChip color="purple">From Ugly → Powerful</StickerChip>
          </Reveal>
        </div>
      </div>
    </SceneContainer>
  );
}

function Scene02() {
  return (
    <SceneContainer id="scene-02">
      <div className="flex flex-col items-center justify-between h-full py-20 w-full relative">
        <Reveal animation="fade-down" className="z-10">
          <StickerChip color="cyan">Massive Ecosystem</StickerChip>
        </Reveal>
        
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
          <Reveal animation="scale">
            <div className="w-[150px] h-[150px] bg-accent-blue rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(30,218,247,0.5)] z-10 relative">
               <iconify-icon icon="simple-icons:javascript" width="80" style={{color: 'white'}}></iconify-icon>
            </div>
          </Reveal>
          
          {/* Orbiting Icons */}
          <div className="absolute inset-0">
            <div className="orbit-item w-[80px] h-[80px] bg-ui rounded-xl flex items-center justify-center border border-gray-700">
               <iconify-icon icon="simple-icons:react" width="40" style={{color: '#61DAFB'}}></iconify-icon>
            </div>
            <div className="orbit-item orbit-delay-1 w-[80px] h-[80px] bg-ui rounded-xl flex items-center justify-center border border-gray-700">
               <iconify-icon icon="simple-icons:nodedotjs" width="40" style={{color: '#339933'}}></iconify-icon>
            </div>
            <div className="orbit-item orbit-delay-2 w-[80px] h-[80px] bg-ui rounded-xl flex items-center justify-center border border-gray-700">
               <iconify-icon icon="simple-icons:typescript" width="40" style={{color: '#3178C6'}}></iconify-icon>
            </div>
            <div className="orbit-item orbit-delay-3 w-[80px] h-[80px] bg-ui rounded-xl flex items-center justify-center border border-gray-700">
               <iconify-icon icon="simple-icons:vuedotjs" width="40" style={{color: '#4FC08D'}}></iconify-icon>
            </div>
            
            {/* Connecting Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full border-dashed" style={{ transform: 'scale(1.2)' }}></div>
          </div>
        </div>
        
        <Reveal animation="fade-up" delay={300}>
           <MonoText variant="body" className="text-center max-w-2xl text-gray-400">
             Connected nodes forming a global framework activity map.
           </MonoText>
        </Reveal>
      </div>
    </SceneContainer>
  );
}

function Scene03() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <SceneContainer id="scene-03">
      <div ref={ref} className="w-full h-full flex items-center justify-center relative bg-stage transition-colors duration-1000">
         {/* Background expanding JS logo overlay */}
         <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-[1500ms] ${isVisible ? 'scale-150 opacity-20' : 'scale-50 opacity-0'}`}>
            <iconify-icon icon="simple-icons:javascript" width="80vw" style={{color: '#FECB24'}}></iconify-icon>
         </div>

         <div className={`relative z-10 flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Headline variant="silver" className="text-[280px] leading-none mb-12 drop-shadow-2xl">
               BUT WHY?
            </Headline>
            <StickerChip color="pink">Eat The Entire Internet</StickerChip>
         </div>
         
         {/* Spotlight effect */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_70%)] pointer-events-none"></div>
      </div>
    </SceneContainer>
  );
}

function Scene04() {
  return (
    <SceneContainer id="scene-04">
      <div className="w-full h-full flex flex-col py-12">
        <Reveal animation="fade-down" className="mb-20">
           <Headline className="text-[140px]">Asynchronous JavaScript</Headline>
        </Reveal>
        
        <div className="flex-1 flex gap-12 w-full">
           {/* Left: Slow Sequential */}
           <Reveal animation="fade-up" delay={200} className="flex-1 bg-card rounded-[34px] border border-gray-800 p-12 flex flex-col">
              <MonoText variant="code" className="text-accent-red mb-12 block text-center">Sequential Task Flow</MonoText>
              <div className="flex flex-col gap-6 items-center flex-1 justify-center">
                 <div className="w-64 h-16 bg-ui rounded-xl border border-gray-600 flex items-center justify-center text-gray-400 font-mono">Task 1 (Slow)</div>
                 <iconify-icon icon="solar:arrow-down-linear" width="32" style={{color: '#DE4C36'}}></iconify-icon>
                 <div className="w-64 h-16 bg-ui rounded-xl border border-gray-600 flex items-center justify-center text-gray-600 font-mono">Task 2 (Waiting)</div>
                 <iconify-icon icon="solar:arrow-down-linear" width="32" style={{color: '#DE4C36', opacity: 0.5}}></iconify-icon>
                 <div className="w-64 h-16 bg-ui rounded-xl border border-gray-600 flex items-center justify-center text-gray-700 font-mono">Task 3 (Waiting)</div>
              </div>
           </Reveal>
           
           {/* Right: Fast Parallel */}
           <Reveal animation="fade-up" delay={400} className="flex-1 bg-card rounded-[34px] border border-gray-800 p-12 flex flex-col relative overflow-hidden">
              <MonoText variant="code" className="text-accent-green mb-12 block text-center">Parallel Async Flow</MonoText>
              <div className="flex gap-6 items-start flex-1 justify-center relative">
                 <div className="flex flex-col gap-4">
                    <div className="w-48 h-16 bg-indigo border border-accent-blue/30 rounded-xl flex items-center justify-center text-white font-mono shadow-[0_0_20px_rgba(30,110,247,0.2)]">Task 1</div>
                 </div>
                 <div className="flex flex-col gap-4 mt-8">
                    <div className="w-48 h-16 bg-indigo border border-accent-blue/30 rounded-xl flex items-center justify-center text-white font-mono shadow-[0_0_20px_rgba(30,110,247,0.2)]">Task 2</div>
                 </div>
                 <div className="flex flex-col gap-4 mt-16">
                    <div className="w-48 h-16 bg-indigo border border-accent-blue/30 rounded-xl flex items-center justify-center text-white font-mono shadow-[0_0_20px_rgba(30,110,247,0.2)]">Task 3</div>
                 </div>
                 
                 {/* Dynamic arrows abstract */}
                 <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-30">
                    <iconify-icon icon="solar:routing-3-linear" width="300" style={{color: '#34F58A'}}></iconify-icon>
                 </div>
              </div>
           </Reveal>
        </div>
      </div>
    </SceneContainer>
  );
}

function Scene05() {
  return (
    <SceneContainer id="scene-05">
       <div className="flex flex-col items-center">
          <Reveal animation="scale" className="mb-20">
             <StickerChip color="yellow">Understand This First</StickerChip>
          </Reveal>
          
          <div className="relative w-[1000px] h-[500px]">
             {/* Workspace Code */}
             <Reveal animation="fade-up" delay={200} className="absolute inset-0">
                <CodeWindow 
                  title="advanced-concept.js"
                  className="w-full h-full opacity-40 blur-[2px]"
                  codeLines={[
                    `// Complex architecture setup`,
                    `class AsyncEngine {`,
                    `  constructor() {`,
                    `    this.queue = [];`,
                    `    this.isProcessing = false;`,
                    `  }`,
                    `  async process() { ... }`,
                    `}`
                  ]}
                />
             </Reveal>
             
             {/* Glowing Brain Diagram over it */}
             <Reveal animation="fade-up" delay={500} className="absolute inset-0 flex items-center justify-center drop-shadow-[0_0_50px_rgba(128,30,247,0.6)]">
                 <iconify-icon icon="solar:brain-bold-duotone" width="300" style={{color: '#801EF7'}}></iconify-icon>
             </Reveal>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene06() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SceneContainer id="scene-06">
       <div ref={ref} className="w-full flex justify-center items-center relative">
          
          {/* Background chaotic icons */}
          <div className={`absolute inset-0 flex flex-wrap justify-center items-center gap-10 opacity-20 transition-all duration-1000 ${isVisible ? 'blur-xl' : 'blur-none'}`}>
             {Array.from({length: 20}).map((_, i) => (
                <iconify-icon key={i} icon="solar:question-circle-linear" width="60" style={{color: '#F2F2F2'}}></iconify-icon>
             ))}
          </div>

          <Reveal animation="fade-up" delay={300} className="z-10">
             <ConsoleWindow title="Clarity Mode" className="w-[700px] bg-ui/90 backdrop-blur-md">
                <div className="flex flex-col items-center justify-center py-10">
                   <div className="w-[120px] h-[120px] bg-accent-lime rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(209,246,90,0.4)] transform hover:scale-110 transition-transform">
                      <iconify-icon icon="solar:check-read-linear" width="70" style={{color: '#000'}}></iconify-icon>
                   </div>
                   <Headline className="text-[80px]">No More Confusion</Headline>
                </div>
             </ConsoleWindow>
          </Reveal>
       </div>
    </SceneContainer>
  );
}

function Scene07() {
  return (
    <SceneContainer id="scene-07">
       <div className="w-full flex flex-col items-center">
          <Reveal animation="fade-down" className="mb-24">
             <Headline variant="silver" className="text-[160px]">One Task at a Time</Headline>
          </Reveal>

          {/* Conveyor Belt Metaphor */}
          <Reveal animation="fade-up" delay={200} className="w-full max-w-[1200px] h-[300px] border-b-4 border-gray-700 relative overflow-hidden flex items-end pb-4">
             <div className="animate-conveyor flex gap-8 whitespace-nowrap absolute left-[100%]">
                {/* Active Task */}
                <div className="w-[200px] h-[200px] bg-accent-blue rounded-[24px] border-4 border-white/20 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(30,110,247,0.5)]">
                   <iconify-icon icon="solar:box-minimalistic-bold" width="80" style={{color: '#fff'}}></iconify-icon>
                   <MonoText variant="code" className="mt-4 font-bold">Processing</MonoText>
                </div>
                
                {/* Dimmed Tasks */}
                <div className="w-[200px] h-[200px] bg-ui rounded-[24px] border-4 border-gray-800 flex flex-col items-center justify-center opacity-50">
                   <iconify-icon icon="solar:box-minimalistic-linear" width="80" style={{color: '#666'}}></iconify-icon>
                   <MonoText variant="code" className="mt-4 text-gray-500">Waiting</MonoText>
                </div>
                <div className="w-[200px] h-[200px] bg-ui rounded-[24px] border-4 border-gray-800 flex flex-col items-center justify-center opacity-30">
                   <iconify-icon icon="solar:box-minimalistic-linear" width="80" style={{color: '#666'}}></iconify-icon>
                   <MonoText variant="code" className="mt-4 text-gray-600">Waiting</MonoText>
                </div>
                <div className="w-[200px] h-[200px] bg-ui rounded-[24px] border-4 border-gray-800 flex flex-col items-center justify-center opacity-10">
                   <iconify-icon icon="solar:box-minimalistic-linear" width="80" style={{color: '#666'}}></iconify-icon>
                </div>
             </div>
             
             {/* Machine processing point indicator */}
             <div className="absolute left-[20%] bottom-0 w-[240px] h-[20px] bg-accent-lime rounded-t-lg"></div>
          </Reveal>
       </div>
    </SceneContainer>
  );
}

function Scene08() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SceneContainer id="scene-08">
       <div ref={ref} className="w-full h-full flex flex-col items-center justify-center relative">
          <Headline className="text-[220px] mb-20 relative z-10 drop-shadow-2xl">SINGLE THREADED</Headline>
          
          <div className="relative w-full h-[300px] flex items-center justify-center">
             {/* The glowing thread */}
             <div className="absolute w-[80vw] h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent"></div>
             
             {/* Question mark forming */}
             <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} bg-black p-10 rounded-full border border-accent-cyan/30 shadow-[0_0_80px_rgba(30,218,247,0.3)]`}>
                <iconify-icon icon="solar:question-square-bold-duotone" width="150" style={{color: '#1EDAF7'}}></iconify-icon>
             </div>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene09() {
  return (
    <SceneContainer id="scene-09">
       <div className="flex flex-col items-center justify-center w-full">
          <Reveal animation="fade-down" className="mb-24">
             <StickerChip color="purple">2 Tables. 1 Waiter.</StickerChip>
          </Reveal>

          <div className="flex items-center justify-between w-full max-w-[1200px]">
             {/* Table 1 */}
             <Reveal animation="fade-up" delay={200} className="flex flex-col items-center">
                <div className="w-[200px] h-[200px] bg-card rounded-[30px] border border-gray-800 flex items-center justify-center mb-8 shadow-2xl">
                   <iconify-icon icon="solar:shop-2-bold-duotone" width="100" style={{color: '#F2F2F2'}}></iconify-icon>
                </div>
                <MonoText variant="code" className="text-gray-400">Table 1</MonoText>
             </Reveal>

             {/* Waiter */}
             <Reveal animation="scale" delay={400} className="flex flex-col items-center relative -translate-y-10">
                <div className="w-[160px] h-[160px] bg-accent-yellow rounded-full flex items-center justify-center mb-8 shadow-[0_0_60px_rgba(254,203,36,0.3)] border-4 border-black">
                   <iconify-icon icon="solar:user-hands-bold" width="80" style={{color: '#000'}}></iconify-icon>
                </div>
                <Headline className="text-[50px] tracking-normal">WAITER</Headline>
             </Reveal>

             {/* Table 2 */}
             <Reveal animation="fade-up" delay={600} className="flex flex-col items-center">
                <div className="w-[200px] h-[200px] bg-card rounded-[30px] border border-gray-800 flex items-center justify-center mb-8 shadow-2xl">
                   <iconify-icon icon="solar:shop-2-bold-duotone" width="100" style={{color: '#F2F2F2'}}></iconify-icon>
                </div>
                <MonoText variant="code" className="text-gray-400">Table 2</MonoText>
             </Reveal>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene10() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.8 });

  return (
    <SceneContainer id="scene-10">
       <div ref={ref} className="w-full flex flex-col items-center relative">
          <Headline className="text-[120px] mb-32">Take Order <span className="text-accent-pink">→</span> Kitchen</Headline>
          
          <div className="flex items-center justify-between w-full max-w-[1200px] relative">
             {/* Line path */}
             <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gray-800 border-dashed border-t-2 border-gray-600 -z-10"></div>

             {/* Table 1 */}
             <div className="w-[180px] h-[180px] bg-card rounded-2xl flex items-center justify-center z-10 border border-gray-700">
                <iconify-icon icon="solar:document-text-bold-duotone" width="80" style={{color: '#fff'}}></iconify-icon>
             </div>

             {/* Waiter moving */}
             <div className={`transition-all duration-1000 ease-in-out z-20 ${isVisible ? 'translate-x-[350px]' : 'translate-x-[-100px]'}`}>
                <div className="w-[120px] h-[120px] bg-accent-yellow rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(254,203,36,0.5)]">
                   <iconify-icon icon="solar:user-hands-bold" width="60" style={{color: '#000'}}></iconify-icon>
                </div>
             </div>

             {/* Kitchen */}
             <div className="w-[180px] h-[180px] bg-maroon border border-accent-rose/50 rounded-2xl flex items-center justify-center z-10">
                <iconify-icon icon="solar:fire-square-bold-duotone" width="80" style={{color: '#C34262'}}></iconify-icon>
             </div>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene11() {
  const { ref, isVisible } = useScrollReveal();
  const [stage, setStage] = useState('blocked');

  useEffect(() => {
    if (isVisible) {
      setStage('blocked');
      const timer = setTimeout(() => setStage('free'), 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <SceneContainer id="scene-11">
       <div ref={ref} className="flex flex-col items-center">
          <Reveal animation="fade-down" className="mb-20">
             <StickerChip color="red">Blocked → Then Free</StickerChip>
          </Reveal>

          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
             {/* Central UI */}
             <div className={`w-[300px] h-[300px] rounded-full flex items-center justify-center transition-all duration-500 border-8 ${stage === 'blocked' ? 'bg-ui border-accent-red' : 'bg-accent-green/20 border-accent-green'}`}>
                {stage === 'blocked' ? (
                  <iconify-icon icon="solar:clock-circle-bold-duotone" width="140" style={{color: '#DE4C36'}} class="animate-pulse"></iconify-icon>
                ) : (
                  <iconify-icon icon="solar:cup-hot-bold" width="140" style={{color: '#34F58A'}}></iconify-icon>
                )}
             </div>

             {/* Labels */}
             <div className="absolute -bottom-16 text-center">
                <MonoText variant="body" className={stage === 'blocked' ? 'text-accent-red' : 'text-accent-green'}>
                   {stage === 'blocked' ? 'Waiting for food...' : 'Serving Table 1!'}
                </MonoText>
             </div>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene12() {
  const { ref, isVisible } = useScrollReveal();
  const [morphed, setMorphed] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setMorphed(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setMorphed(false);
    }
  }, [isVisible]);

  return (
    <SceneContainer id="scene-12">
       <div ref={ref} className="w-full flex flex-col items-center relative">
          <Headline className="text-[180px] mb-20 z-20">SAME CYCLE</Headline>
          
          <div className="relative w-[800px] h-[500px] flex items-center justify-center overflow-hidden">
             {/* Waiter Loop (Before Morph) */}
             <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${morphed ? 'opacity-0' : 'opacity-100'}`}>
                 <div className="flex gap-10 opacity-50">
                    <div className="w-32 h-32 bg-ui rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center"><iconify-icon icon="solar:refresh-circle-linear" width="60"></iconify-icon></div>
                    <div className="w-32 h-32 bg-ui rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center"><iconify-icon icon="solar:refresh-circle-linear" width="60"></iconify-icon></div>
                 </div>
             </div>

             {/* Code Visualization (After Morph) */}
             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${morphed ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <CodeWindow 
                   title="synchronous.js"
                   className="w-full"
                   codeLines={[
                      `// The reality of JS thread`,
                      `${func('serveTable1')}();  ${string('// Blocks thread')}`,
                      `${func('serveTable2')}();  ${string('// Waits for Table 1')}`,
                      `${func('serveTable3')}();  ${string('// Waits for Table 2')}`,
                   ]}
                />
             </div>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene13() {
  return (
    <SceneContainer id="scene-13">
       <div className="w-full h-full flex flex-col items-center justify-center relative">
          {/* Background Red Overlay */}
          <div className="absolute inset-0 bg-accent-red/5 pointer-events-none mix-blend-screen z-0"></div>

          <Reveal animation="fade-down" className="z-10 mb-24">
             <Headline variant="silver" className="text-[200px] leading-[0.8] text-center">
                SYNCHRONOUS<br/>BLOCKING
             </Headline>
          </Reveal>
          
          <div className="flex gap-16 z-10">
             <Reveal animation="fade-up" delay={200}>
                <div className="bg-card border border-gray-800 p-8 rounded-[24px] flex flex-col items-center w-[300px]">
                   <iconify-icon icon="solar:users-group-two-rounded-bold-duotone" width="80" style={{color: '#F2F2F2', marginBottom: '20px'}}></iconify-icon>
                   <StickerChip color="pink" className="text-[32px] px-6 py-2">Users</StickerChip>
                   <MonoText variant="code" className="text-gray-500 mt-6 text-center">The Customers</MonoText>
                </div>
             </Reveal>

             <Reveal animation="fade-up" delay={400}>
                <div className="bg-card border border-accent-red/30 p-8 rounded-[24px] flex flex-col items-center w-[300px] shadow-[0_0_40px_rgba(222,76,54,0.1)]">
                   <iconify-icon icon="solar:route-bold-duotone" width="80" style={{color: '#DE4C36', marginBottom: '20px'}}></iconify-icon>
                   <StickerChip color="red" className="text-[32px] px-6 py-2">Thread</StickerChip>
                   <MonoText variant="code" className="text-gray-500 mt-6 text-center">The Waiter</MonoText>
                </div>
             </Reveal>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene14() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SceneContainer id="scene-14">
       <div className="flex flex-col items-center justify-center w-full">
          <Reveal animation="scale" className="mb-32">
             <StickerChip color="cyan">Idle Waiting</StickerChip>
          </Reveal>

          {/* Minimal Dark UI Progress */}
          <div ref={ref} className="w-[800px] bg-ui p-12 rounded-[34px] border border-gray-700/50 flex flex-col items-center shadow-2xl">
             <div className="flex items-center gap-6 mb-12">
                <iconify-icon icon="solar:hourglass-line-duotone" width="50" style={{color: '#1EDAF7'}} class="animate-spin" style={{ animationDuration: '3s' }}></iconify-icon>
                <MonoText variant="body" className="text-gray-300">Thread is idle while cooking...</MonoText>
             </div>
             
             {/* Progress bar container */}
             <div className={`w-full h-4 bg-black rounded-full overflow-hidden ${isVisible ? 'animate-fill-bar reveal-visible' : ''}`}>
                <div className="fill-element h-full bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full w-0"></div>
             </div>
          </div>
       </div>
    </SceneContainer>
  );
}

function Scene15() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });

  return (
    <SceneContainer id="scene-15">
       <div ref={ref} className="w-full h-full flex flex-col items-center justify-center">
          <Headline className="text-[140px] mb-16 text-accent-green">Code Example</Headline>
          
          <div className="relative w-[1000px] h-[600px]">
             {/* Stacked Ghost Windows behind */}
             <CodeWindow 
                title="example.js"
                className="absolute inset-0 w-full h-full opacity-20 scale-90 -translate-y-12"
                codeLines={[]}
             />
             <CodeWindow 
                title="example.js"
                className="absolute inset-0 w-full h-full opacity-50 scale-95 -translate-y-6"
                codeLines={[]}
             />
             
             {/* Front Window with Typing effect via visible trigger */}
             <div className="absolute inset-0 w-full h-full shadow-2xl z-10">
                <div className="bg-indigo rounded-[30px] border border-accent-blue/30 overflow-hidden h-full flex flex-col backdrop-blur-md">
                   <div className="h-[60px] border-b border-white/5 flex items-center px-6 relative">
                      <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#FF5F56]" />
                        <div className="w-4 h-4 rounded-full bg-[#FFBD2E]" />
                        <div className="w-4 h-4 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <MonoText variant="caption">synchronous-blocking.js</MonoText>
                      </div>
                   </div>
                   <div className="p-12 flex-grow font-mono text-[32px] leading-[1.8] text-gray-300">
                      {isVisible && (
                         <div className="typing-text">
                            <div><span className="text-[#F71E6A]">console</span>.log(<span className="text-[#FECB24]">'1. Take Order'</span>);</div>
                            <div className="mt-4"><span className="text-[#801EF7]">const</span> food = <span className="text-[#34F58A]">cookFoodSync</span>(); <span className="text-gray-500">// ⏳ BLOCKED HERE</span></div>
                            <div className="mt-4"><span className="text-[#F71E6A]">console</span>.log(<span className="text-[#FECB24]">'2. Serve Food: '</span> + food);</div>
                            <div className="mt-4"><span className="text-[#F71E6A]">console</span>.log(<span className="text-[#FECB24]">'3. Go to Table 2'</span>);</div>
                         </div>
                      )}
                      {!isVisible && <div className="text-gray-600 opacity-50">Waiting for interaction...</div>}
                   </div>
                </div>
             </div>
          </div>
       </div>
    </SceneContainer>
  );
}