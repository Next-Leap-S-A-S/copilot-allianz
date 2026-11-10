const MAS_SINIESTROS = {
  "teams-chats": [
    {
      necesidad: "Reclamo con demora",
      titulo: "Reclamo atrasado: resumir el hilo y escribir al ajustador",
      donde: "Panel de Copilot dentro del canal o chat donde se sigue el reclamo atrasado.",
      antes: "Abre el hilo del reclamo con demora. Debe superar 1.000 caracteres. Ten el código anonimizado del siniestro y la fecha en que el asegurado presentó los documentos completos.",
      prompt: `ROL
Eres un coordinador de servicio de siniestros de Allianz Colombia que debe destrabar reclamos atrasados antes de que lleguen a queja formal.

CONTEXTO
El reclamo [SIN-0457] de daño material en vehículo lleva [35] días sin respuesta al asegurado. En este hilo participan el ajustador, el taller, el analista de pagos y yo. Todos los datos están anonimizados. Necesito saber por qué se atrasó y qué le escribo hoy al ajustador.

FUENTES
Usa solo los mensajes de este hilo. No leas imágenes, componentes Loop ni archivos compartidos. Si el motivo del atraso está en un archivo adjunto, dímelo. No supongas causas que nadie escribió.

INSTRUCCIÓN
1. Resume el hilo en máximo 6 viñetas en orden cronológico, con fecha de cada hito (aviso, inspección, cotización, aprobación, pago).
2. Identifica el punto exacto donde se detuvo el trámite y quién tenía la pelota en ese momento.
3. Lista lo que está pendiente con persona responsable y fecha prometida. Si no hay fecha, escribe PENDIENTE.
4. Señala mensajes sin respuesta de más de 2 días hábiles.
5. Redacta un mensaje para el ajustador de máximo 90 palabras, tono cordial y firme, que pida confirmar [paso pendiente] hoy y proponga una fecha de cierre.
6. Redacta una versión de 40 palabras para el canal del equipo, sin culpar a nadie.

FORMATO DE SALIDA
Cronología en viñetas, tabla de 4 columnas (pendiente, responsable, fecha prometida, estado) y los dos mensajes al final, cada uno bajo su subtítulo.

LÍMITES
No definas si procede el pago ni el monto. Marca [SUPUESTO] cualquier causa que dedujiste. Marca [VERIFICAR] los plazos legales mencionados en el hilo sin soporte. No prometas fechas por otras personas.

CONTROL DE CALIDAD
Al final indica en qué mensaje del hilo se apoya cada hito y cada pendiente, y qué no pudiste confirmar.`,
      seguimiento: [
        "Reordena la cronología solo con los hitos donde el trámite estuvo detenido más de 3 días hábiles y suma cuántos días pasó cada uno.",
        "Reescribe el mensaje al ajustador en tono más formal, con copia a su líder, y sin mencionar quién causó la demora.",
        "Dame en 3 viñetas lo que le puedo decir al corredor sobre el estado del reclamo sin comprometer una fecha de pago."
      ],
      verificar: [
        "Cada fecha del hilo contra el sistema de siniestros, porque el resumen puede confundir fechas de aviso y de documentos completos.",
        "Que el archivo con la cotización o el informe, si existe, se haya revisado por fuera de Copilot.",
        "Que el mensaje al ajustador no asuma una causa que nadie confirmó en el hilo.",
        "Que el número de días de atraso coincida con el cálculo del equipo de servicio."
      ]
    },
    {
      necesidad: "Documentos faltantes",
      titulo: "Buscar qué documentos se pidieron y pedir los que faltan",
      donde: "Copilot Chat, pestaña Trabajo, para buscar en chats y canales. Luego el chat con el corredor.",
      antes: "Ten el código anonimizado del siniestro y la lista de documentos que exige el procedimiento para ese ramo. Escribe los nombres de los chats donde se habló del caso.",
      prompt: `ROL
Eres un analista de siniestros de Allianz Colombia que arma el expediente de un reclamo de [ramo, por ejemplo hurto de equipos] y necesita saber qué falta.

CONTEXTO
El siniestro [SIN-0312] está incompleto. Se pidieron documentos en varios chats y canales de Teams en los últimos 30 días, con el corredor, el ajustador y el asegurado representado por su contacto. Los datos están anonimizados. Lista exigida por el procedimiento: [denuncia, facturas, cédula del representante, certificado de existencia, fotos del daño].

FUENTES
Busca solo en mis chats y canales de Teams de los últimos 30 días las menciones a [SIN-0312]. No leas imágenes, componentes Loop ni archivos compartidos. Si un documento llegó como archivo, dime en qué chat y quién lo envió, sin abrirlo.

INSTRUCCIÓN
1. Encuentra cada mención de documentos pedidos, recibidos o prometidos, con fecha, chat y persona.
2. Cruza ese hallazgo con la lista exigida y clasifícalo como RECIBIDO, PEDIDO SIN RESPUESTA o NUNCA PEDIDO.
3. Para cada documento no recibido indica cuántos días llevan desde la primera solicitud.
4. Redacta un mensaje para el corredor de máximo 110 palabras que liste solo los faltantes con una frase breve del porqué, y fije [fecha límite] para recibirlos.
5. Redacta una versión de 60 palabras para el chat interno que avise al ajustador del estado.

FORMATO DE SALIDA
Tabla de 5 columnas (documento, estado, primera solicitud, chat donde consta, días transcurridos), luego los dos mensajes.

LÍMITES
No digas que el reclamo se debe rechazar por falta de documentos. No cites artículos ni plazos legales. Marca [VERIFICAR] cualquier plazo que aparezca en los chats sin soporte. Si no encuentras la solicitud original, escribe PENDIENTE y no la inventes.

CONTROL DE CALIDAD
Al final indica qué menciones soportan cada estado y qué documentos podrían estar en un archivo que Copilot no lee.`,
      seguimiento: [
        "Convierte los documentos faltantes en una lista de verificación para pegar en el chat con el corredor, con casilla, nombre y fecha límite.",
        "Rehace el mensaje al corredor con tono más cercano y deja una sola petición clara en la primera línea.",
        "Dime qué chats mencionan el siniestro pero no trajeron ninguna decisión ni documento, para saber dónde no hay nada que revisar."
      ],
      verificar: [
        "Cada documento marcado RECIBIDO contra el expediente real, porque pudo llegar solo como archivo.",
        "Que la lista exigida corresponda al ramo y a la versión vigente del procedimiento.",
        "Que las fechas de primera solicitud coincidan con los mensajes originales.",
        "Que el mensaje al corredor no incluya datos personales del asegurado."
      ]
    },
    {
      necesidad: "Recobro con tercero",
      titulo: "Chat de recobro: estado de la subrogación y mensaje en inglés",
      donde: "Panel de Copilot dentro del chat con el abogado de recobros, y luego Copilot Chat para la versión en inglés.",
      antes: "Abre el chat donde se coordina el recobro del siniestro. Debe superar 1.000 caracteres. Ten el código anonimizado y el nombre genérico de la aseguradora del tercero.",
      prompt: `ROL
Eres un analista de recobros y subrogación de Allianz Colombia que prepara el seguimiento de un siniestro ya pagado.

CONTEXTO
Pagamos el siniestro [SIN-0198] por choque con un tercero responsable y buscamos recuperar lo pagado a la aseguradora del tercero. En el chat participan el abogado de recobros, el ajustador y yo. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo los mensajes de este chat de los últimos 30 días. No leas imágenes, componentes Loop ni archivos compartidos. Si la reclamación o la respuesta de la otra aseguradora llegaron como archivo, avísame sin inventar su contenido.

INSTRUCCIÓN
1. Resume el estado del recobro en 5 viñetas: reclamación enviada, respuesta recibida, posición de la otra aseguradora, negociación y siguiente paso.
2. Extrae las fechas que importan para el recobro, como fecha de pago, fecha de envío de la reclamación y fecha de respuesta. Si falta alguna, escribe PENDIENTE.
3. Lista las decisiones y los compromisos del abogado y del ajustador, con fecha.
4. Señala argumentos que la otra aseguradora usó para discutir la responsabilidad, citando el mensaje donde aparecen.
5. Redacta un mensaje de máximo 100 palabras al abogado pidiendo [actualización del estado y fecha prevista de respuesta].
6. Redacta una versión en inglés de 100 palabras para el reasegurador, que informe el estado del recobro sin cifras.

FORMATO DE SALIDA
Resumen en viñetas, tabla de 4 columnas (fecha, hecho, responsable, fuente en el chat) y los dos mensajes en español e inglés.

LÍMITES
No evalúes la probabilidad de recuperar ni sugieras un monto de acuerdo. Marca [SUPUESTO] lo que dedujiste. Marca [VERIFICAR] los términos de prescripción mencionados sin soporte.

CONTROL DE CALIDAD
Al final señala qué mensaje soporta cada fecha y qué datos faltan para tener la línea de tiempo completa.`,
      seguimiento: [
        "Dame solo las fechas del recobro en una línea de tiempo de una sola tabla, y marca en cuáles pasó más de 30 días sin movimiento.",
        "Acorta el mensaje en inglés a 60 palabras y conserva los términos técnicos de subrogación y reaseguro.",
        "Haz una lista de preguntas que le debería hacer al abogado en la próxima llamada, con base solo en lo que quedó sin respuesta en el chat."
      ],
      verificar: [
        "Fechas de pago y de reclamación contra el sistema de siniestros y el expediente de recobro.",
        "Que el término de prescripción se confirme con jurídico, sin tomar el del chat.",
        "Que la versión en inglés no revele cifras, nombres ni la posición de negociación.",
        "Que las posiciones de la otra aseguradora se lean en el mensaje original antes de usarlas."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Comité de objeción",
      titulo: "Reunión con jurídico sobre una objeción: decisión y soporte",
      donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la reunión terminada.",
      antes: "Verifica que la transcripción estuvo activada. Lo que preguntes solo lo ves tú. Usa el código anonimizado del siniestro, no el nombre del asegurado.",
      prompt: `ROL
Eres un asistente de apoyo a un líder de siniestros de Allianz Colombia que acaba de salir de una reunión con el área jurídica para decidir si se objeta un reclamo.

CONTEXTO
La reunión trató el siniestro [SIN-0620], un reclamo de [ramo] con posible reticencia en la declaración del riesgo. Participaron el ajustador, un abogado de siniestros y el líder. Los datos están anonimizados. Necesito dejar claro qué se decidió, con qué soporte y qué sigue.

FUENTES
Usa solo la transcripción de esta reunión. No uses jurisprudencia, normas ni otros expedientes. Cuando cites una frase, indica quién la dijo y en qué minuto aparece.

INSTRUCCIÓN
1. Escribe la decisión final en una sola frase (objetar, pagar, pedir más información o aplazar) y la frase textual que la respalda. Si no hubo decisión, escribe NO HUBO DECISIÓN.
2. Lista los argumentos a favor de la decisión, cada uno con cita corta y persona.
3. Lista los argumentos en contra o dudas que quedaron abiertas, con cita y persona.
4. Identifica los hechos que se dieron por ciertos sin soporte documental y márcalos como [SUPUESTO].
5. Arma una tabla de pendientes con acción, responsable, fecha y documento que se necesita.
6. Escribe 5 líneas para el jefe de siniestros que no asistió, con la decisión, el riesgo principal y lo que se necesita de su parte.

FORMATO DE SALIDA
Decisión, dos listas de argumentos con citas, tabla de 4 columnas y resumen de 5 líneas.

LÍMITES
No emitas opinión jurídica ni digas si la objeción es procedente. Si el plazo para objetar se mencionó, cítalo y márcalo [VERIFICAR]. Si falta responsable o fecha, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final indica qué minutos de la transcripción soportan cada punto y qué no quedó claro.`,
      seguimiento: [
        "Dame solo las dudas que el abogado dejó abiertas, con cita textual y minuto, para ver qué falta antes de enviar la carta.",
        "Escribe el resumen para el jefe de siniestros en 80 palabras y sin citas, solo con decisión, riesgo y petición.",
        "Lista qué documentos del expediente se mencionaron como necesarios y quién prometió conseguirlos."
      ],
      verificar: [
        "Cada cita contra el momento de la grabación o la transcripción, porque puede atribuir mal quién habló.",
        "Que la decisión reportada sea la acordada y no una posición individual.",
        "Que el plazo mencionado para objetar se confirme con jurídico y con la fecha de recibo de la reclamación.",
        "Que los documentos mencionados existan en el expediente antes de usarlos."
      ]
    },
    {
      necesidad: "Reunión con perito",
      titulo: "Reunión con el perito: hallazgos, discrepancias y reserva",
      donde: "Panel de Copilot dentro de la reunión de Teams mientras corre la transcripción, y luego en el Recap.",
      antes: "Activa la transcripción antes de empezar. Ten a mano el número de siniestro anonimizado y el valor de la reserva actual solo como referencia propia.",
      prompt: `ROL
Eres un ajustador senior de Allianz Colombia que sigue en vivo una reunión con el perito que inspeccionó un siniestro complejo.

CONTEXTO
La reunión revisa el informe preliminar del perito sobre el siniestro [SIN-0733], un daño por agua en una planta de producción con discusión sobre causa y alcance. Participan el perito, el ajustador y el líder de siniestros. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo la transcripción de la reunión. No uses el informe adjunto ni otros archivos. No hagas estimaciones técnicas propias.

INSTRUCCIÓN
1. Si me incorporo tarde, dame en 5 viñetas lo que se ha dicho hasta ahora, con la causa del daño según el perito.
2. Durante la reunión, cuando te lo pida, responde preguntas sobre lo dicho con la persona y el momento.
3. Al terminar, lista los hallazgos del perito en una tabla con hallazgo, evidencia mencionada, grado de certeza expresado (seguro, probable, por confirmar) y quién lo dijo.
4. Separa las discrepancias entre el perito y el ajustador sobre causa, alcance o valor, con la posición de cada uno en una línea.
5. Lista lo que el perito debe entregar, con fecha, y lo que el equipo debe entregarle.
6. Redacta 6 líneas que sirvan de base para actualizar la nota de reserva, con las condiciones que dijo el perito y sin cifras nuevas.

FORMATO DE SALIDA
Resumen de ponerse al día, tabla de hallazgos, lista de discrepancias, tabla de entregables y 6 líneas para la nota de reserva.

LÍMITES
No definas ni sugieras la reserva. No concluyas sobre cobertura. Marca [SUPUESTO] lo que el perito dio por cierto sin soporte. Marca [VERIFICAR] cualquier cifra que se dijo de memoria.

CONTROL DE CALIDAD
Al final indica qué minutos soportan cada hallazgo y qué temas no se cerraron.`,
      seguimiento: [
        "Dame solo los hallazgos que el perito dijo como probables o por confirmar y qué evidencia dijo que faltaba para cerrarlos.",
        "Redacta una lista de preguntas de seguimiento para el perito con base en lo que dejó ambiguo en la reunión.",
        "Convierte los entregables en una tabla para pegar en Planner con título corto, responsable, fecha y prioridad."
      ],
      verificar: [
        "Cada hallazgo contra el informe pericial final, porque la reunión pudo mencionar versiones preliminares.",
        "Que las cifras dichas en voz alta se confirmen en el documento firmado.",
        "Que la nota de reserva la redacte y apruebe quien tiene esa facultad, no se tome tal cual del resumen.",
        "Que la certeza atribuida al perito corresponda a lo que dijo y no a una lectura optimista."
      ]
    },
    {
      necesidad: "Preparar el comité de reservas",
      titulo: "Preparar la próxima reunión de reservas desde la anterior",
      donde: "Copilot Chat, pestaña Trabajo, con la reunión anterior de reservas seleccionada como fuente.",
      antes: "Selecciona la reunión anterior de revisión de reservas, que debe tener transcripción. Ten la fecha de la próxima reunión y los códigos anonimizados.",
      prompt: `ROL
Eres un coordinador de siniestros de Allianz Colombia que prepara la agenda de la próxima reunión mensual de revisión de reservas.

CONTEXTO
La reunión anterior revisó las reservas de los siniestros con mayor exposición. La próxima será el [fecha]. Participan el líder de siniestros, dos ajustadores y la analista de reservas. Todos los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo la transcripción de la reunión anterior de reservas del [fecha anterior]. No uses otras reuniones ni expedientes. Si algo no se dijo, escribe PENDIENTE.

INSTRUCCIÓN
1. Lista los compromisos que se acordaron en esa reunión, con responsable y fecha. Marca cuáles ya deberían estar cumplidos a la fecha de hoy.
2. Lista los casos cuya reserva quedó en discusión o con condición, por ejemplo a la espera de peritaje, de documentos o de decisión jurídica.
3. Identifica los temas que se aplazaron explícitamente para esta reunión.
4. Propone una agenda de 45 minutos con bloques por caso, tiempo asignado y responsable de presentar, priorizando los de mayor reserva y los más antiguos.
5. Redacta preguntas que cada responsable debería traer respondidas, máximo 2 por caso.
6. Redacta un correo de convocatoria de máximo 120 palabras, con agenda y lo que debe traer cada persona.

FORMATO DE SALIDA
Tabla de compromisos con estado a verificar, tabla de casos abiertos, agenda en tabla de 4 columnas (bloque, tiempo, caso, responsable), preguntas por caso y correo.

LÍMITES
No propongas cambios de reserva ni indemnizaciones. Marca [SUPUESTO] cuando infieras que un compromiso estaba vencido. Marca [VERIFICAR] los plazos mencionados sin soporte.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción se apoya cada compromiso y cada tema aplazado, y qué no pudiste confirmar.`,
      seguimiento: [
        "Reduce la agenda a 30 minutos dejando solo los casos con compromisos vencidos y los que quedaron en discusión.",
        "Reescribe el correo de convocatoria con un tono más breve y una línea final que pida confirmar asistencia.",
        "Dame las 5 preguntas más importantes que quedaron sin responder en la reunión anterior, ordenadas por exposición."
      ],
      verificar: [
        "Cada compromiso marcado como vencido contra el estado real que lleva su responsable.",
        "Que los casos de la agenda correspondan a los de la reunión anterior y no mezclen otros.",
        "Que los tiempos de la agenda sumen la duración de la reunión.",
        "Que el correo no incluya cifras ni nombres de asegurados."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Revisión mensual de reservas",
      titulo: "Facilitator en el comité mensual de revisión de reservas",
      donde: "Chat de la reunión programada de Teams, antes de tratar el primer caso.",
      antes: "La reunión debe ser programada, no instantánea. Ten la lista de siniestros a revisar con código anonimizado y el ajustador responsable de cada uno.",
      prompt: `ROL
Eres Facilitator, el asistente que lleva el control del comité mensual de revisión de reservas de siniestros de Allianz Colombia.

CONTEXTO
Reunión programada de 50 minutos. Participan el líder de siniestros, la analista de reservas, tres ajustadores y un representante de reaseguro. Se revisan siniestros abiertos con reserva alta o con más de 90 días sin movimiento. Los datos están anonimizados y las cifras son de ejemplo. Lista: [SIN-0101, SIN-0102, SIN-0103, SIN-0104, SIN-0105].

FUENTES
Usa solo lo que se diga en la reunión y en el chat. No consultes el sistema de siniestros ni calcules reservas.

INSTRUCCIÓN
1. Propón una agenda con tiempos: 5 minutos de apertura, 8 minutos por caso para 5 casos, 5 minutos de cierre. Avisa en el chat cuando falten 2 minutos de cada bloque.
2. Lleva las notas con esta estructura por caso, que pego aquí: Caso, Ramo, Motivo de revisión, Reserva vigente dicha en voz alta, Cambio propuesto, Quién autoriza, Condición para el cambio.
3. Registra como DECISIÓN lo aprobado, como PENDIENTE toda acción con responsable y fecha, como RIESGO la reserva insuficiente o el caso sin movimiento, como PREGUNTA ABIERTA lo que nadie resolvió y como SUPUESTO lo que se dio por cierto sin soporte.
4. A los 25 minutos haz un recap con casos cerrados y abiertos.
5. Al cierre entrega el resumen y una tabla para Planner con tarea, responsable, fecha, prioridad y caso.

FORMATO DE SALIDA
Una ficha por caso con la estructura pegada. Luego un resumen de 6 viñetas y la tabla de 5 columnas para Planner. Si pido un borrador de acta, ofrécelo en Word.

LÍMITES
No definas ni sugieras reservas. Registra solo lo dicho. Si no se mencionó quién autoriza el cambio, escribe PENDIENTE. Marca [VERIFICAR] las cifras dichas sin soporte.

CONTROL DE CALIDAD
Antes de cerrar, revisa que cada caso de la lista tenga ficha y que cada pendiente tenga responsable y fecha. Dime cuáles no.`,
      seguimiento: [
        "Dame un recap de los casos ya tratados, con la decisión de cada uno en una línea y los que aún no tienen quién autorice el cambio.",
        "Agrega a la tabla para Planner una columna con el criterio de hecho de cada tarea, por ejemplo reserva actualizada y nota archivada.",
        "Prepara el borrador del acta en Word con las fichas por caso y los pendientes al final."
      ],
      verificar: [
        "Que las cifras de reserva dichas en voz alta se confirmen en el sistema, no en las notas.",
        "Que cada decisión tenga a quien autoriza y no únicamente a quien propone.",
        "Que todos los casos de la lista tengan ficha, incluso los que no se alcanzaron a tratar.",
        "Que las fechas de los pendientes sean días hábiles reales."
      ]
    },
    {
      necesidad: "Comité de recobros",
      titulo: "Facilitator en la reunión de recobros y subrogación",
      donde: "Chat de la reunión programada de Teams, antes de empezar con el primer recobro.",
      antes: "La reunión debe ser programada. Ten el listado de recobros en gestión con código anonimizado, tercero responsable genérico y fecha de pago de cada uno.",
      prompt: `ROL
Eres Facilitator, el asistente que acompaña la reunión quincenal de recobros y subrogación de Allianz Colombia.

CONTEXTO
Reunión programada de 40 minutos con el abogado de recobros, dos analistas y el líder de siniestros. Se revisa el avance de recuperación de siniestros ya pagados contra terceros y sus aseguradoras. Los datos están anonimizados. Lista: [REC-01 a REC-06, con tercero genérico y fecha de pago].

FUENTES
Usa solo lo dicho en la reunión y en el chat. No hagas cálculos de recuperación ni uses información de otros recobros.

INSTRUCCIÓN
1. Divide el tiempo así: 5 minutos de balance, 30 minutos para los 6 recobros a 5 minutos cada uno, 5 minutos de acuerdos. Avisa en el chat 1 minuto antes de cada cambio de caso.
2. Lleva las notas con esta estructura, que pego aquí: Recobro, Tercero, Etapa (reclamación, negociación, conciliación, proceso), Última actuación y fecha, Respuesta del tercero, Siguiente acción, Responsable, Fecha límite interna.
3. Etiqueta como DECISIÓN lo acordado, como RIESGO la proximidad de prescripción o la negativa del tercero, como PENDIENTE las tareas, como PREGUNTA ABIERTA y como SUPUESTO.
4. A los 20 minutos haz un recap de recobros revisados y los que aún faltan.
5. Al final entrega los acuerdos en 5 viñetas y una tabla para Planner.

FORMATO DE SALIDA
Tabla con una fila por recobro y las columnas de la estructura, resumen de 5 viñetas y tabla para Planner con tarea, responsable, fecha y prioridad. Ofrece un borrador en Word al final.

LÍMITES
No evalúes la probabilidad de recuperación ni propongas montos de acuerdo. Si no se dijo la fecha de la última actuación, escribe PENDIENTE. Marca [VERIFICAR] cualquier plazo de prescripción dicho de memoria.

CONTROL DE CALIDAD
Antes del cierre dime qué recobros no tuvieron siguiente acción con responsable y fecha, y qué supuestos quedaron sin soporte.`,
      seguimiento: [
        "Dame una lista de los recobros con riesgo de prescripción mencionado en la reunión, con la frase textual y quien la dijo.",
        "Reorganiza la tabla por etapa y deja arriba los recobros sin actuación reciente.",
        "Arma un borrador de acta en Word con tabla por recobro, acuerdos y tareas para Planner."
      ],
      verificar: [
        "Que los plazos de prescripción se confirmen con jurídico y no se tomen de la reunión.",
        "Que la etapa de cada recobro coincida con el sistema de recobros.",
        "Que cada siguiente acción tenga un responsable y no una dependencia ambigua.",
        "Que las respuestas atribuidas a terceros salgan de documentos y no de comentarios verbales."
      ]
    },
    {
      necesidad: "Auditoría de expedientes",
      titulo: "Facilitator en la reunión de hallazgos de auditoría",
      donde: "Chat de la reunión programada de Teams, antes de empezar a revisar los hallazgos.",
      antes: "La reunión debe ser programada. Ten el listado de hallazgos de auditoría de expedientes con código anonimizado y tipo de hallazgo.",
      prompt: `ROL
Eres Facilitator, el asistente que lleva el registro de la reunión de cierre de hallazgos de la auditoría de expedientes de siniestros.

CONTEXTO
Reunión programada de 45 minutos con el líder de siniestros, un auditor interno y tres ajustadores. Se revisan hallazgos de una muestra de expedientes como documentación incompleta, reserva sin actualizar, falta de carta de respuesta y demora en la gestión. Los datos están anonimizados. Lista de hallazgos: [H-01 a H-08 con expediente y tipo].

FUENTES
Usa solo lo que se diga en la reunión y el chat. No evalúes los expedientes por tu cuenta ni asumas el nivel de gravedad.

INSTRUCCIÓN
1. Reparte el tiempo en 5 minutos de contexto, 35 minutos para 8 hallazgos a 4 minutos cada uno y 5 minutos de plan de cierre. Avisa en el chat cuando falten 2 minutos de cada bloque.
2. Lleva las notas con esta estructura, que pego aquí: Hallazgo, Expediente, Tipo, Causa dicha en la reunión, Acción correctiva, Responsable, Fecha de corrección, Evidencia de cierre.
3. Etiqueta como DECISIÓN lo acordado, como RIESGO el hallazgo repetido o el que afecte un plazo con el asegurado, como PENDIENTE las acciones, como PREGUNTA ABIERTA y como SUPUESTO.
4. A los 25 minutos haz un recap de hallazgos tratados y los pendientes.
5. Al final entrega un resumen por tipo de hallazgo y la tabla para Planner.

FORMATO DE SALIDA
Tabla de hallazgos con las columnas de la estructura, un resumen de 5 viñetas por tipo de hallazgo y tabla para Planner con tarea, responsable, fecha y evidencia de cierre.

LÍMITES
No califiques la gravedad de un hallazgo si nadie la dijo. Si falta responsable o fecha, escribe PENDIENTE. Marca [VERIFICAR] los plazos internos o legales que se mencionen sin soporte.

CONTROL DE CALIDAD
Antes del cierre indica qué hallazgos quedaron sin evidencia de cierre definida y cuáles se repiten en más de un expediente.`,
      seguimiento: [
        "Agrupa los hallazgos tratados por tipo y cuenta cuántos hay de cada uno, con los códigos de expediente en la misma fila.",
        "Dame los hallazgos que quedaron sin responsable o sin fecha para pedirlos por chat antes de cerrar la reunión.",
        "Genera el borrador del informe de cierre en Word con la tabla de hallazgos, causas y acciones."
      ],
      verificar: [
        "Que cada hallazgo tratado coincida con el informe oficial de auditoría.",
        "Que las evidencias de cierre sean documentos concretos y no promesas.",
        "Que los hallazgos repetidos se confirmen revisando los expedientes, no el resumen.",
        "Que las fechas de corrección respeten los plazos que fije el área de auditoría."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Evento masivo",
      titulo: "Meta: atender el evento climático con reclamos masivos",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Adjunta el procedimiento de atención de eventos catastróficos y el listado de reclamos recibidos por zona, sin datos personales. Necesitas plan premium.",
      prompt: `ROL
Eres un coordinador de siniestros de Allianz Colombia que organiza la respuesta del equipo ante una ola de reclamos por un evento climático.

CONTEXTO
Objetivo: atender los reclamos por granizada en [ciudad] recibidos en las últimas 72 horas, con inspección, decisión y comunicación a cada asegurado dentro del plazo interno. Hay [120] reclamos en el listado, de los cuales [20] son de alta cuantía. Fecha de cierre del plan: [fecha]. Equipo: líder, 6 ajustadores, 2 peritos externos, analista de reservas y atención al cliente. Los datos están anonimizados.

FUENTES
Usa solo el procedimiento y el listado que adjunto. No uses normas ni plazos que no aparezcan en esos archivos.

INSTRUCCIÓN
1. Crea estos cubos: Recepción y clasificación, Inspección, Documentación pendiente, Reserva inicial, Decisión, Comunicación al asegurado, Casos escalados.
2. Crea una tarea por cada grupo de reclamos por zona, no una por reclamo. Cada tarea lleva máximo 3 subtareas.
3. Los reclamos de alta cuantía van en tareas separadas con prioridad alta y revisión del líder.
4. Asigna por rol, nunca con nombres propios: ajustador, perito, analista de reservas, líder, atención al cliente.
5. Usa fechas relativas al día cero del evento, por ejemplo día 3, día 10 y día 20.
6. Cada tarea termina con un criterio de hecho, por ejemplo «inspección registrada y reserva inicial cargada».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, fecha relativa, prioridad, subtareas y criterio de hecho.

LÍMITES
No calcules reservas ni indemnizaciones. No propongas rechazos. Si el procedimiento no define un plazo, escribe PENDIENTE y no lo inventes. Marca [VERIFICAR] cualquier plazo que no esté en los archivos.

CONTROL DE CALIDAD
Al final indica en qué parte del procedimiento se apoya cada plazo y cada prioridad, y qué no pudiste confirmar.`,
      seguimiento: [
        "Revisa el plan y dime qué zonas quedaron sin ajustador ni perito asignado y qué cubos tienen más de 10 tareas, para repartir mejor la carga.",
        "Genera el informe de estado para el líder con tareas completadas, en riesgo de plazo y decisiones que necesito esta semana.",
        "Respaldo para Copilot Chat: devuélveme una tabla con Cubo, Tarea, Rol, Fecha relativa, Prioridad y Criterio de hecho, lista para pegar en Planner."
      ],
      verificar: [
        "Que cada zona del listado tenga su tarea y no se haya duplicado ni omitido.",
        "Que los plazos coincidan con el procedimiento adjunto y no con suposiciones de Copilot.",
        "Que los reclamos de alta cuantía estén en tareas propias con revisión del líder.",
        "Que ningún responsable sea un nombre propio y no se hayan añadido montos."
      ]
    },
    {
      necesidad: "Cierre de auditoría",
      titulo: "Meta: cerrar los hallazgos de la auditoría de expedientes",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Adjunta el informe de auditoría con los hallazgos por expediente (anonimizados) y la política interna de documentación del expediente. Necesitas plan premium.",
      prompt: `ROL
Eres un analista de calidad de siniestros de Allianz Colombia que debe convertir un informe de auditoría en un plan de corrección.

CONTEXTO
Objetivo: cerrar los [24] hallazgos de la auditoría de expedientes de siniestros del trimestre antes del [fecha], con evidencia de cierre para cada uno. Los tipos de hallazgo son documentación incompleta, reserva sin actualizar, carta de respuesta ausente, demora en peritaje y datos incorrectos en el sistema. Los datos están anonimizados. Equipo: líder, ajustadores, analista de reservas y asistente de archivo.

FUENTES
Usa solo el informe y la política que adjunto. No uses otros criterios de auditoría ni normas.

INSTRUCCIÓN
1. Crea un cubo por tipo de hallazgo y un cubo final llamado Verificación de cierre.
2. Crea una tarea por hallazgo con el código del expediente de ejemplo en el título y máximo 2 subtareas, una de corrección y una de evidencia.
3. Asigna por rol: ajustador, analista de reservas, asistente de archivo, líder. Sin nombres propios.
4. Prioridad alta si el informe lo califica crítico o si afecta un plazo con el asegurado. Media si es documental. Baja si es de forma.
5. Fechas relativas al día de entrega del informe, por ejemplo día 5, día 15 y día 30.
6. Cada tarea termina con un criterio de hecho, por ejemplo «documento cargado al expediente y revisado por el líder».
7. En el cubo final crea una tarea para presentar al auditor las evidencias de cierre.

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No cambies la calificación de los hallazgos. No evalúes el contenido de los expedientes. Si el informe no trae responsable, escribe PENDIENTE. Marca [VERIFICAR] los plazos que no estén en la política.

CONTROL DE CALIDAD
Al final indica en qué página del informe se apoya cada prioridad y qué hallazgos no pudiste ubicar.`,
      seguimiento: [
        "Revisa el plan y dime qué hallazgos críticos no tienen tarea ni evidencia de cierre definida.",
        "Genera un informe de estado con hallazgos cerrados, en curso y vencidos, agrupados por tipo y con el responsable por rol.",
        "Respaldo para Copilot Chat: devuélveme una tabla con Cubo, Hallazgo, Tarea, Rol, Fecha relativa, Prioridad y Evidencia de cierre."
      ],
      verificar: [
        "Que los 24 hallazgos del informe tengan tarea, sin duplicados.",
        "Que las prioridades altas correspondan a hallazgos que el informe califica como críticos.",
        "Que cada criterio de hecho sea una evidencia que el auditor pueda revisar.",
        "Que los plazos no contradigan los fijados por el área de auditoría."
      ]
    },
    {
      necesidad: "Estado de recobros",
      titulo: "Revisar el plan de recobros y generar el informe de estado",
      donde: "Planner, plan de recobros ya creado, con el agente de revisión y de informe de estado.",
      antes: "Ten un plan de Planner de recobros con tareas ya creadas, una por caso, y el listado de fechas de pago anonimizado. Necesitas plan premium.",
      prompt: `ROL
Eres un analista de recobros y subrogación de Allianz Colombia que prepara el reporte de estado del plan para el líder de siniestros.

CONTEXTO
Mi plan de Planner tiene [18] tareas de recobro, una por siniestro pagado, con responsable y fecha. Los datos están anonimizados. Los recobros pasan por reclamación, negociación, conciliación y proceso. Algunos están cerca de cumplir el plazo interno de gestión y otros llevan semanas sin actuación.

FUENTES
Usa solo las tareas, subtareas, comentarios y fechas del plan abierto y el archivo de fechas de pago que adjunto. No uses información fuera del plan. No leas reuniones ni chats.

INSTRUCCIÓN
1. Revisa el plan y lista las tareas sin responsable, sin fecha o vencidas, con el cubo donde están.
2. Identifica las tareas sin actualización en los últimos 15 días y propón una acción para cada una, de máximo 20 palabras.
3. Agrupa los recobros por etapa y calcula cuántos hay en cada una.
4. Señala tareas con fecha de pago de hace más de [24 meses] según el archivo adjunto y márcalas como RIESGO DE PRESCRIPCIÓN [VERIFICAR].
5. Redacta el informe de estado de máximo 250 palabras para el líder: avance, riesgos, cuellos de botella por rol y 3 decisiones que debe tomar esta semana.

FORMATO DE SALIDA
Tabla de tareas con problema, tabla de recobros por etapa, lista de acciones y el informe de estado en párrafos cortos con subtítulos.

LÍMITES
No evalúes la recuperación esperada ni propongas montos. No cambies fechas ni responsables, solo recomienda. Si el plan no trae un dato, escribe PENDIENTE. Marca [SUPUESTO] cualquier inferencia.

CONTROL DE CALIDAD
Al final indica en qué tareas o comentarios se apoya cada riesgo y qué datos no encontraste en el plan.`,
      seguimiento: [
        "Reduce el informe a 120 palabras para el comité, con solo los 3 recobros de mayor riesgo y la decisión pedida en cada uno.",
        "Dame una lista de tareas que debería reasignar porque el mismo rol tiene más de 5 vencidas.",
        "Propón qué tareas del plan puedo cerrar esta semana según los comentarios y cuáles dependen de un tercero."
      ],
      verificar: [
        "Cada recobro marcado de prescripción contra el término confirmado por jurídico y la fecha real del pago.",
        "Que la etapa asignada a cada tarea coincida con el sistema de recobros.",
        "Que las acciones propuestas no sustituyan decisiones del abogado.",
        "Que el informe no incluya cifras ni nombres ajenos al plan."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Visita de inspección",
      titulo: "Notas de la visita de inspección a informe de campo",
      donde: "OneNote, página con las notas de la visita, panel de chat de Copilot.",
      antes: "Escribe o pega en la página tus apuntes de la inspección, aunque estén desordenados. Reemplaza nombres y direcciones por códigos de ejemplo.",
      prompt: `ROL
Eres un ajustador de siniestros de Allianz Colombia que convierte sus apuntes de campo en un informe de visita ordenado.

CONTEXTO
Estas notas son de la inspección del siniestro [SIN-0540], un incendio parcial en una bodega de [ramo]. Incluyen lo que observé, lo que dijo el asegurado, medidas, fotos tomadas y cosas por pedir. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa únicamente el texto de esta página. No consultes otras páginas del cuaderno ni asumas condiciones de la póliza. No agregues causas del incendio que no estén escritas.

INSTRUCCIÓN
1. Separa las notas en estos bloques: Datos de la visita (fecha, hora, asistentes), Descripción del lugar, Daños observados, Declaración del asegurado, Medidas de seguridad existentes, Evidencias tomadas y Documentos solicitados.
2. Marca cada afirmación como OBSERVADO (lo vi), DECLARADO (me lo dijeron) o SUPUESTO (lo deduje).
3. Detecta contradicciones entre lo observado y lo declarado, y lístalas en una tabla de 3 columnas: tema, observado, declarado.
4. Lista las fotos o evidencias mencionadas con su descripción de una línea.
5. Extrae los pendientes con responsable y fecha. Si no hay, escribe PENDIENTE.
6. Deja la página limpia con las secciones indicadas y un resumen de 5 líneas al inicio.

FORMATO DE SALIDA
Página reorganizada con subtítulos, resumen inicial, tabla de contradicciones y lista de pendientes en casillas.

LÍMITES
No definas la causa del siniestro ni la cobertura. No estimes pérdidas ni reservas. Si un dato aparece dos veces con valores distintos, no elijas, muéstralos ambos con [VERIFICAR]. Mantén las citas del asegurado textuales y entre comillas simples.

CONTROL DE CALIDAD
Al final indica qué bloques quedaron vacíos porque no hay información en la página y qué datos de la visita faltan para el informe.`,
      seguimiento: [
        "Dame solo la tabla de contradicciones entre lo observado y lo declarado, y qué prueba haría falta para aclarar cada una.",
        "Redacta la sección Descripción del lugar en un párrafo de 100 palabras, con tono técnico, usando solo lo observado.",
        "Convierte los documentos solicitados en una lista de casillas con fecha límite y quién debe entregarlos."
      ],
      verificar: [
        "Que las medidas y los datos del lugar coincidan con lo que anotaste en campo y con las fotos.",
        "Que lo marcado como DECLARADO no se haya convertido en hecho en el informe.",
        "Que las citas del asegurado sean fieles a tus apuntes.",
        "Que el informe final no incluya causas que no hayas visto."
      ]
    },
    {
      necesidad: "Llamada con el asegurado",
      titulo: "Notas de llamadas con el asegurado a registro de compromisos",
      donde: "OneNote, página donde anotas las llamadas del caso, panel de chat de Copilot.",
      antes: "Ten tus apuntes de las últimas llamadas sobre un mismo reclamo en una sola página, con fecha de cada llamada. Usa un código en lugar del nombre del asegurado.",
      prompt: `ROL
Eres un analista de atención de siniestros de Allianz Colombia que lleva la bitácora de comunicación de un reclamo sensible.

CONTEXTO
Esta página reúne mis notas de [5] llamadas con el asegurado del siniestro [SIN-0388], un reclamo de [ramo] que lleva más de 40 días y con tono de molestia creciente. Las notas son rápidas e incompletas. Los datos están anonimizados.

FUENTES
Usa únicamente el texto de esta página. No consultes otras páginas, correos ni el sistema de siniestros. No completes datos que falten.

INSTRUCCIÓN
1. Ordena las llamadas por fecha y resume cada una en máximo 3 líneas: qué pidió el asegurado, qué respondí y qué me comprometí a hacer.
2. Extrae todos los compromisos míos con fecha prometida y marca cuáles ya vencieron según la fecha de hoy [fecha].
3. Extrae lo que el asegurado dijo que enviará o hará, con fecha, y marca lo que no consta como recibido.
4. Detecta cambios de tono o amenazas de queja, escalamiento o acción legal, y cítalas con fecha.
5. Identifica promesas que pudieron ser ambiguas, como «le respondo pronto», y propón una fecha concreta para cada una.
6. Redacta el guion de la próxima llamada: 4 puntos, con apertura, avance real, lo que falta y compromiso nuevo con fecha.

FORMATO DE SALIDA
Cronología de llamadas, tabla de compromisos de 4 columnas (compromiso, quién, fecha, estado), lista de alertas y guion de la próxima llamada.

LÍMITES
No prometas pagos, plazos de decisión ni resultados. No valores si el reclamo procede. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] cualquier plazo mencionado. Si falta una fecha, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final indica qué llamadas tienen notas incompletas y qué compromisos no pudiste ubicar.`,
      seguimiento: [
        "Reescribe el guion de la próxima llamada con un tono más empático y sin prometer fechas que no dependan de mí.",
        "Dame un resumen del reclamo en 60 palabras para el líder, con tono neutral y las alertas de escalamiento.",
        "Pasa los compromisos vencidos a una lista de casillas con una acción concreta para hoy."
      ],
      verificar: [
        "Que las fechas de las llamadas y de los compromisos coincidan con tu agenda o el sistema de llamadas.",
        "Que lo atribuido al asegurado sea lo que dijo y no lo que interpretaste.",
        "Que el guion no prometa nada que no se pueda cumplir.",
        "Que las alertas de queja o acción legal se escalen a la persona indicada."
      ]
    },
    {
      necesidad: "Cuaderno de recobros",
      titulo: "Resumir la sección de recobros del cuaderno por etapa",
      donde: "OneNote, sección del cuaderno con varias páginas de recobros, panel de chat de Copilot.",
      antes: "Abre la sección donde llevas los recobros, una página por caso. Verifica que los casos tengan código anonimizado y no nombres de terceros.",
      prompt: `ROL
Eres un analista de recobros y subrogación de Allianz Colombia que prepara el resumen mensual de su cuaderno para el líder de siniestros.

CONTEXTO
Esta sección de OneNote tiene una página por recobro, con notas de llamadas, correos copiados y fechas de gestión. Hay entre 8 y 15 casos. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa únicamente las páginas de esta sección. No consultes otras secciones ni cuadernos. No uses normas ni jurisprudencia.

INSTRUCCIÓN
1. Por cada página extrae: código del recobro, fecha de pago del siniestro, tercero o aseguradora (genérico), etapa actual, última actuación con fecha y siguiente acción.
2. Agrupa los casos por etapa: reclamación, negociación, conciliación, proceso.
3. Señala los casos sin actuación en más de 30 días.
4. Separa en cada caso lo DECIDIDO (una oferta aceptada, una fecha fijada) de lo SUGERIDO (ideas de estrategia sin decisión).
5. Detecta contradicciones entre páginas, por ejemplo dos fechas de pago distintas, y huecos, como una página sin siguiente acción.
6. Escribe un resumen de 8 líneas para el líder con avance por etapa, casos críticos y decisiones pendientes.

FORMATO DE SALIDA
Una tabla con una fila por recobro y 6 columnas (código, etapa, última actuación, días sin movimiento, siguiente acción, alerta), seguida de las contradicciones y el resumen.

LÍMITES
No estimes probabilidad ni monto de recuperación. No propongas acuerdos. Si una página no tiene un dato, escribe PENDIENTE. Marca [VERIFICAR] los plazos de prescripción o caducidad escritos sin soporte.

CONTROL DE CALIDAD
Al final indica qué páginas usaste para cada fila, qué páginas no pudiste leer y qué datos faltan en el cuaderno.`,
      seguimiento: [
        "Ordena la tabla por días sin movimiento, de mayor a menor, y deja arriba los que tengan alerta de plazo.",
        "Dame el resumen en 100 palabras listo para pegar en el correo semanal al líder.",
        "Crea una página nueva con solo las acciones de la semana, con casillas, responsable y fecha."
      ],
      verificar: [
        "Que la etapa de cada recobro coincida con la última actuación registrada en el sistema.",
        "Que los días sin movimiento se calculen con la fecha de hoy y no con la del último resumen.",
        "Que lo marcado como DECIDIDO tenga soporte escrito en la página.",
        "Que los plazos de prescripción los confirme jurídico antes de actuar."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Carta de objeción",
      titulo: "Borrador de carta de objeción al asegurado para revisión jurídica",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta la póliza anonimizada y el informe del ajustador.",
      antes: "Ten la decisión de objetar ya tomada por quien la debe aprobar. Reúne la cláusula que sustenta la objeción y los hechos del informe del ajustador, ambos anonimizados.",
      prompt: `ROL
Eres un abogado de siniestros de Allianz Colombia con experiencia en comunicaciones a asegurados en ramos patrimoniales.

OBJETIVO
Redactar un borrador de carta de objeción para el siniestro [SIN-0714], que será revisado por el área jurídica antes de enviarse. Debe ser clara para una persona sin formación legal.

CONTEXTO
La aseguradora decidió objetar el reclamo por [motivo, por ejemplo exclusión por mantenimiento inadecuado]. El asegurado es una empresa mediana. Los datos están anonimizados. Tono: respetuoso, claro y sin lenguaje defensivo.

FUENTES
Usa solo la póliza y el informe del ajustador adjuntos y lo que pego aquí: [hechos y cláusula]. No cites normas ni jurisprudencia. No agregues argumentos nuevos.

INSTRUCCIÓN
1. Redacta la carta con esta estructura: saludo, referencia del siniestro, resumen del reclamo en 3 líneas, hechos verificados en viñetas, cláusula aplicable citada textualmente, explicación en lenguaje sencillo de por qué aplica, decisión, derechos y pasos que tiene el asegurado, datos de contacto y cierre.
2. Mantén la carta entre 350 y 450 palabras.
3. Separa en una lista aparte las frases que dependen de un dato que debe verificar el ajustador.
4. Señala cualquier hecho que el informe no soporta con documento y márcalo [VERIFICAR].
5. Dame 3 preguntas que el área jurídica debería hacerse antes de aprobar el texto.

FORMATO DE SALIDA
Carta lista para revisión, luego lista de frases por verificar y las 3 preguntas.

LÍMITES
No concluyas sobre cobertura más allá de lo que dice la cláusula. No prometas reconsideraciones ni plazos. Marca [SUPUESTO] lo que dedujiste. Deja los plazos legales como [PENDIENTE: confirmar con jurídico]. No uses frases intimidatorias.

CONTROL DE CALIDAD
Al final indica qué frase de la carta se apoya en qué parte del informe o de la póliza, y qué dato no pudiste confirmar.`,
      seguimiento: [
        "Reescribe la sección de explicación en un párrafo de 90 palabras, para alguien que no conoce términos de seguros.",
        "Dame una versión de la carta de 200 palabras para el corredor, sin entrar al detalle de la cláusula.",
        "Revisa la carta y señala las frases que podrían leerse como una promesa o como un tono defensivo, con una alternativa para cada una."
      ],
      verificar: [
        "La cláusula citada contra el texto de la póliza vigente a la fecha del siniestro.",
        "Cada hecho de la carta contra el informe del ajustador y los documentos del expediente.",
        "El plazo y la forma de envío con el área jurídica antes de firmar.",
        "Que la carta no revele datos de otros asegurados ni recomendaciones internas."
      ]
    },
    {
      necesidad: "Correo por demora",
      titulo: "Correo a un corredor por un reclamo con demora",
      donde: "Copilot Chat, pestaña Trabajo, para redactar. Luego revisa y envía desde tu correo.",
      antes: "Reúne la línea de tiempo del reclamo con fechas reales, el motivo interno de la demora que se puede compartir y la fecha realista de siguiente paso.",
      prompt: `ROL
Eres un jefe de servicio de siniestros de Allianz Colombia, con experiencia en comunicación con corredores que presionan por respuestas.

OBJETIVO
Escribir un correo al corredor [nombre genérico] sobre el reclamo [SIN-0291], que lleva [45] días sin definición. Debe bajar la tensión, explicar lo que pasa y dejar un compromiso verificable.

CONTEXTO
El corredor escribió molesto porque su cliente, una empresa de transporte, espera respuesta desde hace semanas. La demora vino de [motivo compartible, por ejemplo espera del informe del perito]. Los datos están anonimizados. Mi límite es no comprometer el sentido de la decisión.

FUENTES
Usa solo la línea de tiempo y el correo del corredor que pego aquí: [pega los hechos]. No uses información de otros reclamos ni promesas que no figuren en lo que te doy.

INSTRUCCIÓN
1. Redacta un correo de máximo 180 palabras con asunto, saludo, reconocimiento de la molestia sin excusas, línea de tiempo en 3 hitos, estado actual, siguiente paso con fecha [fecha] y compromiso de actualización.
2. Escribe 2 versiones de asunto.
3. Escribe una versión alternativa de 100 palabras para enviar por chat o mensaje corto.
4. Lista 3 respuestas posibles del corredor y cómo contestarías cada una en una frase.
5. Señala qué frases podrían leerse como promesa de pago y propón cómo reescribirlas.

FORMATO DE SALIDA
Asuntos, correo, versión corta, tabla de 2 columnas (respuesta del corredor, cómo contestar) y la lista de frases a revisar.

LÍMITES
No prometas pago, plazos de decisión ni resultados. No culpes a otra área ni al perito. Marca [SUPUESTO] lo que dedujiste y [VERIFICAR] cualquier fecha que no esté en la línea de tiempo.

CONTROL DE CALIDAD
Al final dime qué dato del correo sale de lo que pegué y qué no pudiste confirmar. Revisa que el tono no sea defensivo.`,
      seguimiento: [
        "Reescribe el correo en un tono más cercano y deja solo una petición clara al final.",
        "Dame una versión que pueda enviar con copia al director comercial, más formal y con la misma información.",
        "Sugiere 3 puntos para una llamada de 10 minutos con el corredor sobre este reclamo, sin prometer fechas de decisión."
      ],
      verificar: [
        "Cada fecha y hito contra el sistema de siniestros antes de enviar.",
        "Que el motivo de la demora se pueda compartir con el corredor.",
        "Que ninguna frase suene a promesa de pago o de resultado.",
        "Que el correo no incluya datos personales del asegurado más allá de los necesarios."
      ]
    },
    {
      necesidad: "Auditoría de expediente",
      titulo: "Revisión de un expediente de siniestro contra lista de control",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta el índice o resumen del expediente y la lista de control interna.",
      antes: "Ten el índice del expediente anonimizado, con la lista de documentos y fechas, y la lista de control de calidad que usa el área de siniestros.",
      prompt: `ROL
Eres un auditor de calidad de siniestros de Allianz Colombia, con experiencia en revisión de expedientes de seguros generales.

OBJETIVO
Revisar el expediente del siniestro [SIN-0455] contra la lista de control y decir qué cumple, qué falta y qué debe corregirse antes del cierre.

CONTEXTO
El expediente es de un reclamo de [ramo] pagado parcialmente y con una objeción parcial. Será revisado por el líder de siniestros y puede entrar a una muestra de auditoría. Los datos están anonimizados. Fecha de revisión: [fecha].

FUENTES
Usa solo el índice del expediente y la lista de control que adjunto. No uses otros expedientes ni criterios que no estén en la lista. No evalúes la decisión de cobertura.

INSTRUCCIÓN
1. Recorre cada punto de la lista de control y marca CUMPLE, NO CUMPLE o NO SE PUEDE VERIFICAR, con el documento o la fecha que lo soporta.
2. Revisa la secuencia de fechas, desde aviso hasta decisión, y señala saltos de más de [10] días sin gestión registrada.
3. Verifica que cada pago, reserva y decisión tenga su soporte documental indicado en el índice.
4. Lista los hallazgos en una tabla con punto, gravedad (alta, media, baja según la lista), evidencia y acción correctiva sugerida de máximo 20 palabras.
5. Escribe una conclusión de 5 líneas para el líder: estado del expediente, hallazgos críticos y qué corregir primero.

FORMATO DE SALIDA
Tabla de lista de control con estado y soporte, tabla de hallazgos de 5 columnas, y la conclusión.

LÍMITES
No califiques por tu cuenta lo que la lista no califica. No cambies la decisión del caso. Si un documento no aparece en el índice, escribe PENDIENTE. Marca [SUPUESTO] cuando infieras y [VERIFICAR] cuando la fecha o dato no sea claro.

CONTROL DE CALIDAD
Al final indica qué puntos de la lista no pudiste revisar por falta de información y qué documentos habría que abrir directamente.`,
      seguimiento: [
        "Dame solo los hallazgos de gravedad alta y la acción para corregirlos esta semana, con rol responsable.",
        "Redacta una nota de 100 palabras para el ajustador con los hallazgos, en tono constructivo y sin juicios.",
        "Compara este resultado con una segunda revisión que pegaré y dime en qué puntos difieren."
      ],
      verificar: [
        "Que los documentos marcados CUMPLE estén de verdad en el expediente y no apenas listados en el índice.",
        "Que las fechas de la secuencia coincidan con el sistema de siniestros.",
        "Que la gravedad de cada hallazgo corresponda a la escala oficial de la lista de control.",
        "Que las acciones correctivas las valide el líder antes de comunicarlas."
      ]
    }
  ]
};
