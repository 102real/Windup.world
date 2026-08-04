'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-12">
      {/* Moving Text Background */}
      <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden pointer-events-none flex items-center">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-outline font-display text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">{t.contact.background}</span>
          <span className="text-outline font-display text-[15vh] md:text-[18vh] lg:text-[20vh] font-black uppercase mx-4">{t.contact.background}</span>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 relative z-10">
        <Reveal>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-tertiary mb-4">
            ( 03 — {t.header.contact} )
          </p>
          <div className="w-full h-[1px] bg-border-strong"></div>
          <div className="flex flex-col md:flex-row items-end justify-between pt-12">

            <div className="mb-10 md:mb-0 w-full md:w-auto flex-1 md:mr-10">
              <p className="font-mono text-xs tracking-[0.2em] uppercase mb-8 text-secondary">
                ( {t.contact.sub} )
              </p>
              <a
                href="mailto:hello@windup.world"
                className="group block w-full relative"
              >
                {/* SVG Text for Perfect Scaling */}
                <svg viewBox="0 0 600 55" className="w-full h-auto">
                  <text
                    x="0"
                    y="45"
                    className="font-black tracking-tighter fill-current transition-opacity duration-500 group-hover:opacity-0"
                    fontSize="50"
                    fontFamily="var(--font-space-grotesk), var(--font-noto-sans-kr)"
                  >
                    HELLO@WINDUP.WORLD
                  </text>
                  <text
                    x="0"
                    y="45"
                    className="font-black tracking-tighter opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    fontSize="50"
                    fontFamily="var(--font-space-grotesk), var(--font-noto-sans-kr)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    HELLO@WINDUP.WORLD
                  </text>
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-end gap-2 text-right font-mono text-xs md:text-sm">
              <a href="https://www.youtube.com/@Windup_world" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors underline-offset-4 hover:underline">YOUTUBE ↗</a>
              <a href="https://www.instagram.com/windup_world/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors underline-offset-4 hover:underline">INSTAGRAM ↗</a>
              <a href="https://x.com/windup_world" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors underline-offset-4 hover:underline">X ↗</a>
            </div>

          </div>

          {/* Footer bar */}
          <div className="mt-16 pt-6 border-t border-border-subtle flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-widest text-tertiary">
            <span>© {new Date().getFullYear()} Windup. All Rights Reserved.</span>
            <a href="#about" className="hover:text-foreground transition-colors">Back to top ↑</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
