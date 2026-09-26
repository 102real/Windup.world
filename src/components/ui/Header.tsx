"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { games } from '@/data/games';

const sections = ['studio', 'games', 'history', 'contact'] as const;

export default function Header() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // 화면 상단 1/3 지점이 속한 섹션을 활성화
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) current = section;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-3 md:top-4 z-50 px-3 md:px-6 pointer-events-none">
      <div
        className={`glass-border pointer-events-auto mx-auto flex h-12 md:h-14 max-w-[1100px] items-center justify-between gap-4 rounded-full pl-5 pr-2 transition-[background-color,box-shadow] duration-500 backdrop-blur-xl backdrop-saturate-150
          ${scrolled ? 'bg-black/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]' : 'bg-white/[0.03]'}
        `}
      >
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, 'top')}
          className="font-gmarket font-bold tracking-[-0.03em] text-base md:text-lg leading-none"
        >
          WINDUP
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((id) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.15em] transition-colors duration-300
                  ${isActive ? 'bg-white/10 text-foreground' : 'text-tertiary hover:text-foreground'}
                `}
              >
                {t.header[id]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href={games[0].steamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-9 items-center rounded-full bg-foreground px-4 text-xs font-bold text-background transition-transform duration-300 hover:-translate-y-px"
          >
            Wishlist
          </a>
        </div>
      </div>
    </header>
  );
}
