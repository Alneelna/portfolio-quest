// Small building blocks shared by every case-study layout.
export const Note=({t,children})=><div className="note"><b>{t}</b>{children}</div>
export const Meta=({items})=><div className="meta">{items.map(([t,v])=><Note key={t} t={t}>{v}</Note>)}</div>
export const Head=({p,label})=><><h2 id="mt">{p.n}</h2><div className="stamp">{label||p.st}</div></>
export const Steps=({list})=><div className="steps">{list.map(([s,d],i)=><div key={s} className={'step '+(d?'done':'next')}><i>{d?'✓':i+1}</i>{s}</div>)}</div>
export const Links=({items})=><div className="meta">{items.map(([label,href])=>href
  ?<a key={label} className="cta" href={href} target="_blank" rel="noopener">{label}</a>
  :<span key={label} className="cta" style={{opacity:.5}}>{label} (add link)</span>)}</div>
export const Code=({children})=><pre className="code">{children}</pre>
export const Add=({children})=><p className="deckhint">{children}</p>
