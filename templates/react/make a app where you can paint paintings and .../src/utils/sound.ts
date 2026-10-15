const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return null;
  return new AudioContext();
};

let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = getAudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playCashSound = () => {
  const ctx = initAudio();
  if (!ctx) return;
  
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc1.type = 'sine';
  osc2.type = 'triangle';

  osc1.frequency.setValueAtTime(1200, ctx.currentTime);
  osc1.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.1);
  
  osc2.frequency.setValueAtTime(2000, ctx.currentTime + 0.1);
  osc2.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.3);

  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

  osc1.connect(gainNode);
  osc2.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc1.start();
  osc2.start(ctx.currentTime + 0.1);
  osc1.stop(ctx.currentTime + 0.4);
  osc2.stop(ctx.currentTime + 0.4);
};

export const playPopSound = () => {
  const ctx = initAudio();
  if (!ctx) return;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
  
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start();
  osc.stop(ctx.currentTime + 0.1);
};

export const playSuccessSound = () => {
  const ctx = initAudio();
  if (!ctx) return;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(440, ctx.currentTime); 
  osc.frequency.setValueAtTime(554.37, ctx.currentTime + 0.1); 
  osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.2); 
  
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
  gain.gain.setValueAtTime(0.2, ctx.currentTime + 0.25);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start();
  osc.stop(ctx.currentTime + 0.4);
};

export const playSwishSound = () => {
  const ctx = initAudio();
  if (!ctx) return;
  
  const bufferSize = ctx.sampleRate * 0.5;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noiseSource = ctx.createBufferSource();
  noiseSource.buffer = buffer;
  
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(500, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.2);
  filter.Q.value = 1;
  
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
  
  noiseSource.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  
  noiseSource.start();
};
