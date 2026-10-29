import {useState,useEffect} from 'react'
import {camps,SCR} from './data.js'
import Sprites from './Sprites.jsx'
import TitleScreen from './TitleScreen.jsx'
import TrailMap from './TrailMap.jsx'
import Journal from './Journal.jsx'
import FlatList from './FlatList.jsx'
import CaseFile from './CaseFile.jsx'
import ScreenZoom from './ScreenZoom.jsx'
import Contact from './Contact.jsx'
import {useMusic} from './useMusic.js'
import {downloadCv} from './cv.js'
export default function App(){
  const music=useMusic()
  const [started,setStarted]=useState(false),[flat,setFlat]=useState(false),[cur,setCur]=useState(0),[deck,setDeck]=useState(0)
  const [seen,setSeen]=useState([]),[open,setOpen]=useState(null),[zoom,setZoom]=useState(null)
  const start=()=>{setStarted(true);music.play()}
  const go=i=>{setCur(i);setDeck(0);const s=camps[i].star;if(s>=0)setSeen(v=>v.includes(s)?v:[...v,s])}
  useEffect(()=>{const k=e=>{
    if(!started&&e.key==='Enter')start()
    if(zoom!==null){if(e.key==='ArrowRight')setZoom(z=>(z+1)%SCR.length);if(e.key==='ArrowLeft')setZoom(z=>(z+SCR.length-1)%SCR.length)}
    if(e.key==='Escape')zoom!==null?setZoom(null):setOpen(null)}
    addEventListener('keydown',k);return()=>removeEventListener('keydown',k)})
  useEffect(()=>{document.body.style.overflow=open||zoom!==null?'hidden':''},[open,zoom])
  return <div onClick={e=>music.blip(e.target)}>
    <Sprites/>
    {!started&&<TitleScreen onStart={start} onSkip={()=>{setStarted(true);setFlat(true)}}/>}
    <div className="wrap">
      <header className="top">
        <div className="scrap title">
          <svg viewBox="0 0 64 64" aria-hidden="true"><use href="#flop"/></svg>
          <h1>Umeobi Angela</h1>
          <p>Product designer and web developer. I design the product, then build the frontend, the backend and the graphics around it. Pick a camp on the map.</p>
          <div className="acts"><button className="open" onClick={()=>setFlat(!flat)}>{flat?'Back to the adventure map':'Skip the adventure: show me the projects'}</button><button className="open" onClick={downloadCv}>Download CV</button></div>
        </div>
        <aside className="scrap hud" aria-live="polite"><h2>Skills collected</h2><div className="bar"><i style={{width:seen.length*25+'%'}}/></div>
          <div className="stickers">{['🎨','🧩','🐍','✂️'].map((e,i)=><span key={i} className={'stk'+(seen.includes(i)?' on':'')}>{e}</span>)}</div></aside>
      </header>
      {flat?<FlatList onOpen={(ci,di)=>setOpen({ci,di})}/>:<>
        <TrailMap cur={cur} onGo={go} music={music}/>
        <Journal cur={cur} deck={deck} setDeck={setDeck} onOpen={()=>setOpen({ci:cur,di:deck})} onGo={go}/></>}
      <footer className="foot"><p className="hand" style={{fontSize:'1.6rem'}}>Let's build something</p><Contact/></footer>
    </div>
    {open&&<CaseFile p={camps[open.ci].ps[open.di]} onClose={()=>setOpen(null)} onZoom={setZoom}/>}
    {zoom!==null&&<ScreenZoom i={zoom} setI={setZoom} onClose={()=>setZoom(null)}/>}
  </div>}
