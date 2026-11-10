const RUTA = [
 {
  "n": "01",
  "titulo": "Del pedido al prompt",
  "min": 20,
  "bg": "#1D4ED8",
  "fg": "#FFFFFF"
 },
 {
  "n": "02",
  "titulo": "Ponte al día",
  "min": 15,
  "bg": "#DCE6FD",
  "fg": "#1E3A8A"
 },
 {
  "n": "03",
  "titulo": "Facilitator y acta",
  "min": 20,
  "bg": "#1D4ED8",
  "fg": "#FFFFFF"
 },
 {
  "n": "04",
  "titulo": "Planner",
  "min": 15,
  "bg": "#DCE6FD",
  "fg": "#1E3A8A"
 },
 {
  "n": "05",
  "titulo": "OneNote",
  "min": 10,
  "bg": "#1D4ED8",
  "fg": "#FFFFFF"
 },
 {
  "n": "06",
  "titulo": "Ciclo completo",
  "min": 30,
  "bg": "#DCE6FD",
  "fg": "#1E3A8A"
 },
 {
  "n": "07",
  "titulo": "Cierre",
  "min": 10,
  "bg": "#E4E7EC",
  "fg": "#344054"
 }
];

const RETOS = [
 {
  "n": "1",
  "bloque": "PROMPTING AVANZADO Y VALIDACIÓN",
  "titulo": "Del pedido suelto al prompt completo",
  "herr": "Copilot Chat",
  "min": 20,
  "objetivo": "Convertir un pedido de una línea en un prompt con objetivo, contexto, fuente y expectativas, y comprobar que la respuesta dice de dónde sale cada dato.",
  "entra": "Un pedido real de tu semana, por ejemplo «resume este hilo de correos».",
  "sales": "Un prompt que reutilizarías mañana y una respuesta con fuentes que pudiste contrastar.",
  "valida": [
   {
    "texto": "Cada dato importante tiene una fuente que puedes abrir."
   },
   {
    "texto": "No hay cifras, fechas ni nombres que nadie dijo."
   },
   {
    "texto": "Los supuestos están marcados."
   }
  ],
  "pasos": [
   {
    "n": "1",
    "texto": "Abre Copilot Chat con tu cuenta de trabajo y entra a la pestaña Trabajo.",
    "donde": "Copilot › Trabajo"
   },
   {
    "n": "2",
    "texto": "Pega el pedido suelto y guarda la respuesta como punto de partida.",
    "donde": ""
   },
   {
    "n": "3",
    "texto": "Reescríbelo con las cuatro piezas: objetivo, contexto, fuente y expectativas.",
    "donde": ""
   },
   {
    "n": "4",
    "texto": "Itera dos veces: primero acorta y cambia el tono, luego endurece los límites.",
    "donde": ""
   },
   {
    "n": "5",
    "texto": "Pide una tabla con cada afirmación, su fuente y lo que falta verificar.",
    "donde": ""
   }
  ],
  "prompt": "Prepárame 5 viñetas para la reunión con [cliente].\nContexto: [una frase].\nFuente: mis correos y chats de las últimas dos semanas.\nFormato: viñetas con fecha, tono formal, marca los supuestos.",
  "siFalla": "Si Copilot no encuentra tus correos, tu cuenta no lee datos de trabajo. Pega el texto en el chat y sigue desde ahí.",
  "refs": [
   {
    "titulo": "Escribir prompts eficaces para Microsoft 365 Copilot",
    "fuente": "Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting"
   }
  ],
  "ej": {
   "ventanas": [
    {
     "etiqueta": "LO QUE OBTIENES CON UN PEDIDO SUELTO",
     "color": "#B42318",
     "titulo": "Copilot Chat · Trabajo",
     "filas": [
      {
       "isMsg": true,
       "a": "Tú",
       "b": "Resume este hilo del siniestro 0417.",
       "ini": "T"
      },
      {
       "isCop": true,
       "b": "Es un siniestro de incendio. El asegurado está molesto y faltan documentos. Te recomiendo responderle pronto."
      },
      {
       "isNote": true,
       "tag": "PROBLEMA",
       "b": "Sin fechas, sin fuentes y sin la lista de documentos. Es lo que corregimos en este reto.",
       "tagFg": "#B42318",
       "tagBg": "#FEF3F2"
      }
     ]
    },
    {
     "etiqueta": "LO QUE DEBERÍA ENTREGAR UN PROMPT COMPLETO",
     "color": "#067647",
     "titulo": "Copilot Chat · Trabajo",
     "filas": [
      {
       "isCop": true,
       "b": "1. 21 oct: el asegurado reporta el incendio parcial en la bodega. (correo del 21 oct)\n2. 28 oct: el perito visita la bodega. (chat de siniestros)\n3. 6 nov: el asegurado reclama 16 días sin respuesta. (correo del 6 nov)\n4. Faltan el inventario valorizado y las facturas de compra. (correo del 6 nov)\n5. Reserva sin actualizar desde el 10 nov. [VERIFICAR]"
      },
      {
       "isNote": true,
       "tag": "CONTROL",
       "b": "Cada viñeta trae su fuente. Abre el correo del 6 nov y confirma los 16 días.",
       "tagFg": "#067647",
       "tagBg": "#ECFDF3"
      }
     ]
    }
   ]
  },
  "sec": [
   "prompting"
  ]
 },
 {
  "n": "2",
  "bloque": "TEAMS · CHATS Y CANALES",
  "titulo": "Ponte al día y responde sin perder el hilo",
  "herr": "Copilot en Teams",
  "min": 15,
  "objetivo": "Resumir lo que no leíste en un chat o canal, encontrar una decisión anterior y redactar la respuesta en español y en inglés.",
  "entra": "Un chat o canal de tu área con al menos una semana sin leer.",
  "sales": "Un resumen con decisiones y preguntas dirigidas a ti, y un borrador de respuesta que revisaste antes de enviar.",
  "valida": [
   {
    "texto": "Abriste el mensaje original de cada decisión."
   },
   {
    "texto": "Las preguntas dirigidas a ti son realmente tuyas."
   },
   {
    "texto": "El borrador no promete nada que no hayas decidido."
   }
  ],
  "pasos": [
   {
    "n": "1",
    "texto": "Abre el chat o canal y pulsa el icono de Copilot.",
    "donde": "Teams › Chat › Copilot"
   },
   {
    "n": "2",
    "texto": "Pide el resumen de lo no leído. Sin plazo, Copilot mira 30 días atrás.",
    "donde": ""
   },
   {
    "n": "3",
    "texto": "En un hilo de canal usa el resumen del final del hilo. El hilo necesita al menos 1.000 caracteres.",
    "donde": "Teams › Canal › Hilo › Resumir"
   },
   {
    "n": "4",
    "texto": "Busca la decisión anterior en Copilot Chat, con la fuente chats y canales.",
    "donde": "Copilot › Trabajo"
   },
   {
    "n": "5",
    "texto": "Redacta la respuesta y pide la versión en inglés con Reescribir con Copilot.",
    "donde": ""
   }
  ],
  "prompt": "Resume lo que no he leído en este chat desde el lunes.\nDame las decisiones, las preguntas que me hicieron a mí y lo que tengo pendiente, en máximo 6 viñetas.",
  "siFalla": "Copilot no resume imágenes, componentes Loop ni archivos compartidos en el hilo. Ábrelos aparte y súmalos a tu lectura.",
  "refs": [
   {
    "titulo": "Usar Copilot en chats y canales de Teams",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/teams/copilot/how-to-use-microsoft-365-copilot-in-teams-chats-and-channels"
   }
  ],
  "ej": {
   "ventanas": [
    {
     "etiqueta": "LO QUE TIENES",
     "color": "#344054",
     "titulo": "Teams · Siniestros complejos · 38 sin leer",
     "filas": [
      {
       "isMsg": true,
       "a": "Líder de siniestros",
       "b": "El 0417 queda para el viernes, falta el inventario.",
       "ini": "L"
      },
      {
       "isMsg": true,
       "a": "Ajustador 1",
       "b": "El asegurado llamó otra vez, está molesto.",
       "ini": "A"
      },
      {
       "isMsg": true,
       "a": "Analista de reservas",
       "b": "¿Alguien actualizó la reserva del 0417?",
       "ini": "A"
      },
      {
       "isMsg": true,
       "a": "Asistente de archivo",
       "b": "Subí las facturas de compra. Falta el inventario valorizado.",
       "ini": "A"
      }
     ]
    },
    {
     "etiqueta": "LO QUE DEBERÍA ENTREGAR COPILOT",
     "color": "#067647",
     "titulo": "Panel de Copilot · Chat",
     "filas": [
      {
       "isCop": true,
       "b": "Decisiones: el 0417 se trata el viernes.\nTe preguntaron a ti: confirmar la reserva del 0417 (Analista de reservas).\nPendiente del equipo: falta el inventario valorizado."
      },
      {
       "isCop": true,
       "b": "Borrador: «Hola, reviso la reserva del 0417 hoy y te confirmo antes de las 4 p. m.»"
      },
      {
       "isNote": true,
       "tag": "CONTROL",
       "b": "Abre el mensaje de la analista y confirma que la pregunta es para ti.",
       "tagFg": "#067647",
       "tagBg": "#ECFDF3"
      }
     ]
    }
   ]
  },
  "sec": [
   "teams-chats"
  ]
 },
 {
  "n": "3",
  "bloque": "TEAMS · REUNIONES Y FACILITATOR",
  "titulo": "Una reunión con Facilitator y un acta que se puede firmar",
  "herr": "Facilitator",
  "min": 20,
  "objetivo": "Abrir una reunión programada con Facilitator para que siga la agenda y deje notas con la estructura de tu acta, y cerrar con decisiones y tareas.",
  "entra": "Una reunión programada de Teams con transcripción activada y los títulos de tu plantilla de acta.",
  "sales": "Notas estructuradas, una tabla de tareas con responsable y fecha, y un acta en borrador.",
  "valida": [
   {
    "texto": "Quórum y asistentes coinciden con quienes estuvieron."
   },
   {
    "texto": "Cada decisión aparece en la transcripción."
   },
   {
    "texto": "Lo que no tiene fecha dice PENDIENTE, no una fecha inventada."
   }
  ],
  "pasos": [
   {
    "n": "1",
    "texto": "Programa la reunión y confirma que Facilitator puede entrar.",
    "donde": "Teams › Calendario › Nueva reunión"
   },
   {
    "n": "2",
    "texto": "Al abrirla, pega la instrucción con la agenda, los tiempos y la estructura del acta.",
    "donde": "Chat de la reunión"
   },
   {
    "n": "3",
    "texto": "A mitad de reunión pide un recap: temas cerrados y tiempo restante.",
    "donde": ""
   },
   {
    "n": "4",
    "texto": "Al cierre pide decisiones, pendientes y la tabla de tareas.",
    "donde": ""
   },
   {
    "n": "5",
    "texto": "Después abre el resumen de la reunión y pide el acta en tu plantilla.",
    "donde": "Teams › Reunión › Resumen"
   }
  ],
  "prompt": "Eres Facilitator. Sigue este orden con tiempos y avisa 3 minutos antes de cada cambio: [agenda].\nLleva las notas con esta estructura: [títulos del acta].\nEtiqueta cada punto como DECISIÓN, RIESGO, PENDIENTE o SUPUESTO.",
  "siFalla": "Facilitator solo entra a reuniones programadas. No funciona en chats, reuniones instantáneas ni llamadas. Si no aparece, usa Copilot en la reunión con la transcripción.",
  "refs": [
   {
    "titulo": "Facilitator en reuniones de Microsoft Teams",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/teams/copilot/facilitator-in-microsoft-teams-meetings"
   },
   {
    "titulo": "Facilitator en Teams: configuración para administradores",
    "fuente": "Microsoft Learn",
    "url": "https://learn.microsoft.com/microsoftteams/facilitator-teams"
   }
  ],
  "ej": {
   "ventanas": [
    {
     "etiqueta": "LO QUE LE DAS A FACILITATOR AL ABRIR",
     "color": "#344054",
     "titulo": "Teams · Reunión programada · viernes 9:00",
     "filas": [
      {
       "isMsg": true,
       "a": "Tú",
       "b": "Eres Facilitator. Sigue este orden y avisa 3 minutos antes de cada cambio: 1) caso 0417, 15 min. 2) caso 0422, 15 min. 3) reservas, 15 min. 4) cierre, 5 min.\nLleva las notas con la estructura de mi acta y etiqueta cada punto.",
       "ini": "T"
      }
     ]
    },
    {
     "etiqueta": "LO QUE DEBERÍA DEJAR",
     "color": "#067647",
     "titulo": "Facilitator · Notas en vivo",
     "filas": [
      {
       "isNote": true,
       "tag": "DECISIÓN",
       "b": "El 0417 pasa a perito financiero. (min 12)",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "RIESGO",
       "b": "Reclamo por demora, 16 días sin respuesta. (min 14)",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "PENDIENTE",
       "b": "Inventario valorizado. Responsable: Ajustador 1. Fecha: PENDIENTE.",
       "tagFg": "#B42318",
       "tagBg": "#FEF3F2"
      },
      {
       "isNote": true,
       "tag": "SUPUESTO",
       "b": "Se asume que la reserva sube. Sin cifra dicha en la reunión.",
       "tagFg": "#B42318",
       "tagBg": "#FEF3F2"
      }
     ]
    }
   ]
  },
  "sec": [
   "teams-reunion",
   "facilitator"
  ]
 },
 {
  "n": "4",
  "bloque": "PLANNER",
  "titulo": "De acuerdos a un plan con responsables",
  "herr": "Planner Agent",
  "min": 15,
  "objetivo": "Convertir los acuerdos en un plan con cubos, tareas, responsables por rol y fechas, y generar el informe de estado.",
  "entra": "La tabla de tareas del reto 3 y, si la tienes, la política o el informe de apoyo.",
  "sales": "Un plan con una tarea por acuerdo, sin tareas huérfanas, y un informe de estado.",
  "valida": [
   {
    "texto": "Ninguna tarea sin responsable ni fecha."
   },
   {
    "texto": "Cada tarea sale de un acuerdo real."
   },
   {
    "texto": "Las prioridades tienen un criterio que puedes explicar."
   }
  ],
  "pasos": [
   {
    "n": "1",
    "texto": "Abre Planner y entra a la pestaña Metas.",
    "donde": "Planner › Metas › Agregar meta"
   },
   {
    "n": "2",
    "texto": "Pega la meta con objetivo, fecha, cubos y reglas de responsables.",
    "donde": ""
   },
   {
    "n": "3",
    "texto": "Adjunta el documento de apoyo y pulsa Generar tareas.",
    "donde": "Generar tareas"
   },
   {
    "n": "4",
    "texto": "Revisa y ajusta responsables y fechas.",
    "donde": ""
   },
   {
    "n": "5",
    "texto": "Con 10 tareas o más, genera el informe de estado.",
    "donde": "Planner › Informes"
   }
  ],
  "prompt": "Meta: dejar listo el cierre de la reunión semanal de [área].\nUna tarea por cada acuerdo, responsable por rol, fechas relativas al día de entrega, y una tarea final para revisar avances el viernes.",
  "siFalla": "Generar tareas desde una meta pide un plan premium de Planner además de la licencia Copilot. Sin él, pide a Copilot Chat una tabla de tareas y pásala a mano.",
  "refs": [
   {
    "titulo": "Crear un plan desde cero con Planner Agent",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/planner/copilot/create-a-plan-from-scratch-with-planner-agent"
   },
   {
    "titulo": "Acceder a Planner Agent",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/planner/copilot/access-planner-agent"
   },
   {
    "titulo": "Preguntas frecuentes sobre Planner Agent",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/planner/copilot/frequently-asked-questions-about-planner-agent"
   }
  ],
  "ej": {
   "ventanas": [
    {
     "etiqueta": "LA META QUE ESCRIBES",
     "color": "#344054",
     "titulo": "Planner · Metas · Agregar meta",
     "filas": [
      {
       "isNote": true,
       "tag": "META",
       "b": "Dejar listo el cierre de la reunión semanal de siniestros complejos. Una tarea por acuerdo, responsable por rol, fechas relativas y una tarea final de revisión el viernes.",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      }
     ]
    },
    {
     "etiqueta": "EL PLAN QUE DEBERÍA GENERAR",
     "color": "#067647",
     "titulo": "Planner · Plan generado · Siniestro 0417",
     "filas": [
      {
       "isTask": true,
       "a": "Responder al asegurado por la demora",
       "rol": "Líder",
       "fecha": "día 1",
       "prio": "Alta",
       "pFg": "#B42318",
       "pBg": "#FEF3F2"
      },
      {
       "isTask": true,
       "a": "Pedir el inventario valorizado",
       "rol": "Ajustador 1",
       "fecha": "día 2",
       "prio": "Alta",
       "pFg": "#B42318",
       "pBg": "#FEF3F2"
      },
      {
       "isTask": true,
       "a": "Cargar las facturas al expediente",
       "rol": "Asistente de archivo",
       "fecha": "día 2",
       "prio": "Media",
       "pFg": "#93370D",
       "pBg": "#FFFAEB"
      },
      {
       "isTask": true,
       "a": "Actualizar la reserva del 0417",
       "rol": "Analista de reservas",
       "fecha": "día 3",
       "prio": "Alta",
       "pFg": "#B42318",
       "pBg": "#FEF3F2"
      },
      {
       "isTask": true,
       "a": "Revisar avances en el comité",
       "rol": "Líder",
       "fecha": "día 5",
       "prio": "Media",
       "pFg": "#93370D",
       "pBg": "#FFFAEB"
      }
     ]
    }
   ]
  },
  "sec": [
   "planner"
  ]
 },
 {
  "n": "5",
  "bloque": "ONENOTE",
  "titulo": "Notas limpias y pendientes que cuadran con el plan",
  "herr": "Copilot en OneNote",
  "min": 10,
  "objetivo": "Ordenar notas desordenadas por tema, separar decisiones de ideas y extraer los pendientes.",
  "entra": "Las notas de tu reunión pegadas en una página de OneNote.",
  "sales": "Una página con secciones claras y una lista de pendientes que cuadra con el plan de Planner.",
  "valida": [
   {
    "texto": "Todos los pendientes están en el plan."
   },
   {
    "texto": "No hay en la lista nada que no estuviera en las notas."
   },
   {
    "texto": "Las decisiones están separadas de las ideas."
   }
  ],
  "pasos": [
   {
    "n": "1",
    "texto": "Pega tus notas en una página nueva.",
    "donde": "OneNote › Página nueva"
   },
   {
    "n": "2",
    "texto": "Abre el icono de Copilot en la página o haz clic derecho sobre el texto.",
    "donde": "Clic derecho › Copilot"
   },
   {
    "n": "3",
    "texto": "Pide el resumen y los puntos de acción.",
    "donde": ""
   },
   {
    "n": "4",
    "texto": "Pide la lista de tareas y compárala con el plan de Planner.",
    "donde": ""
   },
   {
    "n": "5",
    "texto": "Reescribe una sección para quien no estuvo en la reunión.",
    "donde": ""
   }
  ],
  "prompt": "Resume mis notas de esta página.\nLista los puntos de acción con responsable y fecha si aparecen.\nNo agregues nada que no esté en las notas.",
  "siFalla": "Copilot en OneNote no aparece si el equipo tiene Windows Information Protection activo. Confírmalo con tu área de tecnología.",
  "refs": [
   {
    "titulo": "Bienvenido a Copilot en OneNote",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/office/welcome-to-copilot-in-onenote-34b30802-02ae-4676-a88c-82f8d5e586dd"
   },
   {
    "titulo": "Resumir tus notas de OneNote con Copilot",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/office/summarize-your-onenote-notes-with-copilot-89e1f3cd-9cbc-4b34-84da-40d52b39aff5"
   }
  ],
  "ej": {
   "ventanas": [
    {
     "etiqueta": "TUS NOTAS DE LA REUNIÓN",
     "color": "#344054",
     "titulo": "OneNote · Reunión de siniestros",
     "filas": [
      {
       "isNote": true,
       "tag": "NOTA",
       "b": "reserva 0417?? ver con analista",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "NOTA",
       "b": "inventario valorizado, pedir ya",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "NOTA",
       "b": "perito dijo daño en techo",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "NOTA",
       "b": "responder al asegurado hoy",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "NOTA",
       "b": "idea: ofrecer reunión presencial",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      }
     ]
    },
    {
     "etiqueta": "LO QUE DEBERÍA ENTREGAR COPILOT",
     "color": "#067647",
     "titulo": "OneNote · Panel de Copilot",
     "filas": [
      {
       "isCop": true,
       "b": "Decisiones: el 0417 pasa a perito financiero.\nPendientes: pedir inventario valorizado, actualizar la reserva, responder al asegurado hoy.\nIdeas: ofrecer reunión presencial."
      },
      {
       "isNote": true,
       "tag": "CONTROL",
       "b": "Los 3 pendientes están en el plan de Planner. La idea no se volvió tarea.",
       "tagFg": "#067647",
       "tagBg": "#ECFDF3"
      }
     ]
    }
   ]
  },
  "sec": [
   "onenote"
  ]
 },
 {
  "n": "6",
  "bloque": "RETO INTEGRADOR",
  "titulo": "El ciclo completo con tu reunión real",
  "herr": "Todo lo anterior",
  "min": 30,
  "objetivo": "Recorrer el ciclo con una reunión propia: agenda, acta, plan, notas y validación contra la transcripción.",
  "entra": "Tu propia reunión con transcripción, o el caso de tu área.",
  "sales": "Agenda, acta, plan y notas validados, y una lista de lo que Copilot tenía mal.",
  "valida": [
   {
    "texto": "Acta y plan coinciden en responsables y fechas."
   },
   {
    "texto": "Anotaste al menos tres correcciones a Copilot."
   },
   {
    "texto": "Un responsable humano revisó antes de enviar."
   }
  ],
  "pasos": [
   {
    "n": "1",
    "texto": "Prepara la agenda con Copilot. Cinco minutos.",
    "donde": ""
   },
   {
    "n": "2",
    "texto": "Resume, extrae decisiones y redacta el acta. Ocho minutos.",
    "donde": ""
   },
   {
    "n": "3",
    "texto": "Pasa los acuerdos a Planner. Siete minutos.",
    "donde": ""
   },
   {
    "n": "4",
    "texto": "Deja las notas en OneNote. Cinco minutos.",
    "donde": ""
   },
   {
    "n": "5",
    "texto": "Valida contra la transcripción y anota las correcciones. Cinco minutos.",
    "donde": ""
   }
  ],
  "prompt": "Con la transcripción de esta reunión, lista las decisiones y los pendientes con responsable y fecha.\nSi no se dijo, escribe PENDIENTE.\nIndica en qué parte de la reunión aparece cada uno.",
  "siFalla": "Si no tienes una reunión real a mano, usa el caso de tu área. Los datos siempre anonimizados.",
  "refs": [
   {
    "titulo": "Facilitator en reuniones de Microsoft Teams",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/teams/copilot/facilitator-in-microsoft-teams-meetings"
   },
   {
    "titulo": "Crear un plan desde cero con Planner Agent",
    "fuente": "Soporte de Microsoft",
    "url": "https://support.microsoft.com/en-us/planner/copilot/create-a-plan-from-scratch-with-planner-agent"
   }
  ],
  "ej": {
   "ventanas": [
    {
     "etiqueta": "EL ACTA QUE ENTREGÓ COPILOT, CON ERRORES",
     "color": "#B42318",
     "titulo": "Acta en borrador · Siniestro 0417",
     "filas": [
      {
       "isNote": true,
       "tag": "ASISTENTES",
       "b": "Líder, Ajustador 1, Analista de reservas y Gerente comercial.",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "DECISIÓN",
       "b": "La reserva sube 20 %.",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      },
      {
       "isNote": true,
       "tag": "PENDIENTE",
       "b": "El inventario valorizado se entrega el 15 de noviembre.",
       "tagFg": "#1D4ED8",
       "tagBg": "#EFF4FF"
      }
     ]
    },
    {
     "etiqueta": "LO QUE ENCUENTRAS AL VALIDAR",
     "color": "#067647",
     "titulo": "Tu validación contra la transcripción",
     "filas": [
      {
       "isNote": true,
       "tag": "ERROR",
       "b": "El Gerente comercial no estuvo en la reunión.",
       "tagFg": "#B42318",
       "tagBg": "#FEF3F2"
      },
      {
       "isNote": true,
       "tag": "ERROR",
       "b": "Nadie dijo 20 %. La reserva se revisa, sin cifra.",
       "tagFg": "#B42318",
       "tagBg": "#FEF3F2"
      },
      {
       "isNote": true,
       "tag": "ERROR",
       "b": "Nadie dio fecha para el inventario. Debe decir PENDIENTE.",
       "tagFg": "#B42318",
       "tagBg": "#FEF3F2"
      },
      {
       "isNote": true,
       "tag": "HECHO",
       "b": "Corregiste tres errores antes de firmar el acta.",
       "tagFg": "#067647",
       "tagBg": "#ECFDF3"
      }
     ]
    }
   ]
  },
  "sec": []
 }
];
