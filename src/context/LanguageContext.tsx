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
                description?: string;
            } | undefined;
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
                SHOWHAND: {
                    direction: '마지막 패가 모든 것을 뒤집는다',
                    description: '모든 것이 불타 사라지는 전장, 침묵을 깨는 것은 카드 섞이는 소리뿐.\n운조차 실력이 되는 이곳에서 당신의 직감을 시험해 보세요.\n이 판을 뒤집을 주인공은 당신입니다.',
                },
                'OMG: Oh My Gravity': {
                    direction: '중력마저 발판이 된다',
                    description: '동료들과 함께 중력건을 쏘아 길을 만들고, 함정과 절벽을 넘어 앞으로 나아가세요.\n이 여정을 완성할 주인공은 당신의 팀입니다.',
                },
                CLIMB: {
                    direction: '무거울수록, 더 높이',
                    description: '어깨에 짊어진 짐이 무거울수록, 정상에서의 보상은 달콤해집니다.\n오르고, 나르고, 판매하며 당신만의 봉우리를 쌓아 올리세요.\n이 산의 정상에 설 주인공은 당신입니다.',
                },
                'Heart Stemp': {
                    direction: '통과한 선물만 그녀에게 닿는다',
                    description: '모든 선물에는 마음이 숨어 있습니다.\n열어 보고 판정하세요. 하트 스템프는 통과한 선물에만 찍힙니다.\n오직 선택받은 마음만이 그녀에게 전달됩니다.',
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
            movement: 'Small Winding',
            movementSub: 'to Move the World Better',
            scroll: 'Scroll',
        },
        projects: {
            title: 'PROJECTS',
            items: {
                SHOWHAND: {
                    direction: 'The last hand turns everything',
                    description: 'A battlefield where everything burns away, only the sound of shuffling cards breaks the silence.\nTest your intuition in a place where even luck becomes a skill.\nYou are the one to turn the tide.',
                },
                'OMG: Oh My Gravity': {
                    direction: 'Even gravity becomes your foothold',
                    description: 'Shoot gravity guns with your comrades to create paths, and move forward across traps and cliffs.\nYour team is the one to complete this journey.',
                },
                CLIMB: {
                    direction: 'The heavier, the higher',
                    description: 'The heavier the load on your shoulders, the sweeter the reward at the top.\nClimb, carry, and sell to build your own peak.\nYou are the one to stand at the summit.',
                },
                'Heart Stemp': {
                    direction: 'Only the gifts that pass reach Her',
                    description: 'Every gift hides a heart inside.\nOpen and judge — only the ones that pass earn the heart stamp.\nOnly the chosen hearts are delivered to Her.',
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
    setLanguage: (lang: Language) => void;
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
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
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
