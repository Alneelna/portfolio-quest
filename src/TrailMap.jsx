import { useRef, useEffect } from 'react'
import { camps } from './data.js'
import mapSvg from './mapSvg.js'
export default function TrailMap({ cur, onGo, music }) {
  const svg = useRef(), trail = useRef(), hero = useRef(), pos = useRef([]), at = useRef(0)
  const place = l => { const q = trail.current.getPointAtLength(l); hero.current.style.left = q.x / 8 + '%'; hero.current.style.top = q.y / 5.2 + '%'; at.current = l }
  useEffect(() => { // find where each camp sits along the trail
    const t = trail.current = svg.current.querySelector('#trail'), len = t.getTotalLength()
    camps.forEach((s, i) => { let b = 0, bd = 1e9; for (let l = 0; l <= len; l += 4) { const q = t.getPointAtLength(l), d = (q.x - s.x) ** 2 + (q.y - s.y) ** 2; if (d < bd) { bd = d; b = l } } pos.current[i] = b })
    place(pos.current[cur])
  }, [])
  useEffect(() => { // walk the compass to the chosen camp
    const from = at.current, to = pos.current[cur]; if (to == null || from === to) return
    const dur = matchMedia('(prefers-reduced-motion:reduce)').matches ? 1 : Math.min(1600, 300 + Math.abs(to - from) * 2); let t0, id
    const step = t => { t0 ??= t; let k = Math.min(1, (t - t0) / dur); k = k < .5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2; place(from + (to - from) * k); if (k < 1) id = requestAnimationFrame(step) }
    id = requestAnimationFrame(step); return () => cancelAnimationFrame(id)
  }, [cur])
  return <div className="mapwrap"><div className="map" id="map">
    <svg ref={svg} viewBox="0 0 800 520" aria-hidden="true" dangerouslySetInnerHTML={{ __html: mapSvg }} />
    {camps.map((s, i) => <span key={i}>
      <button className="stop" aria-label={s.t} aria-current={i === cur} style={{ left: s.x / 8 + '%', top: s.y / 5.2 + '%' }} onClick={() => onGo(i)}>{s.m}</button>
      <div className="lbl" style={{ left: s.x / 8 + '%', top: s.y / 5.2 + '%' }}>{s.t}</div></span>)}
    <div className="hero" ref={hero} aria-hidden="true">🧭</div>
    <button className={'mus' + (music.playing ? '' : ' off')} aria-pressed={music.playing} aria-label={music.playing ? 'Pause music' : 'Play music'} onClick={() => music.playing ? music.pause() : music.play()}>
      <svg viewBox="0 0 100 64" aria-hidden="true"><use href="#tape" /></svg><span>{music.playing ? '❚❚ pause' : '▶ play'}</span></button>
  </div></div>
}
