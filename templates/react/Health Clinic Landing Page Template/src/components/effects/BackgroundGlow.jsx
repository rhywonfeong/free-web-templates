import React from 'react';

const BackgroundGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Top Left Soft Glow */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.8) 0%, rgba(255, 255, 255, 0) 70%)' }}
      ></div>
      
      {/* Center Right Sage/Muted Green Glow (The 'circle' from sketch) */}
      <div 
        className="absolute top-[20%] right-[5%] w-[45vw] h-[45vw] rounded-full mix-blend-multiply filter blur-[90px] opacity-40 animate-float-delayed"
        style={{ background: 'radial-gradient(circle, rgba(110, 161, 137, 0.4) 0%, rgba(255, 255, 255, 0) 70%)' }}
      ></div>

      {/* Bottom Center Warm Glow */}
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-float delay-200"
        style={{ background: 'radial-gradient(circle, rgba(253, 230, 234, 0.8) 0%, rgba(255, 255, 255, 0) 70%)' }}
      ></div>
    </div>
  );
};

export default BackgroundGlow;