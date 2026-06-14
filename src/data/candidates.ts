import { Candidate } from '../types';

export const CANDIDATES: Candidate[] = [
  {
    id: 'rfk_sr', name: 'Robert F. Kennedy', era: '1960s Progressive Democrat', icon: '🕊️',
    bio: "The champion of civil rights and anti-war idealism. Commanding oratorical skills and massive working-class crossover appeal, but his progressive idealism alienates the rural South and Plains.",
    accent: '#10b981',
    approval: 47, capital: 40, enthusiasm: 70, funds: 110000, legislative_support: 52,
    regions: { northeast: 58.0, west_coast: 55.0, midwest: 56.0, south: 40.0, plains: 33.0 },
    strengths: ['NE', 'MW'], weaknesses: ['PL', 'SO']
  },
  {
    id: 'tulsi', name: 'Tulsi Gabbard', era: 'Anti-War Populist', icon: '⚔️',
    bio: "A military veteran who defies left-right labels. Her anti-establishment and anti-war stance gives her unusual crossover strength in the South, while coastal progressives eye her with suspicion.",
    accent: '#f59e0b',
    approval: 46, capital: 45, enthusiasm: 55, funds: 130000, legislative_support: 48,
    regions: { northeast: 48.0, west_coast: 48.0, midwest: 52.0, south: 51.0, plains: 46.0 },
    strengths: ['SO', 'MW'], weaknesses: ['NE', 'WC']
  },
  {
    id: 'bernie', name: 'Bernie Sanders', era: 'Democratic Socialist', icon: '✊',
    bio: "The people's champion. Unmatched grassroots energy and passionate working-class rhetoric, but his far-left platform makes the South and Plains deeply hostile territory from day one.",
    accent: '#ef4444',
    approval: 42, capital: 60, enthusiasm: 78, funds: 80000, legislative_support: 55,
    regions: { northeast: 60.0, west_coast: 62.0, midwest: 44.0, south: 36.0, plains: 30.0 },
    strengths: ['NE', 'WC'], weaknesses: ['SO', 'PL']
  },
  {
    id: 'biden', name: 'Joe Biden', era: 'Moderate Democrat', icon: '🇺🇸',
    bio: "The safe establishment pick. Decades of experience and broad coalition appeal provide a balanced map to start, but no region is genuinely fired up. Everything depends on your decisions.",
    accent: '#3b82f6',
    approval: 48, capital: 50, enthusiasm: 45, funds: 150000, legislative_support: 50,
    regions: { northeast: 54.0, west_coast: 56.0, midwest: 49.0, south: 43.0, plains: 38.0 },
    strengths: ['WC', 'NE'], weaknesses: ['PL']
  },
  {
    id: 'trump', name: 'Donald J. Trump', era: 'MAGA Populist', icon: '🦅',
    bio: "The 45th President. Commands fierce loyalty and massive base enthusiasm, particularly in the South and Plains, but faces intense polarization and stiff opposition on the coasts.",
    accent: '#dc2626',
    approval: 46, capital: 55, enthusiasm: 85, funds: 190000, legislative_support: 55,
    regions: { northeast: 40.0, west_coast: 35.0, midwest: 51.0, south: 58.0, plains: 62.0 },
    strengths: ['PL', 'SO'], weaknesses: ['WC', 'NE']
  },
  {
    id: 'newsom', name: 'Gavin Newsom', era: 'Coastal Progressive', icon: '🌉',
    bio: "The California governor is a fundraising powerhouse with immense strength on the coasts and among progressive elites, but he struggles to connect with working-class voters in the heartland.",
    accent: '#2563eb',
    approval: 45, capital: 45, enthusiasm: 60, funds: 180000, legislative_support: 52,
    regions: { northeast: 58.0, west_coast: 63.0, midwest: 44.0, south: 38.0, plains: 34.0 },
    strengths: ['WC', 'NE'], weaknesses: ['PL', 'SO']
  },
  {
    id: 'aoc', name: 'Alexandria Ocasio-Cortez', era: 'New Left Progressive', icon: '🗽',
    bio: "A charismatic champion of the Green New Deal and progressive taxation. Unrivaled grassroots enthusiasm among young urban voters on the coasts, but faces deep institutional resistance in rural areas.",
    accent: '#db2777',
    approval: 43, capital: 40, enthusiasm: 90, funds: 160000, legislative_support: 42,
    regions: { northeast: 62.0, west_coast: 64.0, midwest: 42.0, south: 32.0, plains: 28.0 },
    strengths: ['NE', 'WC'], weaknesses: ['SO', 'PL']
  },
  {
    id: 'obama', name: 'Barack Obama', era: 'Hope & Change Era', icon: '🌅',
    bio: "A historic generational talent with peerless rhetorical skills and broad coalition appeal. Excels at balancing the establishment with grassroots energy, forming a highly competitive map.",
    accent: '#0284c7',
    approval: 52, capital: 60, enthusiasm: 75, funds: 200000, legislative_support: 58,
    regions: { northeast: 58.0, west_coast: 59.0, midwest: 54.0, south: 45.0, plains: 40.0 },
    strengths: ['WC', 'NE'], weaknesses: ['PL']
  },
  {
    id: 'lincoln', name: 'Abraham Lincoln', era: 'Civil War Unifier', icon: '🎩',
    bio: "The Great Emancipator. An unparalleled statesman whose profound intellect and moral clarity can unite a fractured nation, though his profound principles often draw fierce regional hostility.",
    accent: '#475569',
    approval: 55, capital: 70, enthusiasm: 65, funds: 100000, legislative_support: 65,
    regions: { northeast: 72.0, west_coast: 53.0, midwest: 55.0, south: 28.0, plains: 42.0 },
    strengths: ['NE', 'MW'], weaknesses: ['SO'],
    mapId: 'lincoln'
  },
  {
    id: 'gwbush', name: 'George W. Bush', era: 'Post-9/11 War on Terror', icon: '🤠',
    bio: "The 'Decider.' Ascended to the presidency during a period of relative calm, only to be defined by the 9/11 attacks. Commands massive patriotic fervor and bipartisan support early on, but faces deep regional skepticism over his neoconservative foreign policy.",
    accent: '#b91c1c',
    approval: 55, capital: 75, enthusiasm: 65, funds: 180000, legislative_support: 60,
    regions: { northeast: 42.0, west_coast: 38.0, midwest: 50.0, south: 62.0, plains: 65.0 },
    strengths: ['PL', 'SO'], weaknesses: ['WC', 'NE']
  },
  {
    id: 'reagan', name: 'Ronald Reagan', era: 'The Reagan Revolution', icon: '🎬',
    bio: "The Great Communicator. A master of the bully pulpit who reshaped the American economy and foreign policy. His optimism and 'Morning in America' messaging give him broad national appeal, though his economic policies polarize the industrial heartland.",
    accent: '#991b1b',
    approval: 54, capital: 65, enthusiasm: 80, funds: 210000, legislative_support: 62,
    regions: { northeast: 50.0, west_coast: 52.0, midwest: 54.0, south: 60.0, plains: 64.0 },
    strengths: ['PL', 'SO', 'MW'], weaknesses: ['NE']
  }
];
