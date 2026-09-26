'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { games } from '@/data/games';

export default function Hero() {
  const { t } = useLanguage();
  const featured = games[0];

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28 md:pt-32 pb-8">
      {/* Light: aurora, beam from the top, grid, fade into the next section */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="aurora" />
        <div className="beam" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="wrap flex flex-1 flex-col items-center justify-center text-center">
        <a
          href={`#game-${featured.key}`}
          className="pill group mb-8 md:mb-10 py-2 pl-3 pr-4 animate-fade-in-up transition-colors hover:bg-white/10"
        >
          <span className="pulse-dot" />
          <span className="meta text-foreground">{featured.name}</span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-xs font-medium text-secondary">
            {t.hero.status} · <span className="font-mono tracking-wider">{t.games.items[featured.key].release}</span>
          </span>
          <span className="text-tertiary transition-transform group-hover:translate-x-0.5">→</span>
        </a>

        <div className="relative">
          <div className="glow absolute -inset-x-[20%] -inset-y-[60%] -z-10" aria-hidden="true" />
          <h1 className="inline-block py-[0.06em] font-gmarket font-bold tracking-[-0.05em] leading-[1] text-hero text-gradient animate-fade-in-up [animation-delay:150ms] select-none">
            WINDUP
          </h1>
        </div>

        <p className="mt-6 md:mt-8 text-2xl md:text-4xl font-bold tracking-tight break-keep animate-fade-in-up [animation-delay:300ms]">
          {t.hero.tagline} <span className="text-secondary">{t.hero.taglineSub}</span>
        </p>
        <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-secondary break-keep animate-fade-in-up [animation-delay:450ms]">
          {t.hero.intro}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2 animate-fade-in-up [animation-delay:600ms]">
          {games.map((game) => (
            <a
              key={game.key}
              href={`#game-${game.key}`}
              className="glass group flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 transition-colors duration-300 hover:bg-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={game.keyArt} alt="" className="h-7 w-7 rounded-full object-cover grayscale transition group-hover:grayscale-0" />
              <span className="meta text-foreground">{game.name}</span>
              <span className="text-tertiary transition-colors group-hover:text-foreground">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom meta row */}
      <div className="wrap mt-12 flex items-end justify-between animate-fade-in-up [animation-delay:750ms]">
        <span className="meta hidden sm:block">Game Studio</span>
        <span className="meta hidden md:block">Interactions That Can Make the World Better</span>
        <span className="meta flex items-center gap-3">
          {t.hero.scroll}
          <span className="relative block h-8 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-0 bg-foreground animate-scroll-line" />
          </span>
        </span>
      </div>
    </section>
  );
}
