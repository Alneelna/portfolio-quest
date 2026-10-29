export default function TitleScreen({ onStart, onSkip }) {
  return <div id="title">
    <svg className="cd" viewBox="0 0 64 64" aria-hidden="true"><use href="#cd" /></svg>
    <svg className="cd" viewBox="0 0 64 64" aria-hidden="true"><use href="#cd" /></svg>
    <div className="tbox">
      <div className="who">PLAYER 1: UMEOBI ANGELA<br />PRODUCT DESIGNER + WEB DEVELOPER</div>
      <h1>Portfolio<br />Quest</h1>
      <button className="gel" autoFocus onClick={onStart}>▶ PRESS START</button>
      <button className="skip" onClick={onSkip}>Skip the adventure: show me the projects</button>
      <small>Or press Enter. Sound on: pause the music with the cassette player on the map.</small>
    </div></div>
}
