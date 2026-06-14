import React from 'react';
import { Scenario, ScenarioAnswer, GameState } from '../types';

interface Props {
  scenario: Scenario | null;
  state: GameState;
  trumpMode: boolean;
  onAnswer: (answer: ScenarioAnswer) => void;
}

export const ScenarioCard: React.FC<Props> = ({ scenario, state, trumpMode, onAnswer }) => {
  if (!scenario && !state.primary_challenged) return null;

  const isCampaign = scenario?.phase === 'campaign';
  let phaseLabel = isCampaign ? `Campaign Scenario ${scenario!.id - 6} of 6` : `Governing Scenario ${scenario?.id || ''} of 6`;
  let questionText = scenario?.question;
  let answers = scenario?.answers || [];

  if (state.primary_challenged) {
    phaseLabel = "⚠️ EMERGENCY PRIMARY CHALLENGE";
    questionText = "Your political capital hit zero and your own party revolted! A primary challenger has entered the race. How do you survive?";
    answers = [
      { text: "Pour campaign funds into defensive ads defending your record.", feedback: "You survive the challenge but your campaign war chest is drained.", effects: { political_capital: 20, approval: -3, base_enthusiasm: 5, funds: -40000 } },
      { text: "Hold emergency base rallies, bypassing establishment party leaders.", feedback: "Your core base responds with passion. But the rhetoric alienates suburban moderates.", effects: { political_capital: 25, approval: -8, base_enthusiasm: 20, funds: 0 } },
      { text: "Ignore it and rely on the presidential bully pulpit to weather the storm.", feedback: "You barely survive on name recognition, but appear weak and unprepared.", effects: { political_capital: 10, approval: -12, base_enthusiasm: -12, funds: 0 } }
    ];
  }

  const needsStop = isCampaign && !state.campaign_stop && !state.primary_challenged;

  return (
    <section className="glass-card scenario-card" id="interactive-panel">
      <div>
        <div className="scenario-phase-indicator" id="question-phase-lbl" style={{ color: state.primary_challenged ? 'var(--color-warning)' : 'var(--color-player)' }}>
          {phaseLabel}
        </div>
        <div className="scenario-question" id="question-text">{questionText}</div>
      </div>
      
      {isCampaign && !state.primary_challenged && (
        <div className="stop-lock-banner" style={{ 
          display: 'flex',
          borderColor: state.campaign_stop ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)',
          background: state.campaign_stop ? 'rgba(16,185,129,0.08)' : 'rgba(245,158,11,0.08)',
          color: state.campaign_stop ? 'var(--color-success)' : 'var(--color-warning)'
        }}>
          <span>📌</span>
          <span>
            {state.campaign_stop ? (
              <>Campaign Stop: <strong>{state.regions[state.campaign_stop].name}</strong> (+{(2.0 + 3.0 * (state.approval/50) * (state.congress_controlled ? 1 : 0.8)).toFixed(1)}% polling bonus). Click map to change.</>
            ) : (
              <>⚠️ <strong>Required:</strong> Click a region on the map to select your Campaign Stop.</>
            )}
          </span>
        </div>
      )}

      <div className="answers-container">
        {answers.map((ans, i) => {
          let trumpTagHtml = null;
          if (trumpMode && ans.trump_tag && ans.trump_effects && !state.primary_challenged) {
            const cls = ans.trump_tag === 'plus' ? 'trump-tag-plus' : 'trump-tag-minus';
            const lbl = ans.trump_tag === 'plus' ? 'T+' : 'T−';
            trumpTagHtml = <span className={`trump-tag ${cls}`}>{lbl}</span>;
          }

          return (
            <button 
              key={i} 
              className="answer-btn" 
              disabled={needsStop}
              onClick={() => onAnswer(ans)}
            >
              <div className="answer-letter">{String.fromCharCode(65 + i)}</div>
              <div style={{ flexGrow: 1 }}>{ans.text}{trumpTagHtml}</div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
