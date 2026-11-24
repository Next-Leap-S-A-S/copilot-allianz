const RETOS3 = [
  {
    n: "0", bloque: "Verificación", titulo: "Comprueba que tu Copilot programa tareas", herr: "Copilot", min: 8, panel: "retos-t",
    ej: null,
    objetivo: "Confirmar que tu cuenta tiene tareas programadas y que Copilot lee tus datos de trabajo.",
    entra: "Tu cuenta de trabajo abierta en Copilot.",
    sales: "Saber si ves Tasks › Scheduled y si Copilot responde con tu calendario.",
    valida: [
      "Ves el icono de Tasks y dentro la pestaña Scheduled.",
      "La respuesta cita tus reuniones reales.",
      "Sabes en qué pestaña estás: Work, no Web."
    ],
    pasos: [
      { n: "1", texto: "Abre Copilot con tu cuenta de trabajo y busca el icono de Tasks en la barra lateral.", donde: "Copilot › Tasks" },
      { n: "2", texto: "Entra a Tasks y busca la pestaña Scheduled.", donde: "Tasks › Scheduled" },
      { n: "3", texto: "Escribe en Copilot Chat «¿Qué reuniones tengo hoy?» y revisa que responda con tu calendario." },
      { n: "4", texto: "Si no ves Scheduled, no te detengas. Mira la caja de abajo y sigue con los demás retos." }
    ],
    prompt: null,
    siFalla: "No veo la pestaña Scheduled: Microsoft activa las tareas por etapas y tu organización puede haberlas dejado apagadas. Sigue igual, pega cada prompt en un chat normal y obtienes el mismo resultado, solo que no se repite solo. Pregunta a tu área de tecnología. Copilot no responde con mis reuniones: revisa que estés en la pestaña Work y con tu cuenta de trabajo. Si aun así no ve tus datos, copia tu agenda dentro del chat y continúa desde ahí."
  },
  {
    n: "1", bloque: "Tarea transversal", titulo: "Tu resumen de la mañana", herr: "Tasks", min: 12, panel: "retos-t",
    ej: {
      ventanas: [
        { etiqueta: "DÓNDE QUEDA LA TAREA", color: "#1D4ED8", titulo: "Copilot · Tasks › Scheduled", filas: [
          { isNote: true, tag: "Activa", tagFg: "#14532D", tagBg: "#DCFCE7", b: "AM · Resumen de la mañana · Lunes a viernes · 7:30 a. m." },
          { isNote: true, tag: "Activa", tagFg: "#14532D", tagBg: "#DCFCE7", b: "VIE · Pendientes de la semana · Viernes · 4:00 p. m." },
          { isNote: true, tag: "Pausada", tagFg: "#6B7280", tagBg: "#E5E7EB", b: "LUN · Radar de carpetas · Lunes · 7:00 a. m." }
        ] },
        { etiqueta: "LO QUE LLEGA A TUS CHATS", color: "#C14C78", titulo: "Copilot · Chats", filas: [
          { isCop: true, b: "AM · Resumen de la mañana\n9:00 · Comité de siniestros. Pendiente: lista de documentos del 0417 (correo del 6 nov).\nEsperan tu respuesta: asegurado «Frutas del Valle» reclama 16 días sin respuesta (correo del 6 nov).\nReserva sin actualizar desde el 10 nov. [VERIFICAR]" }
        ] }
      ]
    },
    objetivo: "Programar una tarea que cada día laboral te diga qué tienes hoy y qué se te puede quedar sin responder.",
    entra: "Tu agenda de los próximos días y correos o chats con personas que verás.",
    sales: "Una tarea activa y una primera ejecución que revisaste.",
    valida: [
      "Cada reunión de la lista existe en tu calendario.",
      "Cada pendiente trae asunto y fecha del correo o chat de donde sale.",
      "Lo que no tiene fuente aparece marcado como [VERIFICAR]."
    ],
    pasos: [
      { n: "1", texto: "En Copilot, pestaña Work, pega el prompt de arranque y ejecútalo una vez como chat normal.", donde: "Copilot › Work" },
      { n: "2", texto: "Revisa el resultado y ajusta una vez: más corto, otro orden." },
      { n: "3", texto: "Programa el mismo prompt: días laborales, 7:30 a. m., zona horaria de Bogotá.", donde: "Programar este prompt" },
      { n: "4", texto: "En Tasks › Scheduled pulsa Run now y comprueba que aparece en Chats.", donde: "Tasks › Scheduled › Run now" },
      { n: "5", texto: "Deja la tarea activa: mañana llegará sola." }
    ],
    prompt: `ROL
Eres una asistente ejecutiva con 10 años de experiencia apoyando a profesionales del sector asegurador, con formación en administración de empresas. Tu sesgo es priorizar lo urgente y no inventar nada.

CONTEXTO
Soy [cargo] en el área de [área] de Allianz Colombia. Cada día laboral, antes de mi primera reunión, necesito saber qué tengo hoy y qué se me puede quedar sin responder. Usa solo mis correos, mis chats de Teams y mi calendario. Mi zona horaria es Bogotá. Esta tarea corre sola: no me hagas preguntas.

INSTRUCCIÓN
1. Lista mis reuniones de hoy con hora, asistentes y el propósito si aparece en la invitación.
2. Para cada reunión con personas externas o sobre un caso, resume qué pidieron y qué quedó pendiente en los últimos 14 días. Pon entre paréntesis la fuente (asunto y fecha).
3. Lista los correos y chats de las últimas 24 horas que esperan mi respuesta, del más urgente al menos urgente, con una frase que diga por qué.
4. Cierra con 3 prioridades sugeridas para hoy.
5. Si un dato no tiene fuente, márcalo como [VERIFICAR]. No inventes fechas, cifras ni nombres.

FORMATO DE SALIDA
Tabla para las reuniones, viñetas para el resto, máximo 250 palabras.

LÍMITES
Solo lees y resumes. No respondas, no envíes y no decidas por mí.`,
    nota: "Una tarea programada corre sola, así que el prompt no puede hacer preguntas. Por eso trae fuente, formato y la marca [VERIFICAR].",
    siFalla: "Si el resumen sale vacío, tu cuenta quizá no lee calendario o correo desde esta pestaña. Prueba escribir «¿Qué reuniones tengo hoy?» en el chat. Si Copilot no responde con tus datos, copia tu agenda dentro del chat y continúa desde ahí."
  },
  {
    n: "2", bloque: "Tarea de tu área", titulo: "Tu tarea por tipo de trabajo", herr: "Tasks", min: 20, panel: "retos-t", elige: "tareas",
    ej: null,
    objetivo: "Programar la tarea de tu área que más tiempo te ahorre. Eliges entre cinco tipos y pruebas una variación.",
    entra: "El tipo de trabajo que más repites, y una carpeta o reunión de tu área si eliges Radar o Reuniones.",
    sales: "Una tarea de tu área activa, con una variación probada y su primera ejecución revisada.",
    valida: [
      "Cada línea trae su fuente: asunto y fecha, o nombre del archivo.",
      "Lo que Copilot dedujo aparece marcado como [VERIFICAR].",
      "Abres una fuente citada y confirmas que dice lo mismo."
    ],
    pasos: [
      { n: "1", texto: "Elige tu área y el tipo de tarea. Lee el resumen y cómo se ve el resultado." },
      { n: "2", texto: "Copia el prompt, completa los corchetes y ejecútalo una vez como chat normal." },
      { n: "3", texto: "Prueba una variación de la lista, una sola, y compara los dos resultados." },
      { n: "4", texto: "Programa la que mejor te sirvió con la frecuencia sugerida.", donde: "Programar este prompt" },
      { n: "5", texto: "Pulsa Run now y comprueba que llega a Chats con un título claro.", donde: "Tasks › Scheduled › Run now" }
    ],
    prompt: null,
    siFalla: "Si tu tarea necesita un documento de referencia que Copilot no tiene, un procedimiento o un checklist, no la fuerces: probablemente es un agente. Mira la pestaña ¿Cuál usar? y el Reto 3."
  },
  {
    n: "3", bloque: "Tu primer agente", titulo: "Borrador del agente de tu área, por tipo", herr: "Agent Builder", min: 22, panel: "retos-a", elige: "agentes",
    ej: null,
    objetivo: "Dejar un agente en borrador, con instrucciones y una fuente, para el tipo de trabajo que eliges.",
    entra: "Un trabajo que repites y un documento de referencia: un procedimiento, un checklist o un formato. Haber leído la pestaña Agentes.",
    sales: "Un agente en borrador con nombre, descripción, instrucciones, una fuente y sugerencias de arranque.",
    valida: [
      "El nombre tiene máximo 30 caracteres y la descripción es una o dos frases.",
      "Las instrucciones dicen qué no debe hacer el agente.",
      "La fuente es un solo documento oficial, no una carpeta entera."
    ],
    pasos: [
      { n: "1", texto: "En Copilot abre Agentes y elige Nuevo agente. Describe en una frase qué hace y para quién, o elige Skip to configure para llenar los campos tú.", donde: "Copilot › Agentes › Nuevo agente" },
      { n: "2", texto: "En Configure, pega el nombre y la descripción del ejemplo de tu área y tipo.", donde: "Configure" },
      { n: "3", texto: "Pega en Instrucciones el prompt del agente y completa los corchetes.", donde: "Configure › Instructions" },
      { n: "4", texto: "Agrega la fuente de conocimiento que dice el ejemplo: un archivo o un sitio de SharePoint de tu área.", donde: "Configure › Knowledge" },
      { n: "5", texto: "Escribe las sugerencias de arranque y no lo compartas todavía.", donde: "Configure › Starter prompts" },
      { n: "6", texto: "Opcional: si tu trabajo tiene un procedimiento largo que solo aplica a veces, conviértelo en una skill.", donde: "Configure › Skills" }
    ],
    prompt: null,
    siFalla: "No veo la opción de crear agentes o de subir archivos: depende de tu licencia y de lo que haya habilitado tu administrador. Pregunta a tu área de tecnología y mientras tanto practica el prompt en un chat normal con el documento pegado. Un archivo que subes lo ve cualquier persona que use el agente, así que sube solo documentos oficiales."
  },
  {
    n: "4", bloque: "Pruebas", titulo: "Prueba tu agente con tres preguntas", herr: "Agent Builder", min: 15, panel: "retos-a", elige: "pruebas",
    ej: null,
    objetivo: "Comprobar que tu agente cita su fuente, reconoce lo que no sabe y rechaza lo que no le toca.",
    entra: "El agente en borrador del reto anterior.",
    sales: "Tres pruebas hechas, con lo que respondió el agente y un ajuste a sus instrucciones.",
    valida: [
      "La respuesta a la primera pregunta cita la sección del documento.",
      "Ante la segunda dice «No aparece en el documento» y no inventa.",
      "Ante la tercera se niega con amabilidad y dice a quién preguntar."
    ],
    pasos: [
      { n: "1", texto: "Abre Try it en tu agente y escribe la primera pregunta, la que el documento sí responde.", donde: "Configure › Try it" },
      { n: "2", texto: "Escribe la segunda, la que el documento no responde, y revisa que no invente." },
      { n: "3", texto: "Escribe la tercera, fuera de alcance, y revisa que se niegue con amabilidad." },
      { n: "4", texto: "Si falla una, agrega una línea a las instrucciones que corrija ese caso y repite solo esa prueba." },
      { n: "5", texto: "Anota en tu bitácora qué falló y qué línea agregaste. Eso es lo que llevas a la sesión 4." }
    ],
    prompt: null,
    siFalla: "El agente inventa datos que no están en el documento: Agent Builder no puede apagar el conocimiento general de Copilot. Agrega en las instrucciones «Si el documento no lo dice, responde: No aparece en el documento» y pregunta algo que sepas que no está para comprobarlo."
  }
];
