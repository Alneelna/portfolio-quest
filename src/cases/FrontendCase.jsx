// Frontend and web case study layout. Fill in live, repo, did and sl in src/data.js.
import {Polas} from '../Journal.jsx'
import {Head,Meta,Links,Code,Add} from './shared.jsx'
export default function FrontendCase({p}){return <div className="cs">
  <Head p={p} label="frontend"/>
  <Meta items={[['Role',p.role],['Built with',p.tags.join(', ')],['Status',p.st]]}/>
  <Links items={[['Open live site',p.live],['View code',p.repo]]}/>
  <h3>Overview</h3><p>{p.b}</p>
  <h3>What I built</h3><ul>{p.did.map(x=><li key={x}>{x}</li>)}</ul>
  <h3>Screens and clips</h3><div className="polas"><Polas p={p}/></div>
  <h3>A piece of the code</h3><Code>{`// Paste a short snippet that shows how you built something\n`}</Code>
  <h3>What I improved</h3><Add>Add one thing you fixed, made faster or made more accessible.</Add>
  <h3>Next</h3><Add>Add what you would change or add next.</Add></div>}
