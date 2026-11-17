const RUTA2 = [
  { n: "01", titulo: "Outlook", min: 25, bg: "#1D4ED8", fg: "#FFFFFF" },
  { n: "02", titulo: "Word", min: 20, bg: "#DCE6FD", fg: "#1E3A8A" },
  { n: "03", titulo: "Excel", min: 30, bg: "#1D4ED8", fg: "#FFFFFF" },
  { n: "04", titulo: "PowerPoint", min: 15, bg: "#DCE6FD", fg: "#1E3A8A" },
  { n: "05", titulo: "Comité de punta a punta", min: 20, bg: "#1D4ED8", fg: "#FFFFFF" },
  { n: "06", titulo: "Cierre", min: 10, bg: "#E4E7EC", fg: "#344054" }
];

const TRAE2 = [
  "Un hilo largo de correos de tu trabajo, con datos sensibles anonimizados.",
  "Dos versiones de un mismo documento de Word: una carta, una política o un procedimiento.",
  "Un inventario o listado crudo en Excel (.xlsx), anonimizado y guardado en OneDrive o SharePoint.",
  "El tema de un comité o reunión de tu área para el que tengas que presentar resultados."
];

const OJO2 = {
  general: [
    "Guarda los archivos en OneDrive o SharePoint. Copilot en Word, Excel y PowerPoint trabaja sobre archivos en la nube.",
    "Desde marzo de 2026 Copilot en Word, Excel y PowerPoint se abre con el icono de la esquina inferior derecha y trabaja como un chat que edita el archivo. Los tutoriales con el botón en la pestaña Inicio están desactualizados.",
    "Las funciones llegan por etapas. Dos compañeros pueden ver botones distintos el mismo día.",
    "Copilot no lee correos ni archivos cifrados o con ciertas etiquetas de confidencialidad. Si dice que no puede abrir algo, puede ser eso.",
    "Todo lo que entrega es un borrador. Contrasta cifras, nombres y fechas con la fuente antes de usarlo."
  ],
  Outlook: [
    "Si «Borrador con Copilot» no aparece en el nuevo Outlook, revisa que el correo esté en HTML y no en texto sin formato.",
    "«Priorizar mi bandeja» se está retirando entre octubre de 2026 y marzo de 2027. Para priorizar, pídelo en el chat de Copilot sobre tu buzón.",
    "Copilot en buzones compartidos funciona en el nuevo Outlook, la web, Mac y el móvil, no en Outlook clásico.",
    "Pide siempre el idioma de salida: «en español de Colombia» o «en inglés formal»."
  ],
  Word: [
    "Copilot edita el documento por defecto. Si solo quieres preguntar, elige Solo chat.",
    "Para comparar versiones usa Revisar, Comparar en Word de escritorio. Copilot resume el resultado, no reemplaza la comparación exacta.",
    "Si el archivo está cifrado sin permiso de copiar, Copilot no puede leerlo.",
    "En documentos largos trabaja por secciones. Copilot rinde peor en la mitad de textos extensos."
  ],
  Excel: [
    "La función =COPILOT() se retiró en septiembre de 2026. Muchos tutoriales la muestran y ya no existe.",
    "Copilot edita el libro directamente. Usa el modo Plan para ver qué hará antes, revisa en Revisar, Mostrar cambios y deshaz con Ctrl+Z.",
    "Prepara el archivo: .xlsx, una sola fila de encabezados, sin celdas combinadas y cálculo en Automático. Un .csv se guarda primero como .xlsx.",
    "En Colombia las funciones salen en español y el separador puede ser punto y coma. Pide que te explique cada fórmula que inserta."
  ],
  PowerPoint: [
    "Pide primero el esquema y ajústalo. Generar las diapositivas sin revisar la historia da presentaciones genéricas.",
    "Copilot usa la plantilla de Allianz solo si TI publicó un kit de marca. Si no lo ves en «Seleccionar marca», parte de una presentación con la plantilla.",
    "El Word de origen funciona mejor con estilos de título y por debajo de 24 MB, un archivo a la vez.",
    "Copilot puede inventar cifras. Cada número de la presentación se contrasta con el informe de origen."
  ]
};

