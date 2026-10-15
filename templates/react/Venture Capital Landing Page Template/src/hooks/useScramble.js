import { useState, useEffect, useRef } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export function useScramble(text, speed = 30) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovering) {
      let iter = 0;
      clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
        setDisplayText((current) => 
          text.split("").map((letter, index) => {
            if (index < iter) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );

        if (iter >= text.length) clearInterval(intervalRef.current);
        iter += 1 / 3;
      }, speed);
    } else {
      clearInterval(intervalRef.current);
      setDisplayText(text);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovering, text, speed]);

  return {
    displayText,
    handlers: {
      onMouseEnter: () => setIsHovering(true),
      onMouseLeave: () => setIsHovering(false)
    }
  };
}