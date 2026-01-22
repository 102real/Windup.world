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
        <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 md:top-6 md:translate-y-0 z-[60] flex flex-col md:flex-row gap-4 md:gap-3 items-center mix-blend-difference text-white">
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
                            {/* Active Indicator Underline - Hidden on Mobile */}
                            <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left hidden md:block
                                ${isActive ? 'scale-x-100' : 'scale-x-0'}
                            `}></span>
                        </button>
                        {index < languages.length - 1 && (
                            <>
                                <span className="hidden md:block text-xs md:text-sm font-bold opacity-100">/</span>
                                <span className="block md:hidden w-4 h-[1px] bg-white opacity-100"></span>
                            </>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
