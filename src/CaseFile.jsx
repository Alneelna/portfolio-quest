import {Tags,Polas} from './Journal.jsx'
import Contact from './Contact.jsx'
import DesignCase from './cases/DesignCase.jsx'
import FrontendCase from './cases/FrontendCase.jsx'
import BackendCase from './cases/BackendCase.jsx'
import GraphicsCase from './cases/GraphicsCase.jsx'
// A project's `cs` value in data.js picks its layout. Projects without `cs` get the simple pop-up below.
const cases={design:DesignCase,frontend:FrontendCase,backend:BackendCase,graphics:GraphicsCase}
export default function CaseFile({p,onClose,onZoom}){
  const C=cases[p.cs]
  return <div id="modal" onClick={e=>e.target===e.currentTarget&&onClose()}><div className="file" role="dialog" aria-modal="true" aria-labelledby="mt">
    <button className="close" autoFocus onClick={onClose}>Close ✕</button>
    {C?<C p={p} onZoom={onZoom}/>:<>
      <h2 id="mt">{p.n}</h2><div className="stamp">{p.st}</div><p>{p.b}</p><p><Tags list={p.tags}/></p>
      <p className="hand" style={{fontSize:'1.5rem'}}>Inside this project</p><ul>{p.did.map(x=><li key={x}>{x}</li>)}</ul>
      <p className="deckhint">My role: {p.role}</p><div className="polas"><Polas p={p}/></div>
      {p.contact?<Contact/>:<p><a className="cta" href="#" onClick={e=>e.preventDefault()} style={{opacity:.6}}>Live link (add yours)</a></p>}</>}
  </div></div>}