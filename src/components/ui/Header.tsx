"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,backdrop-filter,border-color] duration-500 border-b
        ${scrolled ? 'bg-black/40 backdrop-blur-2xl border-border-subtle' : 'bg-transparent border-transparent'}
      `}
    >
      <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-12">
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, 'top')}
          className="font-gmarket font-bold tracking-[-0.03em] text-base md:text-lg leading-none"
        >
          WINDUP
        </a>

        <div className="flex items-center gap-3 md:gap-10">
          <nav className="hidden sm:flex items-center gap-6 md:gap-9">
            {sections.map((id, i) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className={`group flex items-baseline gap-1.5 whitespace-nowrap text-[11px] md:text-xs font-bold tracking-[0.15em] transition-colors duration-300
                    ${isActive ? 'text-foreground' : 'text-tertiary hover:text-foreground'}
                  `}
                >
                  <span className="hidden md:inline font-mono text-[10px] font-normal text-tertiary">0{i + 1}</span>
                  {t.header[id]}
                </a>
              );
            })}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
