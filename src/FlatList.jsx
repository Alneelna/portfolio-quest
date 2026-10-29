import { camps } from './data.js'
import { Card } from './Journal.jsx'
export default function FlatList({ onOpen }) {
  return <section id="flat">
    <h2 tabIndex={-1} style={{ marginTop: 0 }}>All projects</h2>
    {camps.map((c, ci) => {
      const l = c.ps.map((p, di) => ({ p, di })).filter(x => !x.p.sample)
      return ci && l.length ? <div key={ci}><h2>{c.t} <small>{l.length} project{l.length > 1 ? 's' : ''}</small></h2>
        <div className="flatgrid">{l.map(({ p, di }) => <Card key={di} p={p} onOpen={() => onOpen(ci, di)} />)}</div></div> : null
    })}</section>
}
