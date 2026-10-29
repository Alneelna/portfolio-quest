// Graphics design case study layout. Fill in palette, did and sl in src/data.js.
import {Polas} from '../Journal.jsx'
import {Head,Meta,Add} from './shared.jsx'
const dark=h=>{const n=parseInt(h.slice(1),16);return ((n>>16&255)*.299+(n>>8&255)*.587+(n&255)*.114)<140}
export default function GraphicsCase({p}){return <div className="cs">
  <Head p={p} label="graphics"/>
  <Meta items={[['Role',p.role],['Tools',p.tags.join(', ')],['Status',p.st]]}/>
  <h3>The idea</h3><p>{p.b}</p>
  {p.palette&&<><h3>Colour</h3><div className="sw">{p.palette.map(c=><span key={c} style={{background:c,color:dark(c)?'#fff':'#000'}}>{c}</span>)}</div></>}
  <h3>The work</h3><div className="polas gal"><Polas p={p}/></div>
  <h3>How it was made</h3><ul>{p.did.map(x=><li key={x}>{x}</li>)}</ul>
  <h3>Sketches and process</h3><Add>Add early sketches or rejected ideas, and say why you chose the final one.</Add>
  <h3>Where it is used</h3><Add>Add the places this design appears: app, poster, social posts.</Add></div>}
