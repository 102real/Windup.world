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
        <div className="fixed right-6 md:right-12 top-6 z-[60] flex gap-2 md:gap-3 items-center mix-blend-difference text-white">
            {languages.map((lang, index) => {
                const isActive = language === lang.code;
                return (
                    <React.Fragment key={lang.code}>
                        <button
                            onClick={() => setLanguage(lang.code)}
                            className={`text-xs md:text-sm font-bold tracking-[0.2em] transition-all duration-300 relative
                                ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}
                            `}
                        >
                            {lang.label}
                            {/* Active Indicator Underline */}
                            <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left
                                ${isActive ? 'scale-x-100' : 'scale-x-0'}
                            `}></span>
                        </button>
                        {index < languages.length - 1 && (
                            <span className="opacity-20 text-xs md:text-sm font-light">/</span>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
