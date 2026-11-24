// Uso: node src/check_s3.js src/areas3/<area>.js
// Valida el contenido de una area para la sesion 3 (tareas programadas y agentes).
const fs = require('fs');
const path = process.argv[2];
const code = fs.readFileSync(path, 'utf8');
const m = code.match(/^\s*const (S3_[A-Z]+) = \{/);
const probs = [];
if (!m) { console.log('PROBLEMAS: debe empezar con const S3_<AREA> = {'); process.exit(1); }
const BANNED = ['—', '–', '!', '¡', 'no solo', 'no sólo', 'sino también', 'sin embargo', 'por lo tanto', 'en ese sentido', 'por ende', 'cabe destacar', 'cabe resaltar', 'es importante destacar', 'en el mundo actual', 'cada vez más', 'hoy más que nunca', 'en la era de'];
let data;
try { data = new Function(code + '; return ' + m[1] + ';')(); } catch (e) { console.log('PROBLEMAS: no se pudo evaluar: ' + e.message); process.exit(1); }

const TIPOS_T = ['seguimiento', 'plazos', 'radar', 'reuniones', 'reporte'];
const TIPOS_A = ['procedimiento', 'checklist', 'redactor', 'triaje', 'comite'];
const PRUEBAS = ['responde', 'no responde', 'fuera de alcance'];
const nPal = s => s.trim().split(/\s+/).length;
const counts = { t: [], a: [] };

function prosa(tag, textos) {
  for (const t of textos) {
    if (typeof t !== 'string') continue;
    const low = t.toLowerCase();
    for (const b of BANNED) if (low.includes(b)) probs.push(tag + ': contiene ' + JSON.stringify(b) + ' en: ' + t.slice(0, 60).replace(/\n/g, ' '));
    if (t.includes(';')) probs.push(tag + ': punto y coma en: ' + t.slice(0, 60).replace(/\n/g, ' '));
  }
}
function texto(e, tag, claves) {
  for (const k of claves) if (typeof e[k] !== 'string' || !e[k].trim()) probs.push(tag + ': falta ' + k);
}
function lista(e, tag, k, min) {
  if (!Array.isArray(e[k]) || e[k].length < min) probs.push(tag + ': ' + k + ' necesita ' + min + ' o mas');
}

// Tareas
if (!Array.isArray(data.tareas) || data.tareas.length !== 5) probs.push('tareas: deben ser exactamente 5');
else data.tareas.forEach((e, i) => {
  const tag = 'tarea#' + (i + 1) + ' (' + e.tipo + ')';
  if (e.tipo !== TIPOS_T[i]) probs.push(tag + ': el tipo debe ser ' + TIPOS_T[i] + ' en este orden: ' + TIPOS_T.join(', '));
  texto(e, tag, ['titulo', 'resumen', 'cuando', 'fuente', 'prompt']);
  lista(e, tag, 'variaciones', 3); lista(e, tag, 'verificar', 3); lista(e, tag, 'salida', 3);
  const n = nPal(e.prompt || ''); counts.t.push(n);
  if (n < 170 || n > 360) probs.push(tag + ': prompt con ' + n + ' palabras (rango 170-360)');
  if (!/\[VERIFICAR\]/.test(e.prompt || '')) probs.push(tag + ': el prompt debe usar la marca [VERIFICAR]');
  if (!/corre sola|no me hagas preguntas/i.test(e.prompt || '')) probs.push(tag + ': el prompt debe decir que la tarea corre sola y no hace preguntas');
  for (const b of ['ROL', 'CONTEXTO', 'INSTRUCCIÓN', 'FORMATO DE SALIDA', 'LÍMITES']) if (!(e.prompt || '').includes('\n' + b + '\n') && !(e.prompt || '').startsWith(b + '\n')) probs.push(tag + ': falta el bloque ' + b);
  if (/\b(envía|envia|responde por mí|aprueba|elimina|borra)\b/i.test((e.prompt || '').split('LÍMITES')[0].split('INSTRUCCIÓN')[1] || '')) probs.push(tag + ': una tarea solo lee, resume y lista: no pidas enviar, aprobar ni borrar');
  prosa(tag, [e.titulo, e.resumen, e.cuando, e.fuente, e.prompt].concat(e.variaciones || [], e.verificar || [], e.salida || []));
});

// Agentes
if (!Array.isArray(data.agentes) || data.agentes.length !== 5) probs.push('agentes: deben ser exactamente 5');
else data.agentes.forEach((e, i) => {
  const tag = 'agente#' + (i + 1) + ' (' + e.tipo + ')';
  if (e.tipo !== TIPOS_A[i]) probs.push(tag + ': el tipo debe ser ' + TIPOS_A[i] + ' en este orden: ' + TIPOS_A.join(', '));
  texto(e, tag, ['nombre', 'descripcion', 'conocimiento', 'instrucciones']);
  if ((e.nombre || '').length > 30) probs.push(tag + ': nombre de ' + e.nombre.length + ' caracteres (maximo 30)');
  if ((e.descripcion || '').length > 300) probs.push(tag + ': descripcion de mas de 300 caracteres (una o dos frases)');
  if ((e.instrucciones || '').length > 7500) probs.push(tag + ': instrucciones de mas de 7.500 caracteres (el limite es 8.000)');
  const n = nPal(e.instrucciones || ''); counts.a.push(n);
  if (n < 170 || n > 420) probs.push(tag + ': instrucciones con ' + n + ' palabras (rango 170-420)');
  if (!/No aparece en el documento/.test(e.instrucciones || '')) probs.push(tag + ': las instrucciones deben decir «No aparece en el documento» para lo que la fuente no responde');
  for (const b of ['ROL', 'CONTEXTO', 'INSTRUCCIÓN', 'FORMATO DE SALIDA', 'LÍMITES']) if (!(e.instrucciones || '').includes('\n' + b + '\n') && !(e.instrucciones || '').startsWith(b + '\n')) probs.push(tag + ': falta el bloque ' + b);
  if (!Array.isArray(e.sugerencias) || e.sugerencias.length < 2) probs.push(tag + ': sugerencias necesita 2 o mas, cada una con nombre y texto');
  else e.sugerencias.forEach((s, j) => { if (!s.nombre || !s.texto) probs.push(tag + ': sugerencia ' + (j + 1) + ' sin nombre o texto'); });
  if (!Array.isArray(e.pruebas) || e.pruebas.length !== 3) probs.push(tag + ': pruebas debe tener 3 (responde, no responde, fuera de alcance)');
  else e.pruebas.forEach((p, j) => {
    if (p.tipo !== PRUEBAS[j]) probs.push(tag + ': prueba ' + (j + 1) + ' debe ser de tipo ' + PRUEBAS[j]);
    if (!p.pregunta || !p.esperado) probs.push(tag + ': prueba ' + (j + 1) + ' sin pregunta o sin esperado');
  });
  lista(e, tag, 'verificar', 3);
  const ps = (e.pruebas || []).flatMap(p => [p.pregunta, p.esperado]);
  const ss = (e.sugerencias || []).flatMap(s => [s.nombre, s.texto]);
  prosa(tag, [e.nombre, e.descripcion, e.conocimiento, e.instrucciones].concat(e.verificar || [], ps, ss));
});

for (const k of Object.keys(data)) if (!['tareas', 'agentes'].includes(k)) probs.push('clave desconocida: ' + k);
if (data.tareas && new Set(data.tareas.map(x => x.titulo)).size !== data.tareas.length) probs.push('tareas: titulos repetidos');
if (data.agentes && new Set(data.agentes.map(x => x.nombre)).size !== data.agentes.length) probs.push('agentes: nombres repetidos');
if (probs.length) { console.log('PROBLEMAS en ' + path); probs.forEach(p => console.log('  - ' + p)); process.exit(1); }
console.log('ok ' + path + ' tareas ' + JSON.stringify(counts.t) + ' agentes ' + JSON.stringify(counts.a));
