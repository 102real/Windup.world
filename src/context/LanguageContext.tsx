'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

export type GameKey = 'bob' | 'omg';
export type HistoryKey = 'devcamp' | 'aiGrant' | 'makers';

interface TranslationData {
    header: {
        studio: string;
        games: string;
        history: string;
        contact: string;
    };
    hero: {
        tagline: string;
        taglineSub: string;
        intro: string;
        scroll: string;
        status: string;
    };
    studio: {
        label: string;
        headline: string;
        headlineSub: string;
        paragraphs: string[];
    };
    games: {
        label: string;
        wishlist: string;
        onSteam: string;
        gallery: string;
        release: string;
        items: Record<GameKey, {
            tagline: string;
            description: string;
            release: string;
        }>;
    };
    history: {
        label: string;
        items: Record<HistoryKey, string>;
    };
    contact: {
        label: string;
        headline: string;
        sub: string;
        top: string;
    };
}

const translations: Record<Language, TranslationData> = {
    ko: {
        header: {
            studio: 'STUDIO',
            games: 'GAMES',
            history: 'HISTORY',
            contact: 'CONTACT',
        },
        hero: {
            tagline: '세상을 바꾸는',
            taglineSub: '작은 회전',
            intro: '작은 아이디어와 이야기로 새로운 경험을 만듭니다.',
            scroll: 'Scroll',
            status: '출시 예정',
        },
        studio: {
            label: 'Studio',
            headline: 'A small turn',
            headlineSub: 'that changes the world.',
            paragraphs: [
                '와인드업(WINDUP)은 ‘세상을 바꾸는 작은 회전’을 향해 나아가는 게임 개발사입니다. 우리는 작은 아이디어와 이야기가 사람들에게 새로운 경험을 만들고, 그 경험이 결국 더 큰 변화를 만들어낼 수 있다고 믿습니다.',
                '현재 《OMG: Oh My Gravity》와 《BOB LOGISTICS》를 시작으로 자체 IP와 세계관을 확장하고 있으며, 앞으로도 여러 게임과 콘텐츠가 하나의 세계로 이어지는 독창적인 IP를 만들어가고자 합니다.',
            ],
        },
        games: {
            label: 'Games',
            wishlist: 'Steam 위시리스트',
            onSteam: 'Steam에서 만나요',
            gallery: '스크린샷',
            release: 'Release',
            items: {
                bob: {
                    tagline: '인턴의 첫 출근, 창고에서 시작된다',
                    description: '밥컴퍼니 인턴의 첫 하루는 창고에서 시작됩니다.\n주문서를 확인하고, 맞는 물건을 찾아 포장대로 옮기고, 상자를 채워서 내보내세요.',
                    release: '2026.11.02',
                },
                omg: {
                    tagline: '쓰레기도, 동료도, 당신도 끌려간다',
                    description: '우주 청소부 면허 시험에 합격하려면 3~4인이 한 조가 되어야 합니다.\n중력탄으로 바닥, 벽, 천장 어디에든 중력장을 만들고 쓰레기가 흘러갈 길을 설계하세요.\n단, 중력장은 쓰레기만 골라 당기지 않습니다.',
                    release: '2027 Q1',
                },
            },
        },
        history: {
            label: 'History',
            items: {
                devcamp: '코리아 인디게임 데브캠프(개인) 3단계 진출',
                aiGrant: '게임제작환경 인공지능 전환 지원사업 선정',
                makers: '미니게임 메이커스 챌린지 최우수상 수상',
            },
        },
        contact: {
            label: 'Contact',
            headline: '함께 만들어갈 이야기를 기다립니다',
            sub: '퍼블리싱, 협업, 미디어 문의',
            top: 'Back to top',
        },
    },
    en: {
        header: {
            studio: 'STUDIO',
            games: 'GAMES',
            history: 'HISTORY',
            contact: 'CONTACT',
        },
        hero: {
            tagline: 'A small winding',
            taglineSub: 'that moves the world',
            intro: 'We craft new experiences from small ideas and stories.',
            scroll: 'Scroll',
            status: 'Launching',
        },
        studio: {
            label: 'Studio',
            headline: 'A small turn',
            headlineSub: 'that changes the world.',
            paragraphs: [
                'WINDUP is a game studio moving toward "a small turn that changes the world." We believe small ideas and stories can create new experiences for people — and that those experiences can ultimately spark greater change.',
                'Starting with OMG: Oh My Gravity and BOB LOGISTICS, we are expanding our own IP and universe, aiming to build an original IP where many games and stories connect into a single world.',
            ],
        },
        games: {
            label: 'Games',
            wishlist: 'Wishlist on Steam',
            onSteam: 'Now on Steam',
            gallery: 'Screenshots',
            release: 'Release',
            items: {
                bob: {
                    tagline: 'An intern’s first day starts in the warehouse',
                    description: 'Your first day as an intern at BOB Company begins in the warehouse.\nCheck the order, find the right items, carry them to the packing station, and ship out the box.',
                    release: 'Nov 2, 2026',
                },
                omg: {
                    tagline: 'Junk, teammates, and you — everything gets pulled in',
                    description: 'To pass the space janitor license exam, you need a crew of 3–4.\nFire gravity shots to create gravity fields on floors, walls, or ceilings, and design the path the junk will flow.\nJust remember: gravity doesn’t pick favorites.',
                    release: 'Q1 2027',
                },
            },
        },
        history: {
            label: 'History',
            items: {
                devcamp: 'Advanced to Stage 3 of Korea Indie Game Dev Camp (Individual)',
                aiGrant: 'Selected for the Game Production AI Transformation Support Program',
                makers: 'Grand Prize, Mini Game Makers Challenge',
            },
        },
        contact: {
            label: 'Contact',
            headline: 'Let’s build the next story together',
            sub: 'Publishing, partnership & press',
            top: 'Back to top',
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
