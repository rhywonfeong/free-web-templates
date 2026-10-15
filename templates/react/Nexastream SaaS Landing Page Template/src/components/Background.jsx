import React from 'react';
import UnicornScene from 'unicornstudio-react';

const Background = () => {
  return (
    <div 
      className="aura-background-component fixed top-0 w-full h-screen -z-10" 
      data-alpha-mask="80" 
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', 
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' 
      }}
    >
      <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
        <div className="absolute w-full h-full left-0 top-0 -z-10">
          <UnicornScene projectId="NMlvqnkICwYYJ6lYb064" sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js" />
        </div>
      </div>
    </div>
  );
};

export default Background;