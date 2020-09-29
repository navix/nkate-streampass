export interface Youtube {
  id: string;
  start?: number
}

export const stages: {
  amount: number;
  emoji?: string;
  description: string;
  ready?: true;
  done?: true;
  youtube?: Youtube[];
}[] = [
  {
    amount: 1000,
    description: 'Допроходимо Clustertruck (згорю) 🔥',
    ready: true,
    done: true,
    youtube: [{id: 'mvSQYobMn68'}, {id: 'MG54wswdgFM'}, {id: '4uYKSIF9GcA'}],
  },
  {
    amount: 2000,
    description: 'Джаст чутінг - відповідаю на анонімні культурні питання (буду червоніти)',
    ready: true,
    done: true,
    youtube: [{id: 'OAT2_FYVA70', start: 11069}],
  },
  {
    amount: 3000,
    description: ' Кукінг стрім - готуємо бургери',
    ready: true,
    done: true,
    youtube: [{id: 'OAT2_FYVA70'}],
  },
  {
    amount: 4000,
    description: 'Граю у Острів',
    ready: true,
    done: true,
    youtube: [{id: 'lV_DK_Dit3Y'}, {id: 'LnKQTnOec_g'}, {id: 'HQDhlxcS4kQ'}, {id: 'LcDMLcugzgY'}],
  },
  {
    amount: 5000,
    description: 'Граю у Spec Ops: The Line',
    ready: true,
    done: true,
    youtube: [{id: 'dmHVTxIT804'}],
  },
  {
    amount: 7000,
    description: 'Проходимо Ori and the Blind Forest (буду плакати) 🔥🔥',
    ready: true,
    done: true,
    youtube: [{id: '3JTdBa4f3oA'}, {id: 'gLMgvBUYCis'}, {id: 'guKqlKbt9nw'}, {
      id: 'YDfDItEXF_c',
      start: 8853,
    }, {id: 'QVJ7tXDeuUI'}],
  },
  {
    amount: 8000,
    description: 'DIY - робимо штучний бонсай / працюємо з епоксидною смолою (надихаюсь токсичності)',
    ready: true,
  },
  {
    amount: 10000,
    emoji: '✋',
    description: 'Граємо у Metal Gear Solid V: The Phantom Pain (моє знайомство з Кодзіма)',
  },
  {
    amount: 12500,
    emoji: '🥑',
    description: 'Minecraft (збираємось всі разом на город)',
  },
  {
    amount: 15000,
    emoji: '💣',
    description: 'DARK SOULS III 🔥🔥🔥',
  },
  {
    amount: 25000,
    emoji: '💀',
    description: 'Пройти Alien: Isolation (мінус сердечко)',
  },
  {
    amount: 100000,
    emoji: '🤫',
    description: 'X',
  },
];
