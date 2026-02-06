class SoundService {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, vol = 0.1) {
    if (!this.enabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playHover() {
    // Sci-fi low hum/blip
    this.playTone(200, 'sawtooth', 0.1, 0.05);
  }

  playPour() {
    // Simulated liquid noise (filtered white noise) - simplified as a bubble tone
    // Creating white noise requires a buffer, sticking to simple synth for reliability
    // Rapid bubbles
    this.playTone(800, 'sine', 0.05, 0.05);
    setTimeout(() => this.playTone(700, 'sine', 0.05, 0.05), 50);
    setTimeout(() => this.playTone(600, 'sine', 0.05, 0.05), 100);
  }

  playShake() {
    // Rattle
    this.playTone(100, 'square', 0.05, 0.1);
    setTimeout(() => this.playTone(120, 'square', 0.05, 0.1), 80);
    setTimeout(() => this.playTone(100, 'square', 0.05, 0.1), 160);
  }

  playSuccess() {
    // "Tada" chord
    this.playTone(440, 'sine', 0.5, 0.1); // A4
    this.playTone(554, 'sine', 0.5, 0.1); // C#5
    this.playTone(659, 'sine', 0.5, 0.1); // E5
  }
}

const soundService = new SoundService();
export default soundService;
