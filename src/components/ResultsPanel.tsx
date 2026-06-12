import React from 'react';
import { GameState, Candidate } from '../types';
import { calculateElectoralVotes, calculateProjectedVoteShare } from '../utils/gameLogic';

interface Props {
  state: GameState;
  candidate: Candidate | null;
  onRestart: () => void;
}

export const ResultsPanel: React.FC<Props> = ({ state, candidate, onRestart }) => {
  const { playerEV } = calculateElectoralVotes(state);
  const victory = playerEV >= 43;

  return (
    <section className="glass-card results-panel" id="results-panel">
      <h2 className={`results-outcome ${victory ? 'outcome-win' : 'outcome-loss'}`}>
        {victory ? "VICTORY! RE-ELECTED" : "DEFEAT — ONE TERM ONLY"}
      </h2>
      <p className="results-sub" dangerouslySetInnerHTML={{ __html: victory 
        ? `${candidate?.name || 'You'} secured <strong>${playerEV}</strong> Electoral Votes. A historic re-election.` 
        : `Only <strong>${playerEV}</strong> Electoral Votes secured. The challenger takes the White House.` 
      }}></p>
      
      <div className="results-stats-row">
        <div className="results-stat-box"><div className="results-stat-val">{playerEV}</div><div className="results-stat-lbl">Electoral Votes</div></div>
        <div className="results-stat-box"><div className="results-stat-val">{state.approval}%</div><div className="results-stat-lbl">Final Approval</div></div>
        <div className="results-stat-box"><div className="results-stat-val">{state.base_enthusiasm.toFixed(1)}%</div><div className="results-stat-lbl">Base Enthusiasm</div></div>
        <div className="results-stat-box"><div className="results-stat-val">${Math.round(state.funds / 1000)}K</div><div className="results-stat-lbl">Remaining Funds</div></div>
      </div>
      
      <table className="results-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>EV</th>
            <th>Final Split</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(state.regions).map(([key, r]) => {
            const share = calculateProjectedVoteShare(r, state);
            const oppShare = 100 - share;
            const won = share >= 50;
            return (
              <tr key={key}>
                <td><strong>{r.name}</strong></td>
                <td>{r.ev} EV</td>
                <td>
                  <span style={{ color: 'var(--color-player)', fontWeight: 'bold' }}>{share.toFixed(1)}%</span> vs <span style={{ color: 'var(--color-opponent)' }}>{oppShare.toFixed(1)}%</span>
                </td>
                <td>
                  {won ? <span className="badge-winner badge-player">INCUMBENT</span> : <span className="badge-winner badge-opponent">CHALLENGER</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn-restart" onClick={onRestart}>Choose New Candidate</button>
    </section>
  );
};
