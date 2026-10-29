import { useRef } from 'react'
import { SCR, SCR_IMG } from './data.js'
export default function ScreenZoom({ i, setI, onClose }) {
  const x = useRef(0), s = SCR[i], step = d => setI((i + d + SCR.length) % SCR.length)
  return <div id="zoom" onClick={e => e.target === e.currentTarget && onClose()} onTouchStart={e => { x.current = e.touches[0].clientX }} onTouchEnd={e => { const d = e.changedTouches[0].clientX - x.current; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1) }}>
    <div className="zbox" role="dialog" aria-modal="true" aria-label="Screen close-up">
      <button className="close" autoFocus onClick={onClose}>Close ✕</button>
      <div className="big">{SCR_IMG[s] ? <img src={SCR_IMG[s]} alt={s} /> : s === 'Ride Tracking' ? <><b className="car">🚗</b><u /></> : 'Add screen: ' + s}</div>
      <h3 className="hand" style={{ fontSize: '1.6rem' }}>{s}</h3>
      <div className="nav"><button aria-label="Previous screen" onClick={() => step(-1)}>◀</button><span className="deckhint">{i + 1} of {SCR.length}</span><button aria-label="Next screen" onClick={() => step(1)}>▶</button></div>
    </div></div>
}
