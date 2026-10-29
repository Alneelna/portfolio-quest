// Backend case study layout. Fill in repo, docs, steps and lessons in src/data.js.
import {Polas} from '../Journal.jsx'
import {Head,Meta,Links,Steps,Code,Add} from './shared.jsx'
export default function BackendCase({p}){return <div className="cs">
  <Head p={p} label="backend"/>
  <Meta items={[['Role',p.role],['Stack',p.tags.join(', ')],['Status',p.st]]}/>
  <Links items={[['Repository',p.repo],['API docs',p.docs]]}/>
  <h3>Overview</h3><p>{p.b}</p>
  <h3>What it covers</h3><ul>{p.did.map(x=><li key={x}>{x}</li>)}</ul>
  {p.steps&&<><h3>Build order</h3><Steps list={p.steps}/></>}
  <h3>Diagrams and screenshots</h3><div className="polas"><Polas p={p}/></div>
  <h3>Sample request</h3><Code>{`# Add a request and the response your API returns\nGET /api/...`}</Code>
  <h3>Debugging lessons</h3>{p.lessons?<ul>{p.lessons.map(x=><li key={x}>{x}</li>)}</ul>:<Add>Add what went wrong and how you fixed it.</Add>}
  <h3>Next</h3><Add>Add what you would build or improve next.</Add></div>}
