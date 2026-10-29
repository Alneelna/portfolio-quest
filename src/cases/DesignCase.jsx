// Product design case study layout (used by MOVA). Edit the text below.
import {SCR,SCR_IMG} from '../data.js'
import {Head,Meta,Note,Steps,Add} from './shared.jsx'
const steps=[['Idea',1],['User Research',1],['Design system',1],['Full 14 screens',1],['Prototype',1],['Case Study',1]]
export default function DesignCase({p,onZoom}){
  return <div className="cs">
    <h2 id="mt">{p.n}</h2><div className="stamp">case study</div>
    <div className="meta"><Note t="Role">Designer</Note><Note t="Scope">UserResearch, design system, prototype</Note><Note t="Tools">Figma</Note><Note t="Status">In progress</Note></div>
    <h3>The problem</h3><p>Abia State needed a convenient, reliable way for people to access electric vehicle transportation, connect passengers with drivers, and enable fleet investors to participate in a more sustainable mobility ecosystem.<br /> Passengers, drivers, and fleet investors need a connected platform that makes electric vehicle transportation easy to access, efficient to operate, and viable to invest in.</p>
    <h3>Who it is for</h3><div className="meta">
      <Note t="Passenger">Book safe, reliable, and affordable electric vehicle rides, track their journeys, and make informed decisions about their trips.</Note>
      <Note t="Driver">Receive ride requests, navigate efficiently, manage their trips, and earn a consistent income through the platform.</Note>
      <Note t="Fleet investor">Monitor vehicle utilisation, track fleet performance, understand potential returns, and manage their participation in the electric mobility network.</Note></div>
    <h3>Process</h3><div className="steps">{steps.map(([s, d], i) => <div key={s} className={'step ' + (d ? 'done' : 'next')}><i>{d ? '✓' : i + 1}</i>{s}</div>)}</div>
    
    <h3>Design decisions</h3><p>Colour Palette: Midnight Black — #0D1117d, Electric Green — #00E676 Signal Yellow — #FFD700ts.
      Typography: Sora
    </p>    
    <div className="sw"><span style={{ background: '#0D1117', color: '#fff' }}>#0D1117</span><span style={{ background: '#00E676' }}>#00E676</span><span style={{ background: '#FFD700' }}>#FFD700</span></div>

    <h3>Design goals</h3><p>Simplify ride booking: Make it easy for passengers to request and manage rides with minimal friction.<br />
      Improve operational efficiency: Help drivers manage ride requests, trips, and availability.<br />
      Build investor confidence: Present fleet activity and performance information clearly.<br />
      Promote electric mobility: Communicate the environmental and practical benefits of EV transportation.<br />
      Create a consistent experience: Use a unified visual language across the platform's user groups.
    </p>
    
    <h3>The screens</h3><div className="phones">{SCR.map((s, i) => <button className="phone" key={s} aria-label={'Zoom in: ' + s} onClick={() => onZoom(i)}><div>{s === 'Ride Tracking' ? <><b className="car">🚗</b><u /></> : 'Add screen'}</div>{s}</button>)}</div>
    
    <h3>What I learned</h3><p>This project strengthened my understanding of designing for a multi-sided digital platform, where different user groups share one ecosystem but have distinct needs.<br />It reinforced the importance of connecting visual design decisions to user needs and the wider business problem.</p>
    
    <h3>The Solution</h3><p>The proposed solution is an electric vehicle ride-hailing platform designed to connect passengers, drivers, and fleet investors within Abia State's mobility ecosystem. <br />
      The passenger experience focuses on discovering rides, booking journeys, and accessing trip information. The driver experience centres on ride requests, trip management, and earnings visibility. <br />
      The investor experience focuses on fleet utilisation, operational performance, and investment-related insights. <br />
      Together, these experiences aim to make EV mobility more accessible, support efficient fleet operations, and provide a clearer view of the opportunities within the electric transportation network.</p>
  </div>
}