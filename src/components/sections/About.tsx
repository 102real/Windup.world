'use client';

import React, { useState, useEffect } from 'react';

const rotatingWords = ['Interaction', 'Imagination', 'Emotion', 'World', 'Future'];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = rotatingWords[currentIndex];
    
    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsTyping(true);
      }
    }
  }, [currentIndex, displayedText, isTyping]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-20 relative overflow-hidden">
      <div className="z-10 mt-20 md:mt-32 w-full max-w-[90vw] mx-auto">
        <h2 className="text-[15vh] md:text-[18vh] lg:text-[20vh] font-bold leading-[0.9] tracking-tighter break-keep animate-fade-in-up flex items-baseline gap-x-4 whitespace-nowrap">
          <span>WINDUP</span>
          <span className="text-[10vh] md:text-[12vh] lg:text-[14vh] font-medium">the</span>
        </h2>
        <div className="animate-fade-in-up [animation-delay:200ms] mt-2">
          <div className="relative inline-block min-w-[45vw] md:min-w-[35vw]">
            <span className="text-[12vh] md:text-[14vh] lg:text-[16vh] font-bold tracking-tighter">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
            {/* Fixed underline - always visible */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-current"></div>
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
