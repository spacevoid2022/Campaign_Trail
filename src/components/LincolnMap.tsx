import React, { useState } from 'react';
import { GameState, Region } from '../types';
import { calculateProjectedVoteShare, calculateElectoralVotes } from '../utils/gameLogic';

interface Props {
  state: GameState;
  trumpMode: boolean;
  onRegionClick: (key: string) => void;
}

// Civil War era SVG map — shaped like the eastern United States
// Region keys map to historical zones:
//   northeast  → New England    (ME, NH, VT, MA, RI, CT)
//   west_coast → Mid-Atlantic   (NY, PA, NJ)
//   midwest    → Old Northwest  (OH, IN, IL, MI, WI)
//   plains     → Border States  (KY, MO, MD, WV, DE)
//   south      → Deep South     (VA, NC, SC, GA, AL, MS, LA, AR, TX, TN, FL)

// viewBox: "0 0 680 450"
// Key landmarks:
//   - Great Lakes notch at top-center (Old Northwest)
//   - New England protruding top-right
//   - Atlantic coast running diagonally top-right → bottom-right
//   - Florida peninsula bottom-right
//   - Gulf Coast sweeping bottom-left
//   - Mississippi River / western border on the left

const LINCOLN_PATHS: Record<string, string> = {
  // New England — compact top-right corner (ME, NH, VT, MA, RI, CT)
  northeast: [
    "M 438,56",   // left edge near Canadian border
    "L 578,28",   // Canadian border running right to Maine
    "L 605,32",   // Maine tip
    "L 624,92",   // Atlantic coast heading south
    "L 610,130",  // Cape Cod area
    "L 580,155",  // CT/RI coast
    "L 516,168",  // southwestern CT
    "L 450,168",  // NY border
    "L 435,112",  // heading back up-left
    "Z"
  ].join(" "),

  // Mid-Atlantic — NY, PA, NJ (right side below New England)
  west_coast: [
    "M 340,88",   // top-left (Upstate NY / PA border)
    "L 438,56",   // up to New England border
    "L 435,112",  // 
    "L 450,168",  // 
    "L 516,168",  //
    "L 580,155",  //
    "L 610,130",  //
    "L 624,92",   //
    "L 648,172",  // Atlantic coast heading south
    "L 636,252",  // Delaware/MD area
    "L 602,272",  //
    "L 522,285",  //
    "L 435,270",  //
    "L 382,242",  // 
    "L 340,88",   //
    "Z"
  ].join(" "),

  // Old Northwest — OH, IN, IL, MI, WI (center, large block)
  // Includes the Great Lakes "notch" — Michigan peninsula suggestion at top
  midwest: [
    "M 56,88",    // far left, Canada border
    "L 140,62",   // moving right along northern border
    "L 195,52",   // Great Lakes / Wisconsin area
    "L 238,62",   // dip down for Great Lakes (Lake Michigan notch)
    "L 260,48",   // back up — Upper Michigan peninsula hint
    "L 310,55",   // coming back down
    "L 340,88",   // right border meeting Mid-Atlantic
    "L 382,242",  // right side going south
    "L 320,285",  //
    "L 200,298",  //
    "L 98,278",   //
    "L 56,220",   //
    "Z"
  ].join(" "),

  // Border States — KY, MO, MD, WV, DE (diagonal middle band)
  plains: [
    "M 98,278",
    "L 200,298",
    "L 320,285",
    "L 382,242",
    "L 435,270",
    "L 522,285",
    "L 602,272",
    "L 636,252",
    "L 650,308",
    "L 620,338",
    "L 522,345",
    "L 350,345",
    "L 218,342",
    "L 110,348",
    "Z"
  ].join(" "),

  // Deep South — all Confederate states + Florida peninsula
  south: [
    "M 110,348",
    "L 218,342",
    "L 350,345",
    "L 522,345",
    "L 620,338",
    "L 650,308",
    "L 658,362",  // Atlantic coast continuing south
    "L 648,395",  // Florida east coast
    "L 628,428",  //
    "L 605,445",  // Florida tip
    "L 585,440",  //
    "L 572,448",  // southernmost tip
    "L 558,442",  //
    "L 545,435",  // Florida west coast heading back up
    "L 528,428",  //
    "L 498,432",  // Gulf Coast swinging west
    "L 440,440",  //
    "L 348,438",  //
    "L 238,432",  //
    "L 132,418",  //
    "L 98,392",   //
    "L 86,360",   //
    "Z"
  ].join(" "),
};

const LINCOLN_LABEL_POS: Record<string, { x: number; y: number }> = {
  northeast:  { x: 550, y: 108 },   // center of New England
  west_coast: { x: 530, y: 218 },   // center of Mid-Atlantic
  midwest:    { x: 195, y: 178 },   // center of Old Northwest
  plains:     { x: 380, y: 320 },   // center of Border States
  south:      { x: 310, y: 405 },   // center of Deep South (avoiding Florida)
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
          <svg viewBox="0 0 680 458" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-strong-player" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0369a1"/><stop offset="100%" stopColor="#0284c7"/></linearGradient>
              <linearGradient id="grad-lean-player" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0284c7"/><stop offset="100%" stopColor="#38bdf8"/></linearGradient>
              <linearGradient id="grad-tossup" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6d28d9"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
              <linearGradient id="grad-lean-opponent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#b91c1c"/><stop offset="100%" stopColor="#f87171"/></linearGradient>
              <linearGradient id="grad-strong-opponent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7f1d1d"/><stop offset="100%" stopColor="#dc2626"/></linearGradient>
              <filter id="sepia-tint"><feColorMatrix type="saturate" values="0.6"/></filter>
            </defs>

            {/* Map border outline */}
            <rect x="50" y="20" width="618" height="428" rx="8" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>

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
            <text x="340" y="452" textAnchor="middle" style={{ fill: 'rgba(255,255,255,0.08)', fontSize: '0.62rem', fontFamily: 'var(--font-main)', letterSpacing: '0.15em' }}>
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
