const AREAS = [
  {
    id: "suscripcion", nombre: "Suscripción", color: "#c14c78",
    caso: "Reunión de 30 minutos con un cliente pyme del sector alimentos."
  },
  {
    id: "siniestros", nombre: "Siniestros", color: "#b8790a",
    caso: "Reunión semanal de siniestros complejos."
  },
  {
    id: "comercial", nombre: "Comercial y canales", color: "#c85a24",
    caso: "Comité semanal de ventas."
  },
  {
    id: "servicio", nombre: "Servicio al cliente", color: "#4a3aa7",
    caso: "Reunión de calidad con las quejas de la semana."
  },
  {
    id: "tecnica", nombre: "Técnica y actuarial", color: "#2a78d6",
    caso: "Revisión de tarifas."
  },
  {
    id: "juridico", nombre: "Jurídico y cumplimiento", color: "#158f66",
    caso: "Comité de cumplimiento."
  },
  {
    id: "finanzas", nombre: "Finanzas", color: "#087a08",
    caso: "Coordinación del cierre mensual."
  },
  {
    id: "talento", nombre: "Talento humano", color: "#ad3a2e",
    caso: "Reunión de onboarding."
  },
  {
    id: "tecnologia", nombre: "Tecnología y operaciones", color: "#6b6c75",
    caso: "Comité de proyectos."
  }
];



const MARCO = [
  { m: "Objetivo", rci: "Instrucción", ej: "Prepárame 5 viñetas para la reunión con la pyme del sector alimentos." },
  { m: "Contexto", rci: "Contexto", ej: "Es una cotización de daños y la reunión dura 30 minutos." },
  { m: "Fuente", rci: "Dónde buscar", ej: "Usa mis correos y chats de Teams de las últimas dos semanas." },
  { m: "Expectativas", rci: "Formato y límites", ej: "Tono formal, tabla de 5 filas, marca los supuestos." }
];







const SESIONES = [
  { n: 1, titulo: "Copilot para productividad", detalle: "Teams, Planner, OneNote y prompting avanzado. El ciclo completo de una reunión.", estado: "abierta" },
  { n: 2, titulo: "Copilot dentro de Office 365", detalle: "Outlook, Word, Excel y PowerPoint. Un comité de punta a punta con datos propios.", estado: "pronto" },
  { n: 3, titulo: "Cuadernos y agentes: construcción", detalle: "Cuándo usar un cuaderno y cuándo un agente. Construcción de agentes reales por área.", estado: "pronto" },
  { n: 4, titulo: "Agentes: pruebas y entrega", detalle: "Casos difíciles, ajustes y plan de seguimiento. Cada área presenta su agente.", estado: "pronto" }
];


const LICENCIAS = [
  {
    nombre: "Copilot Chat", tipo: "Cuenta de trabajo, sin costo extra", estado: "base",
    datos: "Responde con la web pública y con lo que pegues o adjuntes. No lee los correos, chats, reuniones ni archivos de la organización.",
    apps: "Chat aparte. Sin Copilot dentro de Word, Excel, PowerPoint ni OneNote en cuentas sin licencia."
  },
  {
    nombre: "Copilot Pro", tipo: "Cuenta personal de Microsoft", estado: "no",
    datos: "No se conecta a los datos de la organización. No es para trabajar con información de Allianz.",
    apps: "Microsoft lo retiró y lo reemplazó por Microsoft 365 Premium, también personal."
  },
  {
    nombre: "Microsoft 365 Copilot", tipo: "Cuenta de trabajo, licencia paga por persona", estado: "si",
    datos: "Lee correos, chats, reuniones y archivos a los que ya tienes permiso, a través de Microsoft Graph.",
    apps: "Copilot dentro de Teams, Outlook, Word, Excel, PowerPoint y OneNote, más agentes y cuadernos. Es el nivel que el programa llama Copilot Premium."
  },
  {
    nombre: "Copilot Cowork", tipo: "Agente de Microsoft 365 Copilot que ejecuta tareas de varios pasos", estado: "no",
    datos: "Microsoft lo dio por disponible el 16 de junio de 2026. Pide la licencia de Microsoft 365 Copilot y se cobra aparte según el uso.",
    apps: "La licencia de Allianz no lo incluye."
  }
];

const IMPLICA = [
  "En esta formación tú pides y tú revisas, paso a paso. Nadie le delega a Copilot una tarea larga para que la ejecute sola.",
  "Si en un video, un artículo o una demo ves Copilot Cowork, no lo busques en tu Copilot. No está en su licencia.",
  "Todo lo que hacemos se resuelve con Copilot Chat, el panel de Copilot en Teams, Facilitator, Planner Agent y OneNote, según lo que el administrador haya habilitado.",
  "Para repetir un trabajo sin escribir el prompt cada vez, usaremos cuadernos y agentes propios en las sesiones 3 y 4."
];

