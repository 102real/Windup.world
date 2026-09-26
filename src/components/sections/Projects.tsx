'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
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
  const shots = games.flatMap((game) => game.shots.map((src) => ({ src, name: game.name })));

  return (
    <section id="games" className="relative isolate section-y">
      <div
        className="absolute inset-x-0 top-1/3 -z-10 h-[70%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.05), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="wrap">
        <Reveal>
          <SectionLabel index="02" label={t.games.label} />
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display font-bold tracking-[-0.04em] leading-none text-section">
              GAMES
              <span className="meta ml-3 align-super text-[0.9rem] md:text-base">({String(games.length).padStart(2, '0')})</span>
            </h2>
            <span className="pill py-2 pl-3 pr-4">
              <span className="pulse-dot" />
              <span className="text-xs font-medium">{t.games.onSteam}</span>
            </span>
          </div>
        </Reveal>

        {/* Feature cards — side by side from lg up so both games fit on one screen */}
        <div className="mt-12 md:mt-16 grid gap-6 lg:grid-cols-2">
          {games.map((game, index) => {
            const item = t.games.items[game.key];
            return (
              <Reveal key={game.key} delay={index * 120} className="h-full">
                <SpotlightCard
                  as="article"
                  id={`game-${game.key}`}
                  className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl bg-white/[0.025]"
                >
                  <a
                    href={game.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-video overflow-hidden"
                  >
                    {/* Key art already carries the game logo, so no title is overlaid */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={game.keyArt}
                      alt={`${game.name} key art`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute left-4 right-4 top-4 flex justify-between">
                      <span className="pill meta bg-black/30 px-3 py-1.5 text-foreground">/{String(index + 1).padStart(2, '0')}</span>
                      <span className="pill meta bg-black/30 px-3 py-1.5 text-foreground">
                        {t.games.release} · {item.release}
                      </span>
                    </div>
                  </a>

                  <div className="relative z-[3] flex flex-1 flex-col gap-4 p-6 md:p-8">
                    <p className="text-sm md:text-base font-medium text-secondary break-keep">{item.tagline}</p>
                    <h3 className="font-display font-bold uppercase tracking-[-0.03em] leading-[0.95] text-card">
                      {game.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-secondary break-keep whitespace-pre-line">
                      {item.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {game.tags.map((tag) => (
                          <span key={tag} className="meta rounded-full border border-border-subtle px-3 py-1.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={game.steamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(255,255,255,0.45)]"
                      >
                        <SteamLogo />
                        {t.games.wishlist}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Screenshot gallery — native horizontal scroll snap */}
        <Reveal className="mt-12 md:mt-16">
          <div className="mb-5 flex items-center justify-between">
            <span className="meta">{t.games.gallery}</span>
            <span className="meta text-tertiary">Scroll →</span>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="fade-x no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(var(--gutter),calc((100vw_-_var(--container))/2))] pb-2">
          {shots.map((shot) => (
            <figure key={shot.src} className="glass-border relative w-[min(78vw,520px)] flex-none snap-start overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={`${shot.name} screenshot`}
                loading="lazy"
                className="aspect-video w-full object-cover grayscale-[0.5] transition duration-700 hover:grayscale-0"
              />
              <figcaption className="meta absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1.5 text-foreground backdrop-blur-md">
                {shot.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
