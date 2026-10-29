# Portfolio Quest (Vite + React)

Scrapbook + adventure-map portfolio 

    npm install
    npm run dev      # open the local address it prints
    npm run build    # production build in /dist (deploy to Netlify, Vercel or GitHub Pages)

## Where things live
- `src/data.js`: all content (camps, projects, photo slots). Start here.
- `src/App.jsx`: page state (started, list view, current camp, open project, zoom).
- `src/TrailMap.jsx`: map, stops, walking compass, cassette button. Map art is raw SVG in `src/mapSvg.js`.
- `src/Journal.jsx`: project card deck and polaroid slots. `src/FlatList.jsx`: the skip-the-adventure list.
- `src/CaseFile.jsx`: project pop-up and the MOVA case study. `src/ScreenZoom.jsx`: screen close-ups.
- `src/useMusic.js`: background tune and click sounds (Web Audio, starts on Press Start).
- `src/Contact.jsx`: add your LinkedIn and Instagram URLs. `src/cv.js`: draft CV download.
- `src/index.css`: all styles.