const COMPRUEBA = [
  "Abres Copilot con tu cuenta de trabajo y ves la pestaña Trabajo junto a la Web.",
  "Escribes en Copilot Chat: «¿Qué correos recibí hoy de [nombre de un compañero]?» y responde con tus correos. Si dice que no puede, tu cuenta no lee datos de trabajo.",
  "En Word, Outlook y Teams ves el icono de Copilot.",
  "En el menú de Copilot no aparece Cowork. Es lo esperado."
];

const HERRAMIENTAS = [
  {
    grupo: "Teams", nombre: "Copilot en chats y canales", donde: "Panel de Copilot dentro del chat o del canal.",
    hace: ["Resume los mensajes que no has leído, mirando 30 días atrás si no le dices otro plazo.", "Resume un hilo de canal desde el botón al final del hilo. El hilo necesita al menos 1.000 caracteres.", "Responde preguntas sobre lo que se dijo en esa conversación.", "Mejora un borrador con la opción Reescribir con Copilot del cuadro de mensaje."],
    limites: ["No resume imágenes, componentes Loop ni archivos compartidos en el hilo."]
  },
  {
    grupo: "Teams", nombre: "Copilot en la reunión", donde: "Panel de Copilot durante la reunión y pestaña de resumen después.",
    hace: ["Te pone al día si llegas tarde y responde preguntas durante la reunión. Lo que preguntas solo lo ves tú.", "Después deja un resumen con puntos clave, decisiones y tareas en la pestaña de resumen de la reunión."],
    limites: ["Necesita la transcripción activada. Sin transcripción no hay resumen."]
  },
  {
    grupo: "Teams", nombre: "Facilitator", donde: "Participante visible dentro de reuniones programadas.",
    hace: ["Toma notas compartidas en vivo que todos pueden editar.", "Sigue la agenda y avisa cuándo toca el siguiente tema.", "Deja un resumen con decisiones y pendientes.", "Crea tareas que se sincronizan con Planner (en vista previa pública según varias fuentes).", "Redacta un documento de Word con el contenido de la reunión (estado por confirmar)."],
    limites: ["Solo funciona en reuniones programadas. No funciona en chats, reuniones instantáneas, llamadas ni reuniones de canal.", "El administrador debe permitir Copilot y Facilitator durante o después de la reunión."]
  },
  {
    grupo: "Planner", nombre: "Planner Agent", donde: "Dentro de Planner, también desde Teams. Antes se llamaba Copilot en Planner y Project Manager.",
    hace: ["Crea tareas a partir de un objetivo: pestaña Metas, Agregar meta y Generar tareas, con archivos de apoyo opcionales.", "Sugiere tareas, las ordena en cubos y las divide en subtareas.", "Genera un informe de estado en la pestaña Informes cuando el plan tiene al menos 10 tareas."],
    limites: ["Generar tareas desde metas pide un plan premium de Planner, además de la licencia Copilot.", "No lee tus reuniones por sí solo. Los acuerdos llegan por Facilitator o los pasas tú desde Copilot Chat."]
  },
  {
    grupo: "OneNote", nombre: "Copilot en OneNote", donde: "Icono de Copilot en la página o clic derecho sobre el texto.",
    hace: ["Resume una sección, una página o un texto seleccionado.", "Crea una lista de tareas a partir de tus notas.", "Reescribe un texto y redacta un borrador de plan o de esquema.", "Responde preguntas sobre el cuaderno desde el panel de chat."],
    limites: ["Pide licencia Copilot de trabajo. Está en Windows, Mac, iPad y web.", "No aparece si el equipo tiene Windows Information Protection activo."]
  },
  {
    grupo: "OneNote", nombre: "Cuadernos de Copilot", donde: "Espacio aparte donde reúnes fuentes sobre un tema.",
    hace: ["Usa como fuentes tus reuniones de Teams, chats, archivos y páginas.", "Es el puente hacia la sesión 3, donde decidimos cuándo usar un cuaderno y cuándo un agente."],
    limites: ["Necesita licencia de SharePoint o OneDrive para crear cuadernos."]
  }
];

