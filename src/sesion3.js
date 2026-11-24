const RUTA3 = [
  { n: "01", titulo: "Verificación", min: 8, bg: "#1D4ED8", fg: "#FFFFFF" },
  { n: "02", titulo: "Anatomía de una tarea", min: 10, bg: "#DCE6FD", fg: "#1E3A8A" },
  { n: "03", titulo: "Reto 1 · Tu primera tarea", min: 12, bg: "#1D4ED8", fg: "#FFFFFF" },
  { n: "04", titulo: "Reto 2 · Tu tarea por tipo", min: 20, bg: "#DCE6FD", fg: "#1E3A8A" },
  { n: "05", titulo: "¿Tarea, cuaderno o agente?", min: 10, bg: "#F6D5E2", fg: "#8A1D4A" },
  { n: "06", titulo: "Qué es un agente", min: 15, bg: "#C14C78", fg: "#FFFFFF" },
  { n: "07", titulo: "Reto 3 · Tu agente por tipo", min: 22, bg: "#F6D5E2", fg: "#8A1D4A" },
  { n: "08", titulo: "Reto 4 · Pruebas", min: 15, bg: "#C14C78", fg: "#FFFFFF" },
  { n: "09", titulo: "Cierre", min: 8, bg: "#E5E7EB", fg: "#374151" }
];

const PANELES3 = [["s3-ruta", "Ruta"], ["s3-tareas", "Tareas"], ["s3-retos-t", "Retos de tareas"], ["s3-decidir", "¿Cuál usar?"], ["s3-agentes", "Agentes"], ["s3-retos-a", "Retos de agentes"], ["s3-cierre", "Cierre"]];

const LICENCIA3 = {
  titulo: "Lo que esta sesión necesita de tu licencia",
  texto: "Con Microsoft 365 Copilot puedes programar tareas, crear cuadernos y construir agentes con Agent Builder. No incluye Copilot Cowork. La comparación completa de licencias está en la pestaña Licencia de la sesión 1.",
  nota: "Las funciones llegan por etapas. Si algo no aparece en tu cuenta, el reto trae un camino alterno que usa un chat normal."
};

const TAREAS_INFO = {
  intro: "Una tarea programada es un prompt con horario. Copilot lo ejecuta solo y deja la respuesta en tus Chats. Tú la revisas antes de usarla.",
  que: [
    { t: "Qué defines", x: "El prompt, el día, la hora y la frecuencia, una vez o recurrente. La hora es la de Bogotá." },
    { t: "Dónde queda", x: "En Chats, a la izquierda, con el título en negrita y un icono. Desde Tasks › Scheduled usas Run now, editar, pausar o eliminar." },
    { t: "Los límites", x: "Hasta 10 tareas activas y 50 en total por persona. Por ahora el resultado se guarda en el chat, no cuentes con que envíe correos." }
  ],
  filtros: [
    { t: "Se repite a una hora predecible", x: "Cada mañana, cada viernes. Si depende de un evento impredecible, no se programa." },
    { t: "La entrada ya está donde Copilot ve", x: "Correo, calendario, Teams y archivos propios en OneDrive o SharePoint." },
    { t: "El resultado es leer, resumir o listar", x: "No decidir ni actuar. Copilot deja un reporte y tú decides." },
    { t: "Se puede verificar", x: "Cada línea trae el asunto y la fecha del correo, o el nombre del archivo." },
    { t: "Falla sin daño", x: "Si un día no la abres, no pasa nada grave." }
  ],
  semaforo: [
    { c: "Verde", x: "Correos y chats propios, agenda, reuniones y archivos propios en OneDrive o SharePoint que ya usas." },
    { c: "Amarillo", x: "Hilos con datos de asegurados, clientes o empleados. El resultado queda en tu historial: no lo copies fuera ni lo pegues en canales amplios." },
    { c: "Rojo", x: "No lo programes: nada que decida (aprobar, negar cobertura, calificar personas), que dependa de datos que Copilot no ve o que pida inventar un dato faltante." }
  ],
  noHace: "No cambia tus archivos, no responde correos por ti y no decide. Tampoco sustituye una revisión humana: todo lo que sale se valida contra la fuente antes de usarse.",
  refs: [
    { titulo: "Programar tus prompts más usados en Copilot", fuente: "Microsoft Support", url: "https://support.microsoft.com/topic/29dfd5fb-211a-4515-88a6-730b8074e489" },
    { titulo: "Tareas programadas: licencia, límites y administración", fuente: "Microsoft Learn", url: "https://learn.microsoft.com/copilot/microsoft-365/scheduled-prompts" }
  ]
};

