import React, { useRef, useEffect, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId;

    const updateOpacity = () => {
      if (video.duration > 0) {
        const time = video.currentTime;
        const duration = video.duration;
        const fadeDuration = 0.5;

        if (time < fadeDuration) {
          // Fade in over the first 0.5s
          setOpacity(time / fadeDuration);
        } else if (duration - time < fadeDuration) {
          // Fade out over the last 0.5s
          setOpacity((duration - time) / fadeDuration);
        } else {
          // Fully visible in the middle
          setOpacity(1);
        }
      }
      animationFrameId = requestAnimationFrame(updateOpacity);
    };

    const handlePlay = () => {
      animationFrameId = requestAnimationFrame(updateOpacity);
    };

    const handlePause = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleEnded = () => {
      // Immediate reset on end to trigger loop correctly
      setOpacity(0);
      cancelAnimationFrame(animationFrameId);
      
      // Wait 100ms then replay from 0
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(e => console.error("Auto-play prevented", e));
        }
      }, 100);
    };

    // Attach listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    // Initial check if video is already playing
    if (!video.paused) {
      handlePlay();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
      autoPlay
      muted
      playsInline
      className="w-full h-full object-cover"
      style={{ 
        opacity, 
        // Using inline style for hardware acceleration on opacity changes
        willChange: 'opacity',
        transition: 'none' // Handled strictly by JS for exact precision
      }}
    />
  );
}