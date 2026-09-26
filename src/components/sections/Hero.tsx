'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { games } from '@/data/games';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-between px-4 md:px-12 pt-24 md:pt-28 pb-8 overflow-hidden">
      {/* Background: blurred orbs, grid, bottom fade */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="orb orb-a w-[70vw] h-[70vw] md:w-[46vw] md:h-[46vw] -top-[20vw] -left-[15vw]" />
        <div className="orb orb-b w-[60vw] h-[60vw] md:w-[38vw] md:h-[38vw] top-[30%] -right-[18vw]" />
        <div className="orb orb-c w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bottom-[-10vw] left-[30%]" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Top meta row */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-widest text-secondary animate-fade-in-up">
        <span>Game Studio</span>
        <span className="hidden md:block">Interactions That Can Make the World Better</span>
        <span>© 2026</span>
      </div>

      {/* Wordmark */}
      <div className="relative z-10 w-full">
        <h1 className="inline-block py-[0.06em] -my-[0.06em] font-gmarket font-bold tracking-[-0.05em] leading-[1] text-[18vw] text-gradient animate-fade-in-up [animation-delay:150ms] select-none">
          WINDUP
        </h1>
        <div className="mt-6 md:mt-8 grid md:grid-cols-12 gap-6 items-end">
          <p className="md:col-span-6 text-2xl md:text-4xl font-bold leading-tight tracking-tight break-keep animate-fade-in-up [animation-delay:300ms]">
            {t.hero.tagline}
            <br />
            <span className="text-secondary">{t.hero.taglineSub}</span>
          </p>
          <p className="md:col-span-4 md:col-start-9 text-sm md:text-base leading-relaxed text-secondary break-keep animate-fade-in-up [animation-delay:450ms]">
            {t.hero.intro}
          </p>
        </div>
      </div>

      {/* Bottom row: game chips + scroll */}
      <div className="relative z-10 mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-border-subtle pt-6 animate-fade-in-up [animation-delay:600ms]">
        <div className="flex flex-wrap gap-2">
          {games.map((game) => (
            <a
              key={game.key}
              href={`#game-${game.key}`}
              className="glass group flex items-center gap-3 rounded-full pl-1.5 pr-4 py-1.5 transition-colors duration-300 hover:bg-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={game.cover} alt="" className="h-7 w-7 rounded-full object-cover grayscale group-hover:grayscale-0 transition" />
              <span className="font-mono text-[11px] uppercase tracking-wider">{game.name}</span>
              <span className="text-tertiary group-hover:text-foreground transition-colors">→</span>
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-secondary">
          {t.hero.scroll}
          <span className="relative block h-10 w-px bg-white/10 overflow-hidden">
            <span className="absolute inset-0 bg-foreground animate-scroll-line" />
          </span>
        </div>
      </div>
    </section>
  );
}
