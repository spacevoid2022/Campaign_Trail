import React from 'react';
import { GameState } from '../types';
import { calculateProjectedVoteShare } from '../utils/gameLogic';

interface Props {
  state: GameState;
  onRegionClick: (key: string) => void;
}

export const PollingPanel: React.FC<Props> = ({ state, onRegionClick }) => {
  return (
    <aside className="glass-card polling-panel">
      <h2 className="card-title" style={{ marginBottom: '0.75rem' }}>Regional Polling</h2>
      {Object.entries(state.regions).map(([key, r]) => {
        const pct = calculateProjectedVoteShare(r, state);
        const oppPct = 100 - pct;
        return (
          <div 
            key={key} 
            className={`polling-row ${r.alienated ? 'alienated-row' : ''}`} 
            onClick={() => onRegionClick(key)}
            style={{ cursor: 'pointer' }}
          >
            <div className="polling-row-header">
              <span>{r.name}</span>
              <span className={`alienated-badge ${r.alienated ? 'visible' : ''}`} style={{ display: r.alienated ? 'inline-flex' : 'none' }}>⚠️ ALIENATED</span>
              <span className="polling-row-ev">{r.ev} EV</span>
            </div>
            <div className="polling-split-bar">
              <div className="split-player" style={{ width: `${pct}%` }}></div>
              <div className="split-opponent" style={{ width: `${oppPct}%` }}></div>
            </div>
            <div className="polling-numeric">
              <span className="polling-numeric-player">{pct.toFixed(1)}%</span>
              <span className="polling-numeric-opponent">{oppPct.toFixed(1)}%</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
};
