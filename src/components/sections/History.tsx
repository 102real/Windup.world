'use client';

import React from 'react';
import { useLanguage, type HistoryKey } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/sections/Studio';

// 최신 항목이 위로. 새 연혁은 여기에 추가하고 LanguageContext의 history.items에 문구를 넣는다.
const milestones: { year: string; key: HistoryKey; category: string }[] = [
  { year: '2026', key: 'devcamp', category: 'Program' },
  { year: '2026', key: 'aiGrant', category: 'Grant' },
  { year: '2026', key: 'makers', category: 'Award' },
];

export default function History() {
  const { t } = useLanguage();
  const years = Array.from(new Set(milestones.map((m) => m.year)));

  return (
    <section id="history" className="relative px-4 md:px-12 py-28 md:py-40 overflow-hidden">
      <div className="orb orb-b w-[60vw] h-[60vw] md:w-[36vw] md:h-[36vw] -left-[20vw] top-1/3" aria-hidden="true" />

      <Reveal>
        <SectionLabel index="03" label={t.history.label} />
      </Reveal>

      <div className="relative mt-14 md:mt-20 flex flex-col gap-16">
        {years.map((year) => (
          <div key={year} className="grid md:grid-cols-12 gap-8">
            <Reveal className="md:col-span-4">
              <p className="font-display font-bold tracking-[-0.05em] leading-none text-[28vw] md:text-[12vw] text-gradient md:sticky md:top-24">
                {year}
              </p>
            </Reveal>
            <ul className="md:col-span-8 border-t border-border-strong">
              {milestones
                .filter((m) => m.year === year)
                .map((m, i) => (
                  <Reveal key={m.key} delay={i * 100}>
                    <li className="group grid grid-cols-12 gap-4 items-baseline border-b border-border-subtle py-7 md:py-9 transition-colors duration-500 hover:bg-white/[0.03] px-1 md:px-4">
                      <span className="col-span-2 md:col-span-1 font-mono text-xs text-tertiary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="col-span-10 md:col-span-8 text-lg md:text-2xl font-bold tracking-tight leading-snug break-keep transition-transform duration-500 group-hover:translate-x-2">
                        {t.history.items[m.key]}
                      </p>
                      <span className="col-span-10 col-start-3 md:col-span-3 md:col-start-auto md:text-right">
                        <span className="inline-block font-mono text-[10px] md:text-[11px] uppercase tracking-widest rounded-full border border-border-strong px-3 py-1 text-secondary group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors duration-300">
                          {m.category}
                        </span>
                      </span>
                    </li>
                  </Reveal>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
