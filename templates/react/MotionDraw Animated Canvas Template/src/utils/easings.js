// A collection of mathematical easing functions for animation playback
// t represents progress from 0 to 1

export const easings = {
  linear: (t) => t,
  
  // Smooth acceleration and deceleration
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  
  // Starts fast, ends slow
  easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  
  // Overshoots and settles
  easeOutBack: (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  
  // Spring/Elastic effect
  spring: (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    const p = 0.3;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  },
  
  // Bouncing effect
  bounceOut: (t) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  }
};

export const easingOptions = [
  { id: 'linear', name: 'Linear', icon: 'solar:ruler-linear', desc: 'Constant speed' },
  { id: 'easeInOutCubic', name: 'Smooth', icon: 'solar:water-waves-linear', desc: 'Graceful start & end' },
  { id: 'easeOutExpo', name: 'Fast Out', icon: 'solar:bolt-linear', desc: 'Snappy stop' },
  { id: 'easeOutBack', name: 'Overshoot', icon: 'solar:target-linear', desc: 'Goes past end, returns' },
  { id: 'spring', name: 'Spring', icon: 'solar:spring-linear', desc: 'Elastic wobble' },
  { id: 'bounceOut', name: 'Bounce', icon: 'solar:basketball-linear', desc: 'Gravity drops' },
];