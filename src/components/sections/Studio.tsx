'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';

export default function Studio() {
  const { t } = useLanguage();

  return (
    <section id="studio" className="relative px-4 md:px-12 py-28 md:py-40 overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(255,255,255,0.08), transparent 70%)' }}
        aria-hidden="true"
      />

      <Reveal>
        <SectionLabel index="01" label={t.studio.label} />
      </Reveal>

      <div className="relative grid md:grid-cols-12 gap-12 md:gap-8 mt-14 md:mt-20">
        <Reveal className="md:col-span-6">
          <h2 className="font-display font-bold uppercase tracking-[-0.04em] leading-[1] text-[9vw] md:text-[4.6vw]">
            {t.studio.headline}
            <br />
            <span className="text-gradient">{t.studio.headlineSub}</span>
          </h2>
        </Reveal>

        <div className="md:col-span-5 md:col-start-8 flex flex-col gap-8 md:pt-4">
          {t.studio.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <p className={`break-keep leading-[1.85] ${i === 0 ? 'text-lg md:text-xl text-foreground' : 'text-base md:text-lg text-secondary'}`}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[10px] md:text-xs uppercase tracking-widest text-secondary">
      <span className="text-foreground">{index}</span>
      <span className="h-px w-10 bg-border-strong" />
      <span>{label}</span>
    </div>
  );
}
