import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-20 relative overflow-hidden">
      {/* Marquee Slogan Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.05] pointer-events-none flex flex-col justify-center items-center gap-0 z-0">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="whitespace-nowrap animate-marquee w-full" style={{ animationDelay: `${i * -5}s` }}>
            <span className="text-[15vh] font-black uppercase mx-8 leading-none">Interactions That Can Make the World Better</span>
            <span className="text-[15vh] font-black uppercase mx-8 leading-none">Interactions That Can Make the World Better</span>
            <span className="text-[15vh] font-black uppercase mx-8 leading-none">Interactions That Can Make the World Better</span>
            <span className="text-[15vh] font-black uppercase mx-8 leading-none">Interactions That Can Make the World Better</span>
          </div>
        ))}
      </div>

      <div className="z-10 mt-20 md:mt-32 w-full max-w-[90vw] mx-auto">
        <h2 className="text-6xl md:text-[8rem] lg:text-[11rem] font-bold leading-[0.9] tracking-tighter break-keep animate-fade-in-up">
          WINDUP
        </h2>
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

