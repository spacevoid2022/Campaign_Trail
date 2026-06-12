import React from 'react';
import { Candidate } from '../types';

interface Props {
  candidate: Candidate | null;
  trumpMode: boolean;
  onToggleTrumpMode: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Header: React.FC<Props> = ({ candidate, trumpMode, onToggleTrumpMode, isMuted, onToggleMute }) => {
  return (
    <header>
      <div className="header-logo">
        <div className="logo-badge">I</div>
        <h1 className="header-title">INCUMBENT</h1>
        <span className="header-candidate-name">{candidate ? `— ${candidate.name}` : ''}</span>
      </div>
      <div className="header-controls">
        <button 
          className={`btn-trump-mode ${trumpMode ? 'active' : ''}`} 
          onClick={onToggleTrumpMode}
        >
          🔴 Trump Mode: {trumpMode ? 'ON' : 'OFF'}
        </button>
        <button className="btn-sound" onClick={onToggleMute}>
          <span>{isMuted ? '🔇' : '🔊'}</span>
          <span>{isMuted ? 'SFX OFF' : 'SFX ON'}</span>
        </button>
      </div>
    </header>
  );
};
