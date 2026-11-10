const MAS_JURIDICO = {
  "teams-chats": [
    {
      necesidad: "Hilo de consultas legales",
      titulo: "Ordenar las consultas legales que llegaron por el canal",
      donde: "Panel de Copilot dentro del canal donde las áreas envían consultas a jurídico.",
      antes: "Abre el canal de consultas y ubica el hilo más largo de la semana. Debe tener más de 1.000 caracteres y no incluir nombres de clientes.",
      prompt: `ROL
Eres un asistente de apoyo de un abogado de la gerencia jurídica de una aseguradora. Ordenas consultas internas para que el abogado decida a cuáles responde primero.

CONTEXTO
Este canal recibe consultas de comercial, siniestros, operaciones y tecnología. Los datos están anonimizados y los casos se nombran por código, por ejemplo CONS-014. Llevo tres días sin leer el hilo y necesito una vista de cola de trabajo. No necesito respuestas jurídicas, solo el estado de cada consulta.

FUENTES
Usa solo los mensajes de este hilo del canal. No leas imágenes, Loop ni archivos compartidos. Si alguien menciona un adjunto, anótalo como adjunto no leído. No cites normas que nadie haya escrito en el hilo.

INSTRUCCIÓN
1. Identifica cada consulta distinta que se haya planteado en el hilo.
2. Para cada una indica quién la hizo, a qué área pertenece y qué pregunta concreta tiene.
3. Marca si ya recibió respuesta, si está en discusión o si sigue sin respuesta.
4. Detecta fechas límite mencionadas, por ejemplo «necesito esto antes del viernes».
5. Propón un orden de atención con este criterio: primero las que tengan plazo externo, luego las que bloqueen una operación, luego las demás.

FORMATO DE SALIDA
Una tabla con estas columnas exactas: Código | Área | Pregunta en una frase | Estado | Fecha límite | Prioridad (Alta, Media, Baja). Debajo, una lista de máximo 4 viñetas con lo que falta para cerrar las consultas abiertas. Máximo 250 palabras en total.

LÍMITES
No des conceptos ni interpretes normas. Si un dato no está en el hilo escribe PENDIENTE. Marca [SUPUESTO] cuando infieras un estado y [VERIFICAR] cuando alguien cite una norma o un plazo legal.

CONTROL DE CALIDAD
Al final dime cuántas consultas encontraste, cuáles tienen una fecha dudosa y qué mensajes del hilo no pudiste interpretar. Revisa que ninguna fila afirme algo que no esté escrito en el canal.`,
      seguimiento: [
        "De las consultas en estado sin respuesta, redacta un mensaje corto para el canal pidiendo a cada solicitante el dato que falta, sin dar ningún concepto jurídico.",
        "Dime qué consultas del hilo se repiten con otras palabras y propón agruparlas para responder una sola vez.",
        "Busca en mis chats y canales de los últimos 30 días otra mención de CONS-014 y dime qué se dijo, con fecha y persona."
      ],
      verificar: [
        "Cada código de consulta existe de verdad en el hilo y no lo inventó Copilot.",
        "Las fechas límite coinciden con lo escrito, no con una suposición.",
        "Los estados marcados como respondida tienen una respuesta visible en el hilo.",
        "Ningún texto de la tabla funciona como concepto jurídico sin revisión del abogado."
      ]
    },
    {
      necesidad: "Respuesta clara a comercial",
      titulo: "Reescribir una respuesta jurídica para el equipo comercial",
      donde: "Cuadro de redacción de Teams, con Copilot en Reescribir, dentro del chat con el área comercial.",
      antes: "Ten escrito tu borrador técnico, aprobado por el abogado responsable. Quita nombres de clientes y de intermediarios.",
      prompt: `ROL
Eres un editor de comunicaciones internas para una gerencia jurídica de seguros. Conviertes lenguaje técnico en mensajes que un asesor comercial entiende en una lectura.

CONTEXTO
Un gerente comercial preguntó por chat si puede ofrecer a un cliente corporativo (anonimizado como CLIENTE-A) un cambio en la forma de enviar documentos de vinculación. Mi borrador está en lenguaje jurídico y es largo. Quiero que sea claro sin cambiar su alcance. El mensaje lo revisa un abogado antes de enviarlo. Los datos están anonimizados.

FUENTES
Usa solo el borrador que pego abajo. No agregues normas, plazos ni excepciones que no estén en el borrador.

BORRADOR
[pega aquí tu borrador técnico]

INSTRUCCIÓN
1. Reescribe el mensaje en máximo 120 palabras, con frases de menos de 20 palabras.
2. Empieza por la respuesta directa: sí, no o depende, según lo que diga el borrador.
3. Reemplaza términos técnicos por palabras de uso diario y deja el término técnico entre paréntesis la primera vez.
4. Cierra con un único siguiente paso para el gerente, por ejemplo qué documento debe enviar o a quién debe escribir.
5. Genera una segunda versión de 50 palabras, apta para un mensaje rápido en el chat.

FORMATO DE SALIDA
Versión 1 (120 palabras) y Versión 2 (50 palabras), cada una con su rótulo. Tono cordial, profesional y directo, sin tecnicismos innecesarios. Luego una lista de máximo 3 frases del borrador que cambiaste de sentido, si las hubo.

LÍMITES
No suavices una advertencia ni conviertas una condición en una promesa. Marca [VERIFICAR] cualquier frase que ahora suene más segura que el borrador y [SUPUESTO] cualquier dato que hayas tenido que inferir. No presentes el texto como concepto jurídico definitivo.

CONTROL DE CALIDAD
Compara cada versión con el borrador y confirma que conservan las mismas condiciones, excepciones y plazos. Indica si alguna palabra cambió el nivel de certeza de una frase.`,
      seguimiento: [
        "Hazlo más corto, máximo 70 palabras, y conserva la condición principal sin cambiarla.",
        "Escribe una frase de cierre para pedir al gerente que confirme por escrito antes de ofrecerle algo al cliente.",
        "Ajusta el tono para un correo al director comercial, más formal, con saludo y despedida."
      ],
      verificar: [
        "Las condiciones y excepciones del borrador siguen en las dos versiones.",
        "Ninguna advertencia quedó suavizada ni convertida en promesa.",
        "El mensaje no suena como un concepto definitivo si el borrador era preliminar.",
        "Un abogado leyó el texto antes de enviarlo al área comercial."
      ]
    },
    {
      necesidad: "Aviso a casa matriz en inglés",
      titulo: "Versión en inglés de una alerta regulatoria para casa matriz",
      donde: "Cuadro de redacción de Teams, con Copilot en Reescribir y la opción de traducir, en el chat con el equipo regional.",
      antes: "Prepara tu mensaje en español, ya revisado, y quita nombres de personas, de clientes y números de radicado reales.",
      prompt: `ROL
Eres un traductor jurídico-financiero de español a inglés, con criterio de oficial de cumplimiento. Mantienes el nivel de certeza exacto del texto original.

CONTEXTO
Debo avisar al equipo regional de cumplimiento de la casa matriz que la Superintendencia Financiera de Colombia envió un requerimiento de información a la compañía. El mensaje en español está redactado y revisado. Los datos están anonimizados, el requerimiento se identifica como REQ-2026-07 y la fecha de respuesta aparece como [fecha].

FUENTES
Usa solo el mensaje en español que pego abajo.

MENSAJE ORIGINAL
[pega aquí el mensaje en español]

INSTRUCCIÓN
1. Traduce el mensaje a inglés profesional de negocios, en máximo 150 palabras.
2. Conserva en español, entre comillas simples, los nombres oficiales de entidades y de normas, y agrega entre paréntesis una explicación breve en inglés la primera vez que aparezcan.
3. Respeta los verbos de certeza. Si el original dice «podría», usa «could» o «may», no «will».
4. Entrega una lista de 3 a 5 términos con su equivalente, por ejemplo «requerimiento» y «supervisory information request».
5. Cierra con una línea que pida confirmación de recibido, sin comprometer una fecha que no esté en el original.

FORMATO DE SALIDA
Bloque 1: el mensaje en inglés. Bloque 2: glosario de términos en una tabla con dos columnas, Español | Inglés. Bloque 3: una lista de máximo 3 frases donde la traducción no tiene equivalente exacto.

LÍMITES
No agregues información ni explicaciones jurídicas. Marca [VERIFICAR] cada término técnico cuyo equivalente dependa del contexto legal y [SUPUESTO] cualquier dato que hayas tenido que completar. El texto en inglés es un borrador que revisa un abogado antes de enviarse.

CONTROL DE CALIDAD
Haz una traducción inversa mental al español y confirma que el sentido, los plazos y los niveles de certeza coinciden. Dime en una línea qué frases podrían leerse de dos formas.`,
      seguimiento: [
        "Reduce la versión en inglés a 80 palabras para un mensaje rápido en el chat y conserva la fecha de respuesta.",
        "Hazla más formal para un correo dirigido al director regional de cumplimiento.",
        "Dame tres preguntas que la casa matriz podría hacer sobre este aviso, solo para que yo prepare las respuestas."
      ],
      verificar: [
        "Las fechas y el código del requerimiento son idénticos al original.",
        "Los verbos de certeza conservan el mismo grado, sin promesas nuevas.",
        "Los nombres de entidades y normas quedaron como los usa la compañía.",
        "Un abogado revisó la versión en inglés antes de enviarla."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Reunión por tutela",
      titulo: "Reunión de respuesta a una tutela: plazos y responsables",
      donde: "Panel de Copilot en la reunión de Teams, durante la sesión o al terminar, solo para ti.",
      antes: "Activa la transcripción antes de empezar. Confirma con el abogado responsable que el uso de Copilot esté permitido y usa códigos como TUT-03 en lugar de nombres.",
      prompt: `ROL
Eres un asistente de apoyo de un abogado litigante de una aseguradora. Extraes de una reunión los plazos, los responsables y los soportes necesarios, sin redactar argumentos jurídicos.

CONTEXTO
Reunión de coordinación para responder una acción de tutela que llegó contra la compañía, identificada como TUT-03. Participan jurídico, siniestros y atención al consumidor. El tiempo de respuesta es muy corto y necesito saber qué quedó asignado, qué falta y qué riesgo se mencionó. Los datos están anonimizados.

FUENTES
Usa solo la transcripción de esta reunión. No cites normas, sentencias ni términos de la memoria. Si alguien menciona un plazo legal, anótalo tal como lo dijo y márcalo con [VERIFICAR].

INSTRUCCIÓN
1. Resume en máximo 5 viñetas qué se acordó sobre cómo responder.
2. Lista cada soporte documental que alguien dijo que hace falta, con quién lo tiene.
3. Arma una tabla de pendientes con columnas exactas: Tarea | Responsable | Plazo dicho en la reunión | Soporte que entrega | Estado.
4. Resume los riesgos que se mencionaron sin añadir riesgos propios.
5. Cita entre comillas la frase exacta de la transcripción que respalda cada plazo y cada decisión, con el minuto aproximado.

FORMATO DE SALIDA
Primero una línea de contexto de máximo 30 palabras. Luego las viñetas del acuerdo, la tabla de pendientes y los riesgos. Todo en menos de 350 palabras. Sin conclusiones propias.

LÍMITES
Si un responsable o un plazo no se dijo, escribe PENDIENTE. No inventes horas ni fechas. Marca [SUPUESTO] cuando infieras y [VERIFICAR] cuando algo parezca contradictorio entre dos intervenciones. No sugieras estrategia de defensa.

CONTROL DE CALIDAD
Confirma que cada fila de la tabla tiene una cita de respaldo. Lista cualquier plazo que quedó ambiguo y cualquier responsable que nadie aceptó de forma explícita. Si la transcripción es corta o con vacíos, dímelo al inicio para saber cuánto confiar en el resultado. Escribe en español claro, con frases de menos de 25 palabras.`,
      seguimiento: [
        "Redacta un mensaje de 60 palabras para el chat del equipo con los tres pendientes más urgentes y sus responsables.",
        "Dime qué soportes se pidieron pero nadie dijo quién los consigue.",
        "Qué punto se discutió dos veces sin cerrarse. Cita las dos intervenciones."
      ],
      verificar: [
        "Cada plazo de la tabla aparece en la transcripción con la cita indicada.",
        "Los responsables fueron nombrados o aceptaron en voz alta, no se supusieron.",
        "No hay argumentos jurídicos ni estrategia que nadie haya dicho.",
        "El abogado responsable revisó la tabla antes de usarla como control del caso."
      ]
    },
    {
      necesidad: "Revisión de contrato con proveedor",
      titulo: "Reunión sobre un contrato con proveedor: cláusulas y acuerdos",
      donde: "Panel de Copilot en la reunión de Teams, al terminar la sesión.",
      antes: "Activa la transcripción. Pide que las cláusulas se mencionen por número y que no se lean cifras de tarifas reales.",
      prompt: `ROL
Eres un abogado de contratación que apoya la revisión de un contrato de servicios con un proveedor de una aseguradora. Tu trabajo es dejar claro qué se acordó y qué sigue abierto.

CONTEXTO
Reunión entre jurídico, compras y el área usuaria para revisar el contrato de un proveedor de gestión documental, que llamaremos PROVEEDOR-X. Se discutieron cláusulas de confidencialidad, tratamiento de datos personales, terminación anticipada, niveles de servicio y responsabilidad. Los datos están anonimizados y los montos aparecen como rangos de ejemplo.

FUENTES
Usa solo la transcripción de esta reunión. No cites normas ni modelos de cláusulas que nadie haya mencionado. No inventes contenido de las cláusulas.

INSTRUCCIÓN
1. Entrega una tabla con columnas exactas: Cláusula | Posición de la compañía | Posición del proveedor | Acuerdo (Sí, No, En discusión) | Quién decide.
2. Lista las cláusulas que se aceptaron sin cambios, solo con su número.
3. Lista los riesgos que alguien nombró y quién los nombró.
4. Enumera las decisiones con la frase exacta de la transcripción y su minuto aproximado.
5. Dame los pendientes en formato Responsable | Acción | Fecha dicha en la reunión.

FORMATO DE SALIDA
La tabla primero, luego las listas con encabezados cortos. Máximo 400 palabras. Cada cláusula con su número tal como se dijo. Tono neutro, de acta.

LÍMITES
No propongas redacciones de cláusulas ni recomiendes aceptar o rechazar. Si algo no se dijo escribe PENDIENTE. Marca [SUPUESTO] cuando infieras una posición y [VERIFICAR] cuando una cifra o un plazo suene inconsistente entre intervenciones.

CONTROL DE CALIDAD
Revisa que cada celda con Acuerdo en Sí tenga una frase de respaldo. Dime qué cláusulas se mencionaron sin que nadie tomara una posición. Si la transcripción tiene partes cortadas, dímelo al inicio. Escribe en español claro, con frases cortas, para que un compañero de compras entienda la tabla sin ayuda.`,
      seguimiento: [
        "Prepara una lista de preguntas para el proveedor con base solo en las cláusulas marcadas En discusión.",
        "Redacta un resumen de 80 palabras para el jefe de compras que no asistió, con lo acordado y lo abierto.",
        "Qué cláusulas dependen de una decisión del área usuaria y no de jurídico. Cita la frase."
      ],
      verificar: [
        "Los números de cláusula coinciden con los que se dijeron en la reunión.",
        "Las posiciones de cada parte se atribuyen a quien las expresó.",
        "Ningún acuerdo en Sí se infirió de un silencio.",
        "El abogado responsable contrastó la tabla con el borrador real del contrato."
      ]
    },
    {
      necesidad: "Preparar el siguiente comité",
      titulo: "Armar la agenda del próximo comité desde la sesión anterior",
      donde: "Panel de Copilot en la reunión de Teams del comité anterior, o Copilot Chat con el recap.",
      antes: "Elige la reunión anterior del comité con transcripción disponible. Ten a mano las fechas de la siguiente sesión.",
      prompt: `ROL
Eres la secretaría técnica de un comité de cumplimiento en una aseguradora. Preparas la agenda de la próxima sesión a partir de lo que quedó pendiente en la anterior.

CONTEXTO
El comité sesiona cada mes. La sesión pasada trató alertas de operaciones inusuales, una circular nueva, hallazgos de auditoría interna y una capacitación obligatoria. La próxima sesión es el [fecha] y dura 60 minutos. Los datos están anonimizados y se nombran por código.

FUENTES
Usa solo la transcripción de la reunión anterior. No traigas normas, estadísticas ni casos de la memoria. Si alguien citó una norma, repítela como la dijeron y márcala con [VERIFICAR].

INSTRUCCIÓN
1. Lista los compromisos de la sesión anterior con responsable y fecha dicha.
2. Clasifica cada compromiso en Cumplido, En curso o Sin información, según lo que se haya dicho en la reunión. Si no se dijo, usa Sin información.
3. Propone una agenda de 60 minutos con tiempos por tema, en este orden: seguimiento de compromisos, temas con plazo externo, temas nuevos y cierre.
4. Para cada tema indica qué documento o dato debe traer el responsable.
5. Redacta un recordatorio de máximo 80 palabras para enviar a los responsables una semana antes.

FORMATO DE SALIDA
Tabla de compromisos con columnas Compromiso | Responsable | Fecha | Estado. Luego la agenda en tabla con columnas Minuto | Tema | Responsable | Material. Por último el recordatorio. Máximo 400 palabras.

LÍMITES
No decidas qué temas se priorizan sin decirlo como propuesta. Marca [SUPUESTO] cada estado que no se confirmó y PENDIENTE donde falte un responsable o una fecha. No agregues temas nuevos que no hayan surgido en la reunión.

CONTROL DE CALIDAD
Verifica que los tiempos sumen 60 minutos. Dime qué compromisos quedaron sin responsable y qué temas se mencionaron una sola vez. Escribe con frases cortas y evita adjetivos. Si la transcripción no alcanza para armar una sección, dilo en lugar de rellenarla.`,
      seguimiento: [
        "Acorta la agenda a 45 minutos y dime qué tema sacarías primero, con una razón basada en los plazos dichos.",
        "Redacta la invitación del comité con el objetivo en una frase y la lista de materiales previos.",
        "Dime qué compromisos de la sesión pasada ya tendrían fecha vencida a hoy según lo dicho en la reunión."
      ],
      verificar: [
        "Cada estado Cumplido tiene una frase de respaldo en la transcripción.",
        "Los tiempos de la agenda suman exactamente 60 minutos.",
        "Los responsables fueron los que se nombraron, no los que parecen lógicos.",
        "La secretaría del comité aprobó la agenda antes de enviarla."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Comparar versiones de una política",
      titulo: "Facilitator en la mesa de revisión de una política interna",
      donde: "Chat de la reunión programada de Teams con las áreas que revisan la política, al abrir la sesión.",
      antes: "Programa la reunión en Teams, no uses una reunión instantánea. Ten a mano las dos versiones de la política y quita datos de personas.",
      prompt: `ROL
Eres Facilitator en una mesa de trabajo de la gerencia jurídica de una aseguradora. Mantienes el tiempo, ordenas lo que se dice y dejas un registro de cambios acordados, sin interpretar la ley.

CONTEXTO
Reunión programada de 45 minutos para revisar la versión 3 de la política de [nombre de la política, por ejemplo tratamiento de datos personales] frente a la versión 2. Participan jurídico, riesgos, tecnología y operaciones. Los datos están anonimizados. Los cambios se discuten por número de artículo interno, por ejemplo Art. 7.

FUENTES
Usa solo lo que se diga en la reunión y lo que se escriba en el chat. No cites normas ni propongas redacciones que nadie haya dicho.

INSTRUCCIÓN
1. Propón la agenda ahora, antes de empezar: 5 minutos de contexto, 25 minutos de revisión de artículos modificados, 10 minutos de impactos por área y 5 minutos de cierre.
2. Durante la reunión toma notas con esta estructura: Artículo | Cambio propuesto | Quién lo propone | Postura de las áreas | Estado (Aprobado, Rechazado, En discusión).
3. Registra las decisiones con su responsable y los pendientes con fecha dicha.
4. Avisa cuando falten 10 minutos y cuando falten 3.
5. Al cierre entrega un recap de máximo 150 palabras y una tabla de tareas con columnas Tarea | Responsable | Fecha | Prioridad lista para Planner.
6. Ofrece un borrador del acta en Word con la estructura de abajo.

FORMATO DE SALIDA
Acta con estos bloques: Asistentes, Artículos revisados, Decisiones, Pendientes, Temas para otra sesión. La plantilla propia de acta no está confirmada, por eso usa estos bloques pegados aquí. Tono neutro y breve.

LÍMITES
Si no se dijo un responsable o una fecha, escribe PENDIENTE. Marca [SUPUESTO] cuando infieras y [VERIFICAR] cuando alguien cite una norma. No des concepto sobre si el cambio cumple una norma.

CONTROL DE CALIDAD
Al cierre confirma en voz alta o en el chat cuántos artículos quedaron Aprobados, Rechazados y En discusión, y pide a los participantes que corrijan lo que no esté claro.`,
      seguimiento: [
        "Lista solo los artículos En discusión con la postura de cada área para llevarlos a la siguiente sesión.",
        "Pasa los pendientes a una tabla de tareas con prioridad según el plazo que dijeron los participantes.",
        "Redacta un correo de 100 palabras a las áreas con los cambios aprobados y los plazos de revisión."
      ],
      verificar: [
        "Cada artículo Aprobado tiene una decisión dicha en voz alta, no deducida.",
        "Los responsables y las fechas son los que se mencionaron.",
        "El acta no contiene interpretaciones de la norma que nadie haya expresado.",
        "El abogado responsable revisó el borrador antes de archivarlo como versión oficial."
      ]
    },
    {
      necesidad: "Mesa de respuesta a requerimiento",
      titulo: "Facilitator en la mesa de respuesta a un ente de control",
      donde: "Chat de la reunión programada de Teams para coordinar la respuesta, al abrir la sesión.",
      antes: "Programa la reunión con jurídico, siniestros y servicio al cliente. Ten el número de radicado ficticio y la fecha límite de respuesta.",
      prompt: `ROL
Eres Facilitator en una reunión de coordinación de respuesta a un requerimiento de un ente de control. Cuidas el tiempo, que cada punto tenga responsable y que quede evidencia clara.

CONTEXTO
Reunión programada de 30 minutos. El ente de control pidió información sobre [tema, por ejemplo tiempos de respuesta a quejas] con radicado REQ-0452, y la fecha límite es [fecha]. Cada área aporta una parte de la respuesta. Los datos están anonimizados y los casos se nombran por código.

FUENTES
Usa solo lo dicho en la reunión y en el chat. No cites normas, no definas el alcance legal de lo que se pide y no sugieras qué responder.

INSTRUCCIÓN
1. Propone esta agenda al empezar: 5 minutos para leer el alcance del requerimiento, 15 minutos para el aporte de cada área, 5 minutos para riesgos y 5 minutos para cierre.
2. Registra para cada pregunta del requerimiento: Pregunta | Área responsable | Dato o soporte que entrega | Fecha de entrega interna.
3. Anota los riesgos que mencionen, con quién los mencionó.
4. Avisa a los 20 y a los 27 minutos cuánto tiempo queda.
5. Al cierre entrega un recap de máximo 120 palabras con lo que falta por entregar.
6. Entrega una tabla de tareas para Planner con columnas Tarea | Responsable | Fecha | Prioridad (Alta, Media, Baja).

FORMATO DE SALIDA
Registro en tabla durante la reunión, recap en prosa breve y tabla final de tareas. Sin cifras ni nombres que no se hayan dicho. Tono sobrio.

LÍMITES
Marca PENDIENTE donde falte responsable o fecha. Marca [SUPUESTO] cuando infieras y [VERIFICAR] cuando alguien cite un plazo legal o una norma. No redactes la respuesta al ente de control.

CONTROL DE CALIDAD
Antes de cerrar pregunta qué preguntas del requerimiento aún no tienen responsable, y lista cualquier fecha interna que quede después de la fecha límite externa.`,
      seguimiento: [
        "Cruza las fechas de entrega interna con la fecha límite y dime cuáles no dejan margen de revisión.",
        "Convierte el recap en un mensaje de 70 palabras para el canal del equipo.",
        "Dame un borrador en Word del registro de la reunión con los bloques Asistentes, Preguntas, Riesgos y Tareas."
      ],
      verificar: [
        "Cada pregunta del requerimiento tiene un área responsable que aceptó.",
        "Las fechas internas se dijeron en la reunión y no son una sugerencia del asistente.",
        "No quedó ninguna redacción de respuesta presentada como definitiva.",
        "El abogado responsable aprobó el registro antes de guardarlo en el expediente."
      ]
    },
    {
      necesidad: "Capacitación SARLAFT",
      titulo: "Facilitator en una capacitación interna sobre SARLAFT",
      donde: "Chat de la reunión programada de Teams de la capacitación, al abrir la sesión.",
      antes: "Programa la sesión con la lista de convocados. Ten el temario y prepara casos de ejemplo anonimizados, como un cliente ficticio CLIENTE-B.",
      prompt: `ROL
Eres Facilitator en una capacitación interna de 45 minutos sobre SARLAFT para el equipo comercial y operativo de una aseguradora. Guardas el tiempo y registras preguntas y compromisos.

CONTEXTO
La sesión la dicta el oficial de cumplimiento. Temario: señales de alerta en la vinculación de clientes, reporte interno de operaciones inusuales y canales de consulta. Los datos y los casos son de ejemplo, anonimizados. La asistencia es obligatoria y debe quedar soportada.

FUENTES
Usa solo lo dicho en la sesión y en el chat. No agregues contenido normativo, umbrales ni definiciones que el capacitador no haya presentado.

INSTRUCCIÓN
1. Propón la agenda: 5 minutos de objetivo, 20 minutos de contenido, 10 minutos de casos prácticos, 7 minutos de preguntas y 3 minutos de cierre.
2. Mantén un registro de preguntas con columnas Pregunta | Quién la hizo | Respuesta dada | Estado (Respondida, Pendiente).
3. Anota los casos de ejemplo que se trabajaron y la conclusión que dijo el capacitador.
4. Avisa a los 30 y a los 40 minutos cuánto falta.
5. Al cierre entrega un recap de máximo 120 palabras con los tres mensajes clave dichos por el capacitador.
6. Entrega una tabla de tareas con columnas Tarea | Responsable | Fecha | Prioridad, por ejemplo preguntas pendientes por responder.

FORMATO DE SALIDA
Registro de preguntas, recap y tabla de tareas. Además un borrador de constancia de la capacitación en Word con Fecha, Tema, Capacitador, Asistentes y Observaciones.

LÍMITES
No evalúes a los asistentes ni opines sobre sus respuestas. Marca PENDIENTE cuando falte un dato. Marca [VERIFICAR] cuando el capacitador cite una norma o un valor y [SUPUESTO] cuando infieras.

CONTROL DE CALIDAD
Confirma al cierre cuántas preguntas quedaron pendientes y revisa que la constancia incluya solo a quienes aparecen conectados en la reunión. Escribe en español claro, con frases cortas, y evita jerga que el equipo comercial no conozca.`,
      seguimiento: [
        "Redacta un mensaje de seguimiento de 80 palabras para los asistentes con las preguntas pendientes y quién las responde.",
        "Agrupa las preguntas hechas por tema para que el oficial de cumplimiento actualice el material.",
        "Dame la lista de asistentes que se conectaron y los que se ausentaron, según los datos de la reunión."
      ],
      verificar: [
        "Los tres mensajes clave los dijo el capacitador y no el asistente.",
        "La constancia solo lista a los asistentes reales de la reunión.",
        "Las preguntas pendientes tienen responsable y fecha.",
        "El oficial de cumplimiento revisó el contenido antes de usar la constancia como soporte."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Plan de respuesta a tutela",
      titulo: "Meta: coordinar la respuesta a una tutela dentro del plazo",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Reúne el auto o la notificación sin datos del accionante y la lista de áreas que aportan soportes. Adjúntalos como apoyo si tu plan premium lo permite.",
      prompt: `ROL
Eres un abogado litigante de una aseguradora que coordina la respuesta a una acción de tutela y necesita un plan de trabajo con responsables y evidencia.

CONTEXTO
Objetivo: responder la tutela TUT-03 dentro del plazo que fije la notificación, con los soportes de siniestros, atención al consumidor y el área técnica. Resultado esperado: un expediente completo, revisado por el abogado responsable y radicado antes de la fecha límite. Fecha de entrega: [fecha límite de la notificación]. Los datos están anonimizados y no hay nombres del accionante.

FUENTES
Usa solo los documentos adjuntos y el texto de esta meta. No cites normas ni jurisprudencia. No definas la estrategia de defensa.

INSTRUCCIÓN
1. Genera entre 10 y 14 tareas, agrupadas en cuatro grupos: Recibo y análisis, Soportes, Redacción y revisión, Radicación y archivo.
2. Cada tarea lleva título de máximo 10 palabras, responsable por rol (por ejemplo abogado externo, analista de siniestros), fecha y prioridad.
3. Pon la fecha de revisión final al menos un día hábil antes del plazo.
4. Incluye una tarea de verificación de que cada soporte esté legible y completo.
5. Incluye una lista de comprobación de entregables, como poder, anexos y constancia de radicación.

FORMATO DE SALIDA
Tabla con columnas exactas: Grupo | Tarea | Rol responsable | Fecha | Prioridad (Alta, Media, Baja) | Evidencia esperada. Máximo 14 filas.

LÍMITES
Marca [SUPUESTO] donde asumas un responsable o una fecha, [VERIFICAR] donde se mencione un plazo legal y PENDIENTE cuando falte un dato. No redactes el contenido de la respuesta. Recuerda que este plan no lee reuniones por sí solo.

CONTROL DE CALIDAD
Revisa que ninguna tarea quede sin responsable, que la secuencia respete las dependencias y que las fechas no pasen el plazo límite. Dime las tres tareas con mayor riesgo de retraso. Escribe los títulos en verbo de acción, por ejemplo «Recopilar historia del reclamo». Sin adjetivos ni explicaciones largas.`,
      seguimiento: [
        "Agrega tareas de contingencia por si un soporte no llega a tiempo y dime a quién escalar.",
        "Convierte las tareas de prioridad Alta en un mensaje de 60 palabras para el chat del equipo.",
        "Dame una versión del plan en una tabla simple para pegarla en Planner como respaldo."
      ],
      verificar: [
        "La fecha de revisión final queda antes del plazo de la notificación.",
        "Cada tarea tiene un rol responsable razonable y confirmado por el equipo.",
        "No hay tareas que asuman una estrategia jurídica no definida.",
        "El abogado responsable aprobó el plan antes de asignarlo."
      ]
    },
    {
      necesidad: "Revisar plan de actualización de políticas",
      titulo: "Revisión de un plan de actualización de políticas internas",
      donde: "Planner, plan existente, Copilot con la opción de revisar el plan, o Copilot Chat si no la ves.",
      antes: "Abre el plan que ya tienes y ten el calendario de revisiones de políticas. Si usas Copilot Chat, pega la tabla de tareas exportada y anonimizada.",
      prompt: `ROL
Eres un analista de gobierno corporativo de una aseguradora que audita un plan de trabajo existente y propone ajustes, sin cambiar su alcance.

CONTEXTO
El plan se llama «Actualización de políticas 2026» y cubre 12 políticas internas, entre ellas conflictos de interés, tratamiento de datos personales y continuidad del negocio. Cada política tiene un responsable, una fecha de revisión y una fecha de aprobación en el comité. Los datos están anonimizados. Necesito un informe de estado para el comité del [fecha].

FUENTES
Usa solo las tareas, fechas, responsables y estados que están en el plan o en la tabla que pego aquí. No inventes avance. No cites normas.

TABLA O PLAN
[pega aquí la tabla exportada si usas Copilot Chat]

INSTRUCCIÓN
1. Cuenta las tareas por estado: Completadas, En curso, No iniciadas y Atrasadas.
2. Lista las tareas atrasadas con política, responsable y días de atraso respecto de hoy.
3. Detecta políticas sin responsable, sin fecha o con fechas de revisión posteriores a la de aprobación.
4. Detecta dependencias en riesgo, por ejemplo una aprobación que depende de una revisión atrasada.
5. Redacta un informe de estado de máximo 200 palabras para el comité, con semáforo por política (Verde, Amarillo, Rojo) y el criterio usado.

FORMATO DE SALIDA
Bloque 1: conteo por estado. Bloque 2: tabla de atrasos con columnas Política | Tarea | Responsable | Días de atraso. Bloque 3: hallazgos. Bloque 4: informe de estado.

LÍMITES
Marca [SUPUESTO] cuando infieras un estado, [VERIFICAR] cuando una fecha parezca inconsistente y PENDIENTE cuando falte un dato. No reasignes tareas, solo propón.

CONTROL DE CALIDAD
Verifica que los conteos sumen el total de tareas y que cada semáforo siga el criterio escrito. Dime qué datos del plan podrían estar desactualizados. Escribe con frases cortas, sin adjetivos, y deja claro en una línea qué parte del informe depende de datos que no pude confirmar.`,
      seguimiento: [
        "Propón una redistribución de responsables para las políticas sin dueño, como sugerencia para que yo decida.",
        "Reduce el informe a 100 palabras para presentarlo en una diapositiva.",
        "Qué tres tareas desbloquearían más aprobaciones si se cierran esta semana."
      ],
      verificar: [
        "Los conteos coinciden con las tareas reales del plan.",
        "Los días de atraso se calcularon contra la fecha de hoy y no contra otra.",
        "El semáforo sigue el criterio escrito y no una intuición.",
        "El responsable del plan confirmó los estados antes de presentar el informe."
      ]
    },
    {
      necesidad: "Plan anual de capacitaciones",
      titulo: "Plan anual de capacitaciones obligatorias desde documentos",
      donde: "Planner, pestaña Metas, Agregar meta, adjunta los documentos y pulsa Generar tareas.",
      antes: "Reúne el calendario de capacitaciones del año pasado, el listado de temas obligatorios y la lista de áreas por convocar. Sin datos personales.",
      prompt: `ROL
Eres un coordinador de cumplimiento de una aseguradora que arma el plan anual de capacitaciones obligatorias y deja evidencia de cada sesión.

CONTEXTO
Objetivo: dictar en 2026 las capacitaciones obligatorias de SARLAFT, protección de datos personales, ética y conflictos de interés, y atención al consumidor financiero, a todas las áreas. Resultado esperado: sesiones programadas, asistencia registrada y constancias archivadas. Restricción: cada área puede ceder máximo 2 horas por mes. Los datos están anonimizados.

FUENTES
Usa solo los documentos adjuntos: calendario del año anterior, temas obligatorios y lista de áreas. No inventes normas ni frecuencias que no estén en ellos.

INSTRUCCIÓN
1. Genera entre 12 y 16 tareas, agrupadas por trimestre.
2. Para cada capacitación incluye tareas de preparación del material, convocatoria, dictado, registro de asistencia y archivo de constancias.
3. Reparte las sesiones para que ningún mes supere las 2 horas por área.
4. Define responsables por rol, como oficial de cumplimiento o analista de formación.
5. Agrega una tarea trimestral de seguimiento de asistencia con convocatoria a quienes no asistieron.
6. Agrega una tarea de revisión del material antes de cada sesión por el abogado responsable.

FORMATO DE SALIDA
Tabla con columnas exactas: Trimestre | Tarea | Capacitación | Rol responsable | Fecha | Prioridad | Evidencia. Máximo 16 filas. Al final, una lista de máximo 4 riesgos de calendario.

LÍMITES
Marca [SUPUESTO] cuando asumas una fecha o un responsable, [VERIFICAR] cuando una frecuencia dependa de una norma y PENDIENTE cuando falte un dato. No redactes el contenido de las capacitaciones.

CONTROL DE CALIDAD
Revisa que cada capacitación tenga las cinco tareas del paso 2, que ninguna área exceda las 2 horas y que el orden respete las dependencias. Dime qué datos no estaban en los adjuntos. Escribe los títulos de las tareas con verbo de acción y en máximo 10 palabras, para que quepan bien en el tablero.`,
      seguimiento: [
        "Dame una versión por área, con las sesiones que le corresponden a cada una por mes.",
        "Redacta una convocatoria de 80 palabras para la primera capacitación del año.",
        "Dime qué fechas del plan coinciden con cierres o temporadas altas mencionadas en los adjuntos."
      ],
      verificar: [
        "Ningún mes supera las 2 horas por área.",
        "Todas las capacitaciones obligatorias del listado aparecen en el plan.",
        "Las fechas no caen en festivos ni en cierres conocidos de la compañía.",
        "El oficial de cumplimiento aprobó el calendario antes de asignarlo."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Apuntes de una tutela",
      titulo: "Ordenar los apuntes de un caso de tutela en una cronología",
      donde: "OneNote, página con tus apuntes del caso, panel de chat de Copilot.",
      antes: "Ten tus apuntes del caso en la página tal como los tomaste. Quita nombres del accionante, cédulas y direcciones, y usa el código TUT-03.",
      prompt: `ROL
Eres un asistente de un abogado litigante de una aseguradora. Ordenas apuntes sueltos de un caso para que el abogado vea la cronología y los pendientes.

CONTEXTO
Estos son mis apuntes de una acción de tutela contra la compañía por una negativa en un reclamo de seguro de salud. Están mezclados: fechas, llamadas, correos, lo que dijo cada área y cosas por hacer. Los datos están anonimizados. Necesito una vista limpia para la reunión de mañana.

FUENTES
Usa solo el texto de esta página. No agregues normas, jurisprudencia ni hechos que no aparezcan en mis apuntes. Si un dato aparece dos veces con versiones distintas, señálalo.

INSTRUCCIÓN
1. Arma una cronología con columnas exactas: Fecha | Hecho | Fuente dentro de mis apuntes (por ejemplo llamada con siniestros).
2. Ordena por fecha. Si un hecho no tiene fecha, ponlo al final con PENDIENTE.
3. Separa en una lista los hechos confirmados con un documento y los hechos que solo aparecen como comentario.
4. Extrae los pendientes con columnas Tarea | Responsable | Fecha.
5. Lista las contradicciones o vacíos que encuentres, por ejemplo dos fechas distintas para el mismo hecho.
6. Escribe un resumen de 5 líneas del estado del caso con lenguaje neutro.

FORMATO DE SALIDA
Cronología en tabla, lista de hechos confirmados, lista de comentarios sin soporte, pendientes en tabla, contradicciones en viñetas y resumen. Máximo 350 palabras sin contar las tablas. No borres mis apuntes originales.

LÍMITES
No sugieras estrategia de defensa ni valores el caso. Marca [SUPUESTO] cuando ordenes un hecho sin fecha clara y [VERIFICAR] cuando una fecha o un plazo me parezca inconsistente. Usa PENDIENTE donde falte un dato.

CONTROL DE CALIDAD
Confirma que cada fila de la cronología aparece en mis apuntes y dime qué líneas no pudiste ubicar en ninguna categoría.`,
      seguimiento: [
        "Muestra solo los hechos con fecha posterior al [fecha] para preparar la reunión de mañana.",
        "Convierte los pendientes en una lista de verificación que pueda marcar en OneNote.",
        "Redacta un resumen de 80 palabras para el gerente jurídico que no conoce el caso."
      ],
      verificar: [
        "Cada hecho de la cronología está en mis apuntes con la misma fecha.",
        "Las contradicciones señaladas son reales y no una lectura equivocada.",
        "No se agregaron hechos ni valoraciones que yo no escribí.",
        "El abogado responsable contrastó la cronología con el expediente antes de usarla."
      ]
    },
    {
      necesidad: "Observaciones a un contrato",
      titulo: "Separar observaciones, dudas y acuerdos de un contrato",
      donde: "OneNote, página con tus notas de lectura del contrato, panel de chat de Copilot.",
      antes: "Ten tus notas de lectura del contrato en la página, con el número de cláusula junto a cada comentario. No pegues cifras reales ni datos del proveedor.",
      prompt: `ROL
Eres un abogado de contratación que organiza las notas de lectura de un contrato de servicios con un proveedor de una aseguradora.

CONTEXTO
Mis notas son de la lectura de un contrato con PROVEEDOR-X para custodia y digitalización de archivos. Incluyen observaciones propias, dudas para el área usuaria, cosas ya acordadas por teléfono y riesgos que me preocupan. Los datos están anonimizados y las cláusulas aparecen por número. Voy a enviar las observaciones al proveedor.

FUENTES
Usa solo las notas de esta página. No cites normas ni modelos de cláusulas. No inventes el texto de las cláusulas que no escribí.

INSTRUCCIÓN
1. Clasifica cada nota en una de cuatro categorías: Observación a enviar al proveedor, Duda interna, Acuerdo ya hablado, Riesgo.
2. Presenta una tabla con columnas exactas: Cláusula | Categoría | Nota en una frase | Quién debe actuar | Prioridad (Alta, Media, Baja).
3. Aplica este criterio de prioridad: Alta si afecta responsabilidad, datos personales o terminación. Media si afecta plazos o pagos. Baja si es de forma.
4. Redacta una lista de máximo 8 observaciones listas para enviar al proveedor, cada una de máximo 35 palabras, en tono cordial y firme.
5. Lista las dudas internas como preguntas cortas con el área a la que se dirigen.

FORMATO DE SALIDA
Tabla, lista de observaciones para el proveedor y lista de preguntas internas. Máximo 400 palabras sin contar la tabla. Mantén mi redacción cuando sea clara y solo ajusta lo ambiguo.

LÍMITES
No decidas si el contrato se firma ni propongas cláusulas nuevas. Marca [SUPUESTO] cuando asumas una prioridad o un responsable, [VERIFICAR] cuando una nota mencione una norma o un plazo, y PENDIENTE cuando falte el número de cláusula. El texto es un borrador para revisión del abogado.

CONTROL DE CALIDAD
Cuenta las notas que clasificaste frente a las que hay en la página y dime cuáles quedaron sin categoría. Confirma que ninguna observación cambie lo que escribí.`,
      seguimiento: [
        "Muestra solo las notas de prioridad Alta con su cláusula y el área que debe actuar.",
        "Redacta el correo de 120 palabras al proveedor que acompañe la lista de observaciones, con tono cordial.",
        "Convierte las dudas internas en una tabla Pregunta | Área | Fecha sugerida, marcando la fecha como SUPUESTO."
      ],
      verificar: [
        "Todas las notas de la página aparecen clasificadas en la tabla.",
        "Las prioridades siguen el criterio escrito y no una intuición.",
        "Ninguna observación para el proveedor agrega algo que yo no anoté.",
        "Un abogado contrastó la lista con el texto real del contrato antes de enviarla."
      ]
    },
    {
      necesidad: "Apuntes de una capacitación",
      titulo: "Convertir apuntes de una capacitación SARLAFT en material de consulta",
      donde: "OneNote, página con los apuntes de la capacitación, panel de chat de Copilot.",
      antes: "Ten tus apuntes tal como los tomaste durante la sesión. Los ejemplos de clientes deben ser ficticios, como CLIENTE-B.",
      prompt: `ROL
Eres un analista de formación del área de cumplimiento de una aseguradora. Conviertes apuntes de una capacitación en una guía de consulta rápida para quienes no asistieron.

CONTEXTO
Mis apuntes son de la capacitación interna sobre SARLAFT que dictó el oficial de cumplimiento. Incluyen señales de alerta, pasos para reportar una operación inusual, ejemplos y preguntas del grupo. Están desordenados. Los datos y los casos están anonimizados.

FUENTES
Usa solo el texto de esta página. No agregues definiciones, umbrales ni normas que no estén en mis apuntes. Si un apunte parece incompleto, no lo completes.

INSTRUCCIÓN
1. Resume la capacitación en máximo 150 palabras.
2. Lista las señales de alerta que aparecen en los apuntes, cada una en una frase de máximo 20 palabras.
3. Describe el paso a paso del reporte interno como lista numerada, usando solo lo que anoté.
4. Prepara una tabla de preguntas frecuentes con columnas Pregunta | Respuesta según mis apuntes | Estado (Confirmada, Por confirmar).
5. Propón 5 preguntas de repaso con su respuesta, para que el equipo se autoevalúe.
6. Lista los puntos que anoté como dudas y que el oficial de cumplimiento debe aclarar.

FORMATO DE SALIDA
Resumen, señales de alerta, paso a paso, tabla de preguntas frecuentes, preguntas de repaso y dudas por aclarar. Máximo 450 palabras en total. Lenguaje claro para personas que no son abogados.

LÍMITES
No conviertas una duda mía en una respuesta. Marca [SUPUESTO] cuando completes un paso, [VERIFICAR] cuando algo dependa de una norma o de un valor, y PENDIENTE cuando falte un dato. El material es un borrador que aprueba el oficial de cumplimiento.

CONTROL DE CALIDAD
Verifica que cada señal de alerta y cada paso aparezcan en mis apuntes. Dime qué apuntes no usaste y por qué. Escribe con frases cortas y vocabulario sencillo. Si un apunte es ilegible o ambiguo, déjalo en la lista de dudas y no lo interpretes.`,
      seguimiento: [
        "Hazme una versión de una página para imprimir con solo las señales de alerta y el paso a paso.",
        "Redacta un mensaje de 70 palabras para enviar la guía a quienes no asistieron, con el contacto de consulta como dato a completar.",
        "Conserva solo las preguntas Por confirmar y redáctalas para enviarlas al oficial de cumplimiento."
      ],
      verificar: [
        "Las señales de alerta y los pasos coinciden con lo que anoté.",
        "Las preguntas Por confirmar no se presentan como respuestas.",
        "No hay umbrales ni normas que yo no haya escrito.",
        "El oficial de cumplimiento aprobó la guía antes de compartirla."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Comparar dos versiones de una política",
      titulo: "Comparación de dos versiones de una política interna",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip las dos versiones.",
      antes: "Ten el archivo de la versión vigente y el de la propuesta, sin datos de personas. Si son PDF escaneados, usa versiones con texto.",
      prompt: `ROL
Eres un abogado de gobierno corporativo de una aseguradora, con experiencia en control de cambios de políticas internas.

OBJETIVO
Comparar la versión vigente y la versión propuesta de la política de [nombre de la política] y entregar un cuadro de cambios que el comité pueda leer en cinco minutos.

CONTEXTO
La política la aprueba el comité en su próxima sesión. Las áreas afectadas son [áreas]. Los datos de ejemplo están anonimizados. Quiero distinguir los cambios de fondo de los cambios de forma.

FUENTES
Usa solo los dos archivos adjuntos y cita el número de artículo o de sección de cada uno. No cites normas externas. Si algo no está en los archivos, escribe PENDIENTE.

INSTRUCCIÓN
1. Identifica cada diferencia entre las dos versiones.
2. Clasifícalas en Fondo (cambia una obligación, un plazo, un responsable o un alcance) o Forma (redacción, numeración o formato).
3. Para cada cambio de fondo describe el efecto práctico en una frase y nombra el área que lo siente.
4. Detecta artículos eliminados, artículos nuevos y referencias cruzadas que quedaron rotas.
5. Marca los cambios que podrían requerir verificación jurídica adicional.

FORMATO DE SALIDA
Una tabla con columnas exactas: Artículo (vigente) | Artículo (propuesta) | Tipo | Qué cambió | Efecto práctico | Área. Luego un resumen de máximo 120 palabras para el comité, con los tres cambios más relevantes y el criterio con el que los elegiste.

LÍMITES
No opines si el cambio es adecuado o legal. Marca [VERIFICAR] los cambios que parezcan modificar una obligación regulatoria y [SUPUESTO] cuando interpretes una redacción ambigua. El resultado es un borrador que revisa un abogado.

CONTROL DE CALIDAD
Antes de entregar, cuenta los cambios de fondo y de forma y confirma que cada uno cite artículo en ambas versiones. Dime qué partes no pudiste comparar y por qué.`,
      seguimiento: [
        "Muestra solo los cambios de Fondo que afecten a [área] y redacta qué tendría que hacer esa área distinto.",
        "Redacta una nota de 100 palabras para informar a las áreas el cambio de política, con la fecha como dato a completar.",
        "Dame una lista de preguntas que el comité podría hacer sobre estos cambios, sin responderlas."
      ],
      verificar: [
        "Cada cambio de la tabla cita el artículo correcto en las dos versiones.",
        "Los cambios clasificados como Forma no modifican una obligación real.",
        "No se omitió ningún artículo eliminado o nuevo.",
        "Un abogado leyó los dos textos completos antes de usar el cuadro en el comité."
      ]
    },
    {
      necesidad: "Concepto jurídico breve",
      titulo: "Borrador de concepto jurídico breve para un área interna",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la consulta y los documentos de soporte.",
      antes: "Ten la consulta del área por escrito, los documentos que la soportan y las normas que tú ya ubicaste. Quita datos de clientes.",
      prompt: `ROL
Eres un abogado asesor de una aseguradora que redacta borradores de conceptos jurídicos internos para revisión de un abogado senior.

OBJETIVO
Preparar el borrador de un concepto jurídico de máximo una página para el área [área], sobre la consulta [resumen de la consulta].

CONTEXTO
El área necesita saber si puede [acción que consulta, por ejemplo usar una nueva forma de notificar al asegurado]. El concepto es interno, preliminar y lo firma el abogado responsable. Los datos están anonimizados.

FUENTES
Usa solo la consulta y los documentos adjuntos, y las normas que yo te indique aquí: [lista de normas con número y artículo]. No cites otras normas, doctrina ni sentencias de la memoria. Si el análisis necesita una fuente que no tienes, escribe PENDIENTE y dime cuál.

INSTRUCCIÓN
1. Resume la consulta en dos frases.
2. Enumera los hechos relevantes que constan en los documentos.
3. Presenta las normas que yo indiqué y qué dice cada una según el texto adjunto, citando la parte exacta.
4. Plantea el análisis en tres a cinco párrafos cortos, separando lo que dice la fuente de lo que es inferencia.
5. Propone una conclusión preliminar con el nivel de certeza (Alto, Medio, Bajo) y la razón.
6. Lista los riesgos y las condiciones que el área debe cumplir.

FORMATO DE SALIDA
Encabezado con Para, De, Asunto y Fecha. Luego las secciones: Consulta, Hechos, Marco aplicable, Análisis, Conclusión preliminar, Riesgos y condiciones. Máximo 420 palabras. Tono formal y claro.

LÍMITES
No emitas un concepto definitivo y deja a la vista la frase «Borrador sujeto a revisión del abogado responsable». Marca [VERIFICAR] cada afirmación sobre una norma, [SUPUESTO] cada inferencia y PENDIENTE cada dato faltante.

CONTROL DE CALIDAD
Revisa que cada afirmación jurídica tenga una fuente adjunta o indicada por mí, y lista las que no la tengan. Dime dónde la conclusión es más débil.`,
      seguimiento: [
        "Reescribe la conclusión en 60 palabras para el gerente del área, sin tecnicismos y manteniendo el nivel de certeza.",
        "Dame tres contraargumentos que un revisor podría plantear a esta conclusión, solo con las fuentes adjuntas.",
        "Lista las fuentes adicionales que necesitaría consultar un abogado para cerrar este concepto."
      ],
      verificar: [
        "Cada norma citada fue indicada por mí y su texto coincide con la fuente.",
        "La conclusión no suena más segura que el análisis que la soporta.",
        "Lo que es inferencia está marcado como tal.",
        "El abogado responsable revisó y firmó el concepto antes de entregarlo al área."
      ]
    },
    {
      necesidad: "Respuesta a requerimiento",
      titulo: "Borrador de respuesta a un requerimiento de un ente de control",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el requerimiento y los soportes internos.",
      antes: "Reúne el requerimiento sin datos personales, los soportes entregados por las áreas y la fecha límite. Define quién firma.",
      prompt: `ROL
Eres un abogado de cumplimiento de una aseguradora que redacta respuestas a entes de control con precisión y sin compromisos innecesarios.

OBJETIVO
Preparar el borrador de respuesta al requerimiento REQ-0452 de [entidad], con los soportes de las áreas, para revisión del abogado responsable y firma de [cargo].

CONTEXTO
El ente pide información sobre [tema, por ejemplo tiempos de atención de quejas en el último semestre]. La fecha límite es [fecha]. Los datos de ejemplo están anonimizados. La respuesta debe ser clara, completa y sin afirmar nada que no tenga soporte.

FUENTES
Usa solo el requerimiento y los soportes adjuntos. No cites normas que no estén en el requerimiento. Si una pregunta no tiene soporte, escribe PENDIENTE y dime qué área debe aportarlo.

INSTRUCCIÓN
1. Lista cada pregunta del requerimiento y asígnale un número.
2. Para cada pregunta redacta una respuesta de máximo 80 palabras, citando el soporte que la respalda.
3. Si el soporte no cubre toda la pregunta, responde la parte cubierta y marca el faltante.
4. Redacta un párrafo inicial de máximo 60 palabras que identifique el radicado y confirme la entrega.
5. Redacta un cierre de máximo 40 palabras que ofrezca ampliar información, sin comprometer plazos.
6. Prepara una lista de anexos con el nombre del soporte y la pregunta que respalda.

FORMATO DE SALIDA
Carta con párrafo inicial, respuestas numeradas, cierre y lista de anexos. Tono formal, sin adjetivos ni opiniones. Entrega aparte una tabla de faltantes con columnas Pregunta | Dato faltante | Área.

LÍMITES
No admitas responsabilidad ni hagas valoraciones. Marca [SUPUESTO] cuando completes un dato, [VERIFICAR] cuando una cifra o fecha dependa de un soporte que no pudiste leer y PENDIENTE donde falte soporte. El borrador lo revisa un abogado antes de firmarse.

CONTROL DE CALIDAD
Confirma que cada cifra de la carta aparece en un soporte adjunto y que no hay afirmaciones sin respaldo. Dime qué preguntas quedaron parcialmente respondidas.`,
      seguimiento: [
        "Reescribe las respuestas para que sean más cortas, máximo 50 palabras cada una, sin perder el soporte citado.",
        "Redacta un correo de 80 palabras a las áreas con los faltantes y la fecha interna para entregarlos.",
        "Revisa si alguna respuesta se contradice con otra dentro de la misma carta y cítalas."
      ],
      verificar: [
        "Cada cifra y fecha de la carta coincide con un soporte adjunto.",
        "Las preguntas sin soporte quedaron marcadas y no se llenaron con suposiciones.",
        "La carta no admite responsabilidad ni agrega valoraciones.",
        "El abogado responsable y quien firma leyeron la versión final antes de radicarla."
      ]
    }
  ]
};
