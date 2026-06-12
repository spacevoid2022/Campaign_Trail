export interface Region {
  name: string;
  ev: number;
  base_incumbent: number;
  incumbent_pct: number;
  path_id: string;
  short: string;
  demands: string[];
  icon: string;
  alienated: boolean;
  trump_sensitive: boolean;
}

export interface Regions {
  northeast: Region;
  west_coast: Region;
  midwest: Region;
  south: Region;
  plains: Region;
}

export interface TrumpLoyalty {
  south: number;
  plains: number;
}

export interface GameState {
  political_capital: number;
  approval: number;
  base_enthusiasm: number;
  funds: number;
  legislative_support: number;
  current_turn: number;
  campaign_stop: keyof Regions | null;
  congress_controlled: boolean;
  bully_pulpit_used: boolean;
  primary_challenged: boolean;
  trump_loyalty: TrumpLoyalty;
  regions: Regions;
}

export interface Candidate {
  id: string;
  name: string;
  era: string;
  icon: string;
  bio: string;
  accent: string;
  approval: number;
  capital: number;
  enthusiasm: number;
  funds: number;
  legislative_support: number;
  regions: {
    northeast: number;
    west_coast: number;
    midwest: number;
    south: number;
    plains: number;
  };
  strengths: string[];
  weaknesses: string[];
}

export interface AnswerEffects {
  political_capital: number;
  approval: number;
  base_enthusiasm: number;
  funds: number;
}

export interface ScenarioAnswer {
  text: string;
  feedback: string;
  effects: AnswerEffects;
  regional_effects?: Partial<Record<keyof Regions, number>>;
  legislative_effects?: number;
  trump_effects?: Partial<Record<keyof TrumpLoyalty, number>> | null;
  trump_tag?: 'plus' | 'minus' | null;
}

export interface Scenario {
  id: number;
  phase: 'governing' | 'campaign';
  question: string;
  answers: ScenarioAnswer[];
  candidate_id?: string;
}
