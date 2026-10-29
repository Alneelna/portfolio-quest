import {SCR} from './data.js'
import {Tags,Polas} from './Journal.jsx'
import Contact from './Contact.jsx'
const steps=[['Proposal',1],['Brand',1],['Design system',1],['Passenger screens',1],['Full 14 screens',1],['Component library',0],['Move to Figma',0]]
const Note=({t,children})=><div className="note"><b>{t}</b>{children}</div>
function MovaCase({p,onZoom}){return <div className="cs">
  <h2 id="mt">{p.n}</h2><div className="stamp">case study</div>
  <div className="meta"><Note t="Role">Designer</Note><Note t="Scope">Brand, design system, screens</Note><Note t="Tools">Figma, HTML mockups</Note><Note t="Status">In progress</Note></div>
  <h3>The problem</h3><p>The Abia State Smart Mobility Development Project is an electric vehicle mobility initiative for Aba and Umuahia. It needed a ride-hailing app, and a way to show it to government. <span className="deckhint">Add: the one-sentence user problem.</span></p>
  <h3>Who it is for</h3><div className="meta"><Note t="Passenger">add their goal</Note><Note t="Driver">add their goal</Note><Note t="Fleet investor">add their goal</Note></div>
  <h3>Process</h3><div className="steps">{steps.map(([s,d],i)=><div key={s} className={'step '+(d?'done':'next')}><i>{d?'✓':i+1}</i>{s}</div>)}</div>
  <h3>Design decisions</h3><p>Renamed from Ngwa Banye to MOVA, and swapped the earlier terracotta, green, charcoal and gold scheme for Chrome Nuit.</p>
  <div className="sw"><span style={{background:'#0D1117',color:'#fff'}}>#0D1117</span><span style={{background:'#00E676'}}>#00E676</span><span style={{background:'#FFD700'}}>#FFD700</span></div>
  <p>Inter for type, with 18 named styles from Display XL (36px ExtraBold) to NavLabel (9px SemiBold). Layout is a 4-column grid, 8pt base, 375pt frame.</p>
  <h3>The screens</h3><div className="phones">{SCR.map((s,i)=><button className="phone" key={s} aria-label={'Zoom in: '+s} onClick={()=>onZoom(i)}><div>{s==='Ride Tracking'?<><b className="car">🚗</b><u/></>:'Add screen'}</div>{s}</button>)}</div>
  <h3>What I learned</h3><p>Figma uses named font weights, not numbers like 400 or 700, so the type spec had to be corrected. <span className="deckhint">Add your own lesson.</span></p>
  <h3>Next</h3><p>Resume the component library and move the MOVA assets into their own Figma file.</p></div>}
export default function CaseFile({p,onClose,onZoom}){
  return <div id="modal" onClick={e=>e.target===e.currentTarget&&onClose()}><div className="file" role="dialog" aria-modal="true" aria-labelledby="mt">
    <button className="close" autoFocus onClick={onClose}>Close ✕</button>
    {p.cs?<MovaCase p={p} onZoom={onZoom}/>:<>
      <h2 id="mt">{p.n}</h2><div className="stamp">{p.st}</div><p>{p.b}</p><p><Tags list={p.tags}/></p>
      <p className="hand" style={{fontSize:'1.5rem'}}>Inside this project</p><ul>{p.did.map(x=><li key={x}>{x}</li>)}</ul>
      <p className="deckhint">My role: {p.role}</p><div className="polas"><Polas p={p}/></div>
      {p.contact?<Contact/>:<p><a className="cta" href="#" onClick={e=>e.preventDefault()} style={{opacity:.6}}>Live link (add yours)</a></p>}</>}
  </div></div>}
