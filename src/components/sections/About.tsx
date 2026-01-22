'use client';

import React, { useState, useEffect } from 'react';

const rotatingWords = ['Interaction', 'Imagination', 'Emotion', 'World', 'Future'];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<'drawing' | 'waiting' | 'erasing'>('drawing');
  const [key, setKey] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (animationPhase === 'drawing') {
      // Wait for draw animation (2s) then move to waiting
      timeout = setTimeout(() => {
        setAnimationPhase('waiting');
      }, 2000);
    } else if (animationPhase === 'waiting') {
      // Wait 1.5s then start erasing
      timeout = setTimeout(() => {
        setAnimationPhase('erasing');
      }, 1500);
    } else if (animationPhase === 'erasing') {
      // Wait for erase animation (1s) then move to next word
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setKey((prev) => prev + 1);
        setAnimationPhase('drawing');
      }, 1000);
    }
    
    return () => clearTimeout(timeout);
  }, [animationPhase]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-20 relative overflow-hidden">
      <div className="z-10 mt-20 md:mt-32 w-full max-w-[90vw] mx-auto">
        <h2 className="text-[15vh] md:text-[18vh] lg:text-[20vh] font-bold leading-[0.9] tracking-tighter break-keep animate-fade-in-up flex items-baseline gap-x-4 whitespace-nowrap">
          <span>WINDUP</span>
          <span className="text-[10vh] md:text-[12vh] lg:text-[14vh] font-medium">the</span>
        </h2>
        <div className="animate-fade-in-up [animation-delay:200ms] mt-2">
          <div className="relative inline-block min-w-[45vw] md:min-w-[35vw]">
            <svg 
              key={key}
              viewBox="0 0 500 120" 
              className="w-full h-[12vh] md:h-[14vh] lg:h-[16vh] overflow-visible"
              preserveAspectRatio="xMinYMid meet"
            >
              <text
                x="0"
                y="85"
                className={animationPhase === 'erasing' ? 'animate-erase' : 'animate-draw'}
                style={{
                  fontFamily: 'var(--font-great-vibes)',
                  fontSize: '90px',
                  fill: 'currentColor',
                  stroke: 'currentColor',
                  strokeWidth: '1px',
                }}
              >
                {rotatingWords[currentIndex]}
              </text>
            </svg>
            {/* Fixed underline - always visible */}
            <div className="absolute bottom-2 left-0 w-full h-[3px] bg-current"></div>
          </div>
        </div>
      </div>
      
      {/* Single Line Marquee - Full Width Below WINDUP */}
      <div className="absolute left-0 w-full overflow-hidden opacity-[0.07] pointer-events-none" style={{ top: 'calc(20vh + 12rem)', width: '100vw' }}>
        <div className="whitespace-nowrap animate-marquee flex items-center">
          <span className="text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better</span>
          <span className="text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better</span>
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