const TEAMS = [
  { titulo: "Ponerte al día en un chat", donde: "Panel de Copilot en el chat", prompt: "Resume lo que no he leído en este chat desde el lunes. Dame las decisiones, las preguntas que me hicieron a mí y lo que tengo pendiente, en máximo 6 viñetas." },
  { titulo: "Buscar información en tus chats", donde: "Copilot Chat, pestaña Trabajo", prompt: "Busca en mis chats y canales de Teams de las últimas dos semanas lo que se dijo sobre [tema]. Dame 5 viñetas, con quién lo dijo y en qué chat, para que yo pueda abrirlo y confirmarlo." },
  { titulo: "Redactar o traducir al inglés", donde: "Reescribir con Copilot o Copilot Chat", prompt: "Reescribe este mensaje en inglés para un colega de otra oficina. Tono profesional y cercano, máximo 80 palabras. Dame también una versión más corta: [pega tu mensaje]." },
  { titulo: "Llegar tarde a la reunión", donde: "Panel de Copilot en la reunión", prompt: "Llegué 20 minutos tarde. Resúmeme lo que se habló hasta ahora, las decisiones que ya se tomaron y lo que se está discutiendo en este momento, en máximo 6 viñetas." },
  { titulo: "Preguntar durante la reunión", donde: "Panel de Copilot en la reunión", prompt: "¿Quién quedó de entregar qué, y para cuándo? Dame solo lo que se dijo hasta ahora y no completes lo que falte." },
  { titulo: "Decisiones y pendientes", donde: "Copilot en la reunión, después", prompt: "Con la transcripción de esta reunión, lista las decisiones tomadas y los pendientes. Para cada pendiente indica responsable y fecha. Si no se dijo, escribe PENDIENTE y no lo inventes. Indica en qué parte de la reunión aparece cada uno." },
  { titulo: "Acta con tu plantilla", donde: "Copilot en la reunión o Facilitator", prompt: "Redacta el acta de esta reunión con exactamente esta estructura: [pega aquí los títulos de tu plantilla]. Usa tono formal y marca con [VERIFICAR] lo que no esté claro en la transcripción." }
];

const PLANNER = [
  { titulo: "Meta para el Planner Agent", donde: "Planner, pestaña Metas", prompt: "Meta: Dejar listo el cierre de la reunión semanal de siniestros complejos. Incluye una tarea por cada caso con ajustador responsable y fecha, y una tarea final para revisar los avances el viernes." },
  { titulo: "Acuerdos a tareas desde Copilot Chat", donde: "Copilot Chat, luego pegas en Planner", prompt: "Convierte los acuerdos de esta reunión en una tabla con título corto, responsable, fecha límite, prioridad y cubo sugerido. Si falta el responsable o la fecha, escribe PENDIENTE." },
  { titulo: "Informe de estado del plan", donde: "Planner, pestaña Informes", prompt: "Genera un informe de estado de este plan para el comité: qué avanzó, qué está atrasado, qué depende de otra persona y qué decisión necesitamos." },
  { titulo: "Revisar un plan que ya existe", donde: "Planner Agent", prompt: "Revisa este plan y dime qué tareas no tienen responsable, cuáles tienen fecha vencida y cuáles dependen de otras. Propón qué mover primero y por qué." }
];

const ONENOTE = [
  { titulo: "Resumir y sacar acciones", donde: "OneNote, panel de Copilot", prompt: "Resume mis notas de esta página. Lista los puntos de acción con responsable y fecha si aparecen." },
  { titulo: "Lista de tareas desde la página", donde: "OneNote, clic derecho", prompt: "Crea una lista de tareas con lo que quedó pendiente en esta página, ordenada por urgencia. No agregues nada que no esté en las notas." },
  { titulo: "Ordenar notas por tema", donde: "OneNote, panel de Copilot", prompt: "Ordena estas notas por tema. Dame un título para cada tema, 3 viñetas por tema y al final las preguntas que quedaron abiertas." },
  { titulo: "Reescribir con claridad", donde: "OneNote, clic derecho", prompt: "Reescribe este texto con frases cortas y claras para que otra persona del equipo lo entienda sin haber estado en la reunión." }
];

const HABITOS = [
  { n: "1", titulo: "Estructura", texto: "Usa Rol, Contexto e Instrucción. Agrega el formato que quieres (tabla, viñetas, longitud) y los límites (qué no debe hacer).", ejemplo: "Resume en 5 viñetas con fecha. Máximo 150 palabras. No prometas cobertura." },
  { n: "2", titulo: "Itera", texto: "La primera respuesta es un borrador. Pide ajustes concretos en lugar de empezar de cero.", ejemplo: "Hazlo más corto, cambia el tono a formal y agrega una columna con la fecha." },
  { n: "3", titulo: "Pide fuentes", texto: "Pide que cada afirmación diga de dónde sale: qué correo, qué minuto de la reunión, qué documento.", ejemplo: "Indica para cada decisión en qué parte de la transcripción aparece." },
  { n: "4", titulo: "Valida", texto: "Contrasta con la fuente antes de usar o enviar. Copilot puede equivocarse con nombres, cifras y fechas.", ejemplo: "Marca con [VERIFICAR] lo que no puedas confirmar en el documento." }
];

const VALIDAR = [
  "Los nombres de personas y áreas coinciden con la transcripción.",
  "Las cifras y fechas están en la fuente, no las puso Copilot por su cuenta.",
  "Cada decisión y cada compromiso aparece de verdad en la reunión.",
  "No hay promesas, coberturas ni compromisos que nadie dijo.",
  "Un responsable humano revisó el borrador antes de enviarlo."
];
