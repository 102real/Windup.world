'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/sections/Studio';

const EMAIL = 'contact@windup.world';

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@Windup_world' },
  { label: 'Instagram', href: 'https://www.instagram.com/windup_world/' },
  { label: 'X', href: 'https://x.com/windup_world' },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative isolate overflow-hidden pt-[clamp(5rem,2rem+8vw,10rem)] pb-8">
      {/* Light rising from the floor */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-[-35vh] left-1/2 h-[80vh] w-[140vw] -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse 45% 50% at 50% 50%, rgba(255,255,255,0.16), transparent 70%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[50vh] bg-grid"
          style={{ maskImage: 'linear-gradient(to top, #000, transparent)', WebkitMaskImage: 'linear-gradient(to top, #000, transparent)' }}
        />
      </div>

      {/* Marquee */}
      <div className="fade-x overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="text-outline mx-6 font-display font-bold uppercase tracking-tighter text-[clamp(4rem,2rem+8vw,10rem)]">
              Interactions That Can Make the World Better ✳
            </span>
          ))}
        </div>
      </div>

      <div className="wrap relative mt-10 md:mt-14">
        <Reveal>
          <SectionLabel index="04" label={t.contact.label} />
          <p className="mt-8 max-w-3xl text-3xl md:text-5xl font-bold tracking-tight leading-tight break-keep">
            {t.contact.headline}
          </p>
          <p className="mt-4 text-sm md:text-base text-secondary">{t.contact.sub}</p>

          <a href={`mailto:${EMAIL}`} className="group mt-14 md:mt-20 block w-full" aria-label={EMAIL}>
            {/* Fills the container width at natural proportions: the string is ~16.2em wide, /16.6 leaves headroom */}
            <span
              className="block whitespace-nowrap font-display font-bold leading-none tracking-[-0.02em] transition-colors duration-500 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white]"
              style={{ fontSize: 'min(calc((100vw - 2 * var(--gutter)) / 16.6), calc(var(--container) / 16.6))' }}
            >
              {EMAIL.toUpperCase()}
            </span>
          </a>

          <div className="hairline mt-12" />
          <div className="flex flex-col justify-between gap-6 pt-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill meta px-4 py-2.5 transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
            <a href={`mailto:${EMAIL}`} className="meta transition-colors hover:text-foreground">
              {EMAIL} →
            </a>
          </div>

          <div className="meta mt-20 flex items-center justify-between text-tertiary">
            <span>© {new Date().getFullYear()} WINDUP. All Rights Reserved.</span>
            <a href="#top" className="transition-colors hover:text-foreground">{t.contact.top} ↑</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