const TIPOS_TAREA = [
  { id: "seguimiento", nombre: "Seguimiento", que: "Lo que espera tu respuesta o la de otros. Es la tarea más fácil de validar.", cuando: "Cada mañana", variar: "Cambia la ventana de 24 horas por 7 días, o limita a un cliente o a un canal." },
  { id: "plazos", nombre: "Plazos y vencimientos", que: "Fechas que aparecen escritas en correos y calendario, con los días que faltan. Nunca calcula plazos de ley.", cuando: "Lunes y jueves", variar: "Pide solo lo que vence en 3 días o menos, o agrega la columna de quién lo tiene." },
  { id: "radar", nombre: "Radar de archivos", que: "Qué cambió esta semana en una carpeta de OneDrive o SharePoint de tu área.", cuando: "Lunes temprano", variar: "Apunta a otra carpeta, o pide solo los cambios en archivos de un tipo (Excel, Word)." },
  { id: "reuniones", nombre: "Preparación de reuniones", que: "Para una reunión recurrente, qué pidieron y qué quedó pendiente antes de llegar.", cuando: "Un día antes", variar: "Cambia la reunión, o amplía la ventana de 14 a 30 días." },
  { id: "reporte", nombre: "Reporte semanal", que: "Conteos y temas que se repiten en la semana, solo con lo que está escrito.", cuando: "Viernes por la tarde", variar: "Pide el conteo por persona o por tema, o compara con la semana anterior." }
];

const TIPOS_AGENTE = [
  { id: "procedimiento", nombre: "Consulta de procedimiento", que: "Responde solo con un procedimiento o manual oficial y cita la sección.", fuente: "Un archivo de SharePoint" },
  { id: "checklist", nombre: "Checklist o validación", que: "Revisa un expediente o un documento que pegas contra un checklist oficial.", fuente: "Un checklist en Word o PDF" },
  { id: "redactor", nombre: "Redactor de formato", que: "Redacta un borrador con formato fijo (acta, comunicado, respuesta tipo) con los datos que le das.", fuente: "La plantilla o el formato oficial" },
  { id: "triaje", nombre: "Clasificador o triaje", que: "Clasifica y prioriza solicitudes que pegas, según una guía oficial.", fuente: "La guía de criterios del área" },
  { id: "comite", nombre: "Preparador de comité", que: "Prepara el orden del día, los puntos críticos y las preguntas de una reunión con el material cargado.", fuente: "El material y el formato del comité" }
];

