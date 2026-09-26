'use client';

import React from 'react';
import { useLanguage, type HistoryKey } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
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
    <section id="history" className="relative isolate overflow-hidden section-y">
      <div className="aurora -z-10 opacity-60" aria-hidden="true" />

      <div className="wrap">
        <div className="hairline mb-10 md:mb-14" />
        <Reveal>
          <SectionLabel index="03" label={t.history.label} />
        </Reveal>

        <div className="mt-12 md:mt-16 flex flex-col gap-12">
          {years.map((year) => (
            <div key={year} className="grid gap-8 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <p className="font-display font-bold tracking-[-0.05em] leading-none text-year text-gradient lg:sticky lg:top-28">
                  {year}
                </p>
              </Reveal>

              <Reveal className="lg:col-span-8">
                <SpotlightCard as="div" className="overflow-hidden rounded-3xl bg-white/[0.025]">
                  <ul className="relative z-[3] divide-y divide-border-subtle">
                    {milestones
                      .filter((m) => m.year === year)
                      .map((m, i) => (
                        <li
                          key={m.key}
                          className="group grid grid-cols-12 items-center gap-4 px-5 py-6 md:px-8 md:py-8 transition-colors duration-500 hover:bg-white/[0.03]"
                        >
                          <span className="meta col-span-2 md:col-span-1 text-tertiary">{String(i + 1).padStart(2, '0')}</span>
                          <p className="col-span-10 md:col-span-8 text-lg md:text-xl font-bold tracking-tight leading-snug break-keep transition-transform duration-500 group-hover:translate-x-1.5">
                            {t.history.items[m.key]}
                          </p>
                          <span className="col-span-10 col-start-3 md:col-span-3 md:col-start-auto md:text-right">
                            <span className="meta inline-block rounded-full border border-border-strong px-3 py-1.5 transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                              {m.category}
                            </span>
                          </span>
                        </li>
                      ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
