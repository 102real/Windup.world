'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'ko' as const, label: 'KR' },
        { code: 'en' as const, label: 'EN' }
    ];

    return (
        <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 md:h-14 z-[60] flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center">
            {languages.map((lang, index) => {
                const isActive = language === lang.code;
                return (
                    <React.Fragment key={lang.code}>
                        <button
                            onClick={() => setLanguage(lang.code)}
                            className={`font-mono text-[11px] md:text-xs tracking-[0.15em] transition-colors duration-300
                                ${isActive ? 'text-foreground' : 'text-tertiary hover:text-secondary'}
                            `}
                        >
                            {lang.label}
                        </button>
                        {index < languages.length - 1 && (
                            <>
                                <span className="hidden md:block font-mono text-xs text-tertiary">/</span>
                                <span className="block md:hidden w-4 h-[1px] bg-border-strong"></span>
                            </>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
