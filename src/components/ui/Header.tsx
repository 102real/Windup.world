"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];

      // 현재 화면 중앙의 위치
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-x-0 border-t-0">
      <div className="flex items-center justify-between h-14 px-6 md:px-12">
        {/* Wordmark */}
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="font-display font-bold tracking-tight text-base md:text-lg leading-none"
        >
          WINDUP
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-5 md:gap-10 mr-16 md:mr-28">
          {['about', 'projects', 'contact'].map((id, i) => {
            const isActive = activeSection === id;
            const label = t.header[id as keyof typeof t.header];

            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`flex items-baseline gap-1.5 text-[11px] md:text-xs font-bold tracking-[0.15em] transition-colors duration-300
                  ${isActive ? 'text-foreground' : 'text-tertiary hover:text-secondary'}
                `}
              >
                <span className={`font-mono text-[9px] md:text-[10px] font-normal ${isActive ? 'text-secondary' : 'text-tertiary'}`}>
                  0{i + 1}
                </span>
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
