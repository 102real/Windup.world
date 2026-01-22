'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface TranslationData {
    header: {
        about: string;
        projects: string;
        contact: string;
    };
    about: {
        mission: string;
        movement: string;
        movementSub: string;
        scroll: string;
    };
    projects: {
        title: string;
        items: {
            [key: string]: {
                direction: string;
                description: string;
            };
        };
    };
    contact: {
        background: string;
        sub: string;
    };
}

const translations: Record<Language, TranslationData> = {
    ko: {
        header: {
            about: 'ABOUT',
            projects: 'PROJECTS',
            contact: 'CONTACT',
        },
        about: {
            mission: 'Our Mission',
            movement: '세상을 바꾸는',
            movementSub: '작은 회전',
            scroll: 'Scroll',
        },
        projects: {
            title: 'PROJECTS',
            items: {
                Showhand: {
                    direction: '마지막 패를 공개할 시간',
                    description: '모든 것이 불타 사라지는 전장, 침묵을 깨는 것은 카드 섞이는 소리뿐.\n운조차 실력이 되는 이곳에서 당신의 직감을 시험해 보세요.\n이 판을 뒤집을 주인공은 당신입니다.',
                },
                'Project G': {
                    direction: '중력을 뒤집을 시간',
                    description: '동료들과 함께 중력건을 쏘아 길을 만들고, 함정과 절벽을 넘어 앞으로 나아가세요.\n이 여정을 완성할 주인공은 당신의 팀입니다.',
                },
            },
        },
        contact: {
            background: 'Join the Movement',
            sub: 'Get in Touch',
        },
    },
    en: {
        header: {
            about: 'ABOUT',
            projects: 'PROJECTS',
            contact: 'CONTACT',
        },
        about: {
            mission: 'Our Mission',
            movement: 'Small Winding to',
            movementSub: 'Move the World Better',
            scroll: 'Scroll',
        },
        projects: {
            title: 'PROJECTS',
            items: {
                Showhand: {
                    direction: 'Time to reveal the last hand',
                    description: 'A battlefield where everything burns away, only the sound of shuffling cards breaks the silence.\nTest your intuition in a place where even luck becomes a skill.\nYou are the one to turn the tide.',
                },
                'Project G': {
                    direction: 'Time to flip gravity',
                    description: 'Shoot gravity guns with your comrades to create paths, and move forward across traps and cliffs.\nYour team is the one to complete this journey.',
                },
            },
        },
        contact: {
            background: 'Join the Movement',
            sub: 'Get in Touch',
        },
    },
};

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ko');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
