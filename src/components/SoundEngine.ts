/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

let audioCtx: AudioContext | null = null;
let isAudioMuted = false;

function getAudioContext(): AudioContext | null {
  if (isAudioMuted) return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setMuteState(muted: boolean) {
  isAudioMuted = muted;
  if (muted && audioCtx) {
    audioCtx.close().then(() => {
      audioCtx = null;
    }).catch(() => {});
  }
}

export function playSuccessSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const playTone = (frequency: number, delay: number, duration: number) => {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now + delay);

    gainNode.gain.setValueAtTime(0, now + delay);
    // Snappy soft attack (C5 -> E5 -> G5 chime arpeggio)
    gainNode.gain.linearRampToValueAtTime(0.05, now + delay + 0.02);
    // Rapid soft decay to avoid ringing
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + delay + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now + delay);
    osc.stop(now + delay + duration);
  };

  // Play a very soft, fast ascending major triad chime (C major arpeggio, very brief)
  playTone(523.25, 0, 0.22);      // C5
  playTone(659.25, 0.05, 0.22);   // E5
  playTone(783.99, 0.10, 0.25);   // G5
}

export function playErrorSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  
  // Play an extremely soft, feutré dual harmonic tone (low volume, fast decay)
  const playTone = (frequency: number, type: OscillatorType, volume: number) => {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(volume, now + 0.015);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  };

  playTone(196.00, 'triangle', 0.04); // G3 (Deep and feutré)
  playTone(164.81, 'sine', 0.04);     // E3 (Calm neutral fifth)
}

export function playCheckpointSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const playTone = (frequency: number, delay: number, volume: number, duration: number) => {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now + delay);

    gainNode.gain.setValueAtTime(0, now + delay);
    gainNode.gain.linearRampToValueAtTime(volume, now + delay + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + delay + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now + delay);
    osc.stop(now + delay + duration);
  };

  // Play an ultra-soft, high-pitch water-ripple chime arpeggio (Sol majeur pentatonic)
  // Low volume (0.02) and rapid duration (0.24s) to sound extremely subtle and Apple-like.
  playTone(783.99, 0, 0.025, 0.24);     // G5
  playTone(987.77, 0.04, 0.025, 0.24);   // B5
  playTone(1174.66, 0.08, 0.03, 0.3);   // D6
}


export function playBadgeSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const melody = [
    { freq: 440.0, time: 0 },      // A4
    { freq: 554.37, time: 0.08 },  // C#5
    { freq: 659.25, time: 0.16 },  // E5
    { freq: 880.0, time: 0.24 },   // A5
    { freq: 1109.73, time: 0.36 }, // C#6
  ];

  melody.forEach((note) => {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(note.freq, now + note.time);

    gainNode.gain.setValueAtTime(0, now + note.time);
    gainNode.gain.linearRampToValueAtTime(0.1, now + note.time + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + note.time + 0.3);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now + note.time);
    osc.stop(now + note.time + 0.35);
  });
}

export function playTickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(1000, now); // Tiny high pop

  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(0.02, now + 0.002);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.06);
}

export function playSelectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, now); 

  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(0.04, now + 0.005);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.12);
}