const DECIDIR = {
  intro: "Tres herramientas para trabajo que se repite. La pregunta no es cuál es mejor, sino cuál encaja con tu trabajo.",
  cols: ["Tarea programada", "Cuaderno", "Agente"],
  filas: [
    { f: "Se activa", v: ["Sola, a la hora que defines", "Cuando abres el cuaderno y preguntas", "Cuando lo llamas"] },
    { f: "Sabe", v: ["Lo que Copilot ve de ti", "Solo las referencias que agregaste", "Lo que le cargas (hasta 20 archivos) y sus instrucciones"] },
    { f: "Sirve para", v: ["«Mira lo mío y dime qué hay»", "Un tema o proyecto con material que cambia y que quieres explorar", "Un rol con reglas y documentos fijos que otros también usan"] },
    { f: "Se comparte", v: ["No", "Con personas dentro de la organización, tus chats siguen privados", "Según la configuración del agente"] },
    { f: "Ejemplo (caso 0417)", v: ["Siniestros con silencio, cada mañana", "Todo el material del caso: correos, inventario, procedimiento", "Asistente del procedimiento de atención v3.2"] }
  ],
  reglas: [
    "¿Se repite a una hora y es leer o listar? Tarea programada.",
    "¿Es un tema o proyecto con material que cambia y quieres conversar con él? Cuaderno.",
    "¿Es un rol con reglas y documentos fijos que otras personas también usarán? Agente."
  ],
  cuaderno: [
    { n: "1", texto: "En la barra lateral de Copilot abre Cuadernos y crea uno nuevo.", donde: "Copilot › Cuadernos › Nuevo" },
    { n: "2", texto: "Agrega 3 referencias del caso 0417: un correo, el inventario en Excel y el procedimiento." },
    { n: "3", texto: "Pregunta: «¿Qué documentos faltan del siniestro 0417 y dónde lo dice?». La respuesta sale solo de esas referencias." },
    { n: "4", texto: "Opcional: genera un resumen en audio del cuaderno.", donde: "Quick create › Audio overview" }
  ],
  ejercicio: "En tu bitácora escribe 3 trabajos que repites y clasifica cada uno como tarea, cuaderno o agente, con una línea de por qué.",
  refs: [
    { titulo: "Cómo funcionan los cuadernos de Copilot", fuente: "Microsoft Support", url: "https://support.microsoft.com/en-us/microsoft-365-copilot/how-microsoft-365-copilot-notebooks-works" },
    { titulo: "Obtener respuestas de tu cuaderno", fuente: "Microsoft Support", url: "https://support.microsoft.com/en-us/Microsoft-365-Copilot/get-answers-and-insights-about-your-microsoft-365-copilot-notebook" }
  ]
};

