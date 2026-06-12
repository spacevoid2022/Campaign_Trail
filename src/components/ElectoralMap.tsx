import React, { useState } from 'react';
import { GameState, Region } from '../types';
import { calculateProjectedVoteShare, calculateElectoralVotes } from '../utils/gameLogic';

interface Props {
  state: GameState;
  trumpMode: boolean;
  onRegionClick: (key: string) => void;
}

export const ElectoralMap: React.FC<Props> = ({ state, trumpMode, onRegionClick }) => {
  const [hoverRegion, setHoverRegion] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { playerEV, opponentEV } = calculateElectoralVotes(state);

  const getFill = (pct: number) => {
    if (pct > 55) return 'url(#grad-strong-player)';
    if (pct > 51) return 'url(#grad-lean-player)';
    if (pct >= 49) return 'url(#grad-tossup)';
    if (pct >= 45) return 'url(#grad-lean-opponent)';
    return 'url(#grad-strong-opponent)';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    let x = e.pageX + 18;
    let y = e.pageY + 18;
    if (x + 220 > window.innerWidth) x = e.pageX - 230;
    setHoverRegion(e.currentTarget.getAttribute('data-region-key'));
    setMousePos({ x, y });
  };

  return (
    <div className="map-grid">
      <div className="glass-card map-card">
        <h2 className="card-title" style={{ width: '100%' }}>
          Electoral Map
          <span 
            className="badge" 
            style={{
              background: state.current_turn <= 5 ? 'rgba(139,92,246,0.15)' : 'rgba(16,185,129,0.15)',
              color: state.current_turn <= 5 ? 'var(--color-neutral)' : 'var(--color-success)'
            }}
          >
            {state.current_turn <= 5 ? "GOVERNING" : "CAMPAIGN STOP"}
          </span>
        </h2>
        <div className="map-svg-container">
          <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-strong-player" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0369a1"/><stop offset="100%" stopColor="#0284c7"/></linearGradient>
              <linearGradient id="grad-lean-player" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0284c7"/><stop offset="100%" stopColor="#38bdf8"/></linearGradient>
              <linearGradient id="grad-tossup" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6d28d9"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
              <linearGradient id="grad-lean-opponent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#b91c1c"/><stop offset="100%" stopColor="#f87171"/></linearGradient>
              <linearGradient id="grad-strong-opponent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7f1d1d"/><stop offset="100%" stopColor="#dc2626"/></linearGradient>
            </defs>
            {Object.entries(state.regions).map(([key, r]) => {
              const pct = calculateProjectedVoteShare(r, state);
              const classes = ['region-path'];
              if (state.campaign_stop === key) classes.push('selected-stop');
              if (r.alienated) classes.push('alienated-region');
              
              const paths: any = {
                west_coast: "M 30,50 L 110,50 L 110,170 L 160,220 L 130,290 L 80,290 L 30,160 Z",
                plains: "M 110,50 L 270,50 L 270,220 L 160,220 L 110,170 Z",
                midwest: "M 270,50 L 430,50 L 430,150 L 270,150 Z",
                northeast: "M 430,50 L 560,40 L 580,110 L 470,150 L 430,150 Z",
                south: "M 160,220 L 270,220 L 270,150 L 430,150 L 470,150 L 510,210 L 470,280 L 310,280 L 130,290 Z"
              };

              return (
                <path 
                  key={key}
                  data-region-key={key}
                  className={classes.join(' ')}
                  d={paths[key]}
                  style={{ fill: getFill(pct) }}
                  onMouseEnter={() => setHoverRegion(key)}
                  onMouseLeave={() => setHoverRegion(null)}
                  onMouseMove={handleMouseMove}
                  onClick={() => onRegionClick(key)}
                />
              );
            })}
            
            <g><text x="75" y="145" className="map-label-name">WEST COAST</text><text x="75" y="160" className="map-label-votes">21 EV</text><text x="75" y="175" className="map-label-polling" style={{ fill: calculateProjectedVoteShare(state.regions.west_coast, state) > 50 ? '#38bdf8' : '#f87171' }}>{calculateProjectedVoteShare(state.regions.west_coast, state).toFixed(0)}%-{(100-calculateProjectedVoteShare(state.regions.west_coast, state)).toFixed(0)}%</text></g>
            <g><text x="190" y="125" className="map-label-name">PLAINS</text><text x="190" y="140" className="map-label-votes">10 EV</text><text x="190" y="155" className="map-label-polling" style={{ fill: calculateProjectedVoteShare(state.regions.plains, state) > 50 ? '#38bdf8' : '#f87171' }}>{calculateProjectedVoteShare(state.regions.plains, state).toFixed(0)}%-{(100-calculateProjectedVoteShare(state.regions.plains, state)).toFixed(0)}%</text></g>
            <g><text x="350" y="90" className="map-label-name">MIDWEST</text><text x="350" y="105" className="map-label-votes">16 EV</text><text x="350" y="120" className="map-label-polling" style={{ fill: calculateProjectedVoteShare(state.regions.midwest, state) > 50 ? '#38bdf8' : '#f87171' }}>{calculateProjectedVoteShare(state.regions.midwest, state).toFixed(0)}%-{(100-calculateProjectedVoteShare(state.regions.midwest, state)).toFixed(0)}%</text></g>
            <g><text x="495" y="90" className="map-label-name">NORTHEAST</text><text x="495" y="105" className="map-label-votes">18 EV</text><text x="495" y="120" className="map-label-polling" style={{ fill: calculateProjectedVoteShare(state.regions.northeast, state) > 50 ? '#38bdf8' : '#f87171' }}>{calculateProjectedVoteShare(state.regions.northeast, state).toFixed(0)}%-{(100-calculateProjectedVoteShare(state.regions.northeast, state)).toFixed(0)}%</text></g>
            <g><text x="320" y="225" className="map-label-name">SOUTH</text><text x="320" y="240" className="map-label-votes">20 EV</text><text x="320" y="255" className="map-label-polling" style={{ fill: calculateProjectedVoteShare(state.regions.south, state) > 50 ? '#38bdf8' : '#f87171' }}>{calculateProjectedVoteShare(state.regions.south, state).toFixed(0)}%-{(100-calculateProjectedVoteShare(state.regions.south, state)).toFixed(0)}%</text></g>
          </svg>
        </div>
        <div className="ev-tracker-container" style={{ width: '100%' }}>
          <div className="ev-marker-label">43 TO WIN</div>
          <div className="ev-tracker-header">
            <span style={{ color: 'var(--color-player)' }}>Incumbent: {playerEV} EV</span>
            <span style={{ color: 'var(--color-opponent)' }}>Challenger: {opponentEV} EV</span>
          </div>
          <div className="ev-bar-wrapper">
            <div className="ev-marker-win"></div>
            <div className="ev-bar-player" style={{ width: `${(playerEV / 85) * 100}%` }}></div>
            <div className="ev-bar-opponent" style={{ width: `${(opponentEV / 85) * 100}%` }}></div>
          </div>
        </div>
      </div>

      {hoverRegion && state.regions[hoverRegion as keyof typeof state.regions] && (
        <Tooltip region={state.regions[hoverRegion as keyof typeof state.regions]} state={state} trumpMode={trumpMode} x={mousePos.x} y={mousePos.y} />
      )}
    </div>
  );
};

