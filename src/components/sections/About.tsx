'use client';

import React, { useState, useEffect, useRef } from 'react';

const rotatingWords = ['Interaction', 'Imagination', 'Emotion', 'World', 'Future'];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'fade-in' | 'stay' | 'fade-out' | 'prepare'>('fade-in');
  const [textOpacity, setTextOpacity] = useState(0);
  const textContainerRef = useRef<HTMLSpanElement>(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  // Measure actual text width
  useEffect(() => {
    if (textContainerRef.current) {
      const width = textContainerRef.current.offsetWidth;
      setUnderlineWidth(width);
    }
  }, [currentIndex]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'prepare') {
      // 0.5s: Adjust underline length for the next word
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
      setTextOpacity(0);

      timeout = setTimeout(() => {
        setPhase('fade-in');
      }, 1000);
    } else if (phase === 'fade-in') {
      // 1.5s: Fade in (opacity 0 to 1)
      setTextOpacity(1);
      timeout = setTimeout(() => {
        setPhase('stay');
      }, 1500);
    } else if (phase === 'stay') {
      // 2s: Stay at opacity 1
      timeout = setTimeout(() => {
        setPhase('fade-out');
      }, 2000);
    } else if (phase === 'fade-out') {
      // 1.5s: Fade out (opacity 1 to 0)
      setTextOpacity(0);
      timeout = setTimeout(() => {
        setPhase('prepare');
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-20 relative overflow-hidden">
      <div className="z-10 mt-20 md:mt-32 w-full max-w-[90vw] mx-auto">
        {/* WINDUP - Large */}
        <h2 className="text-[16vw] md:text-[18vh] lg:text-[20vh] font-bold leading-[0.9] tracking-tighter animate-fade-in-up">
          WINDUP
        </h2>

        {/* the + rotating word - Smaller with underline only on word */}
        <div className="animate-fade-in-up [animation-delay:200ms] mt-2">
          <div className="text-[6vw] md:text-[6.5vh] lg:text-[7.5vh] font-bold tracking-tighter flex items-baseline gap-x-2 md:gap-x-4">
            <span className="font-medium">&nbsp;the</span>
            <span className="relative inline-block">
              <span
                ref={textContainerRef}
                className="transition-opacity duration-[1500ms] ease-in-out"
                style={{ opacity: textOpacity }}
              >
                {rotatingWords[currentIndex]}
              </span>
              {/* Animated underline - only under rotating word */}
              <span
                className="absolute bottom-0 left-0 h-[2px] md:h-[3px] lg:h-[4px] bg-current transition-all duration-500 ease-in-out"
                style={{ width: underlineWidth > 0 ? `${underlineWidth}px` : '100%' }}
              ></span>
            </span>
          </div>
        </div>
      </div>

      {/* Single Line Marquee - Full Width Below WINDUP */}
      <div className="absolute left-0 w-full overflow-hidden opacity-[0.07] pointer-events-none" style={{ top: 'calc(20vh + 16rem)', width: '100vw' }}>
        <div className="whitespace-nowrap animate-marquee flex items-center">
          <span className="text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better</span>
          <span className="text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better</span>
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
