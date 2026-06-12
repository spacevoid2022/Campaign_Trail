import React, { useState } from 'react';
import { GameState, Region } from '../types';
import { calculateProjectedVoteShare, calculateElectoralVotes } from '../utils/gameLogic';

interface Props {
  state: GameState;
  trumpMode: boolean;
  onRegionClick: (key: string) => void;
}

// Civil War era SVG map
// Region keys map to historical zones:
//   northeast  → New England
//   west_coast → Mid-Atlantic
//   midwest    → Old Northwest (Ohio/Indiana/Illinois/Michigan area)
//   plains     → Border States (KY, MO, MD, WV)
//   south      → Deep South

const LINCOLN_PATHS: Record<string, string> = {
  // New England — compact top-right cluster
  northeast:  "M 468,22 L 640,22 L 646,100 L 468,110 Z",
  // Mid-Atlantic — right side trapezoid (NY, PA, NJ)
  west_coast: "M 354,28 L 468,22 L 468,110 L 428,190 L 354,190 Z",
  // Old Northwest — large center-left block (OH, IN, IL, MI, WI)
  midwest:    "M 30,28 L 354,28 L 354,190 L 200,232 L 30,200 Z",
  // Border States — diagonal middle band (KY, MO, MD, WV, DE)
  plains:     "M 200,232 L 428,190 L 468,110 L 534,190 L 540,268 L 200,268 Z",
  // Deep South — huge bottom section
  south:      "M 30,200 L 200,268 L 540,268 L 590,382 L 30,382 Z",
};

const LINCOLN_LABEL_POS: Record<string, { x: number; y: number }> = {
  northeast:  { x: 557, y: 60 },
  west_coast: { x: 410, y: 108 },
  midwest:    { x: 185, y: 118 },
  plains:     { x: 372, y: 232 },
  south:      { x: 308, y: 328 },
};

export const LincolnMap: React.FC<Props> = ({ state, trumpMode: _trumpMode, onRegionClick }) => {
  const [hoverRegion, setHoverRegion] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { playerEV, opponentEV } = calculateElectoralVotes(state);

  const getFill = (pct: number) => {
    if (pct > 60)  return 'url(#grad-strong-player)';
    if (pct > 51)  return 'url(#grad-lean-player)';
    if (pct >= 49) return 'url(#grad-tossup)';
    if (pct >= 40) return 'url(#grad-lean-opponent)';
    return 'url(#grad-strong-opponent)';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    let x = e.pageX + 18;
    let y = e.pageY + 18;
    if (x + 220 > window.innerWidth) x = e.pageX - 230;
    setMousePos({ x, y });
    setHoverRegion(e.currentTarget.getAttribute('data-region-key'));
  };

  return (
    <>
      <div className="glass-card map-card">
        <h2 className="card-title" style={{ width: '100%' }}>
          Electoral Map <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>— 1864 USA</span>
          <span
            className="badge"
            style={{
              background: state.current_turn <= 5 ? 'rgba(139,92,246,0.15)' : 'rgba(16,185,129,0.15)',
              color: state.current_turn <= 5 ? 'var(--color-neutral)' : 'var(--color-success)'
            }}
          >
            {state.current_turn <= 5 ? 'GOVERNING' : 'CAMPAIGN STOP'}
          </span>
        </h2>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Object.entries(state.regions).map(([key, r]) => (
            <span key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: getFill(calculateProjectedVoteShare(r, state)).includes('#') ? getFill(calculateProjectedVoteShare(r, state)) : '#555' }}></span>
              {r.icon} {r.name}
            </span>
          ))}
        </div>

        <div className="map-svg-container">
          <svg viewBox="0 0 680 408" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-strong-player" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0369a1"/><stop offset="100%" stopColor="#0284c7"/></linearGradient>
              <linearGradient id="grad-lean-player" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0284c7"/><stop offset="100%" stopColor="#38bdf8"/></linearGradient>
              <linearGradient id="grad-tossup" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6d28d9"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
              <linearGradient id="grad-lean-opponent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#b91c1c"/><stop offset="100%" stopColor="#f87171"/></linearGradient>
              <linearGradient id="grad-strong-opponent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7f1d1d"/><stop offset="100%" stopColor="#dc2626"/></linearGradient>
              <filter id="sepia-tint"><feColorMatrix type="saturate" values="0.6"/></filter>
            </defs>

            {/* Map border outline */}
            <rect x="28" y="20" width="620" height="365" rx="6" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>

            {Object.entries(state.regions).map(([key, r]) => {
              const pct = calculateProjectedVoteShare(r, state);
              const classes = ['region-path'];
              if (state.campaign_stop === key) classes.push('selected-stop');
              if (r.alienated) classes.push('alienated-region');

              return (
                <path
                  key={key}
                  data-region-key={key}
                  className={classes.join(' ')}
                  d={LINCOLN_PATHS[key]}
                  style={{ fill: getFill(pct) }}
                  onMouseEnter={() => setHoverRegion(key)}
                  onMouseLeave={() => setHoverRegion(null)}
                  onMouseMove={handleMouseMove}
                  onClick={() => onRegionClick(key)}
                />
              );
            })}

            {/* Labels */}
            {Object.entries(state.regions).map(([key, r]) => {
              const pos = LINCOLN_LABEL_POS[key];
              const pct = calculateProjectedVoteShare(r, state);
              const opp = 100 - pct;
              const pollColor = pct > 50 ? '#38bdf8' : '#f87171';
              return (
                <g key={key}>
                  <text x={pos.x} y={pos.y - 14} className="map-label-name" textAnchor="middle">{r.name.toUpperCase()}</text>
                  <text x={pos.x} y={pos.y} className="map-label-votes" textAnchor="middle">{r.ev} EV</text>
                  <text x={pos.x} y={pos.y + 14} className="map-label-polling" textAnchor="middle" style={{ fill: pollColor }}>
                    {pct.toFixed(0)}%–{opp.toFixed(0)}%
                  </text>
                </g>
              );
            })}

            {/* Era watermark */}
            <text x="340" y="400" textAnchor="middle" style={{ fill: 'rgba(255,255,255,0.08)', fontSize: '0.62rem', fontFamily: 'var(--font-main)', letterSpacing: '0.15em' }}>
              UNITED STATES OF AMERICA · 1864
            </text>
          </svg>
        </div>

        {/* EV Tracker */}
        <div className="ev-tracker-container" style={{ width: '100%' }}>
          <div className="ev-marker-label">43 TO WIN</div>
          <div className="ev-tracker-header">
            <span style={{ color: 'var(--color-player)' }}>Union: {playerEV} EV</span>
            <span style={{ color: 'var(--color-opponent)' }}>Opposition: {opponentEV} EV</span>
          </div>
          <div className="ev-bar-wrapper">
            <div className="ev-marker-win"></div>
            <div className="ev-bar-player" style={{ width: `${(playerEV / 85) * 100}%` }}></div>
            <div className="ev-bar-opponent" style={{ width: `${(opponentEV / 85) * 100}%` }}></div>
          </div>
        </div>
      </div>

      {hoverRegion && state.regions[hoverRegion as keyof typeof state.regions] && (
        <LincolnTooltip
          region={state.regions[hoverRegion as keyof typeof state.regions]}
          state={state}
          x={mousePos.x}
          y={mousePos.y}
        />
      )}
    </>
  );
};

