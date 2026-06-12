import { GameState } from '../types';

// Lincoln's 1860-era map uses the same 5 region keys but mapped to Civil War-era regions:
//   northeast  → New England    (ME, NH, VT, MA, RI, CT)
//   west_coast → Mid-Atlantic   (NY, PA, NJ)
//   midwest    → Old Northwest  (OH, IN, IL, MI, WI)
//   plains     → Border States  (KY, MO, MD, WV, DE)
//   south      → Deep South     (VA, NC, SC, GA, AL, MS, LA, AR, TX, TN, FL)

export const LINCOLN_INITIAL_STATE: GameState = {
  political_capital: 70,
  approval: 55,
  base_enthusiasm: 65,
  funds: 100000,
  legislative_support: 65,
  current_turn: 1,
  campaign_stop: null,
  congress_controlled: true,
  bully_pulpit_used: false,
  primary_challenged: false,
  trump_loyalty: { south: 50, plains: 50 },
  regions: {
    northeast: {
      name: "New England", ev: 15, base_incumbent: 72.0, incumbent_pct: 72.0, path_id: "region-ne", short: "ne",
      demands: ["Abolition of Slavery", "Free Labor Economy", "Industrial Tariffs"],
      icon: "🏛️", alienated: false, trump_sensitive: false
    },
    west_coast: {
      name: "Mid-Atlantic", ev: 22, base_incumbent: 53.0, incumbent_pct: 53.0, path_id: "region-wc", short: "wc",
      demands: ["Union Preservation", "Protective Tariffs", "Railroad Expansion"],
      icon: "🗽", alienated: false, trump_sensitive: false
    },
    midwest: {
      name: "Old Northwest", ev: 20, base_incumbent: 55.0, incumbent_pct: 55.0, path_id: "region-mw", short: "mw",
      demands: ["Homestead Act", "Free Soil Policy", "Infrastructure Investment"],
      icon: "🌽", alienated: false, trump_sensitive: false
    },
    plains: {
      name: "Border States", ev: 12, base_incumbent: 42.0, incumbent_pct: 42.0, path_id: "region-pl", short: "pl",
      demands: ["Union Loyalty", "No Emancipation", "State Sovereignty"],
      icon: "⚖️", alienated: false, trump_sensitive: false
    },
    south: {
      name: "Deep South", ev: 16, base_incumbent: 28.0, incumbent_pct: 28.0, path_id: "region-so", short: "so",
      demands: ["Slavery Preservation", "States' Rights", "Low Federal Tariffs"],
      icon: "🌾", alienated: false, trump_sensitive: false
    }
  }
};