const Tooltip: React.FC<{ region: Region; state: GameState; trumpMode: boolean; x: number; y: number }> = ({ region, state, trumpMode, x, y }) => {
  const pct = calculateProjectedVoteShare(region, state);
  const opp = 100 - pct;
  const margin = pct - opp;

  let statusLabel, statusColor;
  if (pct > 55) { statusLabel = 'Strong Incumbent'; statusColor = '#38bdf8'; }
  else if (pct > 51) { statusLabel = 'Lean Incumbent'; statusColor = '#0ea5e9'; }
  else if (pct >= 49) { statusLabel = 'Toss-up'; statusColor = '#a78bfa'; }
  else if (pct >= 45) { statusLabel = 'Lean Challenger'; statusColor = '#f87171'; }
  else { statusLabel = 'Strong Challenger'; statusColor = '#ef4444'; }

  return (
    <div className="map-tooltip" style={{ left: x, top: y, opacity: 1, zIndex: 999 }}>
      <div className="tooltip-header">{region.icon} {region.name} ({region.ev} EV)</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '0.92rem', margin: '0.3rem 0' }}>
        <span style={{ color: '#38bdf8' }}>Inc {pct.toFixed(1)}%</span> &nbsp; <span style={{ color: '#f87171' }}>Chal {opp.toFixed(1)}%</span>
      </div>
      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        <span style={{ fontWeight: 'bold', color: statusColor }}>{statusLabel}</span> ({Math.abs(margin).toFixed(1)}% margin)
      </div>
      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
        <strong style={{ color: '#fff' }}>📋 Key Priorities:</strong>
        <ul style={{ marginTop: '0.2rem', paddingLeft: '0.25rem' }}>
          {region.demands.map(d => <li key={d}>• {d}</li>)}
        </ul>
      </div>
      {region.alienated && (
        <div style={{ marginTop: '0.5rem', color: '#fca5a5', fontWeight: 'bold', fontSize: '0.75rem' }}>⚠️ STATUS: ALIENATED — Base turnout suppressed</div>
      )}
      {!region.alienated && pct > 55 && (
        <div style={{ marginTop: '0.5rem', color: '#10b981', fontSize: '0.75rem' }}>✅ STATUS: Favorable — Strong incumbent support</div>
      )}
      {trumpMode && region.trump_sensitive && (
        <div style={{ marginTop: '0.5rem', paddingTop: '0.35rem', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.75rem' }}>
          🇺🇸 Trump Loyalty: <strong style={{ color: (state.trump_loyalty as any)[region.short] > 55 ? '#f87171' : (state.trump_loyalty as any)[region.short] < 45 ? '#93c5fd' : '#fff' }}>
            {((state.trump_loyalty as any)[region.short] || 50).toFixed(0)}%
          </strong>
        </div>
      )}
      {state.current_turn >= 6 && state.current_turn <= 10 && (
        <div style={{ marginTop: '0.4rem', color: '#10b981', fontSize: '0.72rem', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.3rem' }}>
          👉 Click to select as Campaign Stop
        </div>
      )}
    </div>
  );
};
