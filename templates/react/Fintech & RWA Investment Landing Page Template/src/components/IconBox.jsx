import React from 'react';

export const IconBox = ({ icon, className = "" }) => (
  <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ${className}`}>
    <iconify-icon icon={icon} width="18" height="18"></iconify-icon>
  </div>
);

export const ActionIconBox = ({ icon, className = "" }) => (
  <div className={`w-7 h-7 rounded-full bg-white/15 flex items-center justify-center ${className}`}>
    <iconify-icon icon={icon} width="16" height="16"></iconify-icon>
  </div>
);