// Uso: node src/check_area.js src/areas/<area>.js
const fs = require('fs');
const path = process.argv[2];
const code = fs.readFileSync(path, 'utf8');
const m = code.match(/^\s*const (MAS_[A-Z]+) = \{/);
const probs = [];
if (!m) { console.log('PROBLEMAS: debe empezar con const MAS_<AREA> = {'); process.exit(1); }
const BANNED = ['—', '–', '!', '¡', 'no solo', 'no sólo', 'sino también', 'sin embargo', 'por lo tanto', 'en ese sentido', 'por ende', 'cabe destacar', 'cabe resaltar', 'es importante destacar', 'en el mundo actual', 'cada vez más', 'hoy más que nunca', 'en la era de'];
let data;
try { data = new Function(code + '; return ' + m[1] + ';')(); } catch (e) { console.log('PROBLEMAS: no se pudo evaluar: ' + e.message); process.exit(1); }
const SECS = ['teams-chats', 'teams-reunion', 'facilitator', 'planner', 'onenote', 'prompting'];
const MIN = 260, MAX = 480;
const counts = [];
for (const s of SECS) {
  const arr = data[s];
  if (!Array.isArray(arr) || arr.length !== 3) { probs.push(s + ': deben ser exactamente 3 prompts'); continue; }
  arr.forEach((e, i) => {
    const tag = s + '#' + (i + 1);
    for (const k of ['necesidad', 'titulo', 'donde', 'antes', 'prompt']) if (typeof e[k] !== 'string' || !e[k].trim()) probs.push(tag + ': falta ' + k);
    if (!Array.isArray(e.seguimiento) || e.seguimiento.length < 3) probs.push(tag + ': seguimiento necesita 3 o mas');
    if (!Array.isArray(e.verificar) || e.verificar.length < 4) probs.push(tag + ': verificar necesita 4 o mas');
    const n = (e.prompt || '').trim().split(/\s+/).length; counts.push(n);
    if (n < MIN || n > MAX) probs.push(tag + ': prompt con ' + n + ' palabras (rango ' + MIN + '-' + MAX + ')');
    if (!/anonimiz/i.test(e.prompt || '')) probs.push(tag + ': el prompt debe decir que los datos estan anonimizados');
    const texts = [e.necesidad, e.titulo, e.donde, e.antes, e.prompt].concat(e.seguimiento || [], e.verificar || []);
    for (const t of texts) {
      if (typeof t !== 'string') continue;
      const low = t.toLowerCase();
      for (const b of BANNED) if (low.includes(b)) probs.push(tag + ': contiene ' + JSON.stringify(b) + ' en: ' + t.slice(0, 60).replace(/\n/g, ' '));
      if (t.includes(';')) probs.push(tag + ': punto y coma en: ' + t.slice(0, 60).replace(/\n/g, ' '));
    }
  });
  const nec = arr.map(e => e.necesidad); if (new Set(nec).size !== nec.length) probs.push(s + ': necesidades repetidas');
}
for (const k of Object.keys(data)) if (!SECS.includes(k)) probs.push('seccion desconocida: ' + k);
if (probs.length) { console.log('PROBLEMAS en ' + path); probs.forEach(p => console.log('  - ' + p)); process.exit(1); }
console.log('ok ' + path + ' ' + JSON.stringify(counts));
