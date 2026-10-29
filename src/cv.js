import { camps } from './data.js'
const e = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
// Draft CV built from the portfolio data. To offer your real CV instead, put the PDF in /public and link to it.
export function downloadCv() {
  const pr = camps.slice(1).flatMap(c => c.ps).filter(p => !p.sample).map(p => `<h3>${e(p.n)} <small>(${e(p.role)})</small></h3><p>${e(p.b)}</p><p><i>${p.tags.join(', ')}</i></p>`).join('')
  const html = `<!doctype html><html lang="en"><meta charset="utf-8"><title>Umeobi Angela: CV</title><style>body{font:15px/1.5 Georgia,serif;max-width:720px;margin:32px auto;padding:0 20px;color:#222}h1{margin:0}h2{border-bottom:2px solid #222;margin-top:26px}h3{margin:14px 0 2px}small{font-weight:400;color:#555}</style><h1>Umeobi Angela</h1><p>Product designer and web developer, growing into backend development with Python and Django.<br>umeobiangela2@gmail.com</p><h2>Skills</h2><p>Product design, UI and design systems, frontend and web development (HTML, CSS, JavaScript), backend (Python, Django, Django REST Framework, PostgreSQL, JWT), graphics and branding.</p><h2>Projects</h2>${pr}`
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([html], { type: 'text/html' })); a.download = 'Umeobi-Angela-CV.html'; a.click(); URL.revokeObjectURL(a.href)
}