const AGENTES_INFO = {
  intro: "Un agente guarda tu Rol, tu Contexto y tus documentos una sola vez. Quien lo use escribe solo la Instrucción corta.",
  piezas: [
    { t: "Instrucciones", x: "Quién es y cómo responde" },
    { t: "Conocimiento", x: "Qué documentos consulta" },
    { t: "Skills", x: "Procedimientos que usa cuando hacen falta" },
    { t: "Capacidades", x: "Crear gráficos, archivos o imágenes" }
  ],
  vs: [
    { f: "Cada vez que lo usas", chat: "Escribes Rol, Contexto e Instrucción completos.", agente: "Escribes solo la Instrucción corta. El Rol y el Contexto ya están guardados." },
    { f: "Documentos", chat: "Los adjuntas o los mencionas cada vez.", agente: "Quedan cargados como conocimiento y los consulta siempre." },
    { f: "Consistencia", chat: "Depende de cómo escribas cada prompt.", agente: "Responde con las mismas reglas para todas las personas que lo usan." },
    { f: "Ejemplo (caso 0417)", chat: "«Revisa el siniestro 0417 con el procedimiento v3.2…» y pegas el procedimiento.", agente: "«Revisa el 0417.» El agente ya conoce el procedimiento v3.2 y el formato de respuesta." }
  ],
  campos: [
    { c: "Nombre", l: "Hasta 30 caracteres", x: "Corto, descriptivo y único.", ej: "Siniestros complejos" },
    { c: "Descripción", l: "Hasta 1.000 caracteres", x: "Le dice a Copilot cuándo usar el agente y a las personas para qué sirve. Una o dos frases.", ej: "Guía la atención de siniestros complejos según el procedimiento interno." },
    { c: "Instrucciones", l: "Hasta 8.000 caracteres", x: "El corazón del agente: Rol, Contexto e Instrucción con pasos, y lo que no debe hacer. Siempre están activas.", ej: "Rol: analista de siniestros. Contexto: responde solo con el procedimiento. Instrucción: 1, 2, 3." },
    { c: "Conocimiento", l: "Según la fuente", x: "Los documentos, sitios o datos en los que se apoya para responder.", ej: "El procedimiento v3.2 y el formato de lista de documentos." },
    { c: "Capacidades", l: "Dos interruptores", x: "Crear documentos, gráficos y código, y crear imágenes.", ej: "Un gráfico con los siniestros abiertos por antigüedad." },
    { c: "Skills", l: "Hasta 8 por agente", x: "Paquetes de instrucciones que el agente carga solo cuando la solicitud lo necesita.", ej: "La skill «revisión de siniestro complejo»." },
    { c: "Sugerencias de arranque", l: "Sin mínimo", x: "Preguntas listas que aparecen al abrir el agente. Cada una lleva nombre y descripción.", ej: "«Documentos faltantes del caso»" },
    { c: "Modo de respuesta", l: "Auto, Rápido o Pensar más", x: "Cómo razona por defecto. Cada persona puede cambiarlo al usar el agente.", ej: "«Pensar más» para casos con muchas piezas." }
  ],
  fuentesNota: "Con Microsoft 365 Copilot (de pago) están todas las fuentes de esta tabla. Conectores y Dynamics los habilita el administrador de tu organización.",
  fuentes: [
    { fuente: "Sitios web públicos", carga: "Hasta 4 direcciones (máximo dos niveles de ruta, sin parámetros), o el interruptor «Buscar en todos los sitios».", ojo: "Es información pública, no contiene tus documentos internos." },
    { fuente: "Archivos, carpetas o sitios de SharePoint", carga: "Hasta 100 archivos. Solo lee los tipos de archivo que Copilot admite.", ojo: "Respeta los permisos de cada persona. Es la fuente recomendada: si actualizas el archivo, el agente ve la versión nueva. No funciona si tu organización activó Restricted SharePoint Search." },
    { fuente: "Listas de SharePoint", carga: "Una lista (hasta 20.000 filas o 50 MB de texto). Usa el enlace directo a la lista, no a una vista filtrada.", ojo: "No se indexa la columna de adjuntos." },
    { fuente: "Páginas de OneNote", carga: "Páginas individuales, no cuadernos completos. Solo desde el selector de archivos.", ojo: "No admite direcciones pegadas." },
    { fuente: "Archivos de OneDrive", carga: "Hasta 50 archivos, con enlace para compartir.", ojo: "Respeta permisos y etiquetas de sensibilidad." },
    { fuente: "Chats y reuniones de Teams", carga: "Hasta 5 chats y 5 reuniones concretos, o «Mis chats y reuniones de Teams» para todo.", ojo: "La opción «todo» es muy amplia, limita a chats concretos. Las transcripciones muy largas pueden no entrar completas." },
    { fuente: "Correo de Outlook", carga: "Todo tu buzón (no se puede acotar).", ojo: "Úsalo en agentes para ti. Las personas con quienes compartas el agente no obtienen acceso a tu correo." },
    { fuente: "Archivos subidos al agente", carga: "Hasta 20 archivos, sin carpetas. Word, PDF, PowerPoint y texto hasta 512 MB, Excel hasta 30 MB.", ojo: "Cualquier persona con acceso al agente ve respuestas basadas en esos archivos. Sube solo documentos oficiales." },
    { fuente: "Conectores de Copilot, Dynamics 365 y Power Apps", carga: "Sin límite documentado. Los habilita y configura el administrador. Dynamics es solo lectura.", ojo: "No depende de ti, pídelo a tu área de tecnología. Solo ve los datos a los que tu usuario ya tiene acceso." },
    { fuente: "Personas", carga: "Un interruptor: «Referenciar personas de la organización».", ojo: "Viene activado en agentes creados con licencia de Microsoft 365 Copilot." }
  ],
  fuentesRegla: "Para empezar usa un solo archivo de SharePoint con el procedimiento oficial. Es la fuente más fácil de mantener y respeta los permisos de cada persona. La opción «solo usar fuentes especificadas» prioriza tus fuentes pero no apaga el conocimiento general de Copilot: pídele en las instrucciones que diga «No aparece en el documento» cuando no encuentre el dato.",
  licFuentes: {
    cols: ["Fuente de conocimiento", "Copilot Chat sin licencia", "Copilot Chat con pago por uso", "Microsoft 365 Copilot (tu licencia)"],
    filas: [
      ["Web (pública o acotada)", "Sí", "Sí", "Sí"],
      ["SharePoint, archivos subidos, conectores, Dataverse", "No", "Sí", "Sí"],
      ["Correo, personas, chats y reuniones de Teams", "No", "No", "Sí"]
    ]
  },
  skills: {
    intro: "Una skill es un procedimiento empaquetado que el agente carga solo cuando la solicitud lo necesita. Mantiene las instrucciones principales cortas y evita que un procedimiento largo se mezcle en respuestas que no tienen que ver.",
    cols: ["", "Instrucciones", "Conocimiento", "Skill"],
    filas: [
      ["Cuándo se usa", "Siempre", "Cuando la pregunta necesita un dato de un documento", "Solo cuando la solicitud coincide con su descripción"],
      ["Qué contiene", "El Rol, el tono y las reglas que aplican a todo", "Datos: normas, procedimientos, tablas", "Un procedimiento completo con su formato de salida y, si hace falta, archivos de apoyo"],
      ["Ejemplo", "«Responde siempre en máximo 8 líneas y cita la fuente.»", "El manual de atención de siniestros", "«Revisión de siniestro complejo»: lista de documentos, plazos escritos y tabla final"]
    ],
    ejemplo: `---
name: revision-siniestro-complejo
description: Úsala cuando el usuario pida revisar un siniestro complejo o armar la lista de documentos faltantes de un caso.
---
ROL
Eres un analista de siniestros con 10 años de experiencia en seguros patrimoniales, con formación en derecho. Tu sesgo es la prudencia: nunca afirmas cobertura.

CONTEXTO
Trabajas con casos como el siniestro 0417: varios correos, un inventario en Excel y el procedimiento interno de atención. Esta habilidad solo se usa para revisar un caso concreto, no para consultas generales.

INSTRUCCIÓN
1. Si el usuario no dio el número del siniestro, pídelo antes de seguir.
2. Lista los documentos recibidos y los que faltan según el procedimiento, con la fecha de cada correo.
3. Señala los plazos que aparezcan escritos. No calcules plazos legales.
4. Cierra con una tabla de 4 columnas: documento, estado, fecha, fuente.
5. Marca [VERIFICAR] todo lo que hayas deducido.`,
    nota: "La descripción de la skill es la que decide cuándo se activa. Escríbela con las frases que las personas usarían para pedirla.",
    pasos: [
      { n: "1", texto: "Crea un archivo de texto llamado SKILL.md con el contenido de ejemplo y cámbialo por tu procedimiento. Debe tener name y description arriba." },
      { n: "2", texto: "Comprime el archivo en un ZIP. El SKILL.md debe quedar en la raíz del ZIP, no dentro de una carpeta." },
      { n: "3", texto: "En Configure abre Skills, pulsa Add y sube el ZIP. También puedes describir la skill en lenguaje natural y dejar que Agent Builder la genere.", donde: "Configure › Skills › Add" },
      { n: "4", texto: "Prueba en Try it con una solicitud que deba activarla y con otra que no. Si se activa donde no debe, ajusta su descripción.", donde: "Try it" }
    ],
    limites: "Hasta 8 skills por agente. ZIP de máximo 50 MB (25 MB por archivo, 350 archivos en total, profundidad de carpetas hasta 3). Instrucciones de la skill de menos de 20.000 caracteres. Una skill no se reutiliza entre agentes. Los scripts que incluya corren en un entorno aislado, sin red. La función es reciente: si no ves Skills en Configure, usa solo instrucciones y conocimiento."
  },
  builder: {
    cols: ["", "Describir (lenguaje natural)", "Configurar (manual)", "Plantilla"],
    filas: [
      ["Cómo se entra", "Nuevo agente, escribes qué quieres en el chat.", "Nuevo agente, Skip to configure.", "Nuevo agente, Start with a template."],
      ["Qué hace Copilot por ti", "Redacta nombre, descripción, instrucciones y sugerencias, y propone fuentes y capacidades.", "Nada: tú llenas cada campo.", "Crea el agente con descripción, instrucciones y sugerencias ya escritas."],
      ["Cuándo usarlo", "Primer borrador rápido, o cuando no tienes claro cómo escribir las instrucciones.", "Cuando ya tienes tu prompt con Rol, Contexto e Instrucción, o necesitas control exacto.", "Cuando tu caso se parece a uno que ya existe."],
      ["Ojo", "Solo disponible si tu idioma de Microsoft 365 está entre los admitidos. Revisa siempre lo que escribió.", "Más trabajo, pero el resultado no cambia por sorpresa.", "Es un punto de partida: hay que revisar y ajustar."]
    ],
    ruta: "Una ruta sencilla: describe el agente en lenguaje natural para tener el primer borrador, abre Configure y reemplaza las instrucciones por tu prompt con Rol, Contexto e Instrucción. Así aprovechas la velocidad sin perder el control del texto.",
    studio: "Agent Builder está incluido en tu licencia y sirve para agentes propios o de un equipo pequeño. No crea acciones sobre otros sistemas (enviar un correo, actualizar un registro) y no puede bloquear el conocimiento general de Copilot. Si necesitas flujos, conectores, acciones o control más estricto, puedes copiar el agente a Copilot Studio sin empezar de cero. Eso suele involucrar a tecnología y tiene sus propias condiciones de licencia."
  },
  semaforo: [
    { c: "Verde", x: "Procedimientos y formatos oficiales de tu área." },
    { c: "Amarillo", x: "Casos reales con datos personales: solo anonimizados y solo en un agente para ti." },
    { c: "Rojo", x: "Datos que no deberían tener un acceso amplio. Quien use el agente verá respuestas basadas en lo que cargues." }
  ],
  noHace: "No ejecuta acciones sobre otros sistemas y no se puede usar dentro de los chats de Teams. Sí responde con tus instrucciones y tus fuentes, y se prueba antes de compartirlo. Los agentes nuevos son privados hasta que tú los compartes, si tu organización lo permite.",
  refs: [
    { titulo: "Agent Builder en Microsoft 365 Copilot", fuente: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder" },
    { titulo: "Agregar conocimiento a un agente (fuentes y límites)", fuente: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agent-builder-add-knowledge" },
    { titulo: "Capacidades de los agentes según la licencia", fuente: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/prerequisites" },
    { titulo: "Laboratorio: agente con una skill en Agent Builder", fuente: "Microsoft Copilot Camp", url: "https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/12-skills-da-agent-builder/" }
  ]
};

const CIERRE3 = {
  titulo: "Lo que queda corriendo mañana",
  antes: [
    "Abre Chats y busca el título en negrita con el icono.",
    "Revisa el resultado contra la fuente antes de usarlo.",
    "Si algo no tiene fuente, trátalo como [VERIFICAR].",
    "Si en 3 días no la has revisado, pausa la tarea."
  ],
  gestionar: "En Tasks › Scheduled puedes editar la programación, pausar o eliminar. Regla práctica: una tarea que no lees dos veces seguidas, se pausa. Ponles un nombre claro, por ejemplo «AM · Resumen de la mañana».",
  sigue: "La sesión 4 es para probar y ajustar el agente con casos difíciles. Reúne 5 preguntas reales de tu área, anonimizadas: 3 fáciles, 1 difícil y 1 que el documento no responde.",
  viene: "Lo que viene, sin retos hoy: programar prompts dentro de un agente (Microsoft lo despliega entre mediados de noviembre y mediados de diciembre de 2026) y el agente Workflows (por ahora en Frontier y en inglés).",
  oro: "Copilot prepara, tú decides. Todo lo que sale de una tarea o de un agente se valida contra la fuente antes de usarlo."
};
