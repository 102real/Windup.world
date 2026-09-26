import type { GameKey } from '@/context/LanguageContext';

export type Game = {
  key: GameKey;
  name: string;
  steamUrl: string;
  cover: string;
  keyArt: string;
  shots: string[];
  tags: string[];
};

const cdn = (appId: number, path: string) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/${path}`;

export const games: Game[] = [
  {
    key: 'bob',
    name: 'BOB LOGISTICS',
    keyArt: '/games/bob-key.webp',
    steamUrl: 'https://store.steampowered.com/app/5009390/BOB_LOGISTICS/',
    cover: cdn(5009390, 'd690f5751f142483be426f7eb89116f03dd2c97f/ss_d690f5751f142483be426f7eb89116f03dd2c97f.1920x1080.jpg'),
    shots: [
      cdn(5009390, 'cd1870594a01de90d258f827120708b991e6f332/ss_cd1870594a01de90d258f827120708b991e6f332.1920x1080.jpg'),
      cdn(5009390, '8ab18e549b68c3fc3853b357ad8bf3d4afb72360/ss_8ab18e549b68c3fc3853b357ad8bf3d4afb72360.1920x1080.jpg'),
    ],
    tags: ['Simulation', 'Single Player', 'Controller'],
  },
  {
    key: 'omg',
    name: 'OMG: Oh My Gravity',
    keyArt: '/games/omg-key.webp',
    steamUrl: 'https://store.steampowered.com/app/4630920/OMG_Oh_My_Gravity/',
    cover: cdn(4630920, '550935f95b7f93d47a0d8fdfb884199cc4336180/ss_550935f95b7f93d47a0d8fdfb884199cc4336180.1920x1080.jpg'),
    shots: [
      cdn(4630920, 'da9a6a1330be1c680e1293e6a6fbffb60738ce50/ss_da9a6a1330be1c680e1293e6a6fbffb60738ce50.1920x1080.jpg'),
      cdn(4630920, '529d2e98ecd6b99b35e66ad435be66a2c2cc983e/ss_529d2e98ecd6b99b35e66ad435be66a2c2cc983e.1920x1080.jpg'),
    ],
    tags: ['Online Co-op 3–4P', 'Physics Puzzle', 'Casual'],
  },
];
