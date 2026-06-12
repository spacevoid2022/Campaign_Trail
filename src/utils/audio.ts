export const AudioFX = {
  ctx: null as AudioContext | null,
  isMuted: false,
  
  init() {
    if (!this.isMuted && !this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  },

  tone(freq: number, dur: number, type: OscillatorType = 'sine', vol = 0.04, delay = 0) {
    this.init();
    if (this.isMuted || !this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
    
    gain.gain.setValueAtTime(vol, this.ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + delay + dur);
    
    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + dur);
  },

  playClick() { this.tone(750, 0.12); this.tone(150, 0.12); },
  playHover() { this.tone(480, 0.04, 'sine', 0.008); },
  playPhase() { [380, 520, 780].forEach((f, i) => this.tone(f, 0.18, 'sine', 0.03, i * 0.07)); },
  playVictory() { [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => this.tone(f, 0.4, 'triangle', 0.06, i * 0.12)); },
  playDefeat() { [293.66, 277.18, 261.63, 220].forEach((f, i) => this.tone(f, 0.5, 'sawtooth', 0.05, i * 0.16)); },
  playAlert() { [440, 330].forEach((f, i) => this.tone(f, 0.2, 'square', 0.03, i * 0.12)); }
};
