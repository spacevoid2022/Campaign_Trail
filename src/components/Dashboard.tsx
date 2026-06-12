import React from 'react';
import { GameState } from '../types';

interface Props {
  state: GameState;
  logs: { msg: string; style: string }[];
  onBullyPulpit: () => void;
}

export const Dashboard: React.FC<Props> = ({ state, logs, onBullyPulpit }) => {
  return (
    <aside className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h2 className="card-title">
          Dashboard <span className="badge" style={{ background: 'rgba(14,165,233,0.15)', color: 'var(--color-player)' }}>STATUS</span>
        </h2>
        <div className="funds-container">
          <div className="funds-label">Campaign Budget</div>
          <div className="funds-value">${state.funds.toLocaleString()}</div>
        </div>
        <div className="metric-group">
          <div className="metric-label"><span>National Approval Rating</span><span className="metric-value">{state.approval}%</span></div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${state.approval}%`, backgroundColor: state.approval >= 50 ? 'var(--color-success)' : state.approval >= 40 ? 'var(--color-warning)' : 'var(--color-danger)' }}></div>
          </div>
        </div>
        <div className="metric-group">
          <div className="metric-label"><span>Political Capital</span><span className="metric-value">{state.political_capital}/100</span></div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${state.political_capital}%`, backgroundColor: 'var(--color-warning)' }}></div>
          </div>
        </div>
        <div className="metric-group">
          <div className="metric-label"><span>Base Enthusiasm</span><span className="metric-value">{state.base_enthusiasm.toFixed(1)}%</span></div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${state.base_enthusiasm}%`, backgroundColor: 'var(--color-neutral)' }}></div>
          </div>
        </div>
        <div className="metric-group">
          <div className="metric-label"><span>Legislative Support</span><span className="metric-value">{state.legislative_support.toFixed(0)}%</span></div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${state.legislative_support}%`, backgroundColor: state.legislative_support >= 50 ? 'var(--color-player)' : 'var(--color-danger)' }}></div>
          </div>
        </div>
        <button 
          className="btn-bully" 
          disabled={state.bully_pulpit_used || state.current_turn > 5}
          onClick={onBullyPulpit}
        >
          {state.bully_pulpit_used ? '🎙️ Bully Pulpit Used' : state.current_turn > 5 ? '🎙️ Campaign Mode Active' : '🎙️ Use Bully Pulpit'}
        </button>
      </div>
      <div className="history-log-wrapper">
        <h2 className="card-title" style={{ marginBottom: '0.75rem' }}>Cabinet Log</h2>
        <div className="history-log" id="history-log">
          {logs.map((log, i) => (
            <div key={i} className="log-entry" dangerouslySetInnerHTML={{ __html: log.msg }} style={{ fontWeight: 'bold', ...parseStyle(log.style) }}></div>
          ))}
        </div>
      </div>
    </aside>
  );
};

// Quick helper to convert inline string styles to React CSSProperties
function parseStyle(styleString: string): React.CSSProperties {
  if (!styleString) return {};
  return styleString.split(';').filter(Boolean).reduce((acc, style) => {
    const [key, value] = style.split(':').map(s => s.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      acc[camelKey as keyof React.CSSProperties] = value;
    }
    return acc;
  }, {} as any);
}
