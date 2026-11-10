const MAS_FINANZAS = {
  "teams-chats": [
    {
      necesidad: "Hilo de cartera con intermediarios",
      titulo: "Resumen del hilo de cartera vencida con compromisos de pago",
      donde: "Panel de Copilot dentro del hilo del canal de cartera en Teams.",
      antes: "Abre el hilo largo donde se discute la cartera de un intermediario. Debe tener más de 1.000 caracteres para que Copilot lo resuma.",
      prompt: `ROL
Eres un analista de cuentas por cobrar de una aseguradora que prepara el seguimiento semanal de cartera para el jefe de contabilidad.

CONTEXTO
Este hilo del canal de cartera trata sobre primas pendientes de recaudo de un intermediario. Se mencionan pólizas vencidas, promesas de pago, devoluciones y diferencias con comisiones. Los datos están anonimizados y las cifras son de ejemplo, por ejemplo el intermediario «Corredora Andina Ejemplo» con 14 pólizas vencidas y una cartera de 182 millones de pesos.

FUENTES
Usa solo los mensajes de este hilo. No uses el ERP, extractos ni archivos compartidos. No leas imágenes ni capturas del sistema. No sumes ni recalcules saldos que nadie haya escrito.

INSTRUCCIÓN
1. Resume el hilo en máximo 6 viñetas de una línea cada una.
2. Lista cada compromiso de pago con estas columnas: intermediario, monto mencionado, fecha prometida, quién lo prometió, mensaje donde aparece.
3. Separa lo que está confirmado de lo que solo se dijo como intención.
4. Marca como alerta toda promesa con fecha ya vencida o con más de dos cambios de fecha.
5. Propón un mensaje de seguimiento de máximo 90 palabras para [nombre del responsable comercial], en tono cordial y firme.

FORMATO DE SALIDA
Primero las viñetas. Después la tabla de compromisos. Después las alertas en una lista corta. Al final el mensaje de seguimiento listo para enviar.

LÍMITES
Marca [SUPUESTO] cuando una fecha o monto se deduzca y no esté escrito. Marca [VERIFICAR] cuando dos mensajes digan cosas distintas. Si falta el monto o la fecha, escribe PENDIENTE y no lo inventes.

CONTROL DE CALIDAD
Antes de entregar, revisa que cada monto y fecha de la tabla aparezca en un mensaje del hilo. Revisa que el mensaje de seguimiento no acuse a nadie y que no pase de 90 palabras. Dime qué partes del hilo no pudiste leer.`,
      seguimiento: [
        "Ordena la tabla de compromisos por fecha prometida, de la más antigua a la más reciente, y dime cuáles ya vencieron.",
        "Reescribe el mensaje de seguimiento en un tono más formal para enviarlo con copia al director comercial.",
        "Dime qué información falta en el hilo para poder cerrar la conciliación de este intermediario."
      ],
      verificar: [
        "Cada monto de la tabla aparece escrito en algún mensaje del hilo.",
        "Las fechas prometidas coinciden con lo que dijo cada persona y no con una deducción.",
        "El mensaje de seguimiento no promete ni exige nada que no esté acordado.",
        "Los adjuntos y capturas del hilo se revisaron aparte porque Copilot no los lee."
      ]
    },
    {
      necesidad: "Solicitud de soporte a otra área",
      titulo: "Mensaje de solicitud de soporte a siniestros y su versión en inglés",
      donde: "Cuadro de redacción del chat de Teams, con Copilot en Redactar o Reescribir.",
      antes: "Ten claro qué soporte necesitas, para qué cuenta del cierre y la fecha límite. Escribe un borrador corto con tus palabras.",
      prompt: `ROL
Eres un asistente de redacción para un analista de contabilidad de una aseguradora que necesita información de otra área para cerrar el mes.

CONTEXTO
Necesito pedirle al equipo de siniestros el detalle de los pagos de siniestros del mes que no aparecen en la conciliación de reservas. Es una solicitud que ya hice una vez y no tuvo respuesta. Los datos están anonimizados y los ejemplos son inventados: 9 siniestros sin soporte, diferencia aproximada de 46 millones de pesos, cierre el día hábil [N].

FUENTES
Usa solo el borrador que escribo abajo y los datos que te doy. No inventes números de siniestro ni nombres de personas. No uses archivos adjuntos.

BORRADOR
[pega aquí tu borrador en 3 a 5 líneas]

INSTRUCCIÓN
1. Reescribe el borrador como un mensaje de chat de máximo 110 palabras.
2. Abre con el pedido concreto en la primera frase.
3. Incluye lo que necesito, para qué cuenta o conciliación, la fecha y hora límite y el formato en que lo puedo recibir.
4. Deja claro el efecto en el cierre si no llega a tiempo, sin sonar a amenaza.
5. Entrega tres versiones: neutra, más cordial y más directa.
6. Entrega la versión neutra traducida al inglés para el reasegurador, en máximo 100 palabras.

FORMATO DE SALIDA
Las tres versiones con su rótulo y debajo la traducción al inglés. Sin saludos largos, sin listas dentro del mensaje.

LÍMITES
Marca [VERIFICAR] cualquier dato que yo no escribí y que hayas tenido que asumir. No agregues plazos distintos al que te di. No uses tono de reclamo.

CONTROL DE CALIDAD
Revisa que el pedido sea claro en la primera frase, que la fecha límite aparezca una sola vez y que el mensaje se entienda sin leer el resto del chat. Confirma el conteo de palabras de cada versión.`,
      seguimiento: [
        "Acorta la versión directa a 60 palabras sin perder la fecha límite ni el pedido.",
        "Escribe un recordatorio de dos líneas para enviar mañana si no responden.",
        "Convierte la versión cordial en un mensaje para el canal general con mención al líder de siniestros."
      ],
      verificar: [
        "El pedido, la cuenta afectada y la fecha límite están en el mensaje final.",
        "No quedó ningún dato inventado, como números de siniestro o nombres.",
        "La traducción al inglés conserva el monto y la fecha tal como los escribí.",
        "El tono es adecuado para el destinatario y no suena a reclamo."
      ]
    },
    {
      necesidad: "Justificación de un ajuste manual",
      titulo: "Búsqueda en chats del origen de un ajuste contable manual",
      donde: "Copilot Chat, pestaña Trabajo, buscando en tus chats y canales de Teams.",
      antes: "Ten el número del asiento o la descripción del ajuste y el mes en que se hizo. Úsalo cuando una auditoría pregunte por qué existe.",
      prompt: `ROL
Eres un asistente de investigación para un contador que debe sustentar un ajuste manual ante la revisoría fiscal de una aseguradora.

CONTEXTO
Hace [N] semanas se hizo un ajuste manual en [cuenta, por ejemplo reserva de siniestros pendientes o cuentas por cobrar de reaseguro]. La auditoría pide saber quién lo solicitó, por qué se hizo y quién lo aprobó. Los datos están anonimizados y el caso de ejemplo es un ajuste de 38 millones de pesos del mes de [mes].

FUENTES
Busca solo en mis chats y canales de Teams entre [fecha inicial] y [fecha final]. No uses correos, archivos, imágenes ni Loop. Si la prueba está en un adjunto o en una captura, dime que existe pero no inventes su contenido.

INSTRUCCIÓN
1. Busca mensajes que mencionen el ajuste, la cuenta o el monto de ejemplo.
2. Arma una línea de tiempo con fecha, persona, chat o canal y qué dijo, en orden cronológico.
3. Identifica quién solicitó el ajuste, quién lo aprobó y cuál fue la razón dada.
4. Señala si hay mensajes que se contradicen o que cambian el monto.
5. Lista qué evidencia falta para que la auditoría lo acepte, por ejemplo aprobación escrita o soporte del área origen.

FORMATO DE SALIDA
Una tabla con las columnas fecha, persona, lugar, resumen del mensaje. Debajo, un párrafo de máximo 80 palabras con la conclusión y una lista de máximo 5 faltantes.

LÍMITES
No concluyas que el ajuste fue correcto, solo describe lo que dicen los mensajes. Marca [SUPUESTO] cuando relaciones dos mensajes por contexto. Marca [VERIFICAR] cuando el monto cambie. Escribe PENDIENTE donde no haya mensaje que lo respalde.

CONTROL DE CALIDAD
Revisa que cada fila de la tabla cite un mensaje real y que la conclusión no afirme nada que no esté en la tabla. Dime qué chats no pudiste consultar.`,
      seguimiento: [
        "Resume en 4 líneas la línea de tiempo para pegarla en la respuesta a la revisoría fiscal.",
        "Busca ahora mensajes de los 15 días anteriores a la solicitud donde alguien haya advertido la diferencia.",
        "Redacta una solicitud de 5 líneas para pedirle al aprobador que confirme por escrito el ajuste."
      ],
      verificar: [
        "Cada fila de la tabla corresponde a un mensaje que puedo abrir en Teams.",
        "La persona que solicitó y la que aprobó están identificadas por lo que dijeron, no por su cargo.",
        "Los adjuntos y capturas mencionados se revisaron manualmente porque Copilot no los lee.",
        "La conclusión describe lo encontrado y no califica el ajuste como correcto o incorrecto."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Decisiones del comité financiero",
      titulo: "Decisiones con evidencia del comité financiero mensual",
      donde: "Panel de Copilot en la reunión de Teams del comité financiero ya terminada, con transcripción activada.",
      antes: "Confirma que la transcripción estuvo activa. Ten a mano el orden del día para comparar los temas tratados.",
      prompt: `ROL
Eres un controller financiero que prepara el registro formal de decisiones del comité financiero de una aseguradora.

CONTEXTO
Terminó el comité financiero mensual. Se revisó el resultado técnico, la variación contra presupuesto de gastos administrativos, el recaudo de cartera y una propuesta de ajuste a la reserva de siniestros. Los datos están anonimizados y las cifras de la reunión son de ejemplo. Necesito saber qué se decidió, con qué evidencia y quién responde.

FUENTES
Usa solo la transcripción de esta reunión. No uses el ERP, presentaciones ni hojas de cálculo. Un monto solo vale si alguien lo dijo en voz alta y puedes citar quién y en qué parte.

INSTRUCCIÓN
1. Lista las decisiones tomadas, una por fila, con estas columnas: decisión, quién la propuso, quién la aprobó, evidencia (frase corta de la transcripción), fecha efectiva.
2. Separa lo decidido de lo que quedó en discusión o sin cerrar.
3. Lista los pendientes con responsable y fecha. Si no se dijo fecha, escribe PENDIENTE.
4. Identifica los 3 riesgos financieros que más se mencionaron y por qué.
5. Redacta un resumen de máximo 120 palabras para el CFO, que no asistió.

FORMATO DE SALIDA
Cuatro bloques con rótulo: DECISIONES (tabla), SIN CERRAR (lista), PENDIENTES (tabla con responsable y fecha), RESUMEN PARA EL CFO.

LÍMITES
No conviertas una opinión en una decisión. Marca [VERIFICAR] cuando dos personas dieron cifras distintas. Marca [SUPUESTO] si deduces al responsable. No incluyas cifras que nadie dijo.

CONTROL DE CALIDAD
Revisa que cada decisión tenga una frase de evidencia. Revisa que el resumen no contenga nada ausente de la tabla. Dime si la transcripción tiene partes incompletas.`,
      seguimiento: [
        "Dime qué decisiones dependen de que otra área entregue información primero.",
        "Convierte los pendientes en una tabla con tarea, responsable, fecha y prioridad para pasarla a Planner.",
        "Señala los puntos donde la reunión mencionó cifras sin decir el rubro al que correspondían."
      ],
      verificar: [
        "Cada decisión tiene una frase de la transcripción que la respalda.",
        "Las cifras del resumen fueron dichas en voz alta y no calculadas por Copilot.",
        "Los responsables y fechas coinciden con lo dicho y no con una suposición.",
        "El resumen para el CFO se compara con el acta oficial antes de enviarlo."
      ]
    },
    {
      necesidad: "Reunión con revisoría fiscal",
      titulo: "Solicitudes y hallazgos de la reunión con la revisoría fiscal",
      donde: "Copilot en la reunión de Teams con la revisoría fiscal ya terminada, transcripción activada.",
      antes: "Confirma la transcripción. Ten la lista de requerimientos que la revisoría envió antes de la reunión.",
      prompt: `ROL
Eres un contador senior de una aseguradora que lleva el control de requerimientos de la revisoría fiscal durante el cierre.

CONTEXTO
Acabo de salir de una reunión con la revisoría fiscal sobre el cierre de [mes]. Pidieron soportes de conciliaciones, explicación de partidas antiguas en cuentas por cobrar y detalle de ajustes manuales. Los datos están anonimizados y los ejemplos son inventados, como una partida de 27 millones con 210 días de antigüedad.

FUENTES
Usa solo la transcripción de esta reunión. No uses archivos ni el sistema contable. Si alguien nombró un documento, anota el nombre tal como se dijo.

INSTRUCCIÓN
1. Extrae cada solicitud de la revisoría en una tabla con las columnas: solicitud, cuenta o proceso, documento pedido, quién la pidió, fecha límite, responsable interno.
2. Separa las solicitudes en tres grupos: urgentes (vencen en menos de 3 días hábiles), normales y sin fecha.
3. Identifica los hallazgos o dudas que la revisoría expresó sobre políticas contables o estimaciones.
4. Marca las solicitudes que dependen de otra área, indicando cuál.
5. Redacta un correo de confirmación de máximo 130 palabras para la revisoría con lo que me comprometí a entregar.

FORMATO DE SALIDA
Tabla de solicitudes con el grupo de prioridad, lista de hallazgos o dudas en máximo 6 viñetas y el correo de confirmación.

LÍMITES
No aceptes plazos que nadie dijo. Marca [SUPUESTO] cuando infieras un responsable. Marca [VERIFICAR] cuando una fecha se haya dicho de forma ambigua. Escribe PENDIENTE si no se acordó.

CONTROL DE CALIDAD
Revisa que cada solicitud se pueda ubicar en la transcripción y que el correo no prometa más de lo que se dijo. Dime qué partes de la reunión no quedaron en la transcripción.`,
      seguimiento: [
        "Ordena las solicitudes por fecha límite y dime cuál es la ruta crítica para entregar antes del cierre.",
        "Redacta tres mensajes cortos para los responsables internos pidiéndoles su soporte con la fecha acordada.",
        "Lista las preguntas de la revisoría que todavía no tienen respuesta clara."
      ],
      verificar: [
        "Cada solicitud de la tabla se puede ubicar en la transcripción.",
        "Las fechas límite son las que se dijeron y no una deducción.",
        "El correo de confirmación no compromete entregas que nadie acordó.",
        "Los documentos pedidos están escritos con el nombre que usó la revisoría."
      ]
    },
    {
      necesidad: "Preparar la siguiente conciliación",
      titulo: "Preparación de la reunión de conciliaciones a partir de la anterior",
      donde: "Panel de Copilot en la reunión anterior de conciliaciones en Teams, ya terminada.",
      antes: "Ten la fecha de la próxima reunión y las áreas que deben asistir. La transcripción de la reunión previa debe estar disponible.",
      prompt: `ROL
Eres un analista de contabilidad de una aseguradora que prepara la siguiente reunión de seguimiento de conciliaciones.

CONTEXTO
La reunión anterior revisó conciliaciones bancarias, de reaseguro cedido y de comisiones por pagar. Quedaron partidas abiertas y compromisos de varias áreas. La próxima reunión es el [fecha]. Los datos están anonimizados y las cifras son de ejemplo, como 6 partidas abiertas de la conciliación del banco [nombre ficticio].

FUENTES
Usa solo la transcripción de la reunión anterior. No uses archivos ni saldos. Si una cifra no se dijo, no la incluyas.

INSTRUCCIÓN
1. Lista las partidas abiertas mencionadas con estas columnas: conciliación, partida, monto dicho, antigüedad mencionada, responsable, compromiso asumido.
2. Marca cuáles compromisos ya deberían estar cumplidos para la nueva fecha.
3. Propón una agenda de 40 minutos con bloques de tiempo, ordenada por impacto en el cierre.
4. Redacta las 5 preguntas que debo hacer al comienzo de la reunión para comprobar avances.
5. Redacta un recordatorio de máximo 80 palabras para enviar a los asistentes con lo que deben traer.

FORMATO DE SALIDA
Tabla de partidas, agenda con tiempos, lista de 5 preguntas y el recordatorio.

LÍMITES
No supongas que un compromiso se cumplió. Marca [SUPUESTO] cuando propongas el orden de la agenda por criterio propio. Marca [VERIFICAR] cuando un monto no sea claro. Escribe PENDIENTE donde falte responsable.

CONTROL DE CALIDAD
Revisa que las partidas de la tabla estén todas en la transcripción y que la agenda sume exactamente 40 minutos. Dime qué temas quedaron sin responsable. Revisa también que el recordatorio incluya fecha, hora y los documentos que cada área debe traer, y que ninguna partida aparezca dos veces en la tabla.`,
      seguimiento: [
        "Dime cuáles partidas se repiten como pendientes desde la reunión anterior y cuáles son nuevas.",
        "Reduce la agenda a 25 minutos dejando solo las partidas de mayor impacto en el cierre.",
        "Escribe una invitación de tres líneas para la reunión con el objetivo y lo que debe traer cada área."
      ],
      verificar: [
        "Las partidas abiertas y los montos salen de lo dicho en la transcripción.",
        "La agenda suma exactamente los minutos pedidos.",
        "Los responsables son los mencionados y no los que supone Copilot.",
        "El recordatorio refleja compromisos reales de la reunión anterior."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Revisión de variaciones contra presupuesto",
      titulo: "Facilitator en la reunión mensual de variaciones contra presupuesto",
      donde: "Chat de una reunión programada de Teams, con Facilitator activo.",
      antes: "Programa la reunión con los responsables de cada centro de costos. Ten el presupuesto y el real como ejemplo anonimizado.",
      prompt: `ROL
Eres Facilitator, el asistente de la reunión de revisión de variaciones contra presupuesto de una aseguradora. Piensas como un analista de planeación financiera que exige explicación para cada desviación relevante.

CONTEXTO
Reunión programada de 60 minutos, el [día]. Participan planeación financiera, contabilidad y los líderes de centros de costos. Se revisan gastos administrativos, comisiones, gastos de personal y gastos de adquisición. Los datos están anonimizados y las cifras de la reunión son de ejemplo.

FUENTES
Usa solo lo dicho en la reunión y el chat. No uses el ERP ni cifras que nadie haya mencionado. No calcules variaciones, solo registra las que se digan.

INSTRUCCIÓN
1. Sigue esta agenda y avisa 3 minutos antes de cada cambio: 0 a 10 resumen del mes (planeación), 10 a 40 revisión por centro de costos (cada líder 5 minutos), 40 a 52 variaciones que exceden el 10 por ciento, 52 a 60 acciones y cierre.
2. Lleva las notas con esta estructura que pego aquí: [Centro de costos, Presupuesto dicho, Real dicho, Variación dicha, Explicación, Acción].
3. Clasifica cada intervención como EXPLICACIÓN, COMPROMISO, RIESGO, PENDIENTE o PREGUNTA ABIERTA.
4. En el minuto 40 haz un recap de las variaciones sin explicación.
5. Al terminar entrega el resumen y la tabla de tareas.

FORMATO DE SALIDA
Tabla de variaciones con las columnas de la estructura. Resumen de máximo 6 viñetas. Tabla lista para Planner con tarea, responsable, fecha, prioridad.

LÍMITES
No aceptes una variación sin explicación como cerrada. Marca [VERIFICAR] cuando el valor dicho no coincida entre dos personas. Escribe PENDIENTE si falta responsable o fecha. Marca [SUPUESTO] para cualquier dato inferido.

CONTROL DE CALIDAD
Antes del cierre, confirma en voz alta que cada variación mayor al 10 por ciento tiene explicación o tarea. Revisa que la tabla de Planner tenga las cuatro columnas.`,
      seguimiento: [
        "Dime cuáles variaciones quedaron sin explicación ni responsable para cerrarlas antes de terminar.",
        "Prepara un borrador en Word con el resumen de la reunión para enviarlo al CFO.",
        "Muestra solo las acciones de alta prioridad con fecha dentro de los próximos 5 días hábiles."
      ],
      verificar: [
        "La reunión era programada y no instantánea, para que Facilitator esté disponible.",
        "Las variaciones registradas son las dichas en la reunión y no recalculadas.",
        "Cada variación mayor al umbral tiene explicación o tarea con responsable.",
        "La tabla para Planner se revisó antes de importarla."
      ]
    },
    {
      necesidad: "Comité de cartera y recaudo",
      titulo: "Facilitator en el comité semanal de cartera y recaudo",
      donde: "Chat de la reunión programada de Teams del comité de cartera, con Facilitator.",
      antes: "Programa la reunión con tesorería, cobranza y área comercial. Ten un listado anonimizado de intermediarios con cartera vencida.",
      prompt: `ROL
Eres Facilitator, el asistente del comité semanal de cartera y recaudo de una aseguradora. Piensas como un jefe de cuentas por cobrar que busca fechas de pago concretas.

CONTEXTO
Reunión programada de 45 minutos, cada [día de la semana]. Participan cobranza, tesorería, contabilidad y representantes comerciales. Se revisa la cartera de primas por rangos de edad (1 a 30, 31 a 60, 61 a 90 y más de 90 días) y la gestión con intermediarios. Los datos están anonimizados y los intermediarios y cifras son de ejemplo.

FUENTES
Usa solo lo dicho en la reunión y el chat. No uses el ERP. No inventes montos ni fechas de pago.

INSTRUCCIÓN
1. Sigue esta agenda y avisa 3 minutos antes de cada cambio: 0 a 8 recaudo de la semana (tesorería), 8 a 28 intermediarios con cartera de más de 90 días (cobranza), 28 a 38 pólizas para cancelación por falta de pago (comercial), 38 a 45 compromisos y cierre.
2. Lleva las notas con esta estructura que pego aquí: [Intermediario, Rango de edad, Monto dicho, Gestión realizada, Promesa de pago, Responsable].
3. Registra cada punto como PROMESA, GESTIÓN, ESCALAMIENTO, PENDIENTE o RIESGO.
4. Cuando alguien prometa un pago, pregunta por fecha, monto y forma de pago.
5. Al final deja un recap y la tabla de tareas.

FORMATO DE SALIDA
Tabla por intermediario con las columnas de la estructura. Resumen de 5 viñetas. Tabla para Planner con tarea, responsable, fecha, prioridad.

LÍMITES
No registres una promesa sin fecha como cumplida. Marca [VERIFICAR] los montos que difieran entre cobranza y tesorería. Escribe PENDIENTE si falta fecha o responsable. Marca [SUPUESTO] si infieres algo.

CONTROL DE CALIDAD
Antes de cerrar, lee en voz alta las promesas sin fecha. Revisa que cada intermediario tratado tenga una acción asignada.`,
      seguimiento: [
        "Dime qué intermediarios quedaron con promesa de pago sin fecha para pedirla antes de cerrar la reunión.",
        "Prepara un borrador en Word con el resumen de promesas y escalamientos para el director financiero.",
        "Deja la tabla para Planner solo con las tareas de escalamiento y prioridad alta."
      ],
      verificar: [
        "Cada promesa de pago registrada tiene fecha, monto y responsable dichos en la reunión.",
        "Los montos en conflicto están marcados para verificarse contra el sistema.",
        "La tabla para Planner mantiene las cuatro columnas pedidas.",
        "El resumen no incluye datos de clientes que no se hayan anonimizado."
      ]
    },
    {
      necesidad: "Acta de revisión de reservas",
      titulo: "Facilitator en la revisión de reservas técnicas con acta en Word",
      donde: "Chat de la reunión programada de Teams de revisión de reservas, con Facilitator.",
      antes: "Programa la reunión con siniestros, actuaría y contabilidad. La plantilla de acta propia no está confirmada, por eso se pega la estructura en el prompt.",
      prompt: `ROL
Eres Facilitator, el asistente de la reunión de revisión de reservas técnicas contables de una aseguradora. Piensas como un contador que necesita dejar trazabilidad de cada ajuste.

CONTEXTO
Reunión programada de 50 minutos, el [día hábil] del cierre. Participan contabilidad, actuaría y siniestros. Se revisan la reserva de siniestros avisados, la reserva de siniestros ocurridos y no avisados (IBNR) y los ajustes propuestos. Los datos están anonimizados y los montos son de ejemplo.

FUENTES
Usa solo lo dicho en la reunión y el chat. No calcules reservas ni uses cifras que nadie haya dicho.

INSTRUCCIÓN
1. Sigue esta agenda y avisa 3 minutos antes de cada cambio: 0 a 10 corte de siniestros (siniestros), 10 a 25 comparación contra el mes anterior (contabilidad), 25 a 40 ajustes propuestos y aprobación (actuaría), 40 a 50 asientos pendientes y cierre.
2. Lleva las notas con esta estructura de acta que pego aquí: [Asunto, Reserva afectada, Monto dicho, Propuesta, Decisión, Aprobó, Fecha del asiento].
3. Registra cada punto como AJUSTE, DECISIÓN, RIESGO, PENDIENTE o DUDA ACTUARIAL.
4. Haz un recap en el minuto 40 con los ajustes aún sin aprobación.
5. Al final, genera el borrador del acta en Word y la tabla de tareas.

FORMATO DE SALIDA
Acta en Word con la estructura pegada, tabla de ajustes y tabla para Planner con tarea, responsable, fecha, prioridad.

LÍMITES
No marques un ajuste como aprobado si nadie lo dijo. Marca [VERIFICAR] los montos con versiones distintas. Escribe PENDIENTE si falta quien aprueba o fecha del asiento. Marca [SUPUESTO] para lo inferido.

CONTROL DE CALIDAD
Antes de cerrar, confirma que cada ajuste tenga una decisión y un aprobador. Revisa que el acta use exactamente las columnas de la estructura.`,
      seguimiento: [
        "Muéstrame los ajustes que no tienen aprobador para pedir confirmación antes de terminar.",
        "Resume el acta en 5 viñetas para enviarla al contador general.",
        "Crea una tabla de asientos pendientes con tarea, responsable, fecha y prioridad."
      ],
      verificar: [
        "El acta usa la estructura que se pegó, ya que la plantilla propia no está confirmada.",
        "Cada ajuste tiene decisión y aprobador dichos en la reunión.",
        "Ningún monto fue calculado por Copilot.",
        "El borrador en Word se compara con lo ocurrido en la reunión antes de firmarse."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Reducir la cartera vencida",
      titulo: "Meta: bajar la cartera vencida de más de 90 días en el trimestre",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Ten el listado de cartera por edades, el acta del último comité de cartera y la política de cobro. Adjúntalos con cifras de ejemplo.",
      prompt: `ROL
Eres un jefe de cuentas por cobrar de una aseguradora que arma el plan de trabajo para reducir la cartera de primas vencida.

CONTEXTO
Objetivo: reducir la cartera de primas con más de 90 días de vencida de 420 millones a 250 millones de pesos antes del [fecha]. Los datos están anonimizados y las cifras son de ejemplo. Resultado esperado: acuerdos de pago firmados con los 10 intermediarios de mayor saldo, cancelación de pólizas que correspondan y provisión de cartera ajustada. Restricciones: no se puede cancelar una póliza sin notificación previa por escrito y la provisión se ajusta solo con aprobación del contador general.

FUENTES
Usa solo los archivos que adjunto: el listado de cartera, el acta del comité y la política de cobro. No supongas saldos, plazos ni nombres de personas.

INSTRUCCIÓN
1. Genera entre 14 y 18 tareas agrupadas en cuatro depósitos: Depuración de la base, Gestión con intermediarios, Cancelaciones y notificaciones, Provisión y reporte.
2. Para cada tarea indica responsable por rol, fecha de inicio, fecha límite, prioridad (alta, media, baja) y dependencia si existe.
3. Pon las tareas con notificación escrita antes de las cancelaciones.
4. Incluye un hito semanal de seguimiento del recaudo.
5. Escribe al final los 3 riesgos principales del plan.

FORMATO DE SALIDA
Lista de tareas por depósito con los campos indicados y, al final, los riesgos. Cada tarea en una sola línea.

LÍMITES
No inventes responsables con nombre propio. Marca [SUPUESTO] cuando una fecha se infiera. Marca [VERIFICAR] los saldos que no estén en el archivo. Escribe PENDIENTE donde falte un dato. No incluyas tareas que dependan de leer reuniones.

CONTROL DE CALIDAD
Revisa que cada tarea tenga fecha, prioridad y responsable por rol, que las notificaciones precedan a las cancelaciones y que el número de tareas esté en el rango pedido.`,
      seguimiento: [
        "Muéstrame la ruta crítica de este plan y qué tareas la retrasarían si fallan.",
        "Reduce el plan a 10 tareas dejando solo lo necesario para llegar a 250 millones.",
        "Dime qué tareas dependen de aprobaciones del contador general."
      ],
      verificar: [
        "Las tareas generadas corresponden al texto de la meta y a los archivos adjuntos.",
        "Los depósitos, fechas y prioridades son coherentes entre sí.",
        "Las notificaciones escritas están programadas antes de cualquier cancelación.",
        "Se confirma que el plan es premium, necesario para Planner Agent."
      ]
    },
    {
      necesidad: "Revisión del plan del cierre trimestral",
      titulo: "Revisión de un plan existente de cierre trimestral",
      donde: "Planner, abre el plan del cierre trimestral y pide a Copilot revisarlo en el chat del plan.",
      antes: "Ten el plan ya creado con sus tareas y fechas. Ten el calendario oficial del cierre como referencia.",
      prompt: `ROL
Eres un controller financiero que audita el plan de trabajo del cierre trimestral de una aseguradora antes de arrancar.

CONTEXTO
Tenemos un plan en Planner para el cierre del trimestre que termina en [mes]. Incluye conciliaciones, reservas técnicas, comisiones, reaseguro, impuestos y estados financieros. Los datos están anonimizados y los nombres de ejemplo. Necesito saber si el plan tiene huecos, fechas imposibles o responsables sobrecargados.

FUENTES
Usa solo las tareas del plan y el calendario oficial del cierre que adjunto. No supongas tareas que no estén escritas. No uses reuniones ni chats.

INSTRUCCIÓN
1. Revisa todas las tareas del plan y detecta las que no tienen responsable, fecha o prioridad.
2. Compara las fechas contra el calendario oficial y lista las que se pasan del límite.
3. Detecta dependencias que faltan, por ejemplo reservas contabilizadas antes de recibir el corte de siniestros.
4. Identifica a las personas con más de 6 tareas con vencimiento en la misma semana.
5. Propón máximo 8 ajustes concretos, cada uno con la tarea afectada, el cambio sugerido y el motivo.
6. Redacta un resumen de estado de máximo 100 palabras para el CFO.

FORMATO DE SALIDA
Cuatro bloques: TAREAS INCOMPLETAS, FECHAS FUERA DE CALENDARIO, DEPENDENCIAS FALTANTES y SOBRECARGA. Luego la tabla de ajustes con las columnas tarea, cambio, motivo. Al final el resumen.

LÍMITES
No cambies fechas del calendario oficial. Marca [SUPUESTO] cuando infieras una dependencia. Marca [VERIFICAR] si una fecha del plan no se pueda comparar. Escribe PENDIENTE si falta información.

CONTROL DE CALIDAD
Revisa que cada hallazgo cite la tarea exacta del plan y que ningún ajuste contradiga el calendario oficial. Dime qué partes del plan no pudiste leer.`,
      seguimiento: [
        "Reordena los ajustes por impacto en la fecha de entrega del cierre.",
        "Dime qué tareas faltan para cubrir los impuestos del trimestre.",
        "Redacta un mensaje de 4 líneas para los responsables con tareas incompletas."
      ],
      verificar: [
        "Cada hallazgo menciona la tarea exacta que existe en el plan.",
        "Las fechas comparadas son las del calendario oficial y no una estimación.",
        "Los ajustes propuestos no violan dependencias entre áreas.",
        "El resumen para el CFO coincide con el estado real del plan."
      ]
    },
    {
      necesidad: "Plan de respuesta a hallazgos",
      titulo: "Plan de respuesta a hallazgos de la revisoría fiscal desde documentos",
      donde: "Planner, pestaña Metas, Agregar meta, con los documentos como archivos de apoyo.",
      antes: "Reúne el informe de hallazgos de la revisoría y la carta de recomendaciones. Adjúntalos anonimizados.",
      prompt: `ROL
Eres un contador general de una aseguradora que arma el plan de respuesta a los hallazgos de la revisoría fiscal.

CONTEXTO
La revisoría entregó un informe con 9 hallazgos sobre conciliaciones antiguas, soportes de ajustes manuales y segregación de funciones en el cierre. Debemos responder antes del [fecha] y tener acciones correctivas en marcha. Los datos están anonimizados y los hallazgos y cifras son de ejemplo.

FUENTES
Usa solo los documentos adjuntos: el informe de hallazgos y la carta de recomendaciones. No supongas hallazgos ni fechas que no estén allí.

INSTRUCCIÓN
1. Genera al menos una tarea por hallazgo, y máximo tres cuando el hallazgo requiera varias acciones.
2. Agrupa las tareas en depósitos: Respuesta formal, Corrección contable, Cambio de proceso y Evidencia para la revisoría.
3. Para cada tarea indica responsable por rol, fecha límite, prioridad y el hallazgo que atiende.
4. Marca como alta prioridad los hallazgos clasificados como significativos por la revisoría.
5. Incluye una tarea de seguimiento quincenal con la revisoría.
6. Termina con una lista de los hallazgos que dependen de otra área.

FORMATO DE SALIDA
Lista por depósito, una tarea por línea, con los campos pedidos. Al final, la lista de dependencias entre áreas.

LÍMITES
No inventes la clasificación de un hallazgo. Marca [SUPUESTO] cuando asignes un rol por criterio propio. Marca [VERIFICAR] cuando el documento no sea claro. Escribe PENDIENTE donde falte la fecha. No incluyas tareas basadas en reuniones.

CONTROL DE CALIDAD
Revisa que los 9 hallazgos tengan al menos una tarea, que cada tarea cite su hallazgo y que ninguna fecha exceda la fecha de respuesta.`,
      seguimiento: [
        "Dime qué hallazgos no tienen tarea y por qué.",
        "Genera una versión corta del plan con solo las tareas de prioridad alta.",
        "Redacta la primera frase de respuesta formal para cada hallazgo significativo."
      ],
      verificar: [
        "Los 9 hallazgos del informe tienen al menos una tarea cada uno.",
        "Cada tarea indica el hallazgo que atiende.",
        "Las fechas límite no superan la fecha de respuesta a la revisoría.",
        "Los roles asignados son razonables y no nombres propios inventados."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Decisiones del comité financiero",
      titulo: "Notas del comité financiero a decisiones, ideas y pendientes",
      donde: "OneNote, página con los apuntes del comité, icono de Copilot o clic derecho.",
      antes: "Pega en la página tus notas del comité tal como las escribiste. Usa cifras de ejemplo y no pegues saldos reales.",
      prompt: `ROL
Eres un asistente de un analista financiero que debe separar lo decidido de lo solo propuesto en el comité financiero de una aseguradora.

CONTEXTO
Estas son mis notas del comité financiero del mes. Tienen frases sueltas sobre resultado técnico, gastos, cartera, inversiones y una propuesta de ajuste a reservas. Hay opiniones, ideas y acuerdos mezclados. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo el texto de esta página. No uses otros archivos, correos ni saldos. No calcules cifras que no estén escritas.

INSTRUCCIÓN
1. Clasifica cada frase importante como DECISIÓN, IDEA, PENDIENTE, RIESGO o DATO.
2. Para cada decisión escribe quién decidió, cuándo aplica y qué rubro toca, solo si está escrito en mis notas.
3. Para cada idea indica quién la propuso y qué falta para convertirla en decisión.
4. Para los pendientes arma una tabla con tarea, responsable, fecha límite y estado.
5. Detecta contradicciones entre dos notas, por ejemplo dos montos distintos para el mismo rubro.
6. Redacta un resumen de máximo 100 palabras para el CFO.

FORMATO DE SALIDA
Cinco bloques con rótulo: DECISIONES, IDEAS, PENDIENTES (tabla), RIESGOS y CONTRADICCIONES. Al final, el resumen.

LÍMITES
No conviertas una idea en decisión. Marca [SUPUESTO] si completas un dato que no está en las notas. Marca [VERIFICAR] ante contradicciones. Escribe PENDIENTE donde falte responsable o fecha.

CONTROL DE CALIDAD
Revisa que cada decisión provenga de una frase de mis notas y que el resumen no tenga información que no esté en la página. Dime qué frases no supiste clasificar. Confirma además que el resumen para el CFO no pase de 100 palabras y que cada contradicción cite las dos notas involucradas con sus palabras textuales.`,
      seguimiento: [
        "Muéstrame solo las ideas que podrían volverse decisión en el próximo comité y qué las frena.",
        "Reescribe el resumen para el CFO en un tono más breve de 60 palabras.",
        "Dime qué pendientes no tienen responsable."
      ],
      verificar: [
        "Cada decisión corresponde a una frase de mis notas.",
        "Las ideas no quedaron presentadas como decisiones.",
        "Las contradicciones se consultan con quienes estuvieron en el comité.",
        "Las cifras del resumen son las escritas en la página."
      ]
    },
    {
      necesidad: "Conciliación bancaria diaria",
      titulo: "Notas de conciliación bancaria a lista de partidas por resolver",
      donde: "OneNote, página con los apuntes de la conciliación, icono de Copilot o clic derecho.",
      antes: "Pega en la página tus apuntes de la conciliación con los nombres de bancos y partidas como los escribes. Usa cifras de ejemplo.",
      prompt: `ROL
Eres un asistente de tesorería y contabilidad de una aseguradora que ordena las partidas pendientes de la conciliación bancaria.

CONTEXTO
Estas son mis notas de la conciliación del banco [nombre ficticio] del mes de [mes]. Hay partidas en tránsito, consignaciones sin identificar, cheques pendientes de cobro, gastos bancarios sin contabilizar y notas débito sin soporte. Están desordenadas. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo el texto de esta página. No uses extractos bancarios ni el sistema contable. No sumes ni restes diferencias que no estén escritas.

INSTRUCCIÓN
1. Extrae cada partida abierta y clasifícala en uno de estos tipos: en tránsito, sin identificar, gasto bancario, nota débito o crédito, cheque pendiente.
2. Arma una tabla con las columnas: tipo, descripción, monto escrito, fecha escrita, antigüedad escrita, acción necesaria, responsable.
3. Marca como urgentes las partidas con más de 30 días de antigüedad escrita.
4. Lista las consignaciones sin identificar que requieren pedir soporte a cobranza.
5. Escribe tres preguntas que debo resolver con tesorería antes del cierre.

FORMATO DE SALIDA
Tabla de partidas ordenada por antigüedad, lista de urgentes y lista de consignaciones sin identificar. Al final las tres preguntas.

LÍMITES
No concilies ni cuadres saldos. Marca [SUPUESTO] cuando clasifiques una partida por criterio propio. Marca [VERIFICAR] si el monto o la fecha no estén claros. Escribe PENDIENTE donde falte responsable.

CONTROL DE CALIDAD
Revisa que cada partida de la tabla esté escrita en mis notas y que las urgentes realmente superen los 30 días escritos. Dime qué notas no pudiste clasificar. Confirma también que la tabla conserve el orden por antigüedad y que cada acción necesaria sea una tarea concreta que una persona pueda hacer en un día.`,
      seguimiento: [
        "Reordena la tabla por responsable para mandar a cada persona lo suyo.",
        "Redacta un mensaje de 4 líneas para cobranza pidiendo soporte de las consignaciones sin identificar.",
        "Dime cuáles partidas podrían resolverse con un solo ajuste contable según mis notas."
      ],
      verificar: [
        "Cada partida existe en mis notas con el monto y fecha escritos.",
        "Las urgentes superan los 30 días escritos y no calculados.",
        "No se hizo ninguna conciliación ni cuadre de saldos.",
        "Las partidas clasificadas por criterio propio se revisaron con tesorería."
      ]
    },
    {
      necesidad: "Cuaderno de presupuesto trimestral",
      titulo: "Resumen y reescritura de la sección de presupuesto del trimestre",
      donde: "OneNote, sección del cuaderno de presupuesto, con Copilot en la página o la sección.",
      antes: "Ten el cuaderno con las páginas del presupuesto del trimestre. Si hay tablas pegadas como imagen, Copilot no las leerá.",
      prompt: `ROL
Eres un analista de planeación financiera de una aseguradora que prepara el resumen de la sección de presupuesto del trimestre para su jefe.

CONTEXTO
Mi cuaderno tiene páginas sobre supuestos de primas, gastos administrativos, comisiones y reservas, con comentarios de varias áreas y cambios de enfoque. Algunas páginas contradicen a otras. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo el texto de las páginas de esta sección. No uses archivos, otros cuadernos ni cifras externas. No leas imágenes pegadas. Si una tabla está como imagen, dime y no inventes su contenido.

INSTRUCCIÓN
1. Resume la sección en máximo 150 palabras, agrupando por tema: primas, gastos, comisiones y reservas.
2. Lista los supuestos que aparecen escritos, con el valor mencionado y la página donde está.
3. Detecta supuestos que cambian entre páginas y muestra la versión más reciente según la fecha escrita.
4. Reescribe el resumen en tono formal para un informe a la dirección, en máximo 120 palabras.
5. Responde estas preguntas sobre el cuaderno: [pregunta 1] y [pregunta 2].
6. Lista los vacíos de información que debo cerrar antes de presentar el presupuesto.

FORMATO DE SALIDA
Resumen por tema, tabla de supuestos con las columnas supuesto, valor, página, versión más reciente, versión formal y respuestas a las preguntas. Al final, los vacíos.

LÍMITES
No calcules cifras nuevas. Marca [SUPUESTO] cuando una versión reciente se deduzca por orden de páginas. Marca [VERIFICAR] para supuestos contradictorios. Escribe PENDIENTE donde falte el valor.

CONTROL DE CALIDAD
Revisa que cada supuesto de la tabla se encuentre en una página de la sección. Confirma el conteo de palabras de los dos resúmenes.`,
      seguimiento: [
        "Muéstrame los 3 supuestos con más cambios entre páginas.",
        "Reescribe la versión formal en 5 viñetas para una presentación.",
        "Dime qué temas del presupuesto no tienen ninguna página escrita en el cuaderno."
      ],
      verificar: [
        "Cada supuesto de la tabla aparece en una página real de la sección.",
        "La versión más reciente se confirma con la fecha escrita.",
        "Las tablas pegadas como imagen se revisaron aparte.",
        "El resumen formal no agrega cifras que no estén en el cuaderno."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Informe para comité financiero",
      titulo: "Informe ejecutivo de resultados del mes para el comité financiero",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el estado de resultados y el presupuesto del mes.",
      antes: "Ten el estado de resultados del mes, el presupuesto y el resultado del mes anterior, anonimizados o agregados.",
      prompt: `ROL
Eres un director financiero de una aseguradora con experiencia en resultado técnico, siniestralidad y gastos, que escribe para el comité financiero.

OBJETIVO
Redactar el informe ejecutivo de resultados de [mes] para el comité financiero, de una página, con lo que explica el resultado y lo que requiere decisión.

CONTEXTO
El resultado del mes es de [cifra de ejemplo] frente a un presupuesto de [cifra de ejemplo]. Hay variaciones en primas emitidas, siniestros incurridos, comisiones y gastos administrativos. El comité son 6 personas, entre ellas el CFO y el presidente, y prefieren frases cortas y cifras redondeadas. Todos los datos están anonimizados.

FUENTES
Usa solo los archivos adjuntos: el estado de resultados, el presupuesto y el resultado del mes anterior. No uses cifras externas ni supongas causas que no estén en los archivos. Cita el archivo y la hoja de cada cifra.

INSTRUCCIÓN
1. Resume el resultado del mes en 3 frases.
2. Presenta una tabla con rubro, real, presupuesto, variación en pesos y variación en porcentaje para primas, siniestros, comisiones y gastos.
3. Explica las 3 variaciones más grandes con su causa según los archivos.
4. Lista máximo 3 decisiones que el comité debe tomar.
5. Cierra con 3 riesgos para el próximo mes.

FORMATO DE SALIDA
Máximo 350 palabras, con títulos cortos, la tabla y viñetas. Cifras en millones de pesos con un decimal.

LÍMITES
Marca [SUPUESTO] cuando infieras una causa. Marca [VERIFICAR] las cifras que no coincidan entre archivos. Escribe PENDIENTE si una causa no está documentada. No uses adjetivos como excelente o grave.

CONTROL DE CALIDAD
Antes de entregar, confirma que cada cifra de la tabla venga de un archivo y que las variaciones estén bien restadas. Dime qué fuentes usaste y qué dato no pudiste confirmar.`,
      seguimiento: [
        "Reduce el informe a 150 palabras para presentarlo en el primer minuto del comité.",
        "Dime qué preguntas difíciles puede hacer el CFO sobre las tres variaciones y cómo las responderías con los archivos.",
        "Convierte las decisiones del comité en una tabla con decisión, alternativa, efecto financiero y fecha."
      ],
      verificar: [
        "Cada cifra de la tabla coincide con el archivo y la hoja citada.",
        "Las variaciones en pesos y porcentaje están bien calculadas.",
        "Las causas explicadas aparecen en los archivos y no son opinión de Copilot.",
        "Las cifras del informe se comparan con el cierre contable oficial antes de enviarlo."
      ]
    },
    {
      necesidad: "Correo de cobro a intermediario",
      titulo: "Correo firme de cobro de cartera vencida a un intermediario",
      donde: "Copilot Chat, pestaña Trabajo, o Copilot en Outlook al redactar el correo.",
      antes: "Ten el nombre del intermediario, las pólizas vencidas, el historial de gestiones y el nivel de relación comercial.",
      prompt: `ROL
Eres un jefe de cuentas por cobrar de una aseguradora con experiencia en cobranza a intermediarios, que protege la relación comercial sin perder firmeza.

OBJETIVO
Redactar un correo a [nombre del intermediario] para exigir el pago de primas vencidas, con una fecha concreta de pago y las consecuencias contractuales.

CONTEXTO
El intermediario tiene 12 pólizas con más de 60 días de vencidas, por un total de 96 millones de pesos. Se le contactó dos veces por teléfono y prometió pagar sin cumplir. Es un corredor importante para el ramo [ramo]. El contrato permite cancelar pólizas y suspender comisiones tras 90 días. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo estos datos y el resumen de gestiones que adjunto. No inventes cláusulas del contrato. No cites normas que no te haya dado.

INSTRUCCIÓN
1. Redacta el correo en máximo 180 palabras, con asunto claro.
2. Abre con el reconocimiento de la relación y pasa a la deuda en la segunda frase.
3. Resume las gestiones previas con fechas en una línea.
4. Pide el pago o un acuerdo escrito antes del [fecha] y explica el efecto en cancelaciones y comisiones.
5. Cierra con una oferta concreta de reunión de 20 minutos.
6. Entrega también una versión de 90 palabras para enviar por WhatsApp empresarial.

FORMATO DE SALIDA
Asunto, correo y versión corta. Tono respetuoso, firme y sin amenazas. Tuteo no, trato de usted al intermediario.

LÍMITES
Marca [VERIFICAR] cada cláusula o plazo que no hayas recibido de mí. Marca [SUPUESTO] si completas un dato. Escribe PENDIENTE si falta una fecha. No uses lenguaje agresivo.

CONTROL DE CALIDAD
Revisa que el correo tenga monto, fecha límite y consecuencia en una sola lectura. Revisa que no supere 180 palabras y que no acuse al intermediario. Dime qué datos asumiste.`,
      seguimiento: [
        "Escribe una versión más cordial para un intermediario que siempre pagó a tiempo antes.",
        "Redacta el correo de escalamiento que enviaría al director comercial si no responde antes de la fecha límite.",
        "Dime qué documentos debo adjuntar para que el correo sea difícil de discutir."
      ],
      verificar: [
        "El monto, el número de pólizas y la fecha límite son los que yo di.",
        "Las consecuencias citadas están en el contrato y no las inventó Copilot.",
        "El tono respeta la relación comercial sin perder firmeza.",
        "El correo se revisa con el área jurídica si menciona cancelación o suspensión de comisiones."
      ]
    },
    {
      necesidad: "Comparación de dos versiones del presupuesto",
      titulo: "Comparación de dos versiones del presupuesto y qué cambió",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip las dos versiones del presupuesto.",
      antes: "Ten las dos versiones, la v1 y la v2, con el mismo formato de hoja. Quita datos reales o usa cifras agregadas.",
      prompt: `ROL
Eres un analista de planeación financiera de una aseguradora que revisa los cambios entre dos versiones del presupuesto anual antes de la aprobación.

OBJETIVO
Identificar qué cambió entre la versión 1 y la versión 2 del presupuesto de [año], cuánto cambió y qué cambios necesitan explicación del dueño de cada rubro.

CONTEXTO
La versión 2 la hicieron después de ajustar supuestos de siniestralidad y gastos. El director financiero necesita saber qué rubros subieron o bajaron y por qué, para no aprobar algo que no entiende. Los archivos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo los dos archivos adjuntos. No uses datos externos. Cita siempre el archivo, la hoja y el rubro de cada cambio. No calcules proyecciones nuevas.

INSTRUCCIÓN
1. Compara rubro por rubro: primas, siniestros incurridos, comisiones, gastos de personal, gastos generales y reservas.
2. Arma una tabla con rubro, valor v1, valor v2, diferencia en pesos, diferencia en porcentaje.
3. Marca los rubros con cambio mayor al 5 por ciento.
4. Para cada cambio marcado, indica si el archivo da una explicación y cuál es.
5. Lista las celdas o supuestos que cambiaron sin que el rubro total cambiara.
6. Prepara 5 preguntas para el dueño de cada rubro con cambios sin explicación.

FORMATO DE SALIDA
Tabla comparativa, lista de cambios mayores al 5 por ciento con su explicación o la frase SIN EXPLICACIÓN, y las 5 preguntas.

LÍMITES
No determines cuál versión es mejor. Marca [VERIFICAR] los rubros que no existan en una de las versiones. Marca [SUPUESTO] si interpretas el nombre de un rubro. Escribe PENDIENTE donde no haya explicación.

CONTROL DE CALIDAD
Revisa que las diferencias estén bien restadas y que cada rubro cite archivo y hoja. Dime qué rubros no pudiste comparar.`,
      seguimiento: [
        "Muestra solo los cinco cambios con mayor impacto en pesos sobre el resultado.",
        "Redacta un correo de 6 líneas a los dueños de rubros con las preguntas pendientes.",
        "Resume en 80 palabras qué cambió entre versiones para el director financiero."
      ],
      verificar: [
        "Los valores de v1 y v2 coinciden con las celdas de cada archivo.",
        "Las diferencias en pesos y porcentaje están bien calculadas.",
        "Los rubros con cambio mayor al 5 por ciento aparecen todos.",
        "Copilot no calificó una versión como mejor, solo describió las diferencias."
      ]
    }
  ]
};
