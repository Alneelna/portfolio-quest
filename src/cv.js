
export function downloadCv() {
  const link = document.createElement('a');

  link.href = '/Angela-CV.pdf';
  link.download = 'Umeobi-Angela-CV.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
