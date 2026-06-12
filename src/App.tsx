import { useState } from 'react';
import { CandidateSelect } from './components/CandidateSelect';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ElectoralMap } from './components/ElectoralMap';
import { LincolnMap } from './components/LincolnMap';
import { PollingPanel } from './components/PollingPanel';
import { ScenarioCard } from './components/ScenarioCard';
import { MidtermPanel } from './components/MidtermPanel';
import { ResultsPanel } from './components/ResultsPanel';
import { CANDIDATES } from './data/candidates';
import { SCENARIOS } from './data/scenarios';
import { INITIAL_STATE } from './data/initialState';
import { LINCOLN_INITIAL_STATE } from './data/lincolnState';
import { GameState, Candidate, ScenarioAnswer, Regions } from './types';
import { AudioFX } from './utils/audio';
import { calculateProjectedVoteShare } from './utils/gameLogic';

type GamePhase = 'select' | 'governing' | 'midterm' | 'campaign' | 'results';

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('select');
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [trumpMode, setTrumpMode] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [logs, setLogs] = useState<{ msg: string; style: string }[]>([
    { msg: '<span style="color:var(--color-player)">[SYSTEM]</span> Simulation initialized. Governing phase active.<br/><span style="color:var(--text-secondary);font-size:0.75rem;">Monitor your statistics, maintain legislative allies, and prepare for the midterms.</span>', style: '' }
  ]);
  const [bullyModalOpen, setBullyModalOpen] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null);

  // Helper to show toast
  const showToast = (msg: string, type: string = 'info') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleSelectCandidate = (id: string) => {
    const c = CANDIDATES.find(x => x.id === id);
    if (!c) return;
    setCandidate(c);
    AudioFX.playPhase();

    // Use the correct base state for this candidate's map layout
    const baseState = c.mapId === 'lincoln' ? LINCOLN_INITIAL_STATE : INITIAL_STATE;
    const newState = { ...baseState };
    newState.approval = c.approval;
    newState.political_capital = c.capital;
    newState.base_enthusiasm = c.enthusiasm;
    newState.funds = c.funds;
    newState.legislative_support = c.legislative_support;

    // Deep copy regions and apply candidate starting polling values
    newState.regions = JSON.parse(JSON.stringify(baseState.regions));
    Object.keys(newState.regions).forEach(k => {
      const key = k as keyof Regions;
      newState.regions[key].incumbent_pct = c.regions[key];
      newState.regions[key].base_incumbent = c.regions[key];
    });

    setState(newState);
    setPhase('governing');
    showToast(`Now running as ${c.name}. Good luck, Mr. President!`, 'success');
  };

  const checkAlienation = (currentState: GameState, logChanges = true) => {
    let totalAlienated = 0;
    const newRegions = { ...currentState.regions };
    let newEnthusiasm = currentState.base_enthusiasm;

    Object.keys(newRegions).forEach(k => {
      const key = k as keyof Regions;
      const r = newRegions[key];
      const pct = calculateProjectedVoteShare(r, currentState);
      const wasAlienated = r.alienated;
      r.alienated = pct < 40.0;

      if (logChanges) {
        if (r.alienated && !wasAlienated) {
          AudioFX.playAlert();
          addLog(`⚠️ BACKLASH: The ${r.name} (${r.icon}) is deeply alienated by your policies!`, 'color:#f87171;');
          showToast(`⚠️ ${r.name} is now ALIENATED!`, 'warning');
        } else if (!r.alienated && wasAlienated) {
          addLog(`✅ RECOVERY: The ${r.name} (${r.icon}) has recovered.`, 'color:#10b981;');
          showToast(`✅ ${r.name} recovered.`, 'success');
        }
      }
      if (r.alienated) totalAlienated++;
    });

    if (logChanges && totalAlienated > 0) {
      newEnthusiasm = Math.max(0, newEnthusiasm - (totalAlienated * 1.0));
    }

    return { ...currentState, regions: newRegions, base_enthusiasm: newEnthusiasm };
  };

  const addLog = (msg: string, style: string = '') => {
    setLogs(prev => [...prev, { msg, style }]);
    setTimeout(() => {
      const el = document.getElementById('history-log');
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  };

  const handleAnswer = (answer: ScenarioAnswer) => {
    AudioFX.playClick();
    let nextState = { ...state };
    const eff = answer.effects;

    if (nextState.congress_controlled) {
      nextState.political_capital = Math.max(0, Math.min(100, nextState.political_capital + eff.political_capital));
    } else {
      nextState.political_capital = 0;
    }
    
    nextState.approval = Math.max(0, Math.min(100, nextState.approval + eff.approval));
    nextState.base_enthusiasm = Math.max(0, Math.min(100, nextState.base_enthusiasm + eff.base_enthusiasm));
    nextState.funds = Math.max(0, nextState.funds + eff.funds);

    if (answer.legislative_effects) {
      nextState.legislative_support = Math.max(0, Math.min(100, nextState.legislative_support + answer.legislative_effects));
    }

    let effectsStr = '';
    if (eff.approval) effectsStr += `App ${eff.approval > 0 ? '+' : ''}${eff.approval}%  `;
    if (eff.political_capital && nextState.congress_controlled) effectsStr += `Cap ${eff.political_capital > 0 ? '+' : ''}${eff.political_capital}  `;
    if (eff.base_enthusiasm) effectsStr += `Enth ${eff.base_enthusiasm > 0 ? '+' : ''}${eff.base_enthusiasm}%  `;
    if (eff.funds) effectsStr += `Funds ${eff.funds > 0 ? '+' : ''}$${Math.abs(eff.funds).toLocaleString()}  `;
    if (answer.legislative_effects) effectsStr += `Legis ${answer.legislative_effects > 0 ? '+' : ''}${answer.legislative_effects}%  `;

    // Regional
    if (answer.regional_effects) {
      Object.entries(answer.regional_effects).forEach(([rk, val]) => {
        const key = rk as keyof Regions;
        if (nextState.regions[key]) {
          nextState.regions[key].incumbent_pct = Math.max(0, Math.min(100, nextState.regions[key].incumbent_pct + val));
        }
      });
    }

    // Trump mode
    let trumpStr = '';
    if (trumpMode && answer.trump_effects) {
      Object.entries(answer.trump_effects).forEach(([rk, val]) => {
        const key = rk as keyof Regions;
        if (nextState.regions[key]) {
          nextState.regions[key].incumbent_pct = Math.max(0, Math.min(100, nextState.regions[key].incumbent_pct + val));
          (nextState.trump_loyalty as any)[key] = Math.max(0, Math.min(100, ((nextState.trump_loyalty as any)[key] || 50) + val));
          effectsStr += `${nextState.regions[key].name} Trump ${val > 0 ? '+' : ''}${val}%  `;
        }
      });
      const tag = answer.trump_tag === 'plus' ? '[T+ MAGA Approved]' : '[T− Globalist Flag]';
      trumpStr = ` <span style="color:#fca5a5">🔴 ${tag}</span>`;
    }

    // Low approval
    let apathyStr = '';
    if (nextState.approval < 40) {
      nextState.base_enthusiasm = Math.max(0, nextState.base_enthusiasm - 1.5);
      apathyStr = ` <br/><span style="color:var(--color-warning);font-size:0.75rem;">📉 Low-approval apathy: Enthusiasm -1.5%.</span>`;
    }

    // Campaign stop
    let stopStr = '';
    if (nextState.current_turn >= 6 && nextState.campaign_stop) {
      const reg = nextState.regions[nextState.campaign_stop];
      let bonus = 2.0 + 3.0 * (nextState.approval / 50);
      if (!nextState.congress_controlled) bonus *= 0.8;
      reg.incumbent_pct = Math.max(0, Math.min(100, reg.incumbent_pct + bonus));
      stopStr = `<br/>📌 Visited ${reg.name} (+${bonus.toFixed(1)}% polling).`;
    }

    const p = nextState.current_turn <= 5 ? 'Gov' : 'Camp';
    addLog(
      `<span style="color:var(--color-player)">[T${nextState.current_turn}-${p}]</span> ${answer.feedback}${apathyStr}${trumpStr}${stopStr ? `<br/><em style="color:#10b981;">${stopStr}</em>` : ''}<br/><span style="color:var(--color-success);font-size:0.74rem;">${effectsStr}</span>`
    );

    if (nextState.political_capital === 0 && nextState.current_turn <= 5) {
      nextState.primary_challenged = true;
      showToast("⚠️ Political Capital ZERO! Primary challenger mobilizing!", "warning");
      AudioFX.playAlert();
    }

    if (nextState.current_turn === 5 && !nextState.primary_challenged) {
      nextState.current_turn = 6;
      nextState.campaign_stop = null;
      nextState.congress_controlled = nextState.legislative_support >= 50;
      nextState = checkAlienation(nextState, true);
      setState(nextState);
      setTimeout(() => { AudioFX.playPhase(); setPhase('midterm'); }, 600);
      return;
    }

    if (!nextState.primary_challenged) {
      nextState.current_turn++;
      nextState.campaign_stop = null;
    } else {
      nextState.primary_challenged = false;
    }

    nextState = checkAlienation(nextState, true);
    setState(nextState);

    if (nextState.current_turn > 10) {
      setPhase('results');
    }
  };

  const handleRegionClick = (key: string) => {
    if (state.current_turn >= 6 && state.current_turn <= 10 && phase === 'campaign') {
      AudioFX.playClick();
      setState(s => ({ ...s, campaign_stop: key as keyof Regions }));
      const sf = state.approval / 50;
      let bonus = 2.0 + 3.0 * sf;
      if (!state.congress_controlled) bonus *= 0.8;
      showToast(`Campaign Stop: ${state.regions[key as keyof Regions].name} (+${bonus.toFixed(1)}% polling)`, 'success');
    } else {
      showToast(`Governing Phase — campaign stops unlock at Turn 6.`, 'info');
    }
  };

  const handleBullyPulpit = (focus: string) => {
    AudioFX.playClick();
    setBullyModalOpen(false);
    let nextState = { ...state };
    let cost = 0, logTxt = '', effTxt = '';

    if (focus === 'economy') {
      cost = 15; nextState.political_capital -= cost;
      nextState.regions.midwest.incumbent_pct += 4;
      nextState.regions.plains.incumbent_pct += 3;
      logTxt = "You addressed the nation on your economic record.";
      effTxt = `Cap -${cost}  Midwest +4%  Plains +3%`;
    } else if (focus === 'foreign') {
      cost = 20; nextState.political_capital -= cost;
      nextState.approval += 6;
      nextState.base_enthusiasm += 5;
      logTxt = "You declared a national security emergency.";
      effTxt = `Cap -${cost}  Approval +6%  Enthusiasm +5%`;
    } else {
      cost = 10; nextState.political_capital -= cost;
      nextState.base_enthusiasm += 10;
      logTxt = "Your primetime unity address moved the nation.";
      effTxt = `Cap -${cost}  Enthusiasm +10%`;
    }

    nextState.bully_pulpit_used = true;
    nextState = checkAlienation(nextState, true);
    setState(nextState);
    addLog(`[🎙️ Bully Pulpit] ${logTxt} <br/><span style="color:var(--color-success);font-size:0.74rem;">${effTxt}</span>`);
    showToast("National Address delivered!", "success");
  };

  const handleRestart = () => {
    AudioFX.playClick();
    setState(INITIAL_STATE);
    setCandidate(null);
    setLogs([{ msg: '<span style="color:var(--color-player)">[SYSTEM]</span> Ready for new campaign.', style: '' }]);
    setPhase('select');
  };

  return (
    <div className="app-root">
      {phase === 'select' && <CandidateSelect candidates={CANDIDATES} onSelect={handleSelectCandidate} />}
      
      <Header 
        candidate={candidate} 
        trumpMode={trumpMode} 
        onToggleTrumpMode={() => { setTrumpMode(t => !t); AudioFX.playClick(); }} 
        isMuted={isMuted} 
        onToggleMute={() => { AudioFX.isMuted = !isMuted; setIsMuted(!isMuted); if(isMuted) AudioFX.playClick(); }} 
      />

      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {toast && (
        <div id="toast-container">
          <div className={`toast toast-${toast.type} visible`}>{toast.msg}</div>
        </div>
      )}

      {bullyModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <h3 className="modal-title">🎙️ Address the Nation</h3>
            <p className="modal-desc">Command national attention and shift public focus. Expends Political Capital.</p>
            <div className="bully-options">
              <button className="bully-option-btn" disabled={state.political_capital < 15} onClick={() => handleBullyPulpit('economy')}>
                <span className="option-title">Economic Recovery Address</span>
                <span className="option-desc">Boosts Midwest (+4%) and Plains (+3%) polling.</span>
                <span className="option-cost">Cost: 15 Political Capital</span>
              </button>
              <button className="bully-option-btn" disabled={state.political_capital < 20} onClick={() => handleBullyPulpit('foreign')}>
                <span className="option-title">National Security Declaration</span>
                <span className="option-desc">Approval +6%, Base Enthusiasm +5%.</span>
                <span className="option-cost">Cost: 20 Political Capital</span>
              </button>
              <button className="bully-option-btn" disabled={state.political_capital < 10} onClick={() => handleBullyPulpit('unity')}>
                <span className="option-title">Primetime Unity Address</span>
                <span className="option-desc">Base Enthusiasm +10%.</span>
                <span className="option-cost">Cost: 10 Political Capital</span>
              </button>
            </div>
            <button className="btn-modal-close" onClick={() => { AudioFX.playClick(); setBullyModalOpen(false); }}>Cancel Speech</button>
          </div>
        </div>
      )}

      <main className="app-container">
        <Dashboard state={state} logs={logs} onBullyPulpit={() => { AudioFX.playClick(); setBullyModalOpen(true); }} />
        
        <div className="game-board">
          {phase !== 'results' && (
            <div className="game-phase-bar">
              <div className={`phase-badge ${state.current_turn <= 5 ? 'phase-governing' : 'phase-campaign'}`}>
                {state.current_turn <= 5 ? 'Governing Phase' : 'Campaign Phase'}
              </div>
              <div className="turn-tracker">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`turn-node ${i + 1 < state.current_turn ? 'past' : i + 1 === state.current_turn ? 'active' : ''}`}>{i + 1}</div>
                ))}
              </div>
            </div>
          )}

          {(phase === 'governing' || phase === 'campaign') && (
            <ScenarioCard 
              scenario={
                SCENARIOS.find(s => s.id === state.current_turn && s.candidate_id === candidate?.id) ||
                SCENARIOS.find(s => s.id === state.current_turn && !s.candidate_id) ||
                null
              }
              state={state}
              trumpMode={trumpMode}
              onAnswer={handleAnswer}
            />
          )}

          {phase === 'midterm' && <MidtermPanel state={state} onProceed={() => { AudioFX.playClick(); setPhase('campaign'); }} />}
          {phase === 'results' && <ResultsPanel state={state} candidate={candidate} onRestart={handleRestart} />}

          <div className="map-grid">
            {candidate?.mapId === 'lincoln'
              ? <LincolnMap state={state} trumpMode={trumpMode} onRegionClick={handleRegionClick} />
              : <ElectoralMap state={state} trumpMode={trumpMode} onRegionClick={handleRegionClick} />
            }
            <PollingPanel state={state} onRegionClick={handleRegionClick} />
          </div>
        </div>
      </main>

      <footer className="footer">INCUMBENT: CAMPAIGN SIMULATOR &copy; 2026 &mdash; REACT + TYPESCRIPT VERSION</footer>
    </div>
  );
}
