'use client';

import React, { useState, useEffect, useRef } from 'react';

const rotatingWords = ['Interaction', 'Imagination', 'Emotion', 'World', 'Future'];

// Approximate character widths for calculating underline length
const getWordWidth = (word: string) => {
  // Rough estimate: each character is about 0.55em at this font size
  return word.length * 0.55;
};

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [phase, setPhase] = useState<'showing' | 'hiding' | 'transitioning'>('showing');
  const [textOpacity, setTextOpacity] = useState(1);
  const [underlineWidth, setUnderlineWidth] = useState(getWordWidth(rotatingWords[0]));
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'showing') {
      // Show text for 2 seconds
      timeout = setTimeout(() => {
        setPhase('hiding');
      }, 2000);
    } else if (phase === 'hiding') {
      // Fade out text
      setTextOpacity(0);
      timeout = setTimeout(() => {
        setPhase('transitioning');
      }, 500);
    } else if (phase === 'transitioning') {
      // Change underline width to next word
      const next = (currentIndex + 1) % rotatingWords.length;
      setNextIndex(next);
      setUnderlineWidth(getWordWidth(rotatingWords[next]));
      
      timeout = setTimeout(() => {
        // Update to next word and fade in
        setCurrentIndex(next);
        setTextOpacity(1);
        setPhase('showing');
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [phase, currentIndex]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-20 relative overflow-hidden">
      <div className="z-10 mt-20 md:mt-32 w-full max-w-[95vw] mx-auto">
        <h2 className="text-[5.5vw] md:text-[6vw] lg:text-[5.5vw] font-bold leading-[1] tracking-tighter break-keep animate-fade-in-up flex items-baseline gap-x-[0.5vw] whitespace-nowrap">
          <span>WINDUP</span>
          <span className="font-medium">the</span>
          <span className="relative inline-block">
            <span 
              ref={textRef}
              className="transition-opacity duration-500"
              style={{ opacity: textOpacity }}
            >
              {phase === 'transitioning' ? rotatingWords[nextIndex] : rotatingWords[currentIndex]}
            </span>
            {/* Animated underline */}
            <span 
              className="absolute bottom-0 left-0 h-[0.15vw] bg-current transition-all duration-500 ease-in-out"
              style={{ width: `${underlineWidth}em` }}
            ></span>
          </span>
        </h2>
      </div>
      
      {/* Single Line Marquee - Full Width Below WINDUP */}
      <div className="absolute left-0 w-full overflow-hidden opacity-[0.07] pointer-events-none" style={{ top: 'calc(15vw + 8rem)', width: '100vw' }}>
        <div className="whitespace-nowrap animate-marquee flex items-center">
          <span className="text-[8vw] md:text-[7vw] lg:text-[6vw] font-black uppercase mx-4">Interactions That Can Make the World Better</span>
          <span className="text-[8vw] md:text-[7vw] lg:text-[6vw] font-black uppercase mx-4">Interactions That Can Make the World Better</span>
        </div>
      </div>

      <div className="z-10 flex flex-col items-end justify-end w-full max-w-[90vw] mx-auto gap-10 mt-20 md:mt-0 text-right">
        <div className="animate-fade-in-up [animation-delay:400ms]">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-2 opacity-50">
            Our Mission
          </p>
          <p className="text-xl md:text-3xl font-medium">
            세상을 바꾸는<br />
            움직임
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-reveal [animation-delay:800ms]">
        <div className="w-[1px] h-16 bg-current opacity-30 mx-auto mb-2"></div>
        <span className="text-[10px] tracking-widest uppercase opacity-50">Scroll</span>
      </div>
    </section>
  );
}
