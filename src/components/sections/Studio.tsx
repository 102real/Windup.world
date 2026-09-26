'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';

export default function Studio() {
  const { t } = useLanguage();

  return (
    <section id="studio" className="relative isolate overflow-hidden section-y">
      {/* Light spilling down from the hero + halftone accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 h-[60vh] w-[120vw] -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse 45% 55% at 50% 0%, rgba(255,255,255,0.07), transparent 70%)' }}
        />
        <div className="halftone absolute -right-24 top-1/4 h-[420px] w-[420px] opacity-30" />
      </div>

      <div className="wrap">
        <div className="hairline mb-10 md:mb-14" />
        <Reveal>
          <SectionLabel index="01" label={t.studio.label} />
        </Reveal>

        <div className="mt-12 md:mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display font-bold uppercase tracking-[-0.04em] leading-[1] text-[clamp(2.25rem,1rem+3vw,4.5rem)]">
              {t.studio.headline}
              <br />
              <span className="text-gradient">{t.studio.headlineSub}</span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-7 lg:col-span-4 lg:col-start-9 lg:pt-2">
            {t.studio.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className={`break-keep leading-[1.85] ${i === 0 ? 'text-lead text-foreground' : 'text-base md:text-lg text-secondary'}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="meta flex items-center gap-4">
      <span className="text-foreground">{index}</span>
      <span className="h-px w-10 bg-border-strong" />
      <span>{label}</span>
    </div>
  );
}
