const SEC_TEAMS_CHATS = [
  {
    area: "suscripcion",
    titulo: "Canal de un riesgo pyme de alimentos: decisiones y preguntas para mí",
    donde: "Panel de Copilot dentro del canal del caso, y luego Copilot Chat, pestaña Trabajo, para la búsqueda.",
    antes: "Abre el canal donde se discute la suscripción del cliente pyme y ubica el hilo largo de condiciones. Recuerda que el hilo necesita al menos 1.000 caracteres y que Copilot no lee imágenes ni archivos adjuntos.",
    prompt: `ROL
Eres un asistente de apoyo para un suscriptor de riesgos pymes de Allianz Colombia, ramo multirriesgo empresarial.

CONTEXTO
Este canal es donde el equipo discute la suscripción de una pyme del sector alimentos (planta de producción, bodega refrigerada, flota liviana de reparto). Los datos del caso están anonimizados. Voy a decidir si cotizamos esta semana y con qué condiciones.

FUENTES
Usa solo los mensajes de este canal y, para la búsqueda, mis chats y canales de Teams de los últimos 30 días. No uses información de internet ni inventes cifras. Ignora imágenes, componentes Loop y archivos compartidos, y avísame si parecen importantes.

INSTRUCCIÓN
1. Resume los mensajes que no he leído en este canal (últimos 30 días) y el hilo sobre [asunto del hilo, por ejemplo condiciones de la cotización].
2. Separa las decisiones tomadas de las que siguen abiertas.
3. Lista las preguntas que me hicieron directamente a mí y quién las hizo.
4. Busca qué se dijo sobre [tema, por ejemplo cadena de frío, deducibles o exclusiones] y dime en qué chat o canal está.
5. Redacta un borrador de respuesta mía al hilo, en español y luego en inglés para el reasegurador, de máximo 90 palabras cada uno.

FORMATO DE SALIDA
Tabla de decisiones con columnas: decisión, quién la dijo, fecha. Luego viñetas de pendientes míos (máximo 5). Luego la búsqueda en 5 viñetas con quién, dónde y fecha. Al final los dos borradores.

LÍMITES
No cambies coberturas, valores asegurados ni tasas. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] lo que dependa de un adjunto. Si algo no consta, escribe PENDIENTE. No envíes nada por mí.

CONTROL DE CALIDAD
Al final indica de qué mensaje sale cada decisión importante y qué no pudiste confirmar en la conversación.`,
    seguimiento: [
      "Del hilo largo, dime solo las condiciones que el cliente pidió y que aún no tienen respuesta nuestra, con el nombre de quien las planteó.",
      "Haz el borrador de respuesta más corto y firme, en 50 palabras, sin comprometer una cotización todavía.",
      "Reescribe la versión en inglés con tono formal para un reasegurador y marca lo que depende de información que falta."
    ],
    verificar: [
      "Abre cada mensaje citado y confirma que la decisión realmente se tomó y no era solo una propuesta.",
      "Revisa si algún dato clave del riesgo estaba en una imagen o archivo adjunto que Copilot no leyó.",
      "Comprueba que las preguntas dirigidas a ti sean de verdad para ti y no para otra persona del canal.",
      "Lee los dos borradores completos antes de enviarlos y confirma que no prometen condiciones no aprobadas."
    ]
  },
  {
    area: "siniestros",
    titulo: "Chat de coordinación de un siniestro complejo: ponerme al día",
    donde: "Panel de Copilot dentro del chat del siniestro, y Copilot Chat, pestaña Trabajo, para buscar en otros chats.",
    antes: "Abre el chat de grupo donde coordinan el siniestro complejo y sus ajustadores. Ten a mano el número de siniestro anonimizado y verifica que el hilo supere 1.000 caracteres.",
    prompt: `ROL
Eres un coordinador de apoyo para un analista senior de siniestros de Allianz Colombia en el ramo de daños materiales.

CONTEXTO
Este chat reúne al ajustador, al abogado externo, al analista y a mí en un siniestro complejo (incendio en bodega con posible infraseguro y reclamo por lucro cesante). Los datos están anonimizados. Estuve fuera varios días y debo preparar la reunión semanal de siniestros complejos.

FUENTES
Usa solo los mensajes de este chat y, para la búsqueda, mis chats y canales de Teams de las últimas dos semanas. No uses conocimiento externo sobre el caso. No leas imágenes, componentes Loop ni archivos compartidos. Si el ajuste está en un archivo, dímelo.

INSTRUCCIÓN
1. Resume los mensajes no leídos desde [fecha] hasta hoy.
2. Lista las decisiones y los compromisos de cada persona, con su fecha.
3. Señala las preguntas hechas a mí y las que nadie ha respondido.
4. Busca qué se dijo sobre [reserva, deducible, peritaje o cobertura de lucro cesante] y en qué chat o canal.
5. Redacta un mensaje mío para el ajustador pidiendo [dato o documento], en español y en inglés para el reasegurador.

FORMATO DE SALIDA
Cronología de máximo 8 viñetas con fecha y autor. Tabla de pendientes con columnas: pendiente, responsable, fecha prometida. Los dos mensajes de máximo 80 palabras cada uno.

LÍMITES
No determines cobertura, no fijes reserva y no califiques la responsabilidad. Marca [VERIFICAR] cualquier monto o fecha y PENDIENTE lo que no conste. Marca [SUPUESTO] lo que deduzcas del tono de la conversación.

CONTROL DE CALIDAD
Al final indica en qué mensaje aparece cada afirmación importante y qué no pudiste confirmar.`,
    seguimiento: [
      "Dame solo lo que cambió desde la última reunión semanal de siniestros complejos, en 5 viñetas, y qué decisión espera de mí el ajustador.",
      "Convierte los pendientes en una tabla lista para pegar en Planner, con título corto, responsable, fecha y prioridad.",
      "Reescribe mi mensaje al abogado externo con un tono más firme y una fecha límite concreta, sin tocar la posición sobre la cobertura."
    ],
    verificar: [
      "Confirma cada monto, fecha y número de reserva mencionado contra el sistema de siniestros, no contra el resumen.",
      "Revisa si el peritaje o el reporte del ajustador llegó como archivo, porque Copilot no lo lee.",
      "Abre el mensaje original de cada compromiso para ver quién lo asumió y con qué plazo.",
      "Verifica que el borrador en inglés conserve los términos técnicos del ramo y no insinúe una decisión de cobertura."
    ]
  },
  {
    area: "comercial",
    titulo: "Canal del comité de ventas: pipeline, compromisos y mensaje a corredores",
    donde: "Panel de Copilot dentro del canal comercial, y Copilot Chat, pestaña Trabajo, para buscar en chats de corredores.",
    antes: "Abre el canal del comité semanal de ventas y localiza el hilo de metas del mes. Piensa a qué corredor o canal le vas a escribir.",
    prompt: `ROL
Eres un asistente comercial para un gerente de canales de Allianz Colombia (corredores, agencias y bancaseguros).

CONTEXTO
En este canal el equipo discute el avance de ventas del mes por canal y ramo (autos, salud, vida grupo, pymes). Los datos están anonimizados y las cifras son de ejemplo. Debo llegar al comité semanal de ventas con claridad sobre qué se decidió y qué me piden.

FUENTES
Usa solo los mensajes de este canal y, para la búsqueda, mis chats y canales de los últimos 30 días. No uses cifras de internet ni inventes metas. Ignora imágenes, Loop y archivos compartidos, y dime si hay una cifra que parece estar solo en un adjunto.

INSTRUCCIÓN
1. Resume los mensajes no leídos de los últimos 30 días y el hilo sobre [meta del mes o campaña].
2. Extrae las decisiones comerciales y los compromisos por canal.
3. Lista las preguntas que me hicieron a mí, con nombre y fecha.
4. Busca lo dicho sobre [corredor, producto o comisión] en mis chats y canales, con la fuente.
5. Redacta un mensaje mío al corredor [nombre] sobre [asunto], en español y en inglés para el director regional, de máximo 80 palabras.

FORMATO DE SALIDA
Tabla con columnas: canal, decisión o compromiso, responsable, fecha. Luego 4 viñetas con lo que me piden. Luego los dos mensajes.

LÍMITES
No prometas comisiones, descuentos ni condiciones de producto. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] toda cifra de ventas. Escribe PENDIENTE si falta responsable o fecha.

CONTROL DE CALIDAD
Al final indica en qué mensaje se apoya cada decisión importante y qué cifras no pudiste confirmar.`,
    seguimiento: [
      "Dime qué canales quedaron rezagados según la conversación y qué dijo cada responsable sobre el plan de recuperación.",
      "Hazme el mensaje al corredor más cercano y breve, en 50 palabras, con una sola petición clara.",
      "Traduce al inglés el resumen de decisiones para el director regional, con tono ejecutivo y máximo 100 palabras."
    ],
    verificar: [
      "Contrasta toda cifra de ventas con el reporte oficial del comité y no con el chat.",
      "Confirma en el mensaje original quién asumió cada compromiso y en qué fecha.",
      "Revisa que ninguna comisión o condición comercial aparezca como aprobada si solo se propuso.",
      "Lee el mensaje al corredor completo y quita cualquier promesa que no puedas cumplir."
    ]
  },
  {
    area: "servicio",
    titulo: "Hilo de quejas de la semana: patrones, preguntas y respuesta al equipo",
    donde: "Panel de Copilot dentro del canal de calidad, y Copilot Chat, pestaña Trabajo, para buscar quejas en otros chats.",
    antes: "Abre el canal donde el equipo comenta las quejas de la semana y localiza el hilo más largo. Verifica que supere 1.000 caracteres para poder resumirlo.",
    prompt: `ROL
Eres un asistente de calidad para un líder de servicio al cliente de Allianz Colombia.

CONTEXTO
En este canal el equipo comenta las quejas de la semana (demoras en pagos de siniestros, cobros de prima, errores en pólizas, atención en línea de asistencia). Los datos están anonimizados, sin nombres de clientes ni números de póliza. Preparo la reunión de calidad y necesito patrones, no casos sueltos.

FUENTES
Usa solo los mensajes de este canal y, para la búsqueda, mis chats y canales de Teams de las últimas dos semanas. No uses datos de internet. No leas imágenes, Loop ni archivos compartidos, como capturas de reclamos o tablas adjuntas.

INSTRUCCIÓN
1. Resume los mensajes no leídos de los últimos 30 días y el hilo sobre [queja o tema].
2. Agrupa las quejas por causa (proceso, comunicación, sistema, tiempo de respuesta).
3. Separa lo ya resuelto de lo que sigue abierto, con quién lo tiene.
4. Lista las preguntas dirigidas a mí.
5. Busca lo que se dijo sobre [tema recurrente] en mis chats y canales, con la fuente.
6. Redacta un mensaje mío para el equipo con las acciones acordadas, en español y en inglés para el equipo de soporte regional.

FORMATO DE SALIDA
Tabla con columnas: causa, cuántas veces se mencionó, estado, responsable. Luego 5 viñetas de preguntas y pendientes míos. Luego los dos mensajes de máximo 90 palabras.

LÍMITES
No cuentes quejas que no veas en los mensajes. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] los conteos. Escribe PENDIENTE si falta responsable. No incluyas datos personales.

CONTROL DE CALIDAD
Al final indica en qué mensajes se apoya cada patrón y qué no pudiste confirmar.`,
    seguimiento: [
      "Dime cuáles son las dos causas que más se repiten en la conversación y qué acción propuso cada persona.",
      "Reescribe mi mensaje al equipo con un tono más cercano y agradecido, en máximo 70 palabras, sin perder las acciones.",
      "Dame la versión en inglés del mensaje, más corta, para el equipo de soporte regional."
    ],
    verificar: [
      "Cuenta tú misma las quejas del patrón principal en el hilo y compara con lo que dijo Copilot.",
      "Revisa si hay capturas o tablas con quejas que Copilot no leyó.",
      "Confirma en el mensaje original quién quedó a cargo de cada queja abierta.",
      "Verifica que ningún borrador incluya datos de clientes ni promesas de plazo que el equipo no confirmó."
    ]
  },
  {
    area: "tecnica",
    titulo: "Canal de revisión de tarifas: supuestos, objeciones y decisiones",
    donde: "Panel de Copilot dentro del canal de tarifas, y Copilot Chat, pestaña Trabajo, para buscar supuestos en otros chats.",
    antes: "Abre el canal donde el equipo discute la revisión de tarifas y ubica el hilo largo sobre supuestos. Ten claro el ramo y el periodo de la revisión.",
    prompt: `ROL
Eres un asistente de apoyo para un actuario de Allianz Colombia que revisa tarifas del ramo [autos, salud o vida grupo].

CONTEXTO
Este canal reúne a técnica, suscripción y comercial para discutir la revisión de tarifas (frecuencia, severidad, siniestralidad, recargos, tendencia). Los datos están anonimizados y las cifras de los mensajes son de ejemplo. Debo llegar a la reunión de revisión con las objeciones y los supuestos claros.

FUENTES
Usa solo los mensajes de este canal y, para la búsqueda, mis chats y canales de los últimos 30 días. No uses cifras externas ni recalcules nada. No leas imágenes, Loop ni archivos compartidos, como hojas de cálculo con el triángulo de siniestros.

INSTRUCCIÓN
1. Resume los mensajes no leídos de los últimos 30 días y el hilo sobre [supuesto de tarifa o segmento].
2. Lista los supuestos técnicos mencionados y quién los propuso.
3. Separa las objeciones de comercial o suscripción de las decisiones técnicas ya tomadas.
4. Señala las preguntas hechas a mí.
5. Busca qué se dijo sobre [siniestralidad, tendencia o recargo] en mis chats y canales, con la fuente.
6. Redacta una respuesta mía al hilo defendiendo o ajustando el supuesto de [tema], en español y en inglés para el reasegurador, de máximo 100 palabras.

FORMATO DE SALIDA
Tabla con columnas: supuesto, quién lo propuso, objeción, estado. Luego pendientes míos en viñetas. Luego los dos borradores.

LÍMITES
No calcules tarifas ni cambies cifras. Marca [VERIFICAR] toda cifra y [SUPUESTO] lo que deduzcas. Escribe PENDIENTE si no consta la decisión. No sustituyas el criterio actuarial.

CONTROL DE CALIDAD
Al final indica en qué mensaje aparece cada supuesto y qué no pudiste confirmar.`,
    seguimiento: [
      "Dime qué objeciones siguen sin respuesta técnica y quién las planteó, ordenadas de mayor a menor impacto según la conversación.",
      "Reescribe mi respuesta con más precisión técnica y sin lenguaje comercial, en máximo 90 palabras.",
      "Hazme la versión en inglés del borrador, con vocabulario actuarial estándar, y marca los términos que podrían traducirse distinto."
    ],
    verificar: [
      "Contrasta cada cifra mencionada con el modelo o la hoja de cálculo oficial, no con el chat.",
      "Revisa si el triángulo o el análisis estaba en un adjunto que Copilot no leyó.",
      "Abre el mensaje original de cada supuesto para confirmar quién lo propuso y con qué base.",
      "Verifica que la traducción conserve el sentido técnico de frecuencia, severidad y tendencia."
    ]
  },
  {
    area: "juridico",
    titulo: "Canal del comité de cumplimiento: circulares, alertas y decisiones",
    donde: "Panel de Copilot dentro del canal de cumplimiento, y Copilot Chat, pestaña Trabajo, para buscar en chats.",
    antes: "Abre el canal del comité de cumplimiento y localiza el hilo sobre la circular o el tema regulatorio vigente. Ten el nombre de la norma a mano.",
    prompt: `ROL
Eres un asistente de apoyo para un abogado de cumplimiento de Allianz Colombia.

CONTEXTO
Este canal reúne a jurídico, riesgos y operaciones para discutir el cumplimiento de una circular de la Superintendencia Financiera, el SARLAFT y la protección de datos personales. Los datos están anonimizados y no hay nombres de clientes. Preparo el comité de cumplimiento y necesito saber qué se decidió y qué me piden.

FUENTES
Usa solo los mensajes de este canal y, para la búsqueda, mis chats y canales de los últimos 30 días. No cites normas que no aparezcan en la conversación ni des interpretaciones legales propias. No leas imágenes, Loop ni archivos compartidos, como el texto de la circular o conceptos adjuntos.

INSTRUCCIÓN
1. Resume los mensajes no leídos de los últimos 30 días y el hilo sobre [circular o tema].
2. Lista las decisiones tomadas, las obligaciones mencionadas y sus fechas de cumplimiento.
3. Separa las posiciones jurídicas de cada persona, sin tomar partido.
4. Señala las preguntas que me hicieron a mí.
5. Busca qué se dijo sobre [norma, alerta o reporte] en mis chats y canales, con la fuente.
6. Redacta una respuesta mía al hilo pidiendo [aclaración o soporte], en español y en inglés para la casa matriz, de máximo 100 palabras.

FORMATO DE SALIDA
Tabla con columnas: obligación o decisión, responsable, fecha, estado. Luego pendientes míos en viñetas. Luego los dos borradores.

LÍMITES
No emitas conceptos legales ni confirmes que algo cumple la norma. Marca [VERIFICAR] toda cita de norma y todo plazo. Marca [SUPUESTO] lo que deduzcas y escribe PENDIENTE si falta soporte.

CONTROL DE CALIDAD
Al final indica en qué mensaje se apoya cada afirmación importante y qué no pudiste confirmar.`,
    seguimiento: [
      "Dime solo las obligaciones con fecha de cumplimiento en los próximos 30 días y quién respondió por cada una.",
      "Reescribe mi respuesta con un tono más prudente y sin afirmar que algo cumple la norma, en máximo 80 palabras.",
      "Hazme la versión en inglés para la casa matriz, con términos legales neutros, y marca los que requieren revisión de un traductor jurídico."
    ],
    verificar: [
      "Compara toda cita de circular o norma con el texto oficial y no con el chat.",
      "Revisa si la posición jurídica clave estaba en un concepto adjunto que Copilot no leyó.",
      "Confirma los plazos y los responsables abriendo el mensaje original.",
      "Verifica que el borrador no afirme cumplimiento ni dé una opinión legal que no te corresponde."
    ]
  },
  {
    area: "finanzas",
    titulo: "Chat del cierre mensual: partidas abiertas y mensaje de seguimiento",
    donde: "Panel de Copilot dentro del chat del cierre, y Copilot Chat, pestaña Trabajo, para buscar en otros chats.",
    antes: "Abre el chat o canal de coordinación del cierre mensual. Ten claro el mes, la fecha límite de cierre y las áreas que reportan.",
    prompt: `ROL
Eres un asistente de apoyo para un analista de contabilidad y cierre de Allianz Colombia.

CONTEXTO
Este chat coordina el cierre contable mensual con técnica, siniestros, tesorería y reaseguros (primas emitidas, reservas, comisiones, conciliaciones de reaseguro, cuentas por cobrar). Los datos están anonimizados y las cifras son de ejemplo. Debo saber qué partidas siguen abiertas y a quién reclamarle.

FUENTES
Usa solo los mensajes de este chat y, para la búsqueda, mis chats y canales de Teams del mes en curso. No uses información externa ni recalcules saldos. No leas imágenes, Loop ni archivos compartidos, como conciliaciones en Excel o capturas del sistema contable.

INSTRUCCIÓN
1. Resume los mensajes no leídos desde [fecha] y el hilo sobre [partida o conciliación].
2. Lista las partidas abiertas, el área responsable y la fecha prometida.
3. Señala los compromisos incumplidos o sin fecha.
4. Lista las preguntas que me hicieron a mí.
5. Busca qué se dijo sobre [reserva, comisión o conciliación de reaseguro] en mis chats y canales, con la fuente.
6. Redacta un mensaje mío recordando [partida] al área [nombre], en español y en inglés para el equipo de la casa matriz, de máximo 80 palabras.

FORMATO DE SALIDA
Tabla con columnas: partida, área responsable, fecha prometida, estado. Luego 5 viñetas de riesgos para el cierre. Luego los dos mensajes.

LÍMITES
No confirmes saldos ni cifras. Marca [VERIFICAR] todo monto y toda fecha. Marca [SUPUESTO] lo que deduzcas y escribe PENDIENTE si falta responsable o fecha.

CONTROL DE CALIDAD
Al final indica en qué mensaje aparece cada partida y qué no pudiste confirmar.`,
    seguimiento: [
      "Ordena las partidas abiertas por fecha prometida y marca cuáles ponen en riesgo la fecha de cierre según la conversación.",
      "Reescribe el recordatorio con un tono más amable pero con la fecha límite bien visible, en máximo 60 palabras.",
      "Dame la versión en inglés del recordatorio, más corta, para el equipo de reaseguros de la casa matriz."
    ],
    verificar: [
      "Confirma cada monto contra el sistema contable o la conciliación, no contra el chat.",
      "Revisa si el soporte de una partida estaba en un Excel adjunto que Copilot no leyó.",
      "Abre el mensaje original de cada compromiso para ver quién lo asumió y cuándo.",
      "Verifica que los mensajes no mencionen saldos que no estén confirmados."
    ]
  },
  {
    area: "talento",
    titulo: "Chat del onboarding: pendientes de ingreso y mensaje de bienvenida",
    donde: "Panel de Copilot dentro del chat del grupo de ingreso, y Copilot Chat, pestaña Trabajo, para buscar en otros chats.",
    antes: "Abre el chat donde coordinan el onboarding de la nueva cohorte o persona. Ten la fecha de ingreso y las áreas involucradas.",
    prompt: `ROL
Eres un asistente de apoyo para una analista de talento humano de Allianz Colombia que coordina el onboarding.

CONTEXTO
Este chat reúne a talento humano, tecnología, el jefe directo y servicios generales para organizar el ingreso de [número] personas (equipos, accesos, inducción, contrato, afiliaciones). Los datos están anonimizados y no hay nombres reales ni datos de salud. Preparo la reunión de onboarding.

FUENTES
Usa solo los mensajes de este chat y, para la búsqueda, mis chats y canales de los últimos 30 días. No uses información de internet. No leas imágenes, Loop ni archivos compartidos, como listados de ingreso o formatos de afiliación.

INSTRUCCIÓN
1. Resume los mensajes no leídos de los últimos 30 días y el hilo sobre [tema, por ejemplo accesos o equipos].
2. Lista las decisiones y los pendientes de cada área, con fecha.
3. Señala qué debe estar listo antes del primer día y qué aún no lo está.
4. Lista las preguntas que me hicieron a mí.
5. Busca qué se dijo sobre [equipo, acceso o inducción] en mis chats y canales, con la fuente.
6. Redacta un mensaje de bienvenida para quienes ingresan, en español y en inglés para quienes vienen de otra oficina, de máximo 100 palabras.

FORMATO DE SALIDA
Lista de verificación con columnas: ítem, área, responsable, fecha, listo o pendiente. Luego pendientes míos en viñetas. Luego los dos mensajes.

LÍMITES
No incluyas datos personales, salarios ni información sensible. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] las fechas de ingreso. Escribe PENDIENTE si falta responsable.

CONTROL DE CALIDAD
Al final indica en qué mensaje se apoya cada ítem y qué no pudiste confirmar.`,
    seguimiento: [
      "Dime solo los ítems que no estarán listos para el primer día según la conversación y qué área debe resolverlos.",
      "Reescribe el mensaje de bienvenida con un tono más cálido y cercano, en máximo 80 palabras, sin cambiar la información práctica.",
      "Dame la versión en inglés más corta, para quienes ingresan desde otra oficina, con la hora y el lugar de llegada como campos por completar."
    ],
    verificar: [
      "Confirma las fechas de ingreso y de entrega de equipos con el cronograma oficial.",
      "Revisa si un listado de ingreso o un formato estaba como archivo que Copilot no leyó.",
      "Abre el mensaje original de cada pendiente para ver quién se comprometió.",
      "Verifica que el mensaje de bienvenida no contenga datos personales ni promesas que talento humano no pueda cumplir."
    ]
  },
  {
    area: "tecnologia",
    titulo: "Canal del comité de proyectos: bloqueos, decisiones y escalamiento",
    donde: "Panel de Copilot dentro del canal del proyecto, y Copilot Chat, pestaña Trabajo, para buscar en chats de otros proyectos.",
    antes: "Abre el canal del proyecto que se revisa en el comité y ubica el hilo de bloqueos o cambios de alcance. Ten claro el hito más cercano.",
    prompt: `ROL
Eres un asistente de apoyo para un líder de proyectos de tecnología y operaciones de Allianz Colombia.

CONTEXTO
Este canal reúne a desarrollo, infraestructura, seguridad y el área de negocio de un proyecto (por ejemplo la migración del sistema de emisión o un cambio en el portal de corredores). Los datos están anonimizados y no hay credenciales ni datos de clientes. Preparo el comité de proyectos y necesito el estado real, no el optimista.

FUENTES
Usa solo los mensajes de este canal y, para la búsqueda, mis chats y canales de los últimos 30 días. No uses información externa ni estimes fechas. No leas imágenes, Loop ni archivos compartidos, como diagramas, capturas de errores o cronogramas.

INSTRUCCIÓN
1. Resume los mensajes no leídos de los últimos 30 días y el hilo sobre [bloqueo, incidente o cambio de alcance].
2. Lista las decisiones técnicas y de alcance, con quién las tomó.
3. Lista los bloqueos abiertos, su causa y quién debe resolverlos.
4. Señala las preguntas hechas a mí.
5. Busca qué se dijo sobre [hito, dependencia o proveedor] en mis chats y canales, con la fuente.
6. Redacta un mensaje mío de escalamiento sobre [bloqueo], en español y en inglés para el proveedor, de máximo 90 palabras.

FORMATO DE SALIDA
Tabla con columnas: bloqueo o decisión, responsable, impacto en el hito, fecha. Luego pendientes míos en viñetas. Luego los dos mensajes.

LÍMITES
No inventes fechas ni causas técnicas. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] toda fecha de hito. Escribe PENDIENTE si falta responsable. No pegues credenciales ni datos de clientes.

CONTROL DE CALIDAD
Al final indica en qué mensaje aparece cada bloqueo y qué no pudiste confirmar.`,
    seguimiento: [
      "Dime qué bloqueos ponen en riesgo el próximo hito según la conversación y cuál es el más antiguo sin resolver.",
      "Reescribe el mensaje de escalamiento con un tono neutral y factual, sin culpar a nadie, en máximo 70 palabras.",
      "Dame la versión en inglés para el proveedor, más corta, con la fecha pedida y la consecuencia de no cumplirla."
    ],
    verificar: [
      "Contrasta cada fecha de hito con el cronograma oficial del proyecto.",
      "Revisa si la causa de un bloqueo estaba en una captura o diagrama que Copilot no leyó.",
      "Abre el mensaje original de cada decisión para ver quién la tomó.",
      "Verifica que el mensaje de escalamiento no incluya credenciales, datos de clientes ni acusaciones sin soporte."
    ]
  }
];
