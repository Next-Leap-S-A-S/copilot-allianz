const MAS_TECNICA = {
  "teams-chats": [
    {
      necesidad: "Solicitud de datos a siniestros",
      titulo: "Mensaje a siniestros para pedir la base de pagos y reservas",
      donde: "Copilot Chat, pestaña Trabajo, o el cuadro de redacción del chat con el líder de siniestros.",
      antes: "Define el ramo, el corte de la información y las columnas que necesitas. Ten a la mano el último chat donde siniestros te entregó una base.",
      prompt: `ROL
Eres un analista técnico de seguros generales que pide información a otra área y quiere recibirla completa a la primera.

CONTEXTO
Necesito la base de siniestros del ramo [autos, hogar o salud] con corte al [fecha de corte] para la revisión trimestral de siniestralidad. El destinatario es el líder de siniestros, que tiene su propia carga de cierre. Todo lo que aparece en este pedido está anonimizado y los ejemplos son inventados.

FUENTES
Usa mis chats con siniestros de los últimos 30 días para ver qué entregaron antes y qué columnas faltaron. No uses archivos compartidos, imágenes ni Loop. No inventes nombres de campos que no aparezcan en esos chats.

INSTRUCCIÓN
1. Busca en mis chats qué base entregó siniestros la última vez, con qué columnas y qué reclamos hizo técnica.
2. Arma la lista de campos que pido: número de siniestro, fecha de ocurrencia, fecha de aviso, cobertura, pagos acumulados, reserva de caso, estado, ciudad de ocurrencia. Agrega los que falten según el historial.
3. Redacta un mensaje de máximo 140 palabras con el pedido, el corte, el formato (Excel con una fila por siniestro), la fecha límite [fecha] y para qué se usa.
4. Agrega una línea con el criterio de duplicados que necesito: un siniestro por fila, sin reaperturas repetidas.
5. Escribe una segunda versión de 60 palabras para recordar el pedido si pasan 3 días sin respuesta, con tono cordial.
6. Escribe una versión en inglés de 80 palabras para el actuario de la casa matriz.

FORMATO DE SALIDA
Primero la lista de campos en viñetas. Luego el mensaje principal, el recordatorio y la versión en inglés, cada uno con su rótulo.

LÍMITES
No prometas fechas por otra área. Marca [SUPUESTO] el nombre de cualquier campo que dedujiste y [VERIFICAR] toda fecha de entrega que no aparezca en los chats. Escribe PENDIENTE si no encuentras la entrega anterior.

CONTROL DE CALIDAD
Al final indica en qué chat encontraste cada reclamo previo y qué campos no pudiste confirmar.`,
      seguimiento: [
        "Acorta el mensaje principal a 90 palabras y pon la fecha límite en la primera línea. Mantén la lista de campos exacta.",
        "Redacta una respuesta para cuando siniestros diga que no tiene el campo fecha de aviso. Ofrece una alternativa sin cambiar el corte.",
        "Resume lo que siniestros respondió en este chat en 5 viñetas y marca PENDIENTE lo que aún no entregaron."
      ],
      verificar: [
        "Que los campos pedidos coincidan con los que necesita el análisis y con el diccionario de datos del área.",
        "Que la fecha de corte y la fecha límite sean las que acordaste y no las que Copilot supuso.",
        "Que el mensaje no incluya datos reales de asegurados ni de siniestros.",
        "Que la versión en inglés conserve el significado de reserva de caso y pagos acumulados."
      ]
    },
    {
      necesidad: "Explicar resultado a comercial",
      titulo: "Respuesta en el canal para explicar un alza de siniestralidad",
      donde: "Panel de Copilot dentro del canal donde comercial pregunta por qué subió la tarifa.",
      antes: "Abre el hilo donde comercial hizo la pregunta. Ten claro el resultado que quieres explicar y qué cifra puedes compartir.",
      prompt: `ROL
Eres un actuario que explica resultados técnicos a un equipo comercial sin formación actuarial, con paciencia y sin jerga.

CONTEXTO
En este canal, el gerente comercial preguntó por qué la siniestralidad del segmento [segmento] subió en el trimestre y qué significa para sus clientes. Los datos están anonimizados y las cifras de los mensajes son de ejemplo. Quiero responder en el hilo sin que parezca una clase.

FUENTES
Usa solo los mensajes de este hilo y del canal. No leas archivos adjuntos, imágenes ni Loop. No agregues cifras que no estén escritas en los mensajes.

INSTRUCCIÓN
1. Resume el hilo en 5 viñetas, indicando quién preguntó qué.
2. Lista las preguntas que comercial hizo y que siguen sin respuesta.
3. Identifica los términos técnicos que ya usé en el hilo, como frecuencia, severidad o recargo, y que pudieron confundir.
4. Redacta mi respuesta al hilo en máximo 120 palabras: qué pasó, por qué importa para el cliente y qué sigue.
5. Explica frecuencia y severidad con una comparación cotidiana de 2 frases, relacionada con seguros de [autos, hogar o salud].
6. Propón dos preguntas que yo le devuelva a comercial para entender qué le preocupa de verdad.

FORMATO DE SALIDA
Resumen en viñetas, lista de preguntas pendientes en tabla con columnas persona, pregunta y estado, borrador de respuesta y las dos preguntas finales.

LÍMITES
No recalcules ni justifiques la tarifa con cifras nuevas. No prometas ajustes comerciales. Marca [VERIFICAR] toda cifra del hilo y [SUPUESTO] lo que deduzcas del contexto. Escribe PENDIENTE si no consta la respuesta de alguien.

CONTROL DE CALIDAD
Al final indica en qué mensaje aparece cada cifra citada y qué no pudiste confirmar.`,
      seguimiento: [
        "Reescribe la respuesta para el director general en 70 palabras, con la conclusión en la primera frase.",
        "Dame la comparación cotidiana en una versión distinta, más corta, para usarla de forma oral en la reunión.",
        "Redacta un mensaje privado de 60 palabras para el gerente comercial, ofreciendo 20 minutos para explicarle el resultado."
      ],
      verificar: [
        "Que cada cifra del borrador esté en el hilo y coincida con el análisis oficial.",
        "Que la comparación cotidiana no cambie el sentido técnico de frecuencia y severidad.",
        "Que la respuesta no comprometa decisiones comerciales que no te corresponden.",
        "Que el hilo no contenga adjuntos con información que Copilot no leyó."
      ]
    },
    {
      necesidad: "Cambio de criterio de reservas",
      titulo: "Rastrear en chats por qué cambió el criterio de una reserva",
      donde: "Copilot Chat, pestaña Trabajo, sobre mis chats y canales de los últimos 30 días.",
      antes: "Recuerda el cambio de criterio que quieres documentar, por ejemplo el método de reserva IBNR o la tabla de desarrollo de siniestros.",
      prompt: `ROL
Eres un actuario de reservas técnicas que debe dejar por escrito por qué cambió un criterio de cálculo.

CONTEXTO
En las últimas semanas el equipo discutió por chat y por canal un cambio en el criterio de [reserva IBNR, factor de desarrollo o tratamiento de siniestros atípicos] del ramo [ramo]. Necesito reconstruir quién lo propuso, qué argumentos se dieron y quién lo aprobó. Los datos están anonimizados y las cifras de los mensajes son de ejemplo.

FUENTES
Busca en mis chats y canales de los últimos 30 días. No leas archivos compartidos, imágenes ni Loop. Si el argumento estaba en una hoja de cálculo, indícalo como no leído.

INSTRUCCIÓN
1. Busca los mensajes sobre el cambio de criterio y ordénalos por fecha.
2. Identifica la propuesta inicial, quién la hizo y qué justificó.
3. Lista las objeciones y las respuestas que recibieron.
4. Señala el mensaje donde se aprobó, o escribe PENDIENTE si nadie aprobó.
5. Redacta un párrafo de 100 palabras que explique el cambio en lenguaje claro, para el archivo del ramo.
6. Redacta un mensaje corto para el canal pidiendo confirmación del cambio a quienes participaron, con fecha límite [fecha].

FORMATO DE SALIDA
Línea de tiempo en tabla con fecha, persona, mensaje resumido y rol en la decisión. Luego el párrafo y el mensaje de confirmación.

LÍMITES
No decidas si el criterio es correcto y no recalcules la reserva. Marca [VERIFICAR] toda cifra y [SUPUESTO] lo que dedujiste del orden de los mensajes. No atribuyas decisiones a quien solo opinó.

CONTROL DE CALIDAD
Al final indica el chat o canal de cada fila de la tabla y lista lo que no pudiste encontrar.`,
      seguimiento: [
        "Indica qué argumentos a favor y en contra del cambio de criterio se repitieron en más de un mensaje.",
        "Convierte la línea de tiempo en una lista de 5 puntos que pueda pegar en el registro de cambios del ramo.",
        "Redacta una pregunta de 40 palabras para el jefe técnico pidiendo que confirme que él aprobó el cambio."
      ],
      verificar: [
        "Que cada fecha de la línea de tiempo coincida con la del mensaje original.",
        "Que la aprobación citada sea una decisión y no una opinión suelta.",
        "Que ninguna cifra del párrafo provenga de un adjunto que Copilot no pudo leer.",
        "Que el párrafo para el archivo no incluya datos de asegurados."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Comité de reservas",
      titulo: "Comité de reservas: criterios aprobados y reservas por revisar",
      donde: "Panel de Copilot dentro de la reunión de Teams, con la transcripción activada, o Recap al terminar.",
      antes: "Activa la transcripción antes de empezar. Si la reunión ya terminó, abre el Recap. Los montos mencionados deben ser de ejemplo.",
      prompt: `ROL
Eres un actuario de reservas técnicas que documenta un comité mensual de reservas para que otro actuario pueda auditar lo decidido.

CONTEXTO
Reunión del comité de reservas del cierre de [mes]. Participan reservas, siniestros, contabilidad y el jefe técnico. Se revisan reservas de caso, la reserva IBNR, siniestros grandes y ajustes de último minuto. Todo está anonimizado y las cifras mencionadas son de ejemplo.

FUENTES
Usa solo la transcripción de esta reunión. No uses la base contable, informes previos ni normas. Si alguien cita una norma o una circular, márcala [VERIFICAR] y no la completes.

INSTRUCCIÓN
1. Lista los criterios de reserva que se aprobaron en la reunión, con quién los propuso y cita corta.
2. Lista los siniestros o grupos de siniestros que quedaron para revisión, con motivo y responsable.
3. Extrae los montos mencionados para la reserva IBNR y el cambio frente al mes anterior, con quién los dijo.
4. Señala diferencias entre lo que dijo siniestros y lo que dijo reservas sobre el mismo caso.
5. Arma una tabla de pendientes con acción, responsable, fecha y evidencia que se debe entregar.
6. Escribe un resumen de 5 líneas para contabilidad, que debe contabilizar con base en lo decidido.

FORMATO DE SALIDA
Criterios aprobados (viñetas), Siniestros por revisar (tabla de 4 columnas), Montos dichos (tabla de 3 columnas con monto, concepto y quién lo dijo), Diferencias (viñetas), Pendientes (tabla de 4 columnas) y Resumen para contabilidad (5 líneas).

LÍMITES
No calcules reservas ni verifiques montos. Si nadie aprobó el criterio, escribe PENDIENTE. Usa [SUPUESTO] para lo deducido y [VERIFICAR] para todo monto sin soporte en la transcripción.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada criterio y cada monto, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Durante la reunión: ¿qué criterio de reserva se acaba de proponer y quién lo aprobó hasta ahora? Si nadie lo aprobó, dime PENDIENTE.",
        "Durante la reunión: lista los montos mencionados hasta ahora con quién los dijo. Marca VERIFICAR los que se dieron sin fuente.",
        "Redacta el correo de 120 palabras para contabilidad con los criterios aprobados y los pendientes. No incluyas montos sin confirmar."
      ],
      verificar: [
        "Que cada monto coincida con lo dicho en voz alta y no con un valor del mes anterior.",
        "Que los criterios listados se hayan aprobado y no apenas propuesto.",
        "Que los responsables de los pendientes sean los nombrados en la reunión.",
        "Que el resumen para contabilidad no incluya montos marcados VERIFICAR."
      ]
    },
    {
      necesidad: "Preparar el siguiente comité",
      titulo: "Preparar el comité de siniestralidad con la reunión anterior",
      donde: "Copilot Chat, pestaña Trabajo, usando el Recap de la reunión anterior como fuente.",
      antes: "Abre el Recap de la reunión de siniestralidad anterior y ten claro el ramo. Define la fecha de la próxima sesión.",
      prompt: `ROL
Eres un actuario que prepara la agenda de la próxima sesión del comité de siniestralidad a partir de lo que quedó abierto en la anterior.

CONTEXTO
La reunión anterior revisó la siniestralidad del ramo [ramo] por segmento y dejó análisis pendientes. La próxima sesión es el [fecha] y dura 60 minutos. Participan técnica, suscripción, siniestros y comercial. Los datos están anonimizados y las cifras de la transcripción son de ejemplo.

FUENTES
Usa solo la transcripción y el Recap de la reunión anterior de [nombre de la reunión]. No uses otras reuniones, bases ni informes.

INSTRUCCIÓN
1. Lista los pendientes de la reunión anterior con responsable y fecha prometida. Marca los que no tienen responsable como PENDIENTE.
2. Indica cuáles ya deberían estar entregados a la fecha de hoy y cuáles todavía están en plazo.
3. Lista las decisiones que se dejaron condicionadas a un dato o análisis.
4. Identifica las preguntas abiertas que se repitieron y que probablemente vuelvan a surgir.
5. Propón una agenda de 60 minutos con tiempos, tema y responsable. Prioriza lo que bloquea una decisión.
6. Redacta un mensaje de 100 palabras para los participantes con la agenda y lo que deben traer.

FORMATO DE SALIDA
Tabla de pendientes con acción, responsable, fecha prometida y estado. Decisiones condicionadas en viñetas. Agenda en tabla de 3 columnas. Mensaje final.

LÍMITES
No inventes avances ni cifras. Marca [VERIFICAR] toda cifra de la transcripción y [SUPUESTO] el tiempo que propongas para cada tema. No cambies responsables.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada pendiente y cada decisión condicionada, y qué no pudiste confirmar.`,
      seguimiento: [
        "Reordena la agenda para que lo que decide el ajuste de tarifa quede en los primeros 20 minutos. Explica en 2 frases por qué.",
        "Redacta un recordatorio de 50 palabras para cada responsable que tenga un pendiente vencido, sin tono de reclamo.",
        "Dime qué datos faltaron para tomar decisiones en la reunión anterior y quién los había prometido."
      ],
      verificar: [
        "Que cada pendiente de la tabla se haya dicho en la reunión anterior.",
        "Que los tiempos de la agenda sumen 60 minutos y respeten lo que tú quieres priorizar.",
        "Que el estado vencido o en plazo se calcule con la fecha real de hoy.",
        "Que el mensaje a los participantes no incluya cifras sin verificar."
      ]
    },
    {
      necesidad: "Calidad de datos con TI",
      titulo: "Reunión con TI sobre calidad de datos: hallazgos y solicitudes",
      donde: "Panel de Copilot en la reunión de Teams con TI y siniestros, con la transcripción activada.",
      antes: "Activa la transcripción. Ten claro el campo o la base con problemas de calidad que quieres resolver en la sesión.",
      prompt: `ROL
Eres un analista técnico actuarial que gestiona un problema de calidad de datos con las áreas que producen la información.

CONTEXTO
Reunión con tecnología, siniestros y técnica para revisar problemas en la base de siniestros del ramo [ramo]: fechas inconsistentes, campos vacíos, duplicados y coberturas mal codificadas. Se necesita saber qué corrige cada área y cuándo estará disponible una base limpia. Todo está anonimizado y los ejemplos mencionados son inventados.

FUENTES
Usa solo la transcripción de esta reunión. No uses la base de datos, diccionarios ni tickets de tecnología. No completes nombres de campos que no se hayan dicho.

INSTRUCCIÓN
1. Lista cada problema de calidad mencionado con el campo afectado, el ejemplo dado y quién lo reportó.
2. Para cada problema indica la causa que se dijo (captura manual, migración, sistema origen) y, si no se dijo, escribe PENDIENTE.
3. Lista los compromisos de corrección con responsable, fecha y entregable.
4. Señala los problemas que afectan directamente al cálculo de siniestralidad o de reservas, según lo que se dijo en la reunión.
5. Detecta desacuerdos sobre quién debe corregir cada campo.
6. Redacta un mensaje de 120 palabras para los asistentes con los compromisos y las fechas acordadas.

FORMATO DE SALIDA
Tabla de problemas con 5 columnas: campo, problema, causa dicha, quién lo reportó y estado. Tabla de compromisos con 4 columnas. Desacuerdos en viñetas y el mensaje final.

LÍMITES
No propongas soluciones técnicas ni evalúes la base. Marca [VERIFICAR] toda cifra de registros afectados y [SUPUESTO] lo deducido. Si no se fijó fecha, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada problema y cada compromiso, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Durante la reunión: ¿qué campos con problemas se han mencionado hasta ahora y quién se comprometió a corregirlos?",
        "Ordena los problemas por impacto en la siniestralidad según lo que se dijo en la reunión, sin agregar criterios propios.",
        "Redacta una solicitud de 80 palabras a TI con los compromisos pendientes y las fechas dichas, en tono cordial y directo."
      ],
      verificar: [
        "Que cada campo afectado esté escrito como se dijo en la reunión.",
        "Que las fechas de corrección sean las acordadas y no estimaciones de Copilot.",
        "Que la causa de cada problema se haya dicho y no la haya deducido el asistente.",
        "Que el mensaje de cierre no incluya datos reales de asegurados."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Comité técnico de reservas",
      titulo: "Facilitator en el comité mensual de reservas",
      donde: "Chat de la reunión programada de Teams del comité de reservas, al iniciar la reunión.",
      antes: "Programa la reunión en el calendario de Teams (no instantánea). Ten la lista de ramos a revisar y el nombre de los responsables por rol.",
      prompt: `ROL
Eres Facilitator, el asistente de un comité mensual de reservas técnicas. Cuidas el tiempo y la trazabilidad de cada criterio.

CONTEXTO
Reunión programada de 60 minutos del cierre de [mes]. Participan reservas, siniestros, contabilidad y el jefe técnico. Se revisan reservas de caso, reserva IBNR y siniestros grandes. Todo está anonimizado y las cifras que se mencionen son de ejemplo.

FUENTES
Usa solo lo dicho en la reunión y escrito en el chat. No calcules reservas, no corrijas montos y no uses datos de otras reuniones.

INSTRUCCIÓN
1. Sigue esta agenda y avisa 3 minutos antes de cada cambio: [0 a 10 min cambios desde el mes anterior, responsable reservas], [10 a 30 min siniestros grandes y reservas de caso, responsable siniestros], [30 a 45 min reserva IBNR y supuestos, responsable actuario], [45 a 60 min decisiones y cierre, responsable jefe técnico].
2. Lleva las notas con esta estructura pegada: [Ramo, Concepto, Monto dicho, Quién lo dijo, Criterio aplicado, Estado].
3. Registra cada punto como DECISIÓN, AJUSTE, RIESGO, PENDIENTE o PREGUNTA ABIERTA.
4. En el minuto 30 haz un recap de 6 viñetas con lo decidido y lo que falta.
5. Si un criterio cambia frente al mes anterior, anótalo como CAMBIO DE CRITERIO y pide que alguien diga el motivo en voz alta.
6. Al cierre lee las decisiones y confirma una por una con el responsable.

FORMATO DE SALIDA
Tabla de reservas con las columnas de la estructura. Resumen de 6 viñetas y tabla para Planner con tarea, responsable, fecha, prioridad. Dos líneas aparte con los cambios de criterio.

LÍMITES
Todo monto dicho va con [VERIFICAR] y el nombre de quien lo dijo. No decidas por el comité. Si falta decisión o fecha, escribe PENDIENTE. La plantilla de acta oficial no está confirmada, usa la estructura pegada.

CONTROL DE CALIDAD
Al final indica en qué momento se dijo cada monto y cada decisión, y qué no pudiste confirmar.`,
      seguimiento: [
        "Haz el recap de mitad de reunión con decisiones, cambios de criterio y siniestros que siguen en revisión. Máximo 6 viñetas.",
        "Cierra la reunión: lee las decisiones, los cambios de criterio y los pendientes, y pide confirmación a cada responsable.",
        "Redacta en Word el acta del comité con la estructura pegada, separando decisiones, cambios de criterio y pendientes. Marca VERIFICAR todo monto sin soporte."
      ],
      verificar: [
        "Que cada monto anotado coincida con el dicho y esté marcado VERIFICAR.",
        "Que los cambios de criterio tengan motivo dicho por un participante.",
        "Que ninguna decisión sea una sugerencia del asistente.",
        "Que el acta use la estructura pegada y no una plantilla supuesta."
      ]
    },
    {
      necesidad: "Siniestralidad por ramo",
      titulo: "Facilitator en la revisión de siniestralidad por ramo",
      donde: "Chat de la reunión programada de Teams de la revisión trimestral de siniestralidad.",
      antes: "Ten la lista de ramos y de segmentos a revisar. Programa la reunión con los invitados de técnica, suscripción y comercial.",
      prompt: `ROL
Eres Facilitator en una reunión de revisión de siniestralidad por ramo. Mantienes el ritmo y registras cada hallazgo con su fuente.

CONTEXTO
Reunión programada de 75 minutos para revisar la siniestralidad del trimestre en tres ramos: [autos, hogar, responsabilidad civil]. Los datos están anonimizados y las cifras que se digan son de ejemplo. Interesa distinguir qué cambió por frecuencia, qué por severidad y qué por casos atípicos.

FUENTES
Usa solo lo dicho en la reunión y el chat. No calcules índices y no compares con el mercado. No uses bases ni informes que nadie haya citado.

INSTRUCCIÓN
1. Divide la reunión así y avisa 3 minutos antes de cada cambio: [0 a 25 min autos], [25 a 50 min hogar], [50 a 65 min responsabilidad civil], [65 a 75 min conclusiones y próximos pasos].
2. En cada ramo registra con esta estructura pegada: [Segmento, Cambio dicho, Causa mencionada, Quién lo dijo, Acción].
3. Clasifica cada causa mencionada como FRECUENCIA, SEVERIDAD, ATÍPICO o SIN CAUSA.
4. Al terminar cada ramo haz un recap de 3 viñetas.
5. Si alguien pide una acción sobre la tarifa, anótala como ACCIÓN y no como decisión, salvo que el jefe técnico la confirme en voz alta.
6. En el minuto 65 lee las acciones y pregunta quién las asume.

FORMATO DE SALIDA
Tabla por ramo con las columnas de la estructura. Un recap de 3 viñetas por ramo. Al final, tabla lista para Planner con tarea, responsable, fecha y prioridad, ordenada por ramo.

LÍMITES
Toda cifra va con [VERIFICAR] y quién la dijo. No expliques causas que nadie mencionó. Escribe PENDIENTE si falta responsable o fecha. La plantilla de acta no está confirmada, usa la estructura pegada.

CONTROL DE CALIDAD
Al final indica en qué momento de la reunión se dijo cada cambio y cada acción, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Haz el recap del ramo que acabamos de revisar en 3 viñetas: cambio principal, causa dicha y acción acordada.",
        "Cierra la reunión con las acciones por ramo, quién las asumió y cuáles quedaron sin responsable.",
        "Redacta en Word un resumen de siniestralidad por ramo con la estructura pegada, para enviarlo a quienes no asistieron."
      ],
      verificar: [
        "Que cada cambio y cifra anotados coincidan con lo dicho en el ramo correcto.",
        "Que la clasificación frecuencia o severidad se base en lo que dijeron los participantes.",
        "Que las acciones sobre la tarifa no se hayan registrado como decisiones sin confirmación.",
        "Que el resumen para ausentes no incluya cifras marcadas VERIFICAR como hechos."
      ]
    },
    {
      necesidad: "Cambios de criterio documentados",
      titulo: "Facilitator en una sesión de documentación de cambios de criterio",
      donde: "Chat de la reunión programada de Teams de la sesión de documentación técnica.",
      antes: "Ten la lista de cambios de criterio del trimestre y el nombre de quien responde por cada uno. Programa la sesión con el actuario validador invitado.",
      prompt: `ROL
Eres Facilitator en una sesión donde el equipo técnico documenta los cambios de criterio actuarial del trimestre.

CONTEXTO
Reunión programada de 45 minutos. Por cada cambio de criterio (método de reserva, supuesto de inflación, tratamiento de siniestros atípicos, segmentación) se debe dejar claro qué cambió, por qué y quién lo aprobó. Todo está anonimizado y las cifras son de ejemplo.

FUENTES
Usa solo lo dicho en la reunión y escrito en el chat. No consultes notas técnicas ni normas y no completes motivos que nadie dijo.

INSTRUCCIÓN
1. Recorre los cambios de criterio uno por uno con 6 minutos cada uno. Avisa a los 5 minutos del turno.
2. Por cada cambio, pide en voz alta estos datos y regístralos con esta estructura pegada: [Cambio, Criterio anterior, Criterio nuevo, Motivo, Quién lo aprobó, Impacto dicho, Fecha de vigencia].
3. Si falta algún dato, escribe PENDIENTE y di en el chat qué falta y a quién se le pregunta.
4. Marca como RIESGO todo cambio con impacto relevante sin segunda validación.
5. En el minuto 35 haz un recap de lo documentado y lo pendiente.
6. Al cierre confirma la lista de pendientes con responsable y fecha.

FORMATO DE SALIDA
Tabla con las columnas de la estructura. Recap de 6 viñetas. Tabla para Planner con tarea, responsable, fecha y prioridad. Párrafo de 80 palabras en lenguaje claro para el archivo técnico.

LÍMITES
No evalúes si el cambio es correcto. Toda cifra va con [VERIFICAR] y quién la dijo. No completes aprobaciones que nadie confirmó. Si no hay fecha de vigencia, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final indica en qué momento se dijo cada dato de la tabla y qué no pudiste confirmar.`,
      seguimiento: [
        "Haz el recap de mitad de sesión: cambios documentados completos, cambios con datos faltantes y quién debe completarlos.",
        "Cierra la sesión con la lista de pendientes. Para cada uno, el dato que falta, el responsable y la fecha dicha.",
        "Redacta en Word el registro de cambios de criterio con la estructura pegada, en lenguaje claro y sin agregar motivos."
      ],
      verificar: [
        "Que cada aprobación registrada la haya dicho una persona en la reunión.",
        "Que los criterios anterior y nuevo estén escritos como se dijeron, sin reformular.",
        "Que los cambios con impacto relevante y sin segunda validación estén marcados como RIESGO.",
        "Que las fechas de vigencia sean las dichas y no una suposición."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Cierre trimestral de reservas",
      titulo: "Meta: cierre trimestral de reservas técnicas",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Ten el calendario de cierre contable, la lista de ramos y el procedimiento de reservas vigente. Adjúntalos como apoyo en datos anonimizados.",
      prompt: `ROL
Eres un coordinador actuarial que lidera el cierre trimestral de reservas técnicas con puntos de control y evidencia.

CONTEXTO
Objetivo: completar el cierre trimestral de reservas técnicas de los ramos [lista de ramos] con corte al [fecha de corte]. Resultado esperado: reservas calculadas, validadas por un segundo actuario, conciliadas con contabilidad y documentadas para la auditoría. Fecha de entrega: [fecha límite del cierre]. Los datos están anonimizados y las cifras de los adjuntos son de ejemplo. Restricción: el cálculo no empieza hasta que la base de siniestros pase el control de calidad.

FUENTES
Usa solo el calendario de cierre, la lista de ramos y el procedimiento adjuntos. No inventes pasos que no estén ahí y no uses datos de otros trimestres.

INSTRUCCIÓN
1. Crea estos cubos: Datos y calidad, Cálculo por ramo, Validación independiente, Conciliación con contabilidad, Documentación y auditoría.
2. En el cubo de cálculo crea una tarea por ramo con máximo 3 subtareas.
3. Usa roles y no nombres: analista de datos, actuario de reservas, actuario validador, contador técnico, jefe técnico.
4. Fechas relativas a la fecha de cierre, por ejemplo cierre menos 8 días.
5. Prioridad alta para lo que bloquea el cierre, media para documentación y baja para archivo.
6. Criterio de hecho por tarea, por ejemplo «conciliación firmada por contabilidad y guardada en la carpeta del trimestre».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, ramo, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No calcules reservas ni propongas métodos. Si falta responsable, escribe PENDIENTE. Marca [VERIFICAR] todo requisito regulatorio que no esté en los archivos y [SUPUESTO] cualquier dependencia que dedujiste.

CONTROL DE CALIDAD
Al final indica qué parte del calendario o del procedimiento respalda cada tarea de prioridad alta y qué no pudiste confirmar.`,
      seguimiento: [
        "Genera el informe de estado del cierre para el jefe técnico: ramos calculados, en validación, retrasados, riesgos para la fecha y decisiones que necesito.",
        "Revisa el plan y lista las tareas sin responsable, las vencidas y las conciliaciones que dependen de una validación que no ha empezado.",
        "Respaldo para Copilot Chat: devuelve una tabla para pegar en Planner con Cubo, Ramo, Tarea, Rol, Fecha relativa, Prioridad y Criterio de hecho."
      ],
      verificar: [
        "Que cada ramo tenga tarea de cálculo y tarea de validación con roles distintos.",
        "Que las fechas relativas respeten el cierre contable y la conciliación.",
        "Que la dependencia de calidad de datos antes del cálculo aparezca como tarea previa.",
        "Que no aparezcan cifras ni métodos que no estén en los adjuntos."
      ]
    },
    {
      necesidad: "Plan de calidad de datos",
      titulo: "Meta: base de siniestros limpia para la tarificación",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Adjunta el listado de problemas de calidad de datos y el diccionario de campos, ambos anonimizados. Ten claro qué áreas deben corregir cada campo.",
      prompt: `ROL
Eres un analista técnico actuarial que coordina con siniestros y tecnología la corrección de la base usada para tarificar.

CONTEXTO
Objetivo: tener una base de siniestros del ramo [ramo] sin duplicados, con fechas consistentes y coberturas bien codificadas, antes de la revisión de tarifas del [fecha]. Resultado esperado: base corregida, validada con conteos de control y versión congelada para el análisis. Los datos están anonimizados y los ejemplos de los adjuntos son inventados. Restricción: tecnología trabaja por sprints de dos semanas y siniestros tiene cierre mensual.

FUENTES
Usa solo el listado de problemas y el diccionario de campos adjuntos. No uses otros ramos ni propongas campos nuevos.

INSTRUCCIÓN
1. Crea estos cubos: Diagnóstico, Corrección en origen, Carga y reproceso, Validación de la base, Congelamiento y uso.
2. Por cada problema del listado crea una tarea y máximo 3 subtareas.
3. Asigna roles y no nombres: analista técnico, líder de siniestros, analista de tecnología, actuario validador, jefe técnico.
4. Fechas relativas a la revisión de tarifas, por ejemplo revisión menos 15 días.
5. Prioridad alta para los campos que afectan el cálculo de frecuencia y severidad, media para coberturas y baja para campos informativos.
6. Criterio de hecho por tarea, con evidencia, por ejemplo «conteo de siniestros del origen igual al de la base, firmado por el validador».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título, campo o problema, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No propongas soluciones técnicas de sistemas. Si falta responsable, escribe PENDIENTE. Marca [VERIFICAR] todo conteo de registros y [SUPUESTO] cualquier causa que dedujiste.

CONTROL DE CALIDAD
Al final indica qué problema del listado respalda cada tarea de prioridad alta y qué no pudiste confirmar.`,
      seguimiento: [
        "Genera el informe de estado para el jefe técnico: campos corregidos, en proceso, bloqueados por tecnología y riesgo para la fecha de la revisión.",
        "Revisa el plan y señala las tareas que dependen de tecnología sin fecha de sprint confirmada. Propón qué escalar primero.",
        "Respaldo en Copilot Chat: tabla para pegar en Planner con Cubo, Problema, Tarea, Rol, Fecha relativa, Prioridad y Criterio de hecho."
      ],
      verificar: [
        "Que cada problema del listado tenga una tarea y un criterio de hecho medible.",
        "Que las fechas de tecnología respeten los sprints y no queden en medio de uno.",
        "Que la prioridad alta corresponda a campos que afectan frecuencia y severidad.",
        "Que no haya conteos o campos que no estén en los archivos adjuntos."
      ]
    },
    {
      necesidad: "Radicación de nota técnica",
      titulo: "Meta: preparar y radicar la nota técnica de un producto",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Adjunta la lista de requisitos de la nota técnica, el borrador actual y el cronograma de lanzamiento del producto. Verifica que sean anonimizados o de ejemplo.",
      prompt: `ROL
Eres un coordinador técnico que prepara la documentación actuarial de un producto para su radicación y lanzamiento.

CONTEXTO
Objetivo: dejar lista la nota técnica del producto [nombre del producto] del ramo [ramo] para radicar ante la entidad de control antes del [fecha de radicación]. Resultado esperado: nota técnica completa, validada por un segundo actuario, revisada por cumplimiento y aprobada por la dirección técnica. Los datos están anonimizados y las cifras de los adjuntos son de ejemplo. Restricción: el lanzamiento comercial depende de la radicación.

FUENTES
Usa solo la lista de requisitos, el borrador y el cronograma adjuntos. No uses normas de memoria ni notas de otros productos.

INSTRUCCIÓN
1. Crea estos cubos: Insumos y datos, Redacción técnica, Validación actuarial, Revisión de cumplimiento, Aprobación y radicación.
2. Por cada sección de la nota técnica crea una tarea y máximo 3 subtareas.
3. Usa roles y no nombres: actuario responsable, actuario validador, analista de datos, abogado de cumplimiento, director técnico.
4. Fechas relativas a la fecha de radicación, por ejemplo radicación menos 12 días.
5. Prioridad alta para validación y cumplimiento, media para redacción y baja para anexos.
6. Criterio de hecho por tarea, por ejemplo «sección aprobada por el validador con comentarios resueltos».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, sección de la nota, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No redactes la nota ni sugieras supuestos. Si falta responsable, escribe PENDIENTE. Marca [VERIFICAR] cualquier requisito regulatorio que no esté en los archivos.

CONTROL DE CALIDAD
Al final indica qué requisito de la lista respalda cada tarea de prioridad alta y qué no pudiste confirmar.`,
      seguimiento: [
        "Genera el informe de estado de la nota técnica: secciones listas, en validación, sin iniciar, riesgos para la radicación y decisiones que necesito del director técnico.",
        "Revisa el plan y señala las secciones que llegan a cumplimiento sin haber pasado por validación actuarial.",
        "Respaldo en Copilot Chat: tabla para pegar en Planner con Cubo, Sección, Tarea, Rol, Fecha relativa, Prioridad y Criterio de hecho."
      ],
      verificar: [
        "Que cada requisito de la lista tenga una tarea que lo cubra.",
        "Que la validación actuarial y la revisión de cumplimiento ocurran antes de la aprobación.",
        "Que las fechas relativas respeten la radicación y el lanzamiento.",
        "Que los requisitos regulatorios citados estén en los adjuntos y no en la memoria de Copilot."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Supuestos de reservas",
      titulo: "Apuntes de reservas a registro de supuestos y cambios de criterio",
      donde: "OneNote, página con los apuntes de la sesión de reservas, icono de Copilot.",
      antes: "Pega o escribe en la página tus apuntes de la sesión de reservas del cierre. Usa cifras de ejemplo y no pegues tablas reales de la cartera.",
      prompt: `ROL
Eres un actuario de reservas técnicas que convierte apuntes sueltos en un registro auditable de supuestos y cambios de criterio.

CONTEXTO
Los apuntes de esta página vienen de una sesión de trabajo sobre la reserva IBNR y las reservas de caso del ramo [ramo]. Mezclan factores de desarrollo, supuestos de inflación, siniestros atípicos y dudas. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo el texto de esta página. No uses otras páginas, bases ni normas. No recalcules nada que no esté escrito.

INSTRUCCIÓN
1. Separa lo que quedó DECIDIDO de lo que fue IDEA, DUDA o ESCENARIO explorado.
2. Para cada decisión escribe el supuesto o criterio, el valor dicho y la línea de mis apuntes que lo respalda. Si no hay respaldo, escribe SIN RESPALDO.
3. Identifica los cambios de criterio frente al cierre anterior y pon el motivo escrito. Si no hay motivo, escribe PENDIENTE.
4. Detecta contradicciones, por ejemplo dos factores distintos para el mismo periodo de desarrollo, y huecos, como un supuesto sin periodo de experiencia.
5. Extrae pendientes con responsable y fecha.
6. Deja una página limpia con estas secciones: Alcance de la sesión, Criterios decididos, Cambios de criterio, Escenarios descartados, Dudas abiertas, Pendientes.

FORMATO DE SALIDA
Criterios decididos en tabla con Criterio, Valor, Respaldo y Estado. Cambios de criterio en tabla con Cambio, Criterio anterior, Criterio nuevo y Motivo. Las demás secciones en máximo 5 viñetas.

LÍMITES
No propongas valores ni factores nuevos y no concluyas si la reserva es suficiente. Marca [VERIFICAR] toda cifra que no cuadre y [SUPUESTO] lo que dedujiste. No muevas escenarios descartados a decisiones.

CONTROL DE CALIDAD
Al final indica de qué línea de mis apuntes sale cada cifra y cada decisión, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Reescribe la sección Cambios de criterio en lenguaje claro para el auditor interno, en 8 líneas, sin cambiar ninguna cifra ni agregar motivos.",
        "Lista los criterios marcados SIN RESPALDO y el dato o el análisis que faltaría para sustentar cada uno. No propongas el valor.",
        "Convierte los pendientes en una tabla con Tarea, Responsable, Fecha límite y Evidencia, lista para pegar en Planner."
      ],
      verificar: [
        "Que cada factor y cifra de la página limpia sea idéntico al de tus apuntes.",
        "Que los criterios sin respaldo quedaron marcados y no como hechos.",
        "Que el motivo de cada cambio sea el que escribiste y no el que Copilot dedujo.",
        "Que el periodo de experiencia y el ramo sean los de la sesión."
      ]
    },
    {
      necesidad: "Reunión con comercial",
      titulo: "Apuntes de reunión con comercial a explicación para no técnicos",
      donde: "OneNote, página con los apuntes de la reunión con comercial, icono de Copilot.",
      antes: "Escribe en la página lo que comercial preguntó y lo que respondiste, con cifras de ejemplo. Define quién leerá el resultado.",
      prompt: `ROL
Eres un actuario que prepara una explicación de resultados técnicos para un equipo comercial que no tiene formación actuarial.

CONTEXTO
La página tiene mis apuntes de una reunión donde comercial preguntó por la tarifa de [producto o ramo], la siniestralidad reciente y la competencia. Mis apuntes mezclan términos técnicos como frecuencia, severidad, índice de siniestralidad y recargo. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo el texto de esta página. No uses tarifas del mercado ni otras páginas. No agregues cifras que no estén en mis apuntes.

INSTRUCCIÓN
1. Lista las preguntas que hizo comercial y la respuesta que di en cada una.
2. Marca como SIN RESPONDER las preguntas que no tienen respuesta en mis apuntes.
3. Identifica los términos técnicos y escribe una definición de máximo 20 palabras para cada uno, con un ejemplo de seguros.
4. Redacta una explicación de una página, en lenguaje simple, con estas partes: qué pasó, por qué pasó, qué significa para la tarifa y qué sigue.
5. Convierte cada cifra de mis apuntes en una frase que un gerente pueda repetir sin error.
6. Propón tres preguntas que comercial podría hacer después y la respuesta basada solo en mis apuntes.

FORMATO DE SALIDA
Tabla de preguntas con 3 columnas: pregunta, respuesta, estado. Glosario en viñetas. Explicación en párrafos cortos de máximo 4 líneas. Tabla final de preguntas futuras.

LÍMITES
No justifiques la tarifa con cifras nuevas ni cambies mis conclusiones. Marca [VERIFICAR] toda cifra y [SUPUESTO] lo que dedujiste. Si una respuesta no está en mis apuntes, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final indica de qué línea de mis apuntes sale cada cifra y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Reduce la explicación a media página y ponle un título que diga qué cambió y qué significa para el cliente.",
        "Reescribe el glosario con un ejemplo distinto del ramo [hogar o autos] y sin usar la palabra recargo.",
        "Prepara tres frases de 25 palabras que el gerente comercial pueda decir a un cliente corporativo sin comprometer la tarifa."
      ],
      verificar: [
        "Que cada cifra de la explicación sea idéntica a la de tus apuntes.",
        "Que las definiciones del glosario no cambien el sentido técnico.",
        "Que las respuestas a preguntas futuras salgan de tus apuntes y no de la imaginación de Copilot.",
        "Que la explicación no comprometa decisiones comerciales que no te corresponden."
      ]
    },
    {
      necesidad: "Cuaderno de siniestralidad",
      titulo: "Consultar el cuaderno de siniestralidad de un ramo",
      donde: "OneNote, sección del ramo con varias páginas, icono de Copilot, preguntas sobre el cuaderno.",
      antes: "Verifica que las páginas que quieres consultar estén en el cuaderno y contengan solo cifras de ejemplo. Define la pregunta que quieres responder.",
      prompt: `ROL
Eres un analista técnico de seguros generales que consulta el historial de un cuaderno de siniestralidad para preparar un comité.

CONTEXTO
Este cuaderno guarda mis notas de varios meses sobre el ramo [ramo]: análisis de siniestralidad, reuniones, dudas de comercial y cambios en supuestos. Necesito llegar al comité de [fecha] con un resumen del historial y con claridad sobre lo que sigue abierto. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo las páginas de esta sección del cuaderno. No uses otras secciones, bases ni correos. Si una página tiene imágenes o archivos adjuntos, indica que no los leíste.

INSTRUCCIÓN
1. Resume la sección en 8 viñetas, de la nota más antigua a la más reciente, con la fecha de cada nota.
2. Lista los segmentos o coberturas donde la siniestralidad subió según mis notas, con la cifra y la página de donde sale.
3. Reúne todos los pendientes que aparecen en el cuaderno y marca cuáles parecen cerrados y cuáles abiertos.
4. Busca contradicciones entre páginas, como dos cifras distintas para el mismo periodo.
5. Responde esta pregunta usando solo el cuaderno: [por ejemplo, qué se decidió sobre el recargo de seguridad en autos].
6. Propón 5 preguntas que debería hacer en el comité según lo que quedó abierto.

FORMATO DE SALIDA
Resumen en viñetas con fecha. Tabla de segmentos con Segmento, Cambio, Cifra y Página. Tabla de pendientes con Pendiente, Estado y Página. Contradicciones en viñetas. Respuesta de máximo 100 palabras y las 5 preguntas.

LÍMITES
No recalcules, no concluyas si la tarifa es suficiente y no uses información de fuera del cuaderno. Marca [VERIFICAR] toda cifra y [SUPUESTO] el estado cerrado o abierto que dedujiste. Escribe PENDIENTE si algo no consta.

CONTROL DE CALIDAD
Al final indica la página de cada cifra y cada pendiente y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Dime qué decisiones aparecen en más de una página y si alguna página las contradice.",
        "Resume solo lo que cambió en las últimas 4 semanas de mis notas, en 6 viñetas con fecha.",
        "Redacta el párrafo de antecedentes de 120 palabras para la presentación del comité, usando solo el cuaderno."
      ],
      verificar: [
        "Que cada cifra de la tabla coincida con la de la página indicada.",
        "Que los pendientes marcados como cerrados realmente figuren cerrados en tus notas.",
        "Que no se hayan usado páginas de otras secciones.",
        "Que las imágenes o adjuntos no leídos se revisen manualmente antes del comité."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Explicar un resultado",
      titulo: "Correo a la gerencia explicando un resultado técnico sin jerga",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el resumen del análisis.",
      antes: "Ten el resumen del análisis con las cifras de ejemplo y sabe quién lo leerá. Define qué decisión necesita tomar esa persona.",
      prompt: `ROL
Eres un actuario senior con experiencia en comunicar resultados técnicos a directivos que no son actuarios.

OBJETIVO
Redactar un correo para [cargo del destinatario] que explique el resultado del análisis de [tema, por ejemplo el índice de siniestralidad de autos del semestre] y le permita decidir si [decisión que debe tomar].

CONTEXTO
El destinatario lee en el celular, tiene 3 minutos y no conoce los términos frecuencia, severidad ni IBNR. Los datos están anonimizados y agregados.

FUENTES
Usa solo el resumen adjunto y lo que pego aquí: [pega los puntos clave]. No uses cifras de memoria ni benchmarks externos.

INSTRUCCIÓN
1. Identifica los tres mensajes que el destinatario debe llevarse.
2. Explica el resultado con una comparación cotidiana de máximo 2 frases.
3. Redacta el correo con: asunto de máximo 10 palabras, resumen de la conclusión en 2 líneas, tres viñetas de hallazgos, riesgos o límites del análisis y la decisión que se pide.
4. Traduce cada término técnico que uses a una frase simple, entre paréntesis.
5. Escribe una versión más corta de 80 palabras para mensaje de chat.

EXPECTATIVAS
Correo de máximo 220 palabras, tono directo y respetuoso. Frases de máximo 20 palabras. Sin jerga actuarial. Una tabla de cifras citadas con su fuente.

LÍMITES
No inventes cifras ni compromisos. No justifiques la decisión con datos que no estén en la fuente. Marca [SUPUESTO] lo que dedujiste y [VERIFICAR] toda cifra que debas confirmar. Si falta un dato para sustentar la decisión, dilo antes de redactar.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente, nivel de confianza (alto, medio, bajo) y qué debo verificar. Revisa que ningún término técnico quedó sin explicar.`,
      seguimiento: [
        "Reescribe el correo con la decisión pedida en la primera línea y el análisis en una sola viñeta. Máximo 150 palabras.",
        "Dame otra versión para el comité de dirección, en 5 viñetas, con la cifra clave de cada hallazgo y su fuente.",
        "Revisa el correo como si fueras el gerente que no conoce los términos técnicos y dime qué frases no entendería."
      ],
      verificar: [
        "Que cada cifra del correo coincida con el análisis original.",
        "Que la comparación cotidiana no cambie el sentido técnico del resultado.",
        "Que la decisión pedida sea la que corresponde a ese destinatario.",
        "Que el correo no incluya datos reales de asegurados ni cifras confidenciales."
      ]
    },
    {
      necesidad: "Comparar versiones de supuestos",
      titulo: "Comparar dos versiones de la nota técnica y documentar el cambio",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip las dos versiones de la nota.",
      antes: "Ten la versión vigente y el borrador nuevo de la nota técnica, anonimizados. Indica el ramo y el periodo que cubren.",
      prompt: `ROL
Eres un actuario validador que compara versiones de una nota técnica y documenta cada cambio de criterio para el archivo del ramo.

OBJETIVO
Comparar la nota técnica vigente con el borrador nuevo del ramo [ramo] y producir un registro de cambios que permita aprobar o rechazar cada uno.

CONTEXTO
El borrador modifica supuestos, recargos y la base de datos usada. Hay que dejar claro qué cambió, qué no cambió y qué falta sustentar. Los datos están anonimizados y las cifras de los adjuntos son de ejemplo.

FUENTES
Usa solo las dos versiones adjuntas. No uses otras notas técnicas ni normas. Si una sección está en una tabla que no pudiste leer, dilo.

INSTRUCCIÓN
1. Compara sección por sección: objetivo, metodología, supuestos, recargos, base de datos y limitaciones.
2. Lista cada cambio con el texto anterior, el texto nuevo y el tipo: SUPUESTO, MÉTODO, DATOS, REDACCIÓN.
3. Para cada cambio de tipo SUPUESTO o MÉTODO indica si el borrador explica el motivo y si lo respalda con datos.
4. Señala las secciones que cambiaron en la redacción pero no en el fondo.
5. Lista los cambios sin motivo escrito y las preguntas que haría al autor.
6. Redacta un resumen de 120 palabras para el comité técnico con los tres cambios más relevantes.

EXPECTATIVAS
Tabla con Sección, Texto anterior, Texto nuevo, Tipo, Motivo en el borrador y Respaldo. Luego las preguntas al autor y el resumen.

LÍMITES
No evalúes si el cambio es adecuado y no recalcules nada. Marca [VERIFICAR] toda cifra distinta entre versiones y [SUPUESTO] lo que dedujiste. Si una sección no existe en una versión, escribe NO CONSTA.

AUTOCHEQUEO
Al final indica la sección y la página de cada cambio y qué parte de los documentos no pudiste comparar.`,
      seguimiento: [
        "Muestra solo los cambios de tipo SUPUESTO y MÉTODO, ordenados por el impacto que el borrador dice que tienen.",
        "Redacta las preguntas al autor en un correo de 150 palabras, con tono respetuoso y una pregunta por cambio sin motivo.",
        "Convierte la tabla en un registro de cambios para el archivo, con campos fecha, aprobador y estado PENDIENTE."
      ],
      verificar: [
        "Que cada texto anterior y nuevo se haya copiado fielmente de los documentos.",
        "Que el tipo asignado a cada cambio corresponda a su naturaleza real.",
        "Que las secciones NO CONSTA no estén en tablas o imágenes que Copilot no leyó.",
        "Que ningún motivo del borrador haya sido completado por Copilot."
      ]
    },
    {
      necesidad: "Análisis de siniestralidad por ramo",
      titulo: "Análisis de siniestralidad por ramo para el comité",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la tabla de siniestralidad por ramo.",
      antes: "Ten una tabla agregada por ramo y trimestre con primas, siniestros pagados y reservas, anonimizada. Define el periodo de comparación.",
      prompt: `ROL
Eres un analista técnico de seguros generales que prepara el análisis de siniestralidad por ramo para un comité de tarifas.

OBJETIVO
Analizar la siniestralidad de los ramos [lista de ramos] entre [periodo inicial] y [periodo final], identificar dónde cambió y qué hay que investigar antes del comité.

CONTEXTO
El comité tiene 40 minutos y quiere saber dónde actuar primero. Los datos están anonimizados y agregados por ramo y trimestre. Las cifras son de ejemplo.

FUENTES
Usa solo la tabla adjunta. No uses cifras del mercado ni de memoria. Si hay trimestres incompletos, dilo antes de analizar.

INSTRUCCIÓN
1. Revisa la calidad de la tabla: trimestres faltantes, valores en cero y cambios bruscos sospechosos.
2. Calcula el índice de siniestralidad por ramo y trimestre como siniestros incurridos sobre primas devengadas. Indica la fórmula que usaste.
3. Ordena los ramos de mayor a menor deterioro entre el periodo inicial y el final.
4. Para los dos ramos con mayor deterioro, describe qué cambió y qué preguntas deben responderse.
5. Lista los límites del análisis, por ejemplo no hay separación entre frecuencia y severidad.
6. Redacta un resumen de 150 palabras para el comité.

EXPECTATIVAS
Tabla con Ramo, Índice inicial, Índice final y Variación. Después los dos ramos en párrafos de máximo 5 líneas, la lista de límites y el resumen. Tono sobrio y sin conclusiones sobre la tarifa.

LÍMITES
No propongas ajustes de tarifa. No extrapoles tendencias con periodos incompletos. Marca [SUPUESTO] lo que dedujiste y [VERIFICAR] toda cifra que debas recalcular. Si una columna no está clara, pregunta antes de calcular.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, celda de origen, nivel de confianza (alto, medio, bajo) y qué debo verificar.`,
      seguimiento: [
        "Muestra el cálculo del índice de siniestralidad del ramo con mayor deterioro paso a paso, para verificarlo contra mi hoja de cálculo.",
        "Redacta tres preguntas que debo llevar a siniestros sobre el ramo con mayor deterioro, basadas solo en la tabla.",
        "Prepara una versión del resumen de 90 palabras para el director comercial, sin jerga actuarial."
      ],
      verificar: [
        "Que cada índice coincida con el que obtienes en tu hoja de cálculo con la misma fórmula.",
        "Que los trimestres incompletos se hayan señalado y no incluido en la comparación.",
        "Que la fórmula usada corresponda a la definición de siniestralidad del área.",
        "Que el resumen no concluya nada sobre la suficiencia de la tarifa."
      ]
    }
  ]
};
