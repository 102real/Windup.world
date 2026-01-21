import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-12">
      {/* Moving Text Background */}
      <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden opacity-[0.05] pointer-events-none flex items-center">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[20vh] font-black uppercase mx-4">Join the Movement</span>
          <span className="text-[20vh] font-black uppercase mx-4">Join the Movement</span>
          <span className="text-[20vh] font-black uppercase mx-4">Join the Movement</span>
        </div>
      </div>

      <div className="w-full max-w-[95vw] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between border-t-2 border-current pt-12">
          
          <div className="mb-10 md:mb-0 w-full md:w-auto flex-1 md:mr-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-8">
              Get in Touch
            </p>
            <a 
              href="mailto:hello@windup.world" 
              className="group w-full hover:opacity-50 transition-opacity"
            >
              {/* SVG Text for Perfect Scaling */}
              <svg viewBox="0 0 600 55" className="w-full h-auto">
                <text 
                  x="0" 
                  y="45" 
                  className="font-black tracking-tighter fill-current" 
                  fontSize="50"
                  fontFamily="var(--font-noto-sans-kr)"
                >
                  HELLO@WINDUP.WORLD
                </text>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-end gap-6 text-right">
            <div className="flex gap-4 text-sm md:text-base font-medium">
              <a href="#" className="hover:underline underline-offset-4">YOUTUBE</a>
              <a href="#" className="hover:underline underline-offset-4">INSTAGRAM</a>
              <a href="#" className="hover:underline underline-offset-4">TWITTER</a>
            </div>
            <p className="text-[10px] md:text-xs tracking-widest opacity-50 uppercase mt-8">
              © {new Date().getFullYear()} Windup Studio.<br />
              All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