const LincolnTooltip: React.FC<{ region: Region; state: GameState; x: number; y: number }> = ({ region, state, x, y }) => {
  const pct = calculateProjectedVoteShare(region, state);
  const opp = 100 - pct;
  const margin = pct - opp;

  let statusLabel, statusColor;
  if (pct > 60)       { statusLabel = 'Strong Union';        statusColor = '#38bdf8'; }
  else if (pct > 51)  { statusLabel = 'Lean Union';          statusColor = '#0ea5e9'; }
  else if (pct >= 49) { statusLabel = 'Contested';           statusColor = '#a78bfa'; }
  else if (pct >= 40) { statusLabel = 'Lean Opposition';     statusColor = '#f87171'; }
  else                { statusLabel = 'Strong Opposition';   statusColor = '#ef4444'; }

  return (
    <div className="map-tooltip" style={{ left: x, top: y, opacity: 1, zIndex: 999 }}>
      <div className="tooltip-header">{region.icon} {region.name} ({region.ev} EV)</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '0.92rem', margin: '0.3rem 0' }}>
        <span style={{ color: '#38bdf8' }}>Union {pct.toFixed(1)}%</span>&nbsp;
        <span style={{ color: '#f87171' }}>Opp. {opp.toFixed(1)}%</span>
      </div>
      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        <span style={{ fontWeight: 'bold', color: statusColor }}>{statusLabel}</span> ({Math.abs(margin).toFixed(1)}% margin)
      </div>
      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
        <strong style={{ color: '#fff' }}>📋 Regional Demands:</strong>
        <ul style={{ marginTop: '0.2rem', paddingLeft: '0.25rem' }}>
          {region.demands.map(d => <li key={d}>• {d}</li>)}
        </ul>
      </div>
      {region.alienated && (
        <div style={{ marginTop: '0.5rem', color: '#fca5a5', fontWeight: 'bold', fontSize: '0.75rem' }}>⚠️ STATUS: ALIENATED — Support collapsing</div>
      )}
      {state.current_turn >= 6 && state.current_turn <= 10 && (
        <div style={{ marginTop: '0.4rem', color: '#10b981', fontSize: '0.72rem', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.3rem' }}>
          👉 Click to select as Campaign Stop
        </div>
      )}
    </div>
  );
};
