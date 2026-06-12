import React from 'react';
import { GameState } from '../types';

interface Props {
  state: GameState;
  onProceed: () => void;
}

export const MidtermPanel: React.FC<Props> = ({ state, onProceed }) => {
  return (
    <section className="glass-card scenario-card" id="midterm-panel">
      <div>
        <div className="scenario-phase-indicator" style={{ color: 'var(--color-neutral)' }}>CONGRESSIONAL MIDTERMS</div>
        <div className="scenario-question" style={{ marginBottom: '1rem' }}>Midterm Election Results</div>
        
        {state.congress_controlled ? (
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
            <h4 style={{ color: 'var(--color-success)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>🏛️ CONGRESS RETAINED</h4>
            <p style={{ color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1rem' }}>Your coattails held. The party maintains its Congressional majority — you retain full legislative power into the campaign.</p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Legislative Support: <strong style={{ color: 'var(--color-success)' }}>{state.legislative_support.toFixed(1)}%</strong></div>
          </div>
        ) : (
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
            <h4 style={{ color: 'var(--color-opponent)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>⚠️ CONGRESS LOST — GRIDLOCK</h4>
            <p style={{ color: '#cbd5e1', lineHeight: 1.4, marginBottom: '1rem' }}>Backlash down-ballot cost you the legislature. The opposition holds the majority.</p>
            <ul style={{ textAlign: 'left', fontSize: '0.82rem', color: '#94a3b8', margin: '1rem auto', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>💥 <strong>Voter Backlash:</strong> -5% National Approval.</li>
              <li>🔒 <strong>Bipartisan Deadlock:</strong> Political Capital locked at 0.</li>
              <li>📉 <strong>Campaign Friction:</strong> Campaign Stops are 20% less effective.</li>
            </ul>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>Legislative Support: <strong style={{ color: 'var(--color-opponent)' }}>{state.legislative_support.toFixed(1)}%</strong></div>
          </div>
        )}
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <button className="btn-restart" onClick={onProceed}>Transition to Campaign Phase →</button>
      </div>
    </section>
  );
};
