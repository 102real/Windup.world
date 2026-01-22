'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-4 items-center mix-blend-difference text-white">
            <button
                onClick={toggleLanguage}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-white transition-colors duration-300"
            >
                <span className="text-[10px] font-bold tracking-widest uppercase">
                    {language === 'ko' ? 'EN' : 'KR'}
                </span>

                {/* Hover Effect */}
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>

            <div className="h-20 w-[1px] bg-white/20"></div>

            <div className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
                Language
            </div>
        </div>
    );
}
