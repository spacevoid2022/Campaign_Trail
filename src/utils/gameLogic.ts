import { Region, GameState } from '../types';

export function calculateProjectedVoteShare(region: Region, state: GameState): number {
  const approvalWeight = 0.15 * (state.approval - 50);
  const enthusiasmWeight = 0.10 * (state.base_enthusiasm - 45);
  return Math.max(0, Math.min(100, region.incumbent_pct + approvalWeight + enthusiasmWeight));
}

export function calculateElectoralVotes(state: GameState) {
  let playerEV = 0;
  let opponentEV = 0;
  
  for (const region of Object.values(state.regions)) {
    if (calculateProjectedVoteShare(region, state) >= 50) {
      playerEV += region.ev;
    } else {
      opponentEV += region.ev;
    }
  }
  
  return { playerEV, opponentEV };
}
