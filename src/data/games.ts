import type { GameKey } from '@/context/LanguageContext';

export type Game = {
  key: GameKey;
  name: string;
  steamUrl: string;
  keyArt: string;
  shots: string[];
  tags: string[];
};

// Steam store screenshot URL from its hash (as listed by the store's appdetails API)
const shot = (appId: number, hash: string) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/${hash}/ss_${hash}.1920x1080.jpg`;

export const games: Game[] = [
  {
    key: 'bob',
    name: 'BOB LOGISTICS',
    keyArt: '/games/bob-key.webp',
    steamUrl: 'https://store.steampowered.com/app/5009390/BOB_LOGISTICS/',
    shots: [
      'd690f5751f142483be426f7eb89116f03dd2c97f',
      'cd1870594a01de90d258f827120708b991e6f332',
      '8ab18e549b68c3fc3853b357ad8bf3d4afb72360',
      '56f06f14542a8351e00e896ad0309022c51ea40d',
      '6c0378ca0bd8dea9e4c5c4a6f3e46c71f33aa660',
      '565bb72b7cdae2113bc252c92a7277cdcd582669',
    ].map((hash) => shot(5009390, hash)),
    tags: ['Simulation', 'Single Player', 'Controller'],
  },
  {
    key: 'omg',
    name: 'OMG: Oh My Gravity',
    keyArt: '/games/omg-key.webp',
    steamUrl: 'https://store.steampowered.com/app/4630920/OMG_Oh_My_Gravity/',
    shots: [
      '550935f95b7f93d47a0d8fdfb884199cc4336180',
      'da9a6a1330be1c680e1293e6a6fbffb60738ce50',
      '529d2e98ecd6b99b35e66ad435be66a2c2cc983e',
      'a54027e1b8018d490bb53e9ee5ea4c3812f665b0',
      '5ae52fad7165e589d26bd06f9b7a04b700af44d4',
    ].map((hash) => shot(4630920, hash)),
    tags: ['Online Co-op 3–4P', 'Physics Puzzle', 'Casual'],
  },
];
