import { GameState } from '../types';

export const INITIAL_STATE: GameState = {
  political_capital: 50,
  approval: 48,
  base_enthusiasm: 45,
  funds: 150000,
  legislative_support: 50,
  current_turn: 1,
  campaign_stop: null,
  congress_controlled: true,
  bully_pulpit_used: false,
  primary_challenged: false,
  trump_loyalty: { south: 50, plains: 50 },
  regions: {
    northeast: {
      name: "Northeast", ev: 18, base_incumbent: 54.0, incumbent_pct: 54.0, path_id: "region-ne", short: "ne",
      demands: ["Climate Action", "Healthcare Access", "Foreign Policy Stability"],
      icon: "🏙️", alienated: false, trump_sensitive: false
    },
    west_coast: {
      name: "West Coast", ev: 21, base_incumbent: 56.0, incumbent_pct: 56.0, path_id: "region-wc", short: "wc",
      demands: ["Clean Energy", "Immigration Reform", "Tech Industry Support"],
      icon: "🌊", alienated: false, trump_sensitive: false
    },
    midwest: {
      name: "Midwest", ev: 16, base_incumbent: 49.0, incumbent_pct: 49.0, path_id: "region-mw", short: "mw",
      demands: ["Manufacturing Jobs", "Trade Protections", "Infrastructure"],
      icon: "🏭", alienated: false, trump_sensitive: false
    },
    south: {
      name: "South", ev: 20, base_incumbent: 43.0, incumbent_pct: 43.0, path_id: "region-so", short: "so",
      demands: ["Fossil Fuel Access", "Conservative Courts", "Fiscal Austerity"],
      icon: "⭐", alienated: false, trump_sensitive: true
    },
    plains: {
      name: "Plains", ev: 10, base_incumbent: 38.0, incumbent_pct: 38.0, path_id: "region-pl", short: "pl",
      demands: ["Agricultural Subsidies", "Gun Rights", "Border Security"],
      icon: "🌾", alienated: false, trump_sensitive: true
    }
  }
};
