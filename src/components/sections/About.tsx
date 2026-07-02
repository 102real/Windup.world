'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const rotatingWords = ['Interaction', 'Imagination', 'Experience', 'Emotion', 'World', 'Moment'];

export default function About() {
  const { t } = useLanguage();
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
      // 1.0s: Adjust underline length for the next word
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
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-20 md:pt-24 pb-8 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true"></div>

      {/* Top meta row */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-widest text-tertiary animate-fade-in-up border-b border-border-subtle pb-4">
        <span>( 01 — {t.header.about} )</span>
        <span className="hidden md:block">Game Studio</span>
        <span>© 2026</span>
      </div>

      <div className="z-10 w-full">
        {/* WINDUP - Large */}
        <h2 className="text-[16vw] md:text-[18vh] lg:text-[20vh] font-bold leading-[0.9] tracking-tighter animate-fade-in-up font-display">
          WINDUP
        </h2>

        {/* the + rotating word - Smaller with underline only on word */}
        <div className="animate-fade-in-up [animation-delay:200ms] mt-2">
          <div className="text-[6vw] md:text-[6.5vh] lg:text-[7.5vh] font-bold tracking-tighter flex items-baseline gap-x-2 md:gap-x-4">
            <span className="font-medium">&nbsp;the</span>
            <span className="relative inline-block">
              <span
                ref={textContainerRef}
                className="inline-block transition-opacity duration-[1500ms] ease-in-out"
                style={{ opacity: textOpacity }}
              >
                {rotatingWords[currentIndex]}
              </span>
              {/* Animated underline - only under rotating word */}
              <span
                className="absolute bottom-0 left-0 h-[1px] md:h-[2px] bg-current transition-all duration-500 ease-in-out"
                style={{ width: underlineWidth > 0 ? `${underlineWidth}px` : '100%' }}
              ></span>
            </span>
          </div>
        </div>
      </div>

      {/* Single Line Marquee - Full Width Below WINDUP */}
      <div className="absolute left-0 w-full overflow-hidden pointer-events-none" style={{ top: 'calc(20vh + 16rem)', width: '100vw' }}>
        <div className="whitespace-nowrap animate-marquee flex items-center">
          <span className="text-outline font-display text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better&nbsp;&nbsp;✳</span>
          <span className="text-outline font-display text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better&nbsp;&nbsp;✳</span>
          <span className="text-outline font-display text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better&nbsp;&nbsp;✳</span>
          <span className="text-outline font-display text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">Interactions That Can Make the World Better&nbsp;&nbsp;✳</span>
        </div>
      </div>

      {/* Bottom structured row */}
      <div className="relative z-10 border-t border-border-subtle pt-6 mt-20 md:mt-0 grid grid-cols-2 md:grid-cols-12 gap-6 items-end animate-fade-in-up [animation-delay:400ms]">
        <div className="col-span-2 md:col-span-5">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3 text-secondary">
            ( {t.about.mission} )
          </p>
          <p className="text-xl md:text-2xl font-medium leading-snug">
            {t.about.movement}<br />
            {t.about.movementSub}
          </p>
        </div>
        <div className="hidden md:block md:col-span-4 font-mono text-[10px] lg:text-xs text-tertiary uppercase tracking-widest leading-relaxed">
          Interactions that can<br />make the world better
        </div>
        <div className="col-span-2 md:col-span-3 flex md:justify-end">
          <span className="font-mono text-[10px] tracking-widest uppercase text-secondary animate-reveal [animation-delay:800ms]">
            {t.about.scroll} ↓
          </span>
        </div>
      </div>
    </section>
  );
}
