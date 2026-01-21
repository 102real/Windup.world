import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-20 relative overflow-hidden">
      <div className="z-10 mt-20 md:mt-32 w-full max-w-[90vw] mx-auto">
        <h2 className="text-6xl md:text-[8rem] lg:text-[11rem] font-bold leading-[0.9] tracking-tighter break-keep animate-fade-in-up">
          WINDUP
        </h2>
        {/* Single Line Marquee - Below WINDUP */}
        <div className="overflow-hidden mt-4 animate-fade-in-up [animation-delay:200ms]">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-lg md:text-2xl font-medium uppercase tracking-wider opacity-40 mx-6">Interactions That Can Make the World Better</span>
            <span className="text-lg md:text-2xl font-medium uppercase tracking-wider opacity-40 mx-6">Interactions That Can Make the World Better</span>
            <span className="text-lg md:text-2xl font-medium uppercase tracking-wider opacity-40 mx-6">Interactions That Can Make the World Better</span>
            <span className="text-lg md:text-2xl font-medium uppercase tracking-wider opacity-40 mx-6">Interactions That Can Make the World Better</span>
          </div>
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

