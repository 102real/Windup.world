'use client';

import React, { useState, useEffect } from 'react';

const rotatingWords = ['Interaction', 'Imagination', 'Emotion', 'World', 'Future'];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-20 relative overflow-hidden">
      <div className="z-10 mt-20 md:mt-32 w-full max-w-[90vw] mx-auto">
        <h2 className="text-[12vw] md:text-[15vw] lg:text-[12vw] font-bold leading-[0.9] tracking-tighter break-keep animate-fade-in-up flex flex-wrap items-baseline gap-x-4">
          <span>WINDUP</span>
          <span className="text-[8vw] md:text-[10vw] lg:text-[8vw] font-medium">the</span>
          <span 
            className={`font-dancing-script font-normal italic border-b-4 border-current pb-2 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'var(--font-dancing-script)' }}
          >
            {rotatingWords[currentIndex]}
          </span>
        </h2>
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

