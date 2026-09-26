'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const languages = [
    { code: 'ko' as const, label: 'KR' },
    { code: 'en' as const, label: 'EN' }
];

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="relative flex items-center rounded-full border border-border-subtle bg-white/[0.03] p-0.5">
            {languages.map((lang) => {
                const isActive = language === lang.code;
                return (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        aria-pressed={isActive}
                        className={`font-mono text-[10px] md:text-[11px] tracking-[0.15em] px-2.5 py-1 rounded-full transition-colors duration-300
                            ${isActive ? 'bg-foreground text-background' : 'text-tertiary hover:text-foreground'}
                        `}
                    >
                        {lang.label}
                    </button>
                );
            })}
        </div>
    );
}
