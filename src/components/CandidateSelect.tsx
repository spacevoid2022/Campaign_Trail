import React from 'react';
import { Candidate } from '../types';

interface Props {
  candidates: Candidate[];
  onSelect: (id: string) => void;
}

export const CandidateSelect: React.FC<Props> = ({ candidates, onSelect }) => {
  return (
    <div id="candidate-select-screen" className="select-screen-overlay">
      <div className="select-screen-content">
        <div className="select-screen-header">
          <div className="select-logo">
            <div className="select-logo-badge">I</div>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '0.08em', background: 'linear-gradient(to right,#fff,#94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              INCUMBENT
            </span>
          </div>
          <p className="select-screen-sub">Choose your candidate and shape America's destiny</p>
          <span className="select-year-badge">🗳️ Presidential Re-Election Simulator</span>
        </div>
        <div className="candidate-grid">
          {candidates.map(c => (
            <div key={c.id} className="candidate-card" style={{ '--accent-color': c.accent } as React.CSSProperties}>
              <div className="candidate-icon">{c.icon}</div>
              <h3 className="candidate-name">{c.name}</h3>
              <p className="candidate-era">{c.era}</p>
              <p className="candidate-bio">{c.bio}</p>
              <div className="candidate-mini-stats">
                <div className="mini-stat">
                  <span className="mini-stat-label">Approval</span>
                  <div className="mini-stat-bar"><div className="mini-stat-fill" style={{ width: `${c.approval}%` }}></div></div>
                  <span>{c.approval}%</span>
                </div>
                <div className="mini-stat">
                  <span className="mini-stat-label">Capital</span>
                  <div className="mini-stat-bar"><div className="mini-stat-fill" style={{ width: `${c.capital}%` }}></div></div>
                  <span>{c.capital}</span>
                </div>
                <div className="mini-stat">
                  <span className="mini-stat-label">Enthusiasm</span>
                  <div className="mini-stat-bar"><div className="mini-stat-fill" style={{ width: `${c.enthusiasm}%` }}></div></div>
                  <span>{c.enthusiasm}%</span>
                </div>
                <div className="mini-stat">
                  <span className="mini-stat-label">Funds</span>
                  <div className="mini-stat-bar"><div className="mini-stat-fill" style={{ width: `${(c.funds / 200000) * 100}%` }}></div></div>
                  <span>${(c.funds / 1000).toFixed(0)}K</span>
                </div>
              </div>
              <div className="candidate-region-tags">
                {c.strengths.map(r => <span key={r} className="region-tag strong">{r} ★</span>)}
                {c.weaknesses.map(r => <span key={r} className="region-tag weak">{r} ↓</span>)}
              </div>
              <button className="btn-select-candidate" onClick={() => onSelect(c.id)}>
                Run as {c.name.split(' ').pop()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
