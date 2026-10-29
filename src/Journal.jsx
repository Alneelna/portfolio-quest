import { camps } from './data.js'
import Contact from './Contact.jsx'
export const Tags = ({ list }) => list.map(t => <span className="tag" key={t}>{t}</span>)
export const Polas = ({ p }) => p.sl.map(([label, k = '', src], i) => <div className="pola" key={label + i}>
  <div className={'img ' + (src ? '' : k)}>{src ? <img src={src} alt={label} /> : k === 'route' ? <><span className="rec">CLIP</span><b>🚗</b></> : k === 'term' ? <><span className="rec">CLIP</span><u>$ py manage.py runserver</u></> : k === 'logo' ? <><span className="rec">CLIP</span><b>M</b></> : 'Add image: ' + label}</div>
  <span className="c">{label}</span></div>)
export const Card = ({ p, onOpen }) => <div className={'card' + (p.sample ? ' sample' : '')}>
  <span className="st">{p.st}</span><h3>{p.n}</h3><p>{p.b}</p><p><Tags list={p.tags} /></p>
  <p className="deckhint grow">{p.role}</p><button className="open" onClick={onOpen}>Open project ▸</button></div>
export default function Journal({ cur, deck, setDeck, onOpen, onGo }) {
  const s = camps[cur], p = s.ps[deck], n = s.ps.length, flip = d => setDeck((deck + d + n) % n)
  return <section className="journal">
    <article className="scrap entry"><h2>{s.t}</h2><Tags list={s.tags} /><p>{s.b}</p>
      <div className="projs"><Card p={p} onOpen={onOpen} />
        <div className="nav"><button aria-label="Previous project" disabled={n < 2} onClick={() => flip(-1)}>◀</button>
          <div className="dots">{s.ps.map((_, j) => <i key={j} className={j === deck ? 'on' : ''} />)}</div>
          <button aria-label="Next project" disabled={n < 2} onClick={() => flip(1)}>▶</button>
          <span className="deckhint">{deck + 1} of {n}</span></div></div>
      {p.contact && <Contact />}
      {s.end && <><p className="hand" style={{ fontSize: '1.4rem', marginTop: 10 }}>You made it to the summit.</p><button className="open" onClick={() => onGo(0)}>Walk back to base camp</button></>}
    </article>
    <div className="polas"><Polas p={p} /></div></section>
}
