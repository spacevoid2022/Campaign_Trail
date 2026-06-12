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
    approval: 46, capital: 55, enthusiasm: 85, funds: 190000, legislative_support: 45,
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
  }
];
