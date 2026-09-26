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
    <section id="contact" className="relative overflow-hidden pt-28 md:pt-40 pb-8">
      {/* Bottom glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/2 bottom-[-30vh] -translate-x-1/2 w-[140vw] h-[80vh]"
          style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.16), transparent 70%)' }}
        />
      </div>

      {/* Marquee */}
      <div className="absolute top-24 md:top-32 left-0 w-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="whitespace-nowrap animate-marquee">
          {[0, 1].map((i) => (
            <span key={i} className="text-outline font-display text-[18vw] md:text-[14vw] font-bold uppercase tracking-tighter mx-6">
              Interactions That Can Make the World Better ✳
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-12">
        <Reveal>
          <SectionLabel index="04" label={t.contact.label} />
          <p className="mt-10 max-w-3xl text-3xl md:text-5xl font-bold tracking-tight leading-tight break-keep">
            {t.contact.headline}
          </p>
          <p className="mt-4 text-sm md:text-base text-secondary">{t.contact.sub}</p>

          <a href={`mailto:${EMAIL}`} className="group mt-16 md:mt-24 block w-full" aria-label={EMAIL}>
            {/* Sized to the container width: the string is ~16.2em wide at -0.02em tracking, divided by 16.6 for headroom */}
            <span className="block whitespace-nowrap font-display font-bold leading-none tracking-[-0.02em] text-[calc((100vw-32px)/16.6)] md:text-[calc((100vw-96px)/16.6)] transition-colors duration-500 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white]">
              {EMAIL.toUpperCase()}
            </span>
          </a>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border-strong pt-6">
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-secondary transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-foreground transition-colors"
            >
              {EMAIL} →
            </a>
          </div>

          <div className="mt-20 flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-widest text-tertiary">
            <span>© {new Date().getFullYear()} WINDUP. All Rights Reserved.</span>
            <a href="#top" className="hover:text-foreground transition-colors">{t.contact.top} ↑</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