const FUNCIONES2 = [
  {
    grupo: "Outlook", nombre: "Resumir un hilo", icono: "list", en: "Summary by Copilot", estado: "disponible",
    donde: "Abre la conversación y pulsa Resumen por Copilot o Resumir, arriba del hilo.",
    hace: ["Resume el hilo completo arriba del primer correo.", "Trae citas numeradas que llevan al mensaje de donde sale cada punto.", "En el nuevo Outlook y la web también resume adjuntos PDF, Word y PowerPoint."],
    limites: ["En hilos muy largos puede dejar por fuera los mensajes más antiguos y lo avisa.", "No funciona con correos cifrados ni con algunas etiquetas de confidencialidad."],
    prueba: "Resume este hilo en 5 viñetas con fecha. Separa lo que ya se decidió de lo que sigue abierto y dime qué me piden a mí.",
    fuentes: [{ titulo: "Resumir un hilo con Copilot", url: "https://support.microsoft.com/office/summarize-an-email-thread-with-copilot-in-outlook-a79873f2-396b-46dc-b852-7fe5947ab640" }]
  },
  {
    grupo: "Outlook", nombre: "Borrador con Copilot", icono: "pen", en: "Draft with Copilot", estado: "disponible",
    donde: "Nuevo correo o Responder, icono de Copilot en la barra, Borrador. Escribes la instrucción, Generar y Mantenerlo.",
    hace: ["Redacta un correo nuevo o una respuesta a partir de tu instrucción.", "Ajusta el tono y la longitud, y permite regenerar.", "Redacta en inglés si se lo pides en la instrucción."],
    limites: ["En el nuevo Outlook y la web no aparece si el correo está en texto sin formato.", "La etiqueta de confidencialidad del borrador puede subir si usa contenido con una etiqueta más alta."],
    prueba: "Responde a este correo con tono empático y firme, máximo 120 palabras. Pide los dos documentos que faltan con fecha límite [fecha] y no prometas resultados.",
    fuentes: [{ titulo: "Redactar un correo con Copilot", url: "https://support.microsoft.com/es-es/office/redactar-un-mensaje-de-correo-electr%C3%B3nico-con-copilot-en-outlook-3eb1d053-89b8-491c-8a6e-746015238d9b" }]
  },
  {
    grupo: "Outlook", nombre: "Entrenamiento de Copilot", icono: "coach", en: "Coaching by Copilot", estado: "disponible",
    donde: "Con el correo ya escrito, icono de Copilot en la barra, Entrenamiento de Copilot.",
    hace: ["Revisa tono, claridad y cómo lo va a percibir quien lo lee.", "Da sugerencias concretas que puedes aplicar una por una o todas a la vez."],
    limites: ["El texto necesita al menos 100 caracteres."],
    prueba: "",
    fuentes: [{ titulo: "Entrenamiento de correo con Copilot", url: "https://support.microsoft.com/office/email-coaching-with-copilot-in-outlook-91a3cd56-1586-4a31-85c7-2eb8cdb02405" }]
  },
  {
    grupo: "Outlook", nombre: "Chat de Copilot sobre tu buzón", icono: "search", en: "Copilot Chat in Outlook", estado: "disponible",
    donde: "Botón Copilot de Outlook, en el panel lateral o en la vista de página completa.",
    hace: ["Busca en tu correo, calendario y reuniones con preguntas normales: qué me pidió una persona, qué tengo pendiente esta semana.", "Prioriza tu bandeja si se lo pides con criterios claros.", "Funciona también en buzones compartidos y delegados."],
    limites: ["En buzones compartidos no funciona en Outlook clásico.", "La interfaz cambió en octubre de 2026. La ruta puede verse distinta en tu equipo."],
    prueba: "¿Qué compromisos asumí por correo en las últimas dos semanas y cuáles siguen sin respuesta? Dame una tabla con persona, compromiso, fecha y el correo donde consta.",
    fuentes: [{ titulo: "Preguntas frecuentes de Copilot en Outlook", url: "https://support.microsoft.com/en-us/office/frequently-asked-questions-about-copilot-in-outlook-07420c70-099e-4552-8522-7d426712917b" }, { titulo: "Buzones compartidos y delegados", url: "https://support.microsoft.com/en-us/outlook/sharing/shared-delegated-mailboxes-copilot-chat-outlook" }]
  },
  {
    grupo: "Outlook", nombre: "Programar con Copilot y agenda", icono: "calendar", en: "Schedule with Copilot", estado: "disponible",
    donde: "En el correo, Programar con Copilot en la barra (o en Otras acciones de respuesta). En una reunión nueva, botón Copilot en la descripción para la agenda.",
    hace: ["Crea la convocatoria desde un hilo con título, agenda, resumen y asistentes.", "Redacta la agenda de una reunión según el objetivo y la audiencia."],
    limites: ["Si el hilo no habla de próximos pasos, no genera agenda.", "El nombre del botón en español puede variar según la versión."],
    prueba: "Agenda de 30 minutos para revisar este caso: objetivo, 4 temas con tiempo y la decisión que necesitamos al final.",
    fuentes: [{ titulo: "Crear una agenda de reunión con Copilot", url: "https://support.microsoft.com/en-us/office/create-a-meeting-agenda-with-copilot-in-outlook-31a44dfa-62bb-4751-82c4-14327a26759f" }]
  },
  {
    grupo: "Outlook", nombre: "Preparar una reunión", icono: "clipboard", en: "Prepare for your meeting", estado: "disponible",
    donde: "Calendario, abre el evento y mira las conclusiones de arriba, o en el chat elige la reunión y Preparar para esta reunión.",
    hace: ["Reúne el contexto: correos, archivos, chats de Teams y tareas relacionadas con la reunión.", "Propone preguntas para seguir preparándote."],
    limites: ["Sin contenido relacionado el resultado es genérico.", "El administrador debe tener activadas las conclusiones de reunión."],
    prueba: "",
    fuentes: [{ titulo: "Preparar una reunión con Copilot", url: "https://support.microsoft.com/es-ES/Outlook/prepare-for-your-meeting-with-copilot" }]
  },
  {
    grupo: "Outlook", nombre: "Priorizar mi bandeja", icono: "inbox", en: "Prioritize my inbox", estado: "confirmar",
    donde: "Flecha junto al botón Copilot, Priorizar.",
    hace: ["Marcaba los correos nuevos con prioridad alta o baja."],
    limites: ["Microsoft la está retirando entre octubre de 2026 y marzo de 2027. No la usamos en clase. Para priorizar, pídelo en el chat de Copilot."],
    prueba: "",
    fuentes: [{ titulo: "Priorizar mi bandeja", url: "https://support.microsoft.com/es-es/outlook/copilot-outlook/prioritize-my-inbox" }]
  },

  {
    grupo: "Word", nombre: "Editar con Copilot y Solo chat", icono: "sparkles", en: "Edit with Copilot", estado: "disponible",
    donde: "Botón de Copilot en la esquina del documento o Alt+C (Cmd+Ctrl+I en Mac). El panel se abre a la derecha.",
    hace: ["Hace cambios de varios pasos en el documento: reestructura, da formato, reescribe secciones o inserta contenido.", "Al terminar muestra un resumen de lo que cambió. Todo se puede revisar y deshacer.", "Con Solo chat respondes preguntas sin tocar el documento."],
    limites: ["Desde 2026 edita por defecto. En documentos oficiales pide primero que active el control de cambios."],
    prueba: "Solo chat: resume este documento en 5 puntos, lista las preguntas que deja abiertas y dime en qué sección está cada una.",
    fuentes: [{ titulo: "Bienvenida a Copilot en Word", url: "https://support.microsoft.com/es-es/office/welcome-to-copilot-in-word-2135e85f-a467-463b-b2f0-c51a46d625d1" }]
  },
  {
    grupo: "Word", nombre: "Borrador desde tus archivos", icono: "folder", en: "Draft with Copilot", estado: "disponible",
    donde: "Documento en blanco o cursor donde quieres el texto, abre Copilot, describe lo que necesitas y escribe / para citar archivos, correos o reuniones.",
    hace: ["Redacta cartas, actas, procedimientos y políticas desde cero o agrega secciones.", "Se basa en tus archivos, correos y reuniones de Microsoft 365, con citas a las fuentes.", "Puede respetar el formato de una plantilla o documento existente."],
    limites: ["Los archivos se citan desde OneDrive o SharePoint.", "El documento nuevo hereda la etiqueta de confidencialidad más restrictiva de las fuentes."],
    prueba: "Redacta una carta al asegurado con base en /[hilo o documento]. Tono empático y formal, máximo una página, lista los documentos que faltan y no prometas cobertura.",
    fuentes: [{ titulo: "Redactar y agregar contenido con Copilot en Word", url: "https://support.microsoft.com/en-US/Word/copilot/draft-and-add-content-with-copilot-in-word" }]
  },
  {
    grupo: "Word", nombre: "Reescribir", icono: "pen", en: "Rewrite", estado: "disponible",
    donde: "Selecciona el texto y pulsa Copilot en la minibarra (en Mac, clic derecho), o pídelo en el panel.",
    hace: ["Reescribe, acorta o da versiones alternativas de un fragmento.", "El tono se pide en la instrucción: más formal, más cercano, para un asegurado."],
    limites: [],
    prueba: "Reescribe este párrafo para un asegurado sin conocimientos técnicos: frases cortas, sin siglas y en máximo 80 palabras.",
    fuentes: [{ titulo: "Reescribir texto con Copilot en Word", url: "https://support.microsoft.com/en-US/word/copilot/rewrite-text-with-copilot-in-word" }]
  },
  {
    grupo: "Word", nombre: "Convertir texto en tabla", icono: "sheet", en: "Transform content", estado: "disponible",
    donde: "Selecciona el texto, abre Copilot y pide la tabla con las columnas que quieres.",
    hace: ["Crea una tabla a partir de texto corrido, por ejemplo los compromisos de un acta.", "La refinas con más instrucciones."],
    limites: ["El formato fino de la tabla se cambia con la cinta de Word."],
    prueba: "Convierte este texto en una tabla con columnas tarea, responsable, fecha y estado. Si falta un dato escribe PENDIENTE.",
    fuentes: [{ titulo: "Reescribir texto con Copilot en Word", url: "https://support.microsoft.com/en-US/word/copilot/rewrite-text-with-copilot-in-word" }]
  },
  {
    grupo: "Word", nombre: "Control de cambios y comentarios", icono: "comment", en: "Track changes and comments", estado: "disponible",
    donde: "Se pide en el panel de Copilot: activa el control de cambios, agrega comentarios, resume los comentarios pendientes.",
    hace: ["Hace cambios controlados visibles para revisarlos uno por uno.", "Crea y responde comentarios anclados al texto.", "Resume los cambios y comentarios recientes de un documento revisado por varias personas."],
    limites: ["Anunciado para Windows y Mac. En la web puede no estar.", "A veces reescribe párrafos completos en lugar de palabras sueltas. Revisa cada cambio."],
    prueba: "Activa el control de cambios. Agrega un comentario en cada párrafo donde falte una fecha, un responsable o una validación de Jurídico.",
    fuentes: [{ titulo: "Nuevas capacidades de Copilot en Word", url: "https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/copilot-in-word-new-capabilities-for-document-workflows/4508974" }]
  },
  {
    grupo: "Word", nombre: "Comparar dos versiones", icono: "compare", en: "Review, Compare", estado: "disponible",
    donde: "Revisar, Comparar, Comparar en Word de escritorio. Eliges documento original y documento revisado. Luego abres Copilot sobre el resultado.",
    hace: ["Word crea un documento nuevo con todas las diferencias marcadas.", "Sobre ese resultado Copilot resume los cambios por sección y señala los que cambian obligaciones, plazos, montos o coberturas.", "Otra opción: en OneDrive seleccionas hasta 5 archivos y pides Comparar archivos con Copilot."],
    limites: ["Copilot no tiene una función propia que compare dos archivos con precisión. La comparación exacta la hace Word.", "Comparar no existe en Word para la web. Usa Abrir en la aplicación de escritorio."],
    prueba: "Resume los cambios controlados de este documento por sección. Señala en una tabla los que alteran obligaciones, plazos, montos o coberturas.",
    fuentes: [{ titulo: "Comparar y combinar dos versiones", url: "https://support.microsoft.com/es-es/Word/compare-and-merge-two-versions-of-a-document" }, { titulo: "Comparar archivos con Copilot en OneDrive", url: "https://support.microsoft.com/en-us/office/compare-your-files-with-copilot-in-onedrive-794ab09c-c64a-45f3-bcbe-110a182a1806" }]
  },
  {
    grupo: "Word", nombre: "Resumen automático arriba del documento", icono: "eyeoff", en: "Top of document summary", estado: "confirmar",
    donde: "Aparecía arriba del documento al abrirlo.",
    hace: ["Mostraba un resumen al abrir el archivo."],
    limites: ["Microsoft lo retiró entre septiembre y noviembre de 2026. Ahora pides Resume este documento en el panel."],
    prueba: "",
    fuentes: []
  },

  {
    grupo: "Excel", nombre: "Panel de Copilot que edita el libro", icono: "sparkles", en: "Edit with Copilot", estado: "disponible",
    donde: "Botón Copilot en la esquina inferior derecha de Excel (Alt+C y Enter). El selector de modo está junto al cuadro de texto.",
    hace: ["Crea hojas, columnas calculadas y fórmulas entre hojas, aplica formato y validación de datos.", "Responde preguntas sobre los datos y encuentra tendencias y valores atípicos.", "Tiene tres modos: edición, Plan (te muestra qué va a hacer antes) y solo chat.", "Cada respuesta trae enlaces a lo que cambió. Revisar, Mostrar cambios marca lo que editó Copilot."],
    limites: ["Archivo .xlsx guardado en OneDrive o SharePoint. No edita si el cálculo está en Manual.", "Hasta 2 millones de celdas en tablas."],
    prueba: "Antes de cambiar nada, describe este archivo: qué columnas tiene, qué tipo de dato hay en cada una y qué problemas de calidad ves.",
    fuentes: [{ titulo: "Introducción a Copilot en Excel", url: "https://support.microsoft.com/es-es/excel/copilot/get-started-with-copilot-in-excel" }]
  },
  {
    grupo: "Excel", nombre: "Limpiar datos", icono: "eraser", en: "@clean-data", estado: "disponible",
    donde: "En el panel de Copilot escribe @clean-data y luego tu pedido.",
    hace: ["Detecta espacios de más, textos y números con formato distinto, fechas inconsistentes y duplicados.", "Explica qué encontró y por qué importa.", "Propone correcciones y tú eliges cuáles aplicar."],
    limites: ["En despliegue desde octubre de 2026. Puede no estar todavía en tu cuenta. Si no aparece, pide la limpieza en lenguaje normal en el panel."],
    prueba: "@clean-data Revisa la hoja Inventario. Lista los problemas por columna, cuántas filas afecta cada uno y la corrección que propones. No apliques nada todavía.",
    fuentes: [{ titulo: "Habilidades integradas de Copilot en Excel", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-built-in-skills" }]
  },
  {
    grupo: "Excel", nombre: "Fórmulas complejas y explicarlas", icono: "sigma", en: "Formulas with Copilot", estado: "disponible",
    donde: "Se piden en lenguaje normal en el panel. Para explicar, selecciona la celda y pide que te explique la fórmula.",
    hace: ["Crea columnas calculadas y fórmulas que cruzan varias hojas.", "Explica paso a paso una fórmula que ya existe."],
    limites: ["Revisa que las fórmulas funcionen con la configuración regional de tu equipo."],
    prueba: "Agrega una columna Días abiertos con la diferencia entre la fecha de aviso y hoy. Explícame la fórmula que usaste y en qué casos podría fallar.",
    fuentes: [{ titulo: "Introducción a Copilot en Excel", url: "https://support.microsoft.com/es-es/excel/copilot/get-started-with-copilot-in-excel" }]
  },
  {
    grupo: "Excel", nombre: "Sugerencias de fórmulas en la celda", icono: "cursor", en: "Formula completion", estado: "disponible",
    donde: "Escribe = en una celda y aparece la sugerencia. Se activa o desactiva en Archivo, Opciones, Copilot.",
    hace: ["Propone la fórmula completa según los encabezados y las celdas vecinas, con vista previa del resultado.", "Con unos pocos ejemplos escritos a mano detecta el patrón y llena la columna."],
    limites: ["Los pasos oficiales cubren Windows y la web."],
    prueba: "",
    fuentes: [{ titulo: "Sugerencias de fórmulas de Copilot", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-formula-suggestions-turn-on-off" }]
  },
  {
    grupo: "Excel", nombre: "Gráficos, tablas dinámicas e informe", icono: "chart", en: "Charts and PivotTables", estado: "disponible",
    donde: "Se piden en el panel de Copilot. La habilidad @chart-design se activa en el menú de configuración del panel.",
    hace: ["Crea gráficos y tablas dinámicas vinculados a los datos y editables.", "Arma una hoja de informe con resumen, tablas y gráficos.", "Con @chart-design recomienda el tipo de gráfico y mejora los existentes."],
    limites: ["@chart-design viene desactivada y sigue en despliegue."],
    prueba: "Crea una hoja Informe con una tabla dinámica por [categoría] y un gráfico de barras ordenado de mayor a menor. Escribe arriba 3 conclusiones con la cifra que las respalda.",
    fuentes: [{ titulo: "Habilidades integradas de Copilot en Excel", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-built-in-skills" }]
  },
  {
    grupo: "Excel", nombre: "Lienzo interactivo", icono: "dashboard", en: "@interactive-canvas", estado: "vista",
    donde: "Se pide en el panel: crea un dashboard con estos datos.",
    hace: ["Convierte los datos en un tablero interactivo con métricas, gráficos y hallazgos.", "Se actualiza cuando cambian los datos."],
    limites: ["En vista previa en noviembre de 2026. Si no te aparece, pide los gráficos y la tabla dinámica en una hoja Informe."],
    prueba: "",
    fuentes: [{ titulo: "Copilot se pone a trabajar en Excel", url: "https://techcommunity.microsoft.com/blog/ExcelBlog/beyond-analysis-copilot-gets-to-work-in-excel/4517581" }]
  },
  {
    grupo: "Excel", nombre: "Habilidades propias", icono: "wand", en: "@skill-builder", estado: "disponible",
    donde: "Escribe @skill-builder en el panel. Se administran en el menú de configuración del panel, Habilidades personalizadas.",
    hace: ["Convierte un proceso que repites, como limpiar el inventario mensual, en una habilidad que reutilizas.", "La habilidad queda guardada en tu OneDrive."],
    limites: ["En despliegue desde octubre de 2026. Es el puente hacia los agentes de las sesiones 3 y 4."],
    prueba: "",
    fuentes: [{ titulo: "Habilidades de Copilot en Excel", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-skills" }]
  },

  {
    grupo: "PowerPoint", nombre: "Crear una presentación", icono: "slides", en: "Create a presentation", estado: "disponible",
    donde: "Presentación nueva, icono de Copilot en la esquina inferior derecha. Con + y Seleccionar marca aplicas el kit de marca.",
    hace: ["Te hace preguntas sobre el público y la duración.", "Propone un esquema que ajustas antes de generar las diapositivas.", "Deja fijar extensión, tono y si lleva imágenes."],
    limites: ["La plantilla corporativa solo se aplica si TI publicó un kit de marca."],
    prueba: "Antes de crear diapositivas, propón un esquema de 8 diapositivas para un comité de 15 minutos. La primera dice la decisión que pedimos.",
    fuentes: [{ titulo: "Copilot en PowerPoint", url: "https://support.microsoft.com/es-es/copilot-powerpoint" }]
  },
  {
    grupo: "PowerPoint", nombre: "Crear desde un archivo", icono: "folder", en: "Create from a file", estado: "disponible",
    donde: "En el chat de Copilot escribe / y elige el archivo, o adjúntalo.",
    hace: ["Convierte un Word en diapositivas usando sus títulos e imágenes.", "Acepta PDF y carpetas de SharePoint u OneDrive como fuente.", "Puede copiar el estilo de otra presentación que adjuntes."],
    limites: ["El archivo tiene que estar en OneDrive o SharePoint.", "Word por debajo de 24 MB y uno a la vez."],
    prueba: "Crea una presentación ejecutiva a partir de /[informe]. Usa solo los datos del archivo y marca [VERIFICAR] cada cifra que no encuentres.",
    fuentes: [{ titulo: "Preguntas frecuentes de Copilot en PowerPoint", url: "https://support.microsoft.com/powerpoint/frequently-asked-questions-about-copilot-in-powerpoint" }]
  },
  {
    grupo: "PowerPoint", nombre: "Editar, reorganizar y adaptar", icono: "shuffle", en: "Edit with Copilot", estado: "disponible",
    donde: "Se pide en el chat de Copilot. Reescribir aparece al seleccionar un cuadro de texto.",
    hace: ["Agrega diapositivas y reorganiza en secciones.", "Adapta el contenido a otra audiencia, por ejemplo de equipo técnico a junta directiva.", "Reescribe un cuadro de texto más claro o más corto."],
    limites: ["Reescribir cambia el cuadro entero. No reescribe tablas ni gráficos."],
    prueba: "Adapta las diapositivas 3 a 6 para la gerencia: menos detalle técnico, una cifra por diapositiva y un título que diga la conclusión.",
    fuentes: [{ titulo: "Editar con Copilot en PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint/edit-with-copilot-in-powerpoint" }]
  },
  {
    grupo: "PowerPoint", nombre: "Habilidades para comités", icono: "question", en: "Skills", estado: "disponible",
    donde: "Chat de Copilot, Habilidades. Elige Revisa esta presentación, Prepararse para preguntas o Visualice esta diapositiva.",
    hace: ["Revisa esta presentación: sugiere mejoras de estructura, claridad e historia diapositiva por diapositiva, sin cambiar nada.", "Prepararse para preguntas: anticipa lo que va a preguntar el comité y los puntos débiles.", "Visualice esta diapositiva: propone una forma más visual de mostrar el contenido."],
    limites: ["Las habilidades propias dependen de la plataforma y las de la organización del administrador."],
    prueba: "",
    fuentes: [{ titulo: "Editar con Copilot en PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint/edit-with-copilot-in-powerpoint" }]
  },
  {
    grupo: "PowerPoint", nombre: "Notas del orador", icono: "note", en: "Speaker notes", estado: "disponible",
    donde: "Se piden en el chat de Copilot, para una diapositiva o para todas.",
    hace: ["Escribe el guion de cada diapositiva en el panel de notas.", "Lo ajustas desde el chat: más corto, más formal, con tiempos."],
    limites: ["Funciona mejor con menos de 50 diapositivas."],
    prueba: "Escribe notas del orador para todas las diapositivas: máximo 60 palabras cada una, con la idea que debo decir y la cifra que la respalda.",
    fuentes: [{ titulo: "Notas del orador con Copilot", url: "https://support.microsoft.com/es-es/PowerPoint/copilot/add-speaker-notes-to-your-presentations-using-copilot" }]
  },
  {
    grupo: "PowerPoint", nombre: "Resumir y preguntar", icono: "book", en: "Summarize", estado: "disponible",
    donde: "Se pide en el chat de Copilot.",
    hace: ["Resume una presentación que te enviaron y responde preguntas sobre ella.", "Funciona también en presentaciones de solo lectura."],
    limites: [],
    prueba: "¿Cuáles son los 3 mensajes clave de esta presentación y qué decisión pide? Dime en qué diapositiva está cada uno.",
    fuentes: [{ titulo: "Editar con Copilot en PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint/edit-with-copilot-in-powerpoint" }]
  },
  {
    grupo: "PowerPoint", nombre: "Traducir la presentación", icono: "languages", en: "Translate with Copilot", estado: "disponible",
    donde: "Se pide en el chat de Copilot: un cuadro, una diapositiva o toda la presentación.",
    hace: ["Traduce el contenido y ajusta el tamaño de los cuadros de texto."],
    limites: ["No distingue variantes regionales del español o del inglés.", "Edita el archivo abierto. Guarda una copia antes."],
    prueba: "",
    fuentes: [{ titulo: "Novedades de Microsoft 365 Copilot, agosto de 2026", url: "https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%E2%80%99s-new-in-microsoft-copilot--august-2026/4551960" }]
  }
];
