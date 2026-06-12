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
  }
];
