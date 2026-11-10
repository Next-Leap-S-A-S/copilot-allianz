const MAS_SERVICIO = {
  "teams-chats": [
    {
      necesidad: "Escalar un caso a siniestros",
      titulo: "Hilo de un reclamo detenido: resumen y mensaje de escalamiento",
      donde: "Panel de Copilot dentro del canal donde servicio y siniestros comentan el caso, y Copilot Chat para buscar menciones en otros chats.",
      antes: "Ubica el hilo del caso y verifica que supere 1.000 caracteres. Ten el código anonimizado del caso y la fecha en que necesitas respuesta.",
      prompt: `ROL
Eres un asistente de un líder de servicio al cliente de Allianz Colombia. Piensas como quien necesita que otra área responda rápido y con datos completos.

CONTEXTO
En el canal [nombre del canal] servicio al cliente y siniestros comentan un reclamo detenido. El cliente ya llamó [número] veces y la respuesta pasa de un área a otra. Los datos están anonimizados y el caso se identifica solo con el código [CASO-014]. Necesito escalarlo hoy al coordinador de siniestros sin que tenga que leer todo el hilo.

FUENTES
Usa solo los mensajes del hilo sobre [CASO-014] y mis chats y canales de los últimos 30 días para buscar menciones del código. No leas imágenes, Loop ni archivos compartidos, como capturas del reclamo o el correo del cliente. No uses datos de internet.

INSTRUCCIÓN
1. Resume el hilo en máximo 6 líneas: qué pidió el cliente, qué se ha respondido y qué falta.
2. Arma una línea de tiempo con fecha, quién dijo qué y resultado.
3. Identifica qué información le falta a siniestros para decidir, por ejemplo documentos, estado de la revisión o responsable actual.
4. Busca en mis chats si alguien ya prometió una fecha o una respuesta y cítalo con la fuente.
5. Redacta el mensaje de escalamiento para el coordinador de siniestros, directo y cordial, con la petición concreta y la fecha en que necesito respuesta: [fecha].
6. Redacta una versión en inglés de máximo 60 palabras para el equipo regional que apoya el caso.

FORMATO DE SALIDA
Resumen de 6 líneas, tabla de 3 columnas (fecha, quién, resultado), lista de máximo 4 faltantes, mensaje en español de máximo 110 palabras y versión en inglés.

LÍMITES
No cuentes mensajes que no veas. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] cualquier fecha prometida sin fuente. Escribe PENDIENTE si no hay responsable actual. No prometas pagos ni plazos legales y no incluyas datos personales.

CONTROL DE CALIDAD
Al final indica en qué mensajes se apoya cada fecha y cada faltante, y qué no pudiste confirmar.`,
      seguimiento: [
        "Reescribe el mensaje de escalamiento en 70 palabras, con la petición en la primera frase y la fecha límite en la última. Mantén el tono cordial y no agregues datos nuevos.",
        "Dime quién del hilo tiene hoy la pelota del caso, desde qué fecha y qué le falta para responder. Si no se dijo en los mensajes, respóndeme PENDIENTE.",
        "Busca en mis chats de las últimas dos semanas otros casos que mencionen la misma demora en siniestros y lístalos por código con la fuente, sin datos personales."
      ],
      verificar: [
        "Que la línea de tiempo coincida con las fechas del hilo y no con deducciones de Copilot.",
        "Que ninguna fecha prometida al cliente se cite sin el mensaje que la respalda.",
        "Que no se hayan perdido datos de capturas o adjuntos, que Copilot no lee.",
        "Que el mensaje no incluya nombres, cédulas ni números de póliza reales antes de enviarlo."
      ]
    },
    {
      necesidad: "Priorizar la bandeja del turno",
      titulo: "Chat del turno: qué atender primero según plazo y riesgo",
      donde: "Copilot Chat, pestaña Trabajo, o panel de Copilot en el chat del turno del contact center.",
      antes: "Ten claro el criterio de prioridad de tu área y los plazos internos de respuesta. Revisa que el chat no tenga datos de clientes.",
      prompt: `ROL
Eres un asistente de un jefe de turno del contact center de una aseguradora. Piensas en plazos de respuesta, riesgo de queja ante la Superintendencia y carga del equipo.

CONTEXTO
Empiezo el turno y tengo mensajes sin leer en el chat [nombre del chat] y en el canal [nombre del canal]. Allí los asesores reportan casos con códigos anonimizados, por ejemplo [PQR-2201], y piden ayuda. Los datos están anonimizados. Necesito decidir en 10 minutos qué se atiende primero.

FUENTES
Usa solo los mensajes sin leer de los últimos [7 o 30] días de estos chats y canales. No leas imágenes, Loop ni archivos compartidos, como pantallazos del sistema de PQR. No uses plazos de memoria. Los plazos que valen son estos: [pega aquí los plazos internos por tipo de caso].

INSTRUCCIÓN
1. Lista cada caso mencionado con su código, motivo y último mensaje.
2. Clasifica así: URGENTE si el plazo vence en menos de 2 días hábiles o el cliente amenaza con escalar, ALTA si tiene más de 2 reiteraciones, NORMAL en los demás.
3. Señala los casos que nadie ha tomado y los que tienen dos responsables.
4. Lista las preguntas que me hicieron a mí y quién espera mi respuesta.
5. Propone un orden de atención para las próximas 4 horas, con el motivo de cada posición.
6. Redacta un mensaje corto para el canal con el reparto de casos por asesor, sin inventar asignaciones que no estén en los mensajes.

FORMATO DE SALIDA
Tabla con columnas: código, motivo, prioridad, responsable, por qué. Luego 5 viñetas de mis pendientes y el mensaje para el canal de máximo 80 palabras.

LÍMITES
No cuentes casos que no veas. Marca [SUPUESTO] cada prioridad que dependa de un plazo no dicho y [VERIFICAR] los conteos. Escribe PENDIENTE si falta responsable. No incluyas datos personales.

CONTROL DE CALIDAD
Al final indica en qué mensaje se apoya cada prioridad y qué casos no pudiste clasificar.`,
      seguimiento: [
        "Dame solo los casos URGENTE con su código, el plazo que tienen y quién los lleva. Si el plazo no se dijo en los mensajes, escribe PENDIENTE en esa celda.",
        "Redacta un mensaje de 60 palabras para el asesor que tiene más casos urgentes, pidiéndole que me avise si necesita apoyo. Tono de equipo, sin reproches.",
        "Prepara un cierre de turno de 5 viñetas con casos resueltos, casos que pasan al siguiente turno y riesgos. Usa solo lo que aparece en los mensajes."
      ],
      verificar: [
        "Que los casos urgentes realmente tengan el plazo que Copilot dice, contra el sistema de PQR.",
        "Que no falten casos que se reportaron en capturas o archivos, que Copilot no lee.",
        "Que la asignación propuesta respete la carga real de cada asesor.",
        "Que el mensaje al canal no traiga datos de clientes."
      ]
    },
    {
      necesidad: "Armar preguntas frecuentes",
      titulo: "Preguntas repetidas de los asesores y borrador de respuestas",
      donde: "Copilot Chat, pestaña Trabajo, para buscar en chats y canales, y panel de Copilot en el canal de consultas del equipo.",
      antes: "Escoge un tema, por ejemplo cancelación de póliza o cobro de prima. Ten a mano el procedimiento oficial para contrastar las respuestas.",
      prompt: `ROL
Eres un asistente de un líder de servicio al cliente de Allianz Colombia que mantiene la base de preguntas frecuentes del equipo.

CONTEXTO
En el canal [nombre del canal] los asesores preguntan una y otra vez cosas sobre [tema, por ejemplo cancelación de una póliza o cobro de prima]. Quiero convertir esas dudas en una base de preguntas frecuentes. Los datos están anonimizados y no hay nombres de clientes ni números de póliza.

FUENTES
Usa solo los mensajes de este canal y de mis chats de los últimos 30 días que hablen de [tema]. No leas imágenes, Loop ni archivos compartidos. No inventes reglas de negocio. Para las respuestas usa solo lo que alguien con autoridad dijo en los mensajes o lo que pego aquí: [pega el párrafo del procedimiento oficial].

INSTRUCCIÓN
1. Busca las preguntas sobre [tema] y agrúpalas por duda de fondo, no por redacción.
2. Cuenta cuántas veces apareció cada duda y en cuántos días distintos.
3. Escoge las 8 más repetidas.
4. Para cada una redacta una respuesta de máximo 45 palabras, en lenguaje claro para el cliente, solo si hay una respuesta respaldada en los mensajes o en el procedimiento.
5. Si la respuesta que dieron los compañeros se contradice, muestra las dos versiones y escribe PENDIENTE.
6. Redacta un mensaje de 70 palabras para el canal anunciando que la base de preguntas frecuentes se está armando y pidiendo que la revisen.

FORMATO DE SALIDA
Tabla con columnas: número, pregunta, veces, respuesta propuesta, fuente, estado (confirmada o PENDIENTE). Luego el mensaje para el canal.

LÍMITES
No completes respuestas con conocimiento propio. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] cualquier plazo, valor o condición de cobertura. No incluyas datos personales.

CONTROL DE CALIDAD
Al final indica en qué mensajes se apoya cada respuesta y qué preguntas no pudiste responder con respaldo.`,
      seguimiento: [
        "Reescribe las respuestas 1 a 3 en un tono más cercano para el cliente, máximo 35 palabras cada una, sin cambiar ninguna condición ni plazo. Mantén VERIFICAR donde estaba.",
        "Dame las preguntas con estado PENDIENTE y dime quién del canal podría confirmarlas, según quién respondió antes sobre ese tema. Si no hay evidencia, escribe PENDIENTE.",
        "Traduce al inglés las 3 preguntas más repetidas con su respuesta, para el equipo de soporte regional. Mantén las marcas VERIFICAR."
      ],
      verificar: [
        "Que cada respuesta coincida con el procedimiento oficial y no con lo que dijo un compañero.",
        "Que los conteos de veces coincidan con lo que ves en el canal.",
        "Que ninguna respuesta prometa un plazo, un valor o una cobertura sin fuente.",
        "Que los ejemplos no incluyan datos de clientes."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Caso complejo con siniestros",
      titulo: "Reunión de escalamiento de un reclamo complejo: compromisos con evidencia",
      donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la reunión terminada, o en vivo para preguntas.",
      antes: "Verifica que la transcripción estuvo activada. Ten el código anonimizado del caso y la fecha del reclamo original.",
      prompt: `ROL
Eres un líder de servicio al cliente de una aseguradora con experiencia en casos que cruzan servicio, siniestros y jurídico.

CONTEXTO
Terminó la reunión donde servicio al cliente, siniestros y jurídico revisaron el caso anonimizado [CASO-031], un reclamo con más de [número] contactos y riesgo de queja ante la Superintendencia. Necesito dejar claro quién se comprometió a qué frente al cliente y para cuándo. Los datos están anonimizados.

FUENTES
Usa solo la transcripción de esta reunión. No uses el sistema de PQR, correos ni el expediente del siniestro. No agregues hechos que nadie dijo.

INSTRUCCIÓN
1. Resume en 5 líneas el estado del caso tal como se describió en la reunión.
2. Lista cada compromiso con la persona que lo asumió, el área, la fecha y una cita corta de la transcripción.
3. Separa lo que se decidió de lo que solo se propuso.
4. Señala quién dijo qué sobre la causa del retraso y marca los puntos donde las áreas no coinciden.
5. Lista lo que falta para responder al cliente: documentos, aprobaciones, validaciones.
6. Redacta un resumen de 6 líneas para el director de servicio que no asistió, con una sola petición de decisión al final.

FORMATO DE SALIDA
Resumen de 5 líneas, tabla de 5 columnas (compromiso, responsable, área, fecha, cita), dos listas cortas (decidido y propuesto), faltantes en viñetas y resumen para el director.

LÍMITES
Si no hay responsable o fecha, escribe PENDIENTE. No inventes plazos legales ni montos. Marca [VERIFICAR] lo que se dijo sin soporte y [SUPUESTO] lo que deduzcas. No califiques a las personas.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción se apoya cada compromiso y qué no pudiste confirmar.`,
      seguimiento: [
        "Durante la reunión: ¿qué se ha comprometido hasta ahora con el cliente y quién lo asumió? Dame máximo 5 viñetas y escribe PENDIENTE donde no haya fecha.",
        "Durante la reunión: ¿qué dijo siniestros sobre la causa del retraso y qué respondió servicio? Resume las dos posiciones en 4 líneas con cita corta.",
        "Con la reunión terminada, redacta un borrador de 120 palabras para informar al cliente solo lo que quedó comprometido, sin prometer nada que la transcripción no respalde."
      ],
      verificar: [
        "Que cada compromiso tenga una cita real de la transcripción y no una paráfrasis dudosa.",
        "Que lo propuesto no se haya presentado como decidido.",
        "Que las fechas coincidan con lo dicho y no con una suposición de Copilot.",
        "Que el resumen para el director no incluya datos personales del cliente."
      ]
    },
    {
      necesidad: "Capacitación al equipo",
      titulo: "Sesión de capacitación: puntos clave, dudas y repaso para quien faltó",
      donde: "Panel de Copilot de la reunión con la sesión terminada, o durante la sesión para preguntas rápidas.",
      antes: "Verifica que la transcripción estuvo activada. Ten el tema de la sesión y el procedimiento o guion que se enseñó.",
      prompt: `ROL
Eres un capacitador de servicio al cliente de una aseguradora que convierte una sesión grabada en material de repaso para asesores.

CONTEXTO
Terminó la sesión de capacitación sobre [tema, por ejemplo manejo de una queja por demora en un pago]. Asistieron asesores del contact center y de la oficina. Algunos no pudieron conectarse y deben ponerse al día. Los casos que se mencionaron están anonimizados y se nombran por código.

FUENTES
Usa solo la transcripción de esta reunión. No uses la presentación, el manual ni el procedimiento. No completes pasos que el capacitador no dijo.

INSTRUCCIÓN
1. Resume la sesión en 8 puntos clave, en orden de aparición.
2. Extrae el paso a paso que se enseñó, numerado, con la frase del capacitador como respaldo.
3. Lista las frases modelo que se recomendaron para hablar con el cliente y las que se pidió evitar.
4. Lista las preguntas de los asistentes y la respuesta que se dio. Si una quedó sin respuesta, escribe PENDIENTE.
5. Detecta temas donde el capacitador y un asistente discrepaban.
6. Redacta 5 preguntas de repaso con su respuesta correcta según la transcripción, para que el asesor que faltó verifique que entendió.

FORMATO DE SALIDA
Puntos clave en viñetas, paso a paso numerado, tabla de frases (recomendada o evitar), tabla de preguntas con respuesta y estado, y las 5 preguntas de repaso.

LÍMITES
No inventes políticas ni plazos. Marca [VERIFICAR] lo que se dijo sin respaldo en el procedimiento y [SUPUESTO] lo que deduzcas. No incluyas datos personales.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción se apoya cada paso y qué no pudiste confirmar.`,
      seguimiento: [
        "Durante la sesión: entré tarde. Dime en 6 viñetas qué se ha explicado hasta ahora y cuál es el paso que están enseñando en este momento.",
        "Convierte el paso a paso en una lista de chequeo de 10 ítems que un asesor pueda tener al lado durante una llamada. Usa solo pasos dichos en la sesión.",
        "Redacta un mensaje de 90 palabras para quienes faltaron, con los 5 puntos más importantes y la invitación a resolver las preguntas de repaso."
      ],
      verificar: [
        "Que el paso a paso coincida con el procedimiento oficial y no con lo dicho en la sesión.",
        "Que las frases modelo sean las que el capacitador recomendó.",
        "Que las preguntas sin respuesta se hayan resuelto con el responsable antes de circular el material.",
        "Que los casos de ejemplo no permitan identificar a un cliente."
      ]
    },
    {
      necesidad: "Siguiente reunión con encuesta",
      titulo: "De la reunión de resultados de satisfacción a la agenda de la siguiente",
      donde: "Pestaña de resumen (Recap) o panel de Copilot de la reunión terminada, con la transcripción activada.",
      antes: "Ten claro cuándo será la próxima reunión y qué indicador de satisfacción se revisa, por ejemplo el puntaje por canal.",
      prompt: `ROL
Eres un analista de experiencia del cliente de una aseguradora que prepara la siguiente reunión a partir de la anterior.

CONTEXTO
Terminó la reunión mensual donde servicio al cliente revisó los resultados de la encuesta de satisfacción posterior a la atención, por canal (línea, correo, oficina y chat). Se habló de puntajes, comentarios de clientes y acciones. Los comentarios se mencionan sin nombres y los datos están anonimizados. La próxima reunión es el [fecha].

FUENTES
Usa solo la transcripción de esta reunión. No uses la base de la encuesta ni otros informes. Las cifras valen solo si alguien las dijo en voz alta.

INSTRUCCIÓN
1. Lista las cifras de satisfacción mencionadas, por canal, con quién las dijo y en qué momento.
2. Extrae las causas de baja satisfacción que el equipo nombró, con cita corta.
3. Lista las acciones acordadas con responsable y fecha. Lo que no tenga dueño, márcalo PENDIENTE.
4. Detecta las acciones de la reunión anterior que se volvieron a mencionar sin avance.
5. Señala qué datos se pidieron y no se tenían, para traerlos la próxima vez.
6. Propone una agenda de 45 minutos para la siguiente reunión con tiempos, empezando por el seguimiento de las acciones.

FORMATO DE SALIDA
Tabla de cifras (canal, cifra, quién, momento), tabla de acciones de 4 columnas, lista de datos pendientes y la agenda con bloques de tiempo. Cierra con 3 preguntas para abrir la siguiente reunión.

LÍMITES
No calcules promedios ni tendencias que nadie dijo. Marca [VERIFICAR] las cifras sin fuente y [SUPUESTO] las causas deducidas. Si falta un dato, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final indica dónde de la transcripción sale cada cifra y cada acción, y qué no pudiste confirmar.`,
      seguimiento: [
        "Dame solo las acciones que ya se habían acordado antes y se repitieron en esta reunión, con la persona que las mencionó. Si no hay evidencia de avance, dilo.",
        "Redacta la invitación a la siguiente reunión en 90 palabras, con la agenda, los datos que cada área debe traer y la fecha. Tono cordial y directo.",
        "Convierte las acciones en una tabla con tarea, responsable, fecha y prioridad para llevarla a Planner. Usa PENDIENTE donde falte responsable o fecha."
      ],
      verificar: [
        "Que cada cifra de satisfacción sea la que se dijo en la reunión y no un cálculo de Copilot.",
        "Que las causas de baja satisfacción las haya nombrado el equipo.",
        "Que las acciones repetidas realmente figuren en el acta anterior.",
        "Que la agenda propuesta respete el tiempo disponible de los participantes."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Comité de PQR reiteradas",
      titulo: "Facilitator en el comité de casos reiterados y derechos de petición",
      donde: "Chat de la reunión programada de Teams del comité de casos críticos, al abrirla.",
      antes: "La reunión debe ser programada. Ten la lista de casos con código anonimizado, número de reiteraciones y días restantes del plazo.",
      prompt: `ROL
Eres Facilitator, el asistente del comité quincenal de casos reiterados de servicio al cliente. Piensas como un coordinador de PQR que cuida los plazos de respuesta.

CONTEXTO
Reunión programada de 45 minutos con servicio al cliente, siniestros, cartera y jurídico. Se revisan los casos con 3 o más reiteraciones y los derechos de petición abiertos. Los casos llegan con código anonimizado y sin nombres de tomadores. Lista: [PQR-2201 a PQR-2210 con motivo, reiteraciones y área responsable].

FUENTES
Usa solo lo dicho en la reunión y en el chat. No uses el sistema de PQR y no supongas fechas de vencimiento.

INSTRUCCIÓN
1. Reparte el tiempo así: [0 a 5 min casos nuevos y vencidos], [5 a 30 min un caso a la vez, empezando por los de plazo más corto], [30 a 40 min decisiones de escalamiento], [40 a 45 min compromisos y cierre]. Avisa en el chat 2 minutos antes de cada cambio.
2. Lleva las notas con esta estructura que pego aquí: [Código, Motivo, Reiteraciones, Causa dicha en la reunión, Decisión, Responsable, Fecha de respuesta al cliente].
3. Etiqueta DECISIÓN, RIESGO (plazo cerca de vencer o posible queja ante la Superintendencia), PENDIENTE, PREGUNTA ABIERTA y SUPUESTO.
4. A los 25 minutos haz un recap con los casos tratados y los que faltan.
5. Si un caso supera 6 minutos, recuérdale al grupo que debe cerrar con responsable y fecha.
6. Al final entrega el resumen.

FORMATO DE SALIDA
Tabla de casos con las columnas de la estructura. Resumen de 5 viñetas. Tabla para Planner con tarea, responsable, fecha y prioridad, ordenada por urgencia. Borrador del acta en Word con la misma estructura.

LÍMITES
No califiques a las personas ni decidas si un caso procede. Si no se dijo el responsable o la fecha, escribe PENDIENTE. Marca [VERIFICAR] cualquier plazo legal mencionado sin fuente. Los datos están anonimizados y no deben aparecer datos del tomador.

CONTROL DE CALIDAD
Al final indica en qué momento se habló de cada caso y qué datos no pudiste confirmar.`,
      seguimiento: [
        "Haz un recap de los casos tratados: código, decisión, responsable y fecha. Dime cuáles quedan por revisar y cuál tiene el plazo más corto según lo dicho.",
        "Cierra la reunión con el resumen de 5 viñetas, los riesgos de queja ante la Superintendencia y la tabla de tareas ordenada por urgencia.",
        "Redacta en Word el acta del comité con la estructura que te pegué, una fila por caso. Marca VERIFICAR toda fecha o causa que no se dijo con claridad."
      ],
      verificar: [
        "Que cada caso conserve solo su código y no aparezcan datos del tomador.",
        "Que las causas anotadas sean las que se dijeron y no deducciones del asistente.",
        "Que los plazos mencionados figuren como VERIFICAR hasta contrastarlos con el sistema de PQR.",
        "Que cada decisión de escalamiento tenga responsable y fecha."
      ]
    },
    {
      necesidad: "Capacitación de 60 minutos",
      titulo: "Facilitator en la sesión de capacitación sobre manejo de reclamos",
      donde: "Chat de la reunión programada de Teams de la capacitación, al abrirla.",
      antes: "La reunión debe ser programada. Ten el tema, el nombre del capacitador por rol y las 3 situaciones de práctica.",
      prompt: `ROL
Eres Facilitator, el asistente de una sesión de capacitación para asesores de servicio al cliente de una aseguradora. Cuidas el tiempo y dejas registro de lo aprendido.

CONTEXTO
Reunión programada de 60 minutos con [número] asesores del contact center. Tema: [manejo de un reclamo con demora en el pago]. Habrá explicación, ejercicio con casos y preguntas. Los casos de práctica están anonimizados y se nombran como [CASO A, CASO B, CASO C], sin nombres de clientes.

FUENTES
Usa solo lo dicho en la reunión y en el chat. No uses manuales ni procedimientos externos y no corrijas al capacitador.

INSTRUCCIÓN
1. Sigue esta agenda y avisa en el chat 3 minutos antes de cada cambio: [0 a 10 min objetivos y reglas, capacitador], [10 a 30 min explicación del paso a paso, capacitador], [30 a 50 min práctica con los 3 casos en parejas, asesores], [50 a 60 min dudas y compromisos, jefe de servicio].
2. Lleva las notas con esta estructura que pego aquí: [Bloque, Idea clave, Frase modelo recomendada, Duda, Respuesta dada, Pendiente].
3. Etiqueta DECISIÓN, PENDIENTE, PREGUNTA ABIERTA y SUPUESTO.
4. A los 35 minutos haz un recap de lo explicado.
5. Cuando una duda quede sin respuesta, anótala como PENDIENTE y recuérdala en el cierre.
6. Al final lista los compromisos de práctica de cada asesor, si se dijeron.

FORMATO DE SALIDA
Tabla de notas con las columnas de la estructura. Lista de dudas sin resolver. Resumen de 6 viñetas. Tabla para Planner con tarea, responsable, fecha y prioridad. Borrador en Word de un resumen para quienes no asistieron.

LÍMITES
No inventes políticas, plazos ni cifras. No evalúes el desempeño de los asesores. Si no se dijo, escribe PENDIENTE. Marca [VERIFICAR] cualquier plazo mencionado sin fuente.

CONTROL DE CALIDAD
Al final indica en qué momento se dijo cada idea clave y qué no pudiste confirmar.`,
      seguimiento: [
        "Haz un recap de lo explicado hasta ahora en 6 viñetas y dime cuánto tiempo queda según la agenda. Avísame si vamos atrasados.",
        "Lista las dudas de los asistentes que siguen sin respuesta, con quién las hizo según el chat y quién debería resolverlas. Si no se dijo, escribe PENDIENTE.",
        "Redacta en Word el resumen para quienes no asistieron, de máximo 250 palabras, con las ideas clave, las frases modelo y los compromisos. Marca VERIFICAR lo que no se dijo con claridad."
      ],
      verificar: [
        "Que las frases modelo sean las que dijo el capacitador.",
        "Que las dudas sin resolver se respondan con el área dueña antes de circular el resumen.",
        "Que los casos de práctica no permitan identificar a un cliente.",
        "Que los compromisos tengan responsable y fecha acordados en la reunión."
      ]
    },
    {
      necesidad: "Resultados de la encuesta",
      titulo: "Facilitator en la reunión de resultados de satisfacción",
      donde: "Chat de la reunión programada de Teams de revisión de la encuesta de satisfacción, al abrirla.",
      antes: "La reunión debe ser programada. Ten los puntajes por canal y 5 comentarios de clientes sin nombres para discutir.",
      prompt: `ROL
Eres Facilitator, el asistente de la reunión mensual de resultados de la encuesta de satisfacción. Piensas como un analista de experiencia del cliente.

CONTEXTO
Reunión programada de 50 minutos con servicio al cliente, siniestros, canales digitales y comercial. Se revisa la satisfacción posterior a la atención por canal: [línea, correo, oficina, chat]. Los puntajes y los comentarios están anonimizados. Cifras de partida que pego aquí: [canal, puntaje del mes, puntaje del mes anterior, número de respuestas].

FUENTES
Usa solo lo dicho en la reunión y en el chat. No calcules promedios ni tendencias que nadie haya dicho y no uses datos externos.

INSTRUCCIÓN
1. Reparte el tiempo así: [0 a 8 min lectura de puntajes, analista de calidad], [8 a 28 min causas de los puntajes más bajos con los comentarios, líder de cada canal], [28 a 43 min acciones por canal, jefe de servicio], [43 a 50 min compromisos y cierre]. Avisa 2 minutos antes de cada cambio.
2. Lleva las notas con esta estructura que pego aquí: [Canal, Puntaje dicho, Causa dicha, Comentario citado, Acción, Responsable, Fecha, Indicador de seguimiento].
3. Etiqueta DECISIÓN, RIESGO, PENDIENTE, PREGUNTA ABIERTA y SUPUESTO.
4. A los 25 minutos haz un recap por canal.
5. Si una causa se atribuye a otra área, anótala y pregunta quién es el responsable.
6. Al final entrega el resumen.

FORMATO DE SALIDA
Tabla por canal con la estructura. Resumen de 5 viñetas. Tabla para Planner con tarea, responsable, fecha y prioridad. Borrador en Word de un informe de una página para la gerencia.

LÍMITES
No decidas qué causa es la correcta ni juzgues a los equipos. Si falta responsable o fecha, escribe PENDIENTE. Marca [VERIFICAR] las cifras dichas sin fuente y [SUPUESTO] cualquier causa que se deduzca.

CONTROL DE CALIDAD
Al final indica en qué momento se habló de cada canal y qué datos no pudiste confirmar.`,
      seguimiento: [
        "Haz un recap por canal: puntaje dicho, causa nombrada y acción propuesta hasta ahora. Dime qué canales faltan por revisar.",
        "Lista las causas atribuidas a otra área y quién quedó de confirmarlas, con el momento en que se dijo. Si no hay responsable, escribe PENDIENTE.",
        "Redacta en Word el informe de una página para la gerencia con puntajes dichos, causas, acciones y riesgos. Marca VERIFICAR toda cifra sin fuente."
      ],
      verificar: [
        "Que los puntajes del informe sean los dichos o pegados por ti y no cálculos de Copilot.",
        "Que los comentarios citados no tengan nombres ni datos de clientes.",
        "Que las causas las haya nombrado el equipo y no el asistente.",
        "Que cada acción tenga un indicador y una fecha de revisión."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Limpiar derechos de petición vencidos",
      titulo: "Meta: poner al día los derechos de petición y PQR vencidos en 3 semanas",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
      antes: "Prepara el listado de casos vencidos o por vencer con códigos anonimizados y el procedimiento de respuesta. Adjúntalos como archivos de apoyo.",
      prompt: `ROL
Eres un coordinador de PQR en servicio al cliente de una aseguradora, responsable de dejar la bandeja de casos al día sin perder calidad en las respuestas.

CONTEXTO
Objetivo: poner al día los derechos de petición y las PQR vencidas o por vencer. Resultado esperado: cada caso con respuesta de fondo enviada o escalada, y cero casos vencidos sin responsable. Fecha de entrega: 3 semanas calendario desde hoy. Restricciones: no se responde nada que dependa de siniestros, cartera o jurídico sin su validación, y las respuestas deben revisarse antes de salir. Los datos de los archivos están anonimizados.

FUENTES
Usa solo el listado de casos y el procedimiento que adjunto. No supongas plazos que no estén en el procedimiento.

INSTRUCCIÓN
1. Crea estos cubos: Triage de la bandeja, Respuestas de fondo, Casos que dependen de otra área, Revisión y envío, Cierre y aprendizajes.
2. En cada cubo genera de 3 a 5 tareas con máximo 2 subtareas.
3. Responsable por rol: coordinador de PQR, analista de PQR, revisor de calidad, enlace de siniestros, enlace de cartera, abogado de apoyo. Nunca nombres.
4. Fechas relativas por día hábil, por ejemplo día 2 o día 10.
5. Prioridad alta para casos vencidos o con vencimiento en menos de 3 días hábiles, media para los que dependen de otra área, baja para el cierre y las mejoras.
6. Criterio de hecho medible por tarea, por ejemplo «bandeja con [X] casos vencidos o menos» o «respuesta revisada por un segundo analista».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, día, prioridad y criterio de hecho.

LÍMITES
No inventes metas numéricas, usa corchetes para que yo las complete. Si una dependencia no tiene dueño, escribe PENDIENTE y sugiere el rol. Marca [VERIFICAR] los plazos legales y [SUPUESTO] lo que deduzcas.

CONTROL DE CALIDAD
Al final indica qué parte del listado o del procedimiento respalda cada tarea y qué no pudiste confirmar.`,
      seguimiento: [
        "Genera el informe de estado para la gerencia: casos respondidos, en revisión, escalados y vencidos, con los 3 bloqueos que requieren decisión de otra área.",
        "Revisa el plan existente: lista tareas sin responsable, tareas vencidas y casos que dependen de otra área sin fecha acordada. Propón el orden para los próximos 5 días hábiles.",
        "Respaldo para Copilot Chat: con el listado adjunto devuelve una tabla lista para pegar en Planner con Cubo, Caso, Tarea, Rol, Día, Prioridad y Criterio de hecho."
      ],
      verificar: [
        "Que cada tarea de triage corresponda a casos del listado adjunto.",
        "Que los plazos y la prioridad coincidan con el procedimiento y con el sistema de PQR.",
        "Que las tareas que dependen de otra área tengan dueño y fecha acordados.",
        "Que ninguna tarea contenga datos personales de clientes."
      ]
    },
    {
      necesidad: "Base de preguntas frecuentes",
      titulo: "Meta: publicar la base de preguntas frecuentes y los guiones en 4 semanas",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
      antes: "Reúne los documentos de apoyo: listado de las 30 preguntas más repetidas, procedimientos vigentes y guiones actuales. Adjúntalos sin datos de clientes.",
      prompt: `ROL
Eres un líder de calidad en servicio al cliente de una aseguradora, encargado de que los asesores respondan lo mismo y bien desde cualquier canal.

CONTEXTO
Objetivo: publicar una base de preguntas frecuentes con respuestas validadas y guiones de atención para [tema, por ejemplo cobros de prima y cancelaciones]. Resultado esperado: 30 preguntas con respuesta aprobada, un guion por canal y una capacitación de 45 minutos para el equipo. Fecha de entrega: 4 semanas calendario. Restricciones: las respuestas con condiciones de cobertura las valida el área técnica o jurídica. Los datos de los documentos están anonimizados.

FUENTES
Usa solo los documentos que adjunto. No agregues respuestas que no estén respaldadas por un procedimiento adjunto.

INSTRUCCIÓN
1. Crea estos cubos: Recopilar y depurar, Redactar respuestas, Validación con otras áreas, Guiones por canal, Publicación y capacitación.
2. En cada cubo genera de 3 a 4 tareas con máximo 2 subtareas.
3. Responsable por rol: analista de calidad, líder de contact center, enlace técnico, enlace jurídico, capacitador, líder de canal digital. Nunca nombres.
4. Fechas relativas en semanas, por ejemplo semana 1 o semana 3.
5. Prioridad alta para respuestas con condiciones de cobertura o cobro, media para guiones, baja para formato y diseño.
6. Criterio de hecho medible por tarea, por ejemplo «30 preguntas con respuesta aprobada por el enlace técnico» o «guion probado en 5 llamadas».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, semana, prioridad, entregable y criterio de hecho.

LÍMITES
No inventes metas numéricas distintas a las que di y usa corchetes cuando falte un dato. Si una validación no tiene dueño, escribe PENDIENTE. Marca [VERIFICAR] cualquier condición de cobertura y [SUPUESTO] lo que deduzcas.

CONTROL DE CALIDAD
Al final indica qué documento respalda cada cubo y qué no pudiste confirmar.`,
      seguimiento: [
        "Genera el informe de estado de la base de preguntas frecuentes: preguntas redactadas, validadas y pendientes, y los 3 bloqueos que necesitan decisión del área técnica o jurídica.",
        "Revisa el plan existente: lista las tareas sin responsable, las que dependen de validación sin fecha y las que se pueden hacer en paralelo. Propón el orden de las próximas dos semanas.",
        "Respaldo para Copilot Chat: con los documentos adjuntos devuelve una tabla lista para pegar en Planner con Cubo, Tarea, Rol, Semana, Prioridad, Entregable y Criterio de hecho."
      ],
      verificar: [
        "Que cada respuesta de la base tenga respaldo en un procedimiento vigente.",
        "Que las validaciones con otras áreas tengan responsable y fecha.",
        "Que los guiones no prometan plazos ni coberturas sin fuente.",
        "Que los documentos adjuntos no tengan datos de clientes."
      ]
    },
    {
      necesidad: "Encuesta y cierre del ciclo",
      titulo: "Meta: lanzar la encuesta de satisfacción y responder a los clientes insatisfechos",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
      antes: "Ten el diseño de la encuesta, la lista de canales donde se enviará y el procedimiento de contacto a clientes con puntaje bajo. Adjúntalos sin datos de clientes.",
      prompt: `ROL
Eres un analista de experiencia del cliente de una aseguradora, responsable de que la encuesta posterior a la atención produzca acciones y no se quede en números.

CONTEXTO
Objetivo: lanzar una encuesta corta de satisfacción en los canales [línea, correo, chat] y cerrar el ciclo con los clientes que den puntaje bajo. Resultado esperado: encuesta activa, contacto a los clientes con puntaje de [X] o menos dentro de [Y] días y un informe mensual con acciones. Fecha de entrega: 6 semanas calendario. Restricciones: la encuesta debe cumplir las reglas de tratamiento de datos de la compañía y no se contacta a quien no autorizó. Los archivos están anonimizados.

FUENTES
Usa solo el diseño de la encuesta y el procedimiento que adjunto. No supongas herramientas de envío que no estén en los documentos.

INSTRUCCIÓN
1. Crea estos cubos: Diseño y aprobación, Configuración por canal, Prueba piloto, Contacto a clientes insatisfechos, Informe y mejora continua.
2. En cada cubo genera de 3 a 4 tareas con máximo 2 subtareas.
3. Responsable por rol: analista de experiencia del cliente, líder de cada canal, enlace de tecnología, enlace de protección de datos, jefe de servicio. Nunca nombres.
4. Fechas relativas en semanas, por ejemplo semana 2 o semana 5.
5. Prioridad alta para aprobación de datos y contacto a clientes con puntaje bajo, media para configuración, baja para el informe visual.
6. Criterio de hecho medible por tarea, por ejemplo «piloto con [número] respuestas sin errores» o «100 por ciento de puntajes bajos contactados en [Y] días».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, semana, prioridad, indicador y criterio de hecho.

LÍMITES
No inventes metas numéricas y deja los corchetes. Si falta dueño, escribe PENDIENTE y sugiere el rol. Marca [VERIFICAR] toda exigencia de protección de datos y [SUPUESTO] lo que deduzcas.

CONTROL DE CALIDAD
Al final indica qué documento respalda cada tarea y qué no pudiste confirmar.`,
      seguimiento: [
        "Genera el informe de estado: tareas completadas, en curso y atrasadas, respuestas recibidas según los datos que pegue y los 3 bloqueos que requieren decisión.",
        "Revisa el plan existente: lista las tareas sin responsable, las que dependen de tecnología o protección de datos sin fecha y las que bloquean el piloto. Propón el orden de las próximas dos semanas.",
        "Respaldo para Copilot Chat: con los documentos adjuntos devuelve una tabla lista para pegar en Planner con Cubo, Tarea, Rol, Semana, Prioridad, Indicador y Criterio de hecho."
      ],
      verificar: [
        "Que la encuesta y el contacto a clientes respeten la autorización de datos vigente.",
        "Que los umbrales de puntaje bajo y los días de contacto los haya definido tu área.",
        "Que cada tarea dependiente de tecnología tenga dueño y fecha.",
        "Que ninguna tarea incluya datos personales de clientes."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Llamada con cliente molesto",
      titulo: "Notas de una queja compleja a cronología y plan de respuesta",
      donde: "OneNote, página con los apuntes de las llamadas del caso, panel de chat de Copilot",
      antes: "Ten en la página tus notas de las llamadas y reuniones sobre un caso. Usa solo el código del caso, sin nombre, cédula ni número de póliza.",
      prompt: `ROL
Eres un asesor senior de servicio al cliente de una aseguradora que ordena las notas de un caso complicado para preparar la respuesta definitiva.

CONTEXTO
Estas notas recogen varias llamadas y mensajes sobre el caso [CASO-052]: un cliente inconforme por la demora en [un reembolso o un pago]. Las notas están desordenadas, mezclan hechos, lo que dijo el cliente y lo que prometimos. Los datos están anonimizados y sin información personal.

FUENTES
Trabaja solo con el texto de esta página. No uses otras páginas ni el sistema de PQR y no supongas fechas que no estén escritas.

INSTRUCCIÓN
1. Arma la cronología de contactos con fecha, canal, quién habló y qué se dijo.
2. Separa HECHOS comprobables de lo que el cliente AFIRMA y de lo que nosotros PROMETIMOS.
3. Lista cada promesa que hicimos con la fecha en que debía cumplirse y marca si hay evidencia de que se cumplió.
4. Detecta contradicciones entre lo que dijo un asesor y otro, y huecos de más de 5 días sin contacto.
5. Extrae los pendientes con responsable y fecha. Si faltan, escribe PENDIENTE.
6. Deja una página limpia con estas secciones: Cronología, Hechos, Promesas, Contradicciones, Pendientes y Qué necesito para responder.

FORMATO DE SALIDA
Cronología en tabla de fecha, canal, resumen y resultado. Las demás secciones en máximo 5 viñetas. Cierra con 3 preguntas que debo resolver antes de llamar al cliente.

LÍMITES
No suavices ni exageres lo que dijo el cliente. No inventes fechas ni cifras. Marca [VERIFICAR] toda fecha dudosa y [SUPUESTO] cualquier causa que deduzcas. No incluyas datos personales en la página limpia.

CONTROL DE CALIDAD
Al final indica de qué parte de mis notas sale cada promesa y cada contradicción, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Reescribe la sección Promesas en una tabla con Promesa, Fecha comprometida, Responsable y Estado. Si el estado no consta en mis notas, escribe PENDIENTE.",
        "Redacta un guion de 150 palabras para la próxima llamada con el cliente: reconocer el retraso, decir lo que sí sabemos y proponer una fecha. No prometas nada que no esté en mis notas.",
        "Resume el caso en 5 líneas para el jefe de servicio: qué pasó, cuánto lleva abierto, qué promesas están incumplidas y qué decisión necesito de él."
      ],
      verificar: [
        "Que las fechas de la cronología coincidan con las de tus apuntes y con el sistema de PQR.",
        "Que lo que el cliente afirma no haya quedado como hecho comprobado.",
        "Que las promesas marcadas como cumplidas tengan evidencia real.",
        "Que la página limpia no tenga nombres, cédulas ni números de póliza reales."
      ]
    },
    {
      necesidad: "Notas de capacitación",
      titulo: "Apuntes de una capacitación a guía de bolsillo para asesores",
      donde: "OneNote, página con los apuntes de la capacitación, icono de Copilot",
      antes: "Pega en la página tus apuntes de la sesión. Si usaste ejemplos con casos, deja solo códigos anonimizados.",
      prompt: `ROL
Eres un capacitador de servicio al cliente de una aseguradora que convierte apuntes sueltos en una guía de consulta rápida.

CONTEXTO
Estos son mis apuntes de la capacitación sobre [tema, por ejemplo cómo atender un reclamo por demora]. Tienen pasos, frases modelo, errores comunes, dudas y ejemplos. Están mezclados y con abreviaturas. Los datos están anonimizados y los casos aparecen solo con código.

FUENTES
Trabaja solo con el texto de esta página. No uses otras páginas, no completes pasos con conocimiento propio y no consultes manuales.

INSTRUCCIÓN
1. Ordena el contenido en estas secciones: Objetivo de la llamada, Paso a paso, Frases que sí, Frases que evitar, Errores comunes, Qué escalar y a quién, Dudas sin resolver.
2. Numera el paso a paso y déjalo en máximo 8 pasos con una frase de 15 palabras cada uno.
3. Si dos apuntes se contradicen, muestra las dos versiones y márcalo.
4. Separa lo que se dio como REGLA de lo que fue un CONSEJO personal del capacitador.
5. Lista las dudas que no tienen respuesta en los apuntes con la palabra PENDIENTE.
6. Escribe 5 preguntas de autoevaluación con respuesta corta tomada de los apuntes.

FORMATO DE SALIDA
Una página limpia con las secciones indicadas. Las frases en tabla de dos columnas (frase que sí, frase que evitar). Cierra con las 5 preguntas de autoevaluación.

LÍMITES
No inventes políticas, plazos ni cifras. Si un apunte no se entiende, no lo reescribas, márcalo con [VERIFICAR]. Marca [SUPUESTO] lo que dedujiste. No incluyas datos personales.

CONTROL DE CALIDAD
Al final indica de qué parte de mis apuntes sale cada paso y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Reduce el paso a paso a una lista de chequeo de 6 ítems que quepa en media página, para tenerla al lado durante una llamada. Usa solo pasos que estén en mis apuntes.",
        "Reescribe las frases que evitar con una alternativa mejor cada una, de máximo 20 palabras, manteniendo un tono cordial. Marca SUPUESTO las alternativas que no estaban en mis apuntes.",
        "Redacta un correo de 100 palabras a mi equipo con los 3 puntos más importantes de la guía y la fecha para resolver las dudas pendientes: [fecha]."
      ],
      verificar: [
        "Que los pasos coincidan con el procedimiento oficial y no con tus apuntes.",
        "Que lo que era un consejo personal no haya quedado como regla.",
        "Que las dudas pendientes se resuelvan con el área dueña antes de repartir la guía.",
        "Que no queden casos reales ni datos de clientes en la página."
      ]
    },
    {
      necesidad: "Comentarios abiertos de la encuesta",
      titulo: "Comentarios de clientes a temas, tono y acciones",
      donde: "OneNote, página con los comentarios abiertos de la encuesta de satisfacción, panel de chat de Copilot",
      antes: "Pega en la página entre 30 y 60 comentarios del mes, con canal y puntaje, sin nombres ni datos que identifiquen al cliente.",
      prompt: `ROL
Eres un analista de experiencia del cliente de una aseguradora que lee comentarios abiertos y los convierte en mejoras concretas.

CONTEXTO
Esta página tiene los comentarios abiertos de la encuesta de satisfacción de [mes], cada uno con canal (línea, correo, oficina o chat) y puntaje de 1 a 5. Están sin ordenar y algunos mezclan varios temas. Los datos están anonimizados y no hay información personal.

FUENTES
Trabaja solo con los comentarios de esta página. No uses otras páginas, no inventes comentarios y no completes lo que un cliente no dijo.

INSTRUCCIÓN
1. Agrupa los comentarios por tema: tiempo de espera, claridad de la respuesta, trato del asesor, resolución del problema, cobros, canal digital.
2. Cuenta cuántos comentarios hay por tema y por canal. Si un comentario toca dos temas, cuéntalo en el principal y anótalo.
3. Marca el tono de cada tema como molesto, neutro o satisfecho, con base solo en las palabras escritas.
4. Selecciona 2 citas textuales cortas por tema que lo ilustren, sin nombres.
5. Separa los comentarios sobre algo que ya sabemos corregir de los que revelan un problema nuevo.
6. Deja una página limpia con las secciones: Temas por frecuencia, Citas, Lo que ya sabemos, Problemas nuevos, Acciones propuestas y Lo que falta para confirmar.

FORMATO DE SALIDA
Tabla con Tema, Número de comentarios, Canal principal, Tono y Acción propuesta. Las demás secciones en máximo 4 viñetas. Cierra con 3 preguntas para el equipo.

LÍMITES
No cambies el sentido de un comentario ni lo minimices. No inventes cifras. Marca [VERIFICAR] los conteos dudosos y [SUPUESTO] cada tono o causa que deduzcas.

CONTROL DE CALIDAD
Al final indica qué comentarios respaldan cada tema y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Dame solo los comentarios de puntaje 1 o 2 agrupados por tema, con la cita textual y el canal. Dime si hay patrones por canal sin inventar causas.",
        "Redacta un párrafo de 100 palabras para el informe mensual con los 3 temas principales y una acción por cada uno. No agregues cifras que no estén en la página.",
        "Propón un indicador simple para cada acción, basado en lo que ya aparece en los comentarios. Marca SUPUESTO lo que requiera datos que no tengo."
      ],
      verificar: [
        "Que el conteo por tema coincida con los comentarios que realmente pegaste.",
        "Que el tono asignado no sea una interpretación sin apoyo en el texto.",
        "Que las citas sean literales y no tengan datos que identifiquen al cliente.",
        "Que las acciones propuestas las valide el dueño del proceso antes de comunicarlas."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Derecho de petición",
      titulo: "Respuesta a un derecho de petición con soporte punto por punto",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el texto del derecho de petición y el historial del caso.",
      antes: "Ten el escrito de petición y el historial del caso sin cédula ni teléfono. Confirma con jurídico el plazo aplicable.",
      prompt: `ROL
Eres un coordinador de PQR de una aseguradora, con experiencia en responder derechos de petición de forma clara, completa y ordenada.

OBJETIVO
Redactar el borrador de respuesta a un derecho de petición sobre [motivo, por ejemplo la demora en la devolución de una prima], que conteste cada solicitud del peticionario por separado.

CONTEXTO
El escrito tiene [número] solicitudes y entró por [canal] el [fecha]. Jurídico confirmó que el plazo aplicable es [plazo], por lo que la respuesta debe salir antes de [fecha límite]. Los datos están anonimizados.

FUENTES
Usa solo el escrito adjunto, el historial del caso y esta información que pego: [pega lo que confirmó cada área]. No uses casos parecidos ni conocimiento propio de la normativa.

INSTRUCCIÓN
1. Enumera cada solicitud del peticionario en una tabla.
2. Para cada solicitud indica si tenemos respuesta de fondo, una respuesta parcial o nada, con la fuente.
3. Redacta la respuesta en el orden de las solicitudes, con un párrafo corto por cada una.
4. Señala qué solicitudes dependen de otra área y qué necesito pedirle a esa área.
5. Redacta una nota interna de 80 palabras para jurídico con los puntos que deben revisar antes de firmar.

EXPECTATIVAS
Tabla de solicitudes, carta de máximo 350 palabras en tono formal y respetuoso, sin jerga de seguros, y nota interna. Cada párrafo responde una sola solicitud.

LÍMITES
No inventes hechos, valores ni plazos. No reconozcas responsabilidad legal ni prometas pagos. Marca [SUPUESTO] lo que no conste en los documentos y [VERIFICAR] cada plazo, norma o compromiso. Si una solicitud no tiene respuesta, escribe PENDIENTE y no la rellenes.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente, nivel de confianza (alto, medio, bajo) y qué debo verificar. Confirma que cada solicitud quedó respondida.`,
      seguimiento: [
        "Revisa la carta y dime qué solicitudes quedaron sin respuesta de fondo, qué frases suenan evasivas y cómo reescribirlas sin comprometer más de lo que consta en el historial.",
        "Acorta la carta a 250 palabras manteniendo una respuesta por solicitud y todas las marcas VERIFICAR. Mantén el tono formal.",
        "Haz un resumen de 6 líneas del caso para el director de servicio con el plazo, el estado de cada solicitud y la decisión que necesito de él."
      ],
      verificar: [
        "Que el plazo y la forma de respuesta los haya confirmado jurídico.",
        "Que cada solicitud del escrito tenga su respuesta en la carta.",
        "Que los datos y fechas coincidan con el sistema de PQR.",
        "Que la carta no contenga compromisos de pago ni admisiones de responsabilidad sin aprobación."
      ]
    },
    {
      necesidad: "Informe de satisfacción",
      titulo: "Informe mensual de satisfacción a partir de la tabla de resultados",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la tabla de resultados de la encuesta del mes y la del mes anterior.",
      antes: "Ten la tabla de puntajes por canal y número de respuestas de dos meses, sin datos de clientes. Define el público del informe.",
      prompt: `ROL
Eres un analista de experiencia del cliente de una aseguradora con experiencia en informes para gerencia, claros y sin adornos.

OBJETIVO
Redactar el informe mensual de satisfacción de [mes] para la gerente de servicio, que explique qué cambió frente a [mes anterior] y qué se debe hacer.

CONTEXTO
La encuesta se envía al terminar la atención por línea, correo, oficina y chat. El puntaje va de 1 a 5. La gerente decide en 10 minutos qué acciones priorizar. Todos los datos están anonimizados y agregados.

FUENTES
Usa solo las dos tablas adjuntas y estas notas que pego: [pega observaciones de los líderes de canal]. No uses cifras de memoria ni compares con otras compañías.

INSTRUCCIÓN
1. Calcula la variación del puntaje por canal entre los dos meses y marca como relevante solo la que supere [0,3] puntos.
2. Revisa cuántas respuestas tiene cada canal y avisa si el número es muy bajo para sacar conclusiones.
3. Identifica los 3 hallazgos principales con la cifra que los respalda.
4. Propón 3 acciones, cada una con responsable por rol, plazo en semanas e indicador.
5. Redacta un resumen de 6 líneas para la gerente, con el cambio más importante primero.
6. Agrega una lista de 3 limitaciones de los datos.

EXPECTATIVAS
Tabla con canal, puntaje actual, puntaje anterior, variación y respuestas. Luego hallazgos, acciones, resumen y limitaciones. Máximo 400 palabras en total, tono directo y sin jerga estadística.

LÍMITES
No inventes causas. Si una cifra no está en las tablas, escribe PENDIENTE. Marca [SUPUESTO] toda interpretación y [VERIFICAR] cada cálculo para que lo revise una persona.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (tabla y fila), nivel de confianza (alto, medio, bajo) y qué debo verificar. Incluye cada cifra del resumen.`,
      seguimiento: [
        "Reescribe el resumen para la gerente en 4 líneas, con el cambio más importante y la decisión que necesito de ella. Mantén las marcas VERIFICAR.",
        "Dime qué variaciones podrían deberse a pocas respuestas y no a un cambio real, y qué dato adicional necesitaría para confirmarlo.",
        "Convierte las 3 acciones en una tabla con tarea, rol, semana, prioridad e indicador, lista para llevar a Planner."
      ],
      verificar: [
        "Que los puntajes y las variaciones coincidan con las tablas adjuntas, recalculándolas tú.",
        "Que los canales con pocas respuestas no se presenten como una tendencia.",
        "Que las acciones propuestas las haya validado el líder de cada canal.",
        "Que el informe no incluya comentarios que identifiquen a un cliente."
      ]
    },
    {
      necesidad: "Cambio de procedimiento",
      titulo: "Circular al equipo sobre un cambio de procedimiento con versiones comparadas",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la versión vigente y la versión nueva del procedimiento.",
      antes: "Ten las dos versiones del procedimiento de atención y la fecha en que empieza a regir el cambio. Confirma con el dueño del proceso que la versión nueva está aprobada.",
      prompt: `ROL
Eres un líder de calidad en servicio al cliente de una aseguradora que comunica cambios de procedimiento a asesores de forma simple y accionable.

OBJETIVO
Comparar la versión vigente y la nueva del procedimiento de [proceso, por ejemplo atención de solicitudes de cancelación] y redactar la circular interna para el equipo de servicio.

CONTEXTO
El cambio empieza a regir el [fecha]. La circular la leen [número] asesores del contact center y de oficina, la mayoría con poco tiempo. Deben saber qué cambia, qué hacer distinto desde ese día y qué decir al cliente. El documento está anonimizado y no incluye datos de clientes.

FUENTES
Usa solo las dos versiones adjuntas y esta nota del dueño del proceso: [pega la nota]. No agregues reglas que no aparezcan en la versión nueva.

INSTRUCCIÓN
1. Compara las versiones y arma una tabla con Paso, Antes, Ahora y Efecto para el asesor.
2. Marca cada cambio como CRÍTICO si afecta plazos o lo que se le dice al cliente, o MENOR si es de forma.
3. Lista lo que desapareció y lo que es nuevo.
4. Redacta la circular con asunto, un párrafo de contexto de 40 palabras, los cambios críticos en viñetas y la fecha de inicio.
5. Redacta 3 frases que el asesor puede usar con el cliente para explicar el cambio.
6. Lista 4 dudas que probablemente tendrá el equipo y deja la respuesta solo si consta en los documentos.

EXPECTATIVAS
Tabla de comparación, circular de máximo 250 palabras con tono cordial y claro, frases para el cliente y lista de dudas con estado de respuesta.

LÍMITES
No inventes pasos, plazos ni excepciones. Marca [VERIFICAR] cualquier plazo y [SUPUESTO] lo que deduzcas. Si una duda no tiene respuesta en los documentos, escribe PENDIENTE.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (versión y sección), nivel de confianza (alto, medio, bajo) y qué debo verificar. Incluye cada cambio crítico.`,
      seguimiento: [
        "Acorta la circular a 150 palabras dejando solo los cambios críticos y la fecha de inicio. Mantén un tono cordial y no pierdas ninguna marca VERIFICAR.",
        "Convierte los cambios críticos en una lista de chequeo de 6 ítems para que el asesor la use durante la llamada, con el orden correcto de los pasos nuevos.",
        "Redacta 5 preguntas de repaso con respuesta, basadas solo en la versión nueva, para validar que el equipo entendió el cambio."
      ],
      verificar: [
        "Que cada cambio de la tabla aparezca realmente en la versión nueva.",
        "Que los plazos y las condiciones coincidan con el procedimiento aprobado.",
        "Que las frases para el cliente no prometan nada fuera de la versión nueva.",
        "Que el dueño del proceso apruebe la circular antes de enviarla."
      ]
    }
  ]
};
