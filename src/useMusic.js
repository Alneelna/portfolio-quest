import { useRef, useState, useEffect } from 'react'
const N = { F4: 349.23, A4: 440, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99 }
const mel = ['E5', 0, 'G5', 'E5', 'D5', 0, 'C5', 0, 'E5', 0, 'D5', 'C5', 'A4', 0, 'C5', 0, 'A4', 0, 'C5', 'A4', 'C5', 'A4', 'F4', 0, 'B4', 0, 'D5', 'G5', 'D5', 0, 'B4', 0]
const bass = [130.81, 110, 87.31, 98]
// Chiptune loop + click blips made with the Web Audio API. Browsers only allow audio after a user gesture, so play() is called from Press Start.
export function useMusic() {
  const r = useRef({ AC: null, timer: 0, nextT: 0, step: 0, was: false }), [playing, setPlaying] = useState(false)
  const ctx = () => {
    const c = r.current
    if (!c.AC) {
      const AC = new (window.AudioContext || window.webkitAudioContext)(), m = AC.createGain(), g = AC.createGain()
      m.gain.value = .6; m.connect(AC.destination); g.gain.value = .16; g.connect(m)
      const u = AC.createBufferSource(); u.buffer = AC.createBuffer(1, 1, 22050); u.connect(AC.destination); u.start(0) // iOS unlock
      Object.assign(c, { AC, m, g })
    }
    c.AC.resume(); return c
  }
  const tone = (f, t, d, ty, v, dest) => { const o = r.current.AC.createOscillator(), e = r.current.AC.createGain(); o.type = ty; o.frequency.value = f; e.gain.setValueAtTime(v, t); e.gain.exponentialRampToValueAtTime(.001, t + d); o.connect(e); e.connect(dest); o.start(t); o.stop(t + d + .02) }
  const sched = () => {
    const c = r.current
    while (c.nextT < c.AC.currentTime + .3) {
      const i = c.step % 32, n = mel[i]
      if (n) tone(N[n], c.nextT, .24, 'square', .5, c.g)
      if (i % 4 === 0) tone(bass[Math.floor(i / 8)], c.nextT, .5, 'triangle', 1, c.g)
      c.nextT += .268; c.step++
    }
  }
  const play = () => { const c = ctx(); if (c.timer) return; c.nextT = c.AC.currentTime + .05; c.timer = setInterval(sched, 100); setPlaying(true) }
  const pause = () => { const c = r.current; clearInterval(c.timer); c.timer = 0; setPlaying(false) }
  const blip = el => {
    const c = r.current; if (!c.AC) return; const t = c.AC.currentTime
    if (el.closest('.stop')) [523.25, 659.25, 783.99].forEach((f, i) => tone(f, t + i * .07, .12, 'square', .3, c.m))
    else if (el.closest('.close')) { tone(392, t, .09, 'square', .3, c.m); tone(262, t + .08, .12, 'square', .3, c.m) }
    else tone(720 + Math.random() * 120, t, .09, 'square', .28, c.m)
  }
  useEffect(() => {
    const h = () => { const c = r.current; if (!c.AC) return; if (document.hidden) { c.was = !!c.timer; pause() } else if (c.was) { c.was = false; play() } }
    document.addEventListener('visibilitychange', h); return () => document.removeEventListener('visibilitychange', h)
  }, [])
  return { playing, play, pause, blip }
}
