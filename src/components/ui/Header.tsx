"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
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
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 mix-blend-difference text-white">
      <nav className="flex gap-8 md:gap-16">
        {['ABOUT', 'PROJECTS', 'CONTACT'].map((item) => {
          const id = item.toLowerCase();
          const isActive = activeSection === id;
          
          return (
            <a
              key={item}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className={`text-xs md:text-sm font-bold tracking-[0.2em] transition-all duration-300 relative
                ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}
              `}
            >
              {item}
              {/* Active Indicator Underline */}
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left
                ${isActive ? 'scale-x-100' : 'scale-x-0'}
              `}></span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}


