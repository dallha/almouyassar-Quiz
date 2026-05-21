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
    // Smooth attack
    gainNode.gain.linearRampToValueAtTime(0.12, now + delay + 0.05);
    // Smooth decay
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + delay + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now + delay);
    osc.stop(now + delay + duration);
  };

  // Play a beautiful ascending major triad chime (C major: C5 -> E5 -> G5)
  playTone(523.25, 0, 0.4);      // C5
  playTone(659.25, 0.08, 0.4);   // E5
  playTone(783.99, 0.16, 0.5);   // G5
}

export function playErrorSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  
  // Play a soft, deep dual harmonic tone (neutral and non-jarring)
  const playTone = (frequency: number, type: OscillatorType, volume: number) => {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(volume, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  };

  playTone(220.00, 'triangle', 0.15); // A3
  playTone(185.00, 'sine', 0.15);     // F#3
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
