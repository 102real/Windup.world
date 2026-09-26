'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/sections/Studio';
import { games } from '@/data/games';

function SteamLogo() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="15.5" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.5" cy="15.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M10.1 14L13.7 10.2M6.5 14.8L3.8 13.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="games" className="relative px-4 md:px-12 py-28 md:py-40">
      <Reveal>
        <SectionLabel index="02" label={t.games.label} />
        <div className="mt-10 flex items-end justify-between border-b border-border-subtle pb-6">
          <h2 className="font-display font-bold tracking-[-0.04em] leading-none text-[16vw] md:text-[9vw]">
            GAMES<span className="font-mono font-normal text-[0.2em] tracking-normal align-super text-secondary ml-3">({String(games.length).padStart(2, '0')})</span>
          </h2>
          <span className="hidden md:block font-mono text-xs text-tertiary uppercase tracking-widest pb-3">Now on Steam — Wishlist</span>
        </div>
      </Reveal>

      <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-32">
        {games.map((game, index) => {
          const item = t.games.items[game.key];
          return (
            <Reveal key={game.key}>
              <article id={`game-${game.key}`} className="group scroll-mt-24">
                {/* Key art */}
                <a
                  href={game.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl border border-border-subtle bg-white/[0.03] shadow-[0_40px_120px_-40px_rgba(255,255,255,0.25)]"
                >
                  {/* Key art already carries the game logo, so no title is overlaid */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={game.keyArt}
                    alt={`${game.name} key art`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />

                  <div className="absolute top-3 left-3 right-3 md:top-6 md:left-6 md:right-6 flex justify-between font-mono text-[10px] md:text-xs uppercase tracking-widest">
                    <span className="glass rounded-full px-3 py-1.5 bg-black/30">/{String(index + 1).padStart(2, '0')}</span>
                    <span className="glass rounded-full px-3 py-1.5 bg-black/30">
                      {t.games.release} · {item.release}
                    </span>
                  </div>
                </a>

                {/* Title */}
                <div className="mt-8 md:mt-10 flex flex-col gap-2 md:gap-3">
                  <p className="text-sm md:text-lg font-medium tracking-tight text-secondary break-keep">{item.tagline}</p>
                  <h3 className="font-display font-bold tracking-[-0.04em] leading-[0.9] uppercase text-[11vw] md:text-[5.5vw] break-keep">
                    {game.name}
                  </h3>
                </div>

                {/* Info row */}
                <div className="mt-6 grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <p className="md:col-span-6 text-base md:text-lg leading-relaxed text-secondary break-keep whitespace-pre-line">
                    {item.description}
                  </p>
                  <div className="md:col-span-3 flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] rounded-full border border-border-subtle text-secondary px-3 py-1 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="md:col-span-3 flex md:justify-end">
                    <a
                      href={game.steamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-bold tracking-tight transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(255,255,255,0.45)]"
                    >
                      <SteamLogo />
                      {t.games.wishlist}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {/* Screenshot strip */}
                <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                  {game.shots.map((src) => (
                    <div key={src} className="relative aspect-video overflow-hidden rounded-xl md:rounded-2xl border border-border-subtle">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${game.name} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale-[0.6] transition duration-700 hover:grayscale-0 hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
