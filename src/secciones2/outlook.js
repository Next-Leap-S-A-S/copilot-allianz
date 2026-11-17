const SEC_OUTLOOK = [
  {
    area: "suscripcion",
    titulo: "Cotización de daños pyme: comparar condiciones en el buzón y responder al corredor",
    donde: "Copilot Chat en Outlook (botón Copilot, panel o página completa) para buscar en el buzón, y luego Nuevo correo > icono de Copilot > Borrador para la respuesta.",
    antes: "Usa el nuevo Outlook o Outlook en la web, porque Copilot Chat sobre el buzón no funciona en Outlook clásico. Ten a mano el nombre anonimizado del cliente y del corredor. Si tu correo está en texto sin formato, cámbialo a HTML para que Borrador funcione.",
    prompt: `ROL
Eres un asistente de apoyo para un suscriptor de daños pymes de Allianz Colombia.

CONTEXTO
Un corredor me pidió cotizar el programa de daños de una pyme de [actividad, por ejemplo metalmecánica]. Recibí dos versiones de condiciones por correo, una del corredor y otra de nuestro equipo técnico. Los datos del caso están anonimizados. Debo responder al corredor esta semana.

FUENTES
Busca solo en mi buzón los correos de los últimos 30 días que mencionen [nombre anonimizado del cliente] o [número de cotización]. Incluye los adjuntos PDF o Word si los puedes leer. No uses internet ni inventes cifras. Si un correo está cifrado o tiene etiqueta de confidencialidad y no lo puedes leer, dímelo.

INSTRUCCIÓN
1. Lista los correos que encontraste con remitente, fecha y asunto.
2. Compara las condiciones de las dos versiones: valor asegurado, deducibles, sublímites, exclusiones, garantías y vigencia.
3. Señala las diferencias que cambian el riesgo para Allianz.
4. Dime qué me pidió el corredor y qué le prometí yo, con la fecha.
5. Propón tres preguntas para aclarar con el corredor antes de cotizar.

FORMATO DE SALIDA
Tabla comparativa con columnas: condición, versión corredor, versión Allianz, diferencia, impacto. Después una lista corta de compromisos con fecha. Al final las tres preguntas.

LÍMITES
No fijes tasas ni apruebes condiciones. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] cualquier cifra que salga de un adjunto. Si un dato no aparece en los correos, escribe PENDIENTE. No envíes nada por mí.

CONTROL DE CALIDAD
Para cada diferencia indica el correo de origen con su cita numerada. Al final dime qué correos no pudiste leer y qué datos faltan para decidir.`,
    seguimiento: [
      "Con la tabla anterior, redacta con Borrador un correo al corredor de máximo 150 palabras con las tres preguntas y un tono cordial y directo.",
      "Escribe una versión en inglés del mismo correo para el reasegurador, con tono formal y los términos técnicos del ramo.",
      "Dime solo las condiciones donde la versión del corredor es más amplia que la nuestra, ordenadas de mayor a menor impacto."
    ],
    verificar: [
      "Abre cada correo citado y confirma que la cifra de la tabla coincide con el adjunto original.",
      "Revisa si algún correo estaba cifrado o con etiqueta de confidencialidad y Copilot lo dejó por fuera.",
      "Comprueba que los compromisos que te atribuye sean de verdad tuyos y no de otra persona del hilo.",
      "Lee el borrador completo antes de enviarlo y confirma que no promete condiciones ni tasas no aprobadas."
    ]
  },
  {
    area: "siniestros",
    titulo: "Hilo de 40 correos con un asegurado inconforme: resumir, responder y pedir documentos",
    donde: "Botón «Resumen por Copilot» o «Resumir» arriba del hilo, luego Responder > icono de Copilot > Borrador, y al final icono de Copilot > Entrenamiento de Copilot sobre tu borrador.",
    antes: "Abre el hilo completo del siniestro. En hilos muy largos Copilot puede omitir los mensajes más antiguos y te lo avisa, así que revisa ese aviso. Ten a mano la lista de documentos que exige el ramo y el número de siniestro anonimizado.",
    prompt: `ROL
Eres un asistente de apoyo para un analista de siniestros de autos de Allianz Colombia.

CONTEXTO
Este hilo tiene cerca de 40 correos entre el asegurado, el taller, el ajustador y nuestro equipo. El asegurado está inconforme porque siente que el proceso va lento. Los datos están anonimizados. Debo responderle hoy y pedirle los documentos que faltan para avanzar.

FUENTES
Usa solo los correos de este hilo y sus adjuntos PDF o Word si los puedes leer. No uses conocimiento externo sobre el caso. Si omitiste mensajes antiguos por la longitud del hilo, dímelo al inicio.

INSTRUCCIÓN
1. Resume el hilo en una cronología corta: qué pasó, quién dijo qué y cuándo.
2. Identifica el motivo principal de la inconformidad del asegurado, con sus propias palabras.
3. Lista los documentos que ya entregó y los que faltan, según lo que dicen los correos.
4. Señala los compromisos que hicimos con el asegurado y si los cumplimos.
5. Redacta una respuesta empática al asegurado, de máximo 180 palabras, que reconozca la demora, explique el siguiente paso y pida los documentos faltantes en una lista clara.

FORMATO DE SALIDA
Cronología de máximo 8 viñetas con fecha. Tabla de documentos con columnas: documento, estado, fecha. Lista de compromisos. Al final la respuesta lista para revisar.

LÍMITES
No determines cobertura, no prometas fechas de pago ni montos. Marca [VERIFICAR] cualquier fecha, valor o número de póliza. Marca [SUPUESTO] lo que deduzcas del tono. Si un documento no aparece mencionado, escribe PENDIENTE. No envíes nada por mí.

CONTROL DE CALIDAD
Cita el correo de origen de cada hecho con su número. Al final dime qué no pudiste confirmar y qué mensajes no leíste.`,
    seguimiento: [
      "Pasa la respuesta por Entrenamiento de Copilot y dime cómo la va a percibir un asegurado molesto y qué frase suena defensiva.",
      "Convierte la lista de documentos faltantes en una carta formal corta, con plazo de entrega de cinco días hábiles y canal de envío.",
      "Haz una versión de la respuesta de 80 palabras para enviar por mensaje de texto o WhatsApp corporativo."
    ],
    verificar: [
      "Revisa si Copilot avisó que omitió mensajes antiguos y lee esos correos tú mismo.",
      "Confirma en el sistema de siniestros la lista real de documentos, y no se quede en lo que dice el hilo.",
      "Verifica que la respuesta no insinúe una decisión de cobertura ni una fecha de pago no aprobada.",
      "Abre cada correo citado para confirmar fechas y compromisos antes de enviar la respuesta."
    ]
  },
  {
    area: "comercial",
    titulo: "Resultados trimestrales de un canal: metas por asesor y reunión de seguimiento",
    donde: "Copilot Chat en Outlook (botón Copilot) para buscar en el buzón y el calendario, y luego Programar con Copilot desde el correo clave para crear la reunión.",
    antes: "Usa el nuevo Outlook, la web, Mac o móvil. Si los reportes llegan a un buzón compartido del equipo comercial, ábrelo en el nuevo Outlook para que Copilot lo pueda consultar. Ten claro el nombre anonimizado del canal y el trimestre.",
    prompt: `ROL
Eres un asistente comercial para un gerente de canal de Allianz Colombia (agencias y corredores).

CONTEXTO
Cierro el trimestre [trimestre] y debo presentar los resultados del canal [nombre anonimizado del canal] al director comercial. Las cifras me llegaron por correo de varios asesores y del área de inteligencia comercial. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Busca en mi buzón y en mi calendario los correos y reuniones de los últimos 90 días sobre [nombre del canal], metas, producción o renovaciones. Usa los adjuntos de Excel o PDF solo si los puedes leer. No uses internet ni inventes cifras.

INSTRUCCIÓN
1. Resume los resultados del trimestre por ramo: primas emitidas, cumplimiento de meta y renovaciones.
2. Arma una vista por asesor con su meta, su resultado y la brecha.
3. Lista lo que me pidió el director comercial en sus correos de este trimestre.
4. Lista los compromisos que hicieron los asesores conmigo y si hay evidencia de que se cumplieron.
5. Propón una agenda de 30 minutos para una reunión de seguimiento con los asesores que están por debajo de la meta.

FORMATO DE SALIDA
Tabla por asesor con columnas: asesor, meta, resultado, brecha, compromiso pendiente. Luego viñetas con lo que pidió el director. Al final la agenda en 4 puntos con tiempos.

LÍMITES
No calcules comisiones ni propongas incentivos. Marca [VERIFICAR] toda cifra y [SUPUESTO] cualquier cálculo que hagas tú. Si a un asesor le falta un dato, escribe PENDIENTE. No convoques ni envíes nada por mí.

CONTROL DE CALIDAD
Indica de qué correo sale cada cifra con su cita. Al final dime qué asesores no tienen datos completos y qué correos no pudiste leer.`,
    seguimiento: [
      "Desde el correo del director, usa Programar con Copilot para crear la reunión con la agenda anterior, el resumen del hilo y los asesores con brecha.",
      "Redacta un correo corto para cada asesor por debajo de la meta, con tono motivador y una fecha de compromiso.",
      "Dame tres mensajes clave para el director comercial, de máximo 25 palabras cada uno."
    ],
    verificar: [
      "Compara cada cifra de la tabla con el reporte oficial del trimestre, no con el resumen de Copilot.",
      "Revisa que la convocatoria tenga los asistentes correctos antes de enviarla.",
      "Confirma que los compromisos de cada asesor aparecen de verdad en un correo con su fecha.",
      "Verifica que ningún correo a asesores mencione datos de clientes sin anonimizar."
    ]
  },
  {
    area: "servicio",
    titulo: "Bandeja saturada: priorizar por urgencia y responder un reclamo complejo con empatía",
    donde: "Copilot Chat en Outlook (botón Copilot) para priorizar, luego Responder > icono de Copilot > Borrador, y Entrenamiento de Copilot sobre el borrador final.",
    antes: "No uses la función «Priorizar mi bandeja», porque se está retirando. Pide la priorización en Copilot Chat. Si atiendes un buzón compartido de servicio, ábrelo en el nuevo Outlook o la web, no en Outlook clásico. Recuerda que el Entrenamiento pide al menos 100 caracteres.",
    prompt: `ROL
Eres un asistente para una analista de servicio al cliente de Allianz Colombia que atiende reclamos de varios ramos.

CONTEXTO
Tengo más de 60 correos sin leer en mi bandeja y en el buzón compartido de servicio. Uno de ellos es un reclamo complejo de un cliente que lleva tres semanas esperando una respuesta sobre [tema, por ejemplo reembolso de salud]. Los datos están anonimizados.

FUENTES
Usa solo los correos de mi bandeja de entrada y del buzón compartido de servicio de los últimos 7 días. No uses internet. Si un correo está cifrado o no lo puedes leer, dímelo.

INSTRUCCIÓN
1. Clasifica los correos sin leer en tres niveles: urgente hoy, esta semana y puede esperar.
2. Usa como criterio de urgencia: plazos legales, quejas reiteradas, clientes que mencionan la Superintendencia Financiera y casos que pasan de 15 días.
3. Para cada correo urgente dime en una línea qué pide el cliente y qué necesito para responder.
4. Del reclamo de [nombre anonimizado del cliente], resume el historial y la petición concreta.
5. Redacta una respuesta empática de máximo 170 palabras que reconozca la espera, explique qué haremos y dé un próximo paso con fecha.

FORMATO DE SALIDA
Tabla de priorización con columnas: remitente, asunto, nivel, motivo, acción sugerida. Después el resumen del reclamo en 5 viñetas. Al final la respuesta.

LÍMITES
No prometas reembolsos, montos ni fechas que no consten en los correos. Marca [VERIFICAR] cualquier plazo legal y [SUPUESTO] lo que deduzcas. Si falta información para responder, escribe PENDIENTE. No envíes nada por mí.

CONTROL DE CALIDAD
Cita el correo de origen de cada clasificación urgente. Al final dime qué correos no revisaste y por qué.`,
    seguimiento: [
      "Pasa mi respuesta por Entrenamiento de Copilot y dime si suena empática, clara y si el cliente entenderá el próximo paso.",
      "Dame una plantilla de respuesta corta para los correos de nivel esta semana, con espacios entre corchetes para personalizar.",
      "¿Qué correos de los últimos 7 días me piden algo a mí directamente y siguen sin respuesta?"
    ],
    verificar: [
      "Revisa tú los correos clasificados como puede esperar, porque Copilot puede subestimar un caso.",
      "Confirma en el sistema de quejas los plazos legales de cada caso urgente.",
      "Verifica que la respuesta no prometa nada que no esté aprobado por el área responsable.",
      "Comprueba que Copilot revisó también el buzón compartido además de tu bandeja personal."
    ]
  },
  {
    area: "tecnica",
    titulo: "Nota técnica y tabla de siniestralidad por ramo: resumir el hilo y escribir a casa matriz en inglés",
    donde: "Botón «Resumen por Copilot» arriba del hilo para leer correos y adjuntos, y luego Nuevo correo > icono de Copilot > Borrador para la versión en inglés.",
    antes: "Abre el hilo donde circula la nota técnica y la tabla de siniestralidad. En el nuevo Outlook y la web Copilot resume adjuntos PDF, Word y PowerPoint. Si la tabla viene en Excel, ten a mano las cifras clave para pegarlas.",
    prompt: `ROL
Eres un asistente para un actuario de la gerencia técnica de Allianz Colombia.

CONTEXTO
En este hilo el equipo discute la nota técnica de [ramo, por ejemplo hogar] y una tabla de siniestralidad por ramo de los últimos tres años. Casa matriz pidió un resumen en inglés antes del comité regional. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo los correos de este hilo y sus adjuntos PDF, Word o PowerPoint. No uses internet ni supuestos actuariales externos. Si una cifra viene de un Excel que no puedes leer, dímelo.

INSTRUCCIÓN
1. Resume el hilo: qué cambios se proponen a la nota técnica y quién los propone.
2. Extrae de la tabla la siniestralidad por ramo y año, y señala los ramos con mayor variación.
3. Lista las observaciones o preguntas que quedan abiertas en el hilo.
4. Redacta en inglés un correo para casa matriz de máximo 200 palabras con los hallazgos principales, la propuesta de ajuste y las preguntas abiertas.
5. Incluye un glosario corto de los términos técnicos que usaste en inglés con su equivalente en español.

FORMATO DE SALIDA
Resumen en 6 viñetas. Tabla con columnas: ramo, año, siniestralidad, variación. Lista de preguntas abiertas. Correo en inglés. Glosario de máximo 8 términos.

LÍMITES
No recalcules tarifas ni propongas recargos que no estén en el hilo. Marca [VERIFICAR] cada cifra de la tabla y [SUPUESTO] cualquier interpretación tuya. Si un dato no está, escribe PENDIENTE. No envíes nada por mí.

CONTROL DE CALIDAD
Cita el correo o adjunto de origen de cada cifra. Al final dime si omitiste mensajes antiguos del hilo y qué adjuntos no pudiste leer.`,
    seguimiento: [
      "Haz el correo en inglés más técnico, para un actuario de casa matriz, sin cambiar las cifras.",
      "Escribe una nota interna en español de 120 palabras para el gerente técnico con la recomendación del equipo.",
      "Dime qué ramos tienen datos incompletos y qué correo pide la información faltante."
    ],
    verificar: [
      "Compara cada cifra de siniestralidad con la base oficial, no con la tabla que resumió Copilot.",
      "Revisa que la traducción conserve los términos técnicos correctos, por ejemplo loss ratio y earned premium.",
      "Confirma si Copilot omitió mensajes antiguos del hilo y si en ellos había cambios a la nota técnica.",
      "Pide a un colega del equipo técnico que lea el correo en inglés antes de enviarlo."
    ]
  },
  {
    area: "juridico",
    titulo: "Hilo de consultas legales y circulares: resumen, compromisos y respuesta al área de negocio",
    donde: "Botón «Resumir» arriba del hilo de consultas, luego Copilot Chat en Outlook para buscar circulares en el buzón, y Entrenamiento de Copilot sobre la respuesta.",
    antes: "Ten presente que Copilot no lee correos cifrados (S/MIME o IRM) ni algunos con etiqueta de confidencialidad. Si el hilo tiene correos así, revísalos tú. Usa el nuevo Outlook o la web para la búsqueda en el buzón.",
    prompt: `ROL
Eres un asistente para un abogado del área jurídica y de cumplimiento de Allianz Colombia.

CONTEXTO
Varias áreas de negocio me han hecho consultas por correo sobre la aplicación de [circular o política, por ejemplo una circular de la Superintendencia Financiera]. El hilo es largo y mezcla preguntas distintas. Los datos están anonimizados. Debo dar una respuesta consolidada esta semana.

FUENTES
Usa los correos de este hilo y busca en mi buzón los correos de los últimos 60 días que mencionen [número o nombre de la circular] o [política interna]. No uses internet ni normas que no estén en los correos. Si un correo está cifrado o tiene etiqueta de confidencialidad y no lo puedes leer, dímelo.

INSTRUCCIÓN
1. Resume el hilo y agrupa las consultas por tema.
2. Para cada consulta indica quién la hizo, cuándo y si ya tiene respuesta.
3. Busca en el buzón los correos donde se haya enviado o comentado la circular, con fecha y remitente.
4. Lista los compromisos que asumí yo en estos correos y su fecha.
5. Redacta una respuesta consolidada al área de negocio de máximo 220 palabras, en lenguaje sencillo y sin jerga legal innecesaria.

FORMATO DE SALIDA
Tabla de consultas con columnas: tema, quién pregunta, fecha, estado. Lista de correos sobre la circular. Lista de mis compromisos. Al final la respuesta.

LÍMITES
No emitas conceptos jurídicos definitivos ni interpretes la norma más allá de lo que dicen los correos. Marca [VERIFICAR] toda cita normativa y [SUPUESTO] toda interpretación. Si una consulta no tiene respuesta en los correos, escribe PENDIENTE. No envíes nada por mí.

CONTROL DE CALIDAD
Cita el correo de origen de cada consulta. Al final dime qué correos no pudiste leer por cifrado o etiqueta.`,
    seguimiento: [
      "Pasa la respuesta por Entrenamiento de Copilot y dime si un lector no abogado la entenderá y qué frase es ambigua.",
      "¿Qué me pidieron sobre esta circular esta semana que todavía no he respondido?",
      "Convierte las consultas en una lista de preguntas frecuentes de máximo 6 preguntas con respuesta corta marcada para verificar."
    ],
    verificar: [
      "Revisa tú los correos cifrados o con etiqueta de confidencialidad que Copilot no pudo leer.",
      "Contrasta cada cita normativa con el texto oficial de la circular.",
      "Confirma que la respuesta no fija una posición jurídica que no haya sido aprobada.",
      "Abre cada correo citado y valida que la consulta está bien atribuida a su autor."
    ]
  },
  {
    area: "finanzas",
    titulo: "Cierre mensual: variaciones contra presupuesto, reporte en inglés y reunión de revisión",
    donde: "Copilot Chat en Outlook (botón Copilot) para buscar en el buzón y el calendario, Borrador con Copilot para el reporte en inglés, y Programar con Copilot para la reunión.",
    antes: "Usa el nuevo Outlook o la web. Reúne en tu buzón los correos de las áreas que explican sus variaciones del mes. Ten a mano el mes de cierre y la fecha límite de entrega a la regional.",
    prompt: `ROL
Eres un asistente para un analista de planeación financiera de Allianz Colombia.

CONTEXTO
Estoy en el cierre de [mes]. Las áreas me enviaron por correo las explicaciones de sus variaciones contra presupuesto. Debo consolidar un reporte para la regional en inglés y agendar una revisión con el gerente financiero. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Busca en mi buzón los correos de los últimos 30 días con asunto o contenido sobre cierre, variaciones o presupuesto de [mes]. Revisa también mi calendario para ver si ya hay reuniones de cierre. Usa adjuntos PDF o Word si los puedes leer. No inventes cifras.

INSTRUCCIÓN
1. Lista las variaciones reportadas por cada área con su monto, su porcentaje y su explicación.
2. Señala las variaciones mayores a [porcentaje] que no tienen explicación o la tienen incompleta.
3. Dime qué áreas no han enviado su información y quién es el responsable.
4. Lista los compromisos de cierre que me pidieron o que yo asumí, con su fecha.
5. Redacta en inglés un resumen ejecutivo de máximo 180 palabras para la regional, con las tres variaciones principales y sus causas.

FORMATO DE SALIDA
Tabla con columnas: área, rubro, presupuesto, real, variación, explicación. Lista de áreas pendientes. Lista de compromisos. Resumen en inglés al final.

LÍMITES
No hagas ajustes contables ni propongas reclasificaciones. Marca [VERIFICAR] toda cifra y [SUPUESTO] toda causa que deduzcas tú. Si un área no envió datos, escribe PENDIENTE. No envíes ni convoques nada por mí.

CONTROL DE CALIDAD
Cita el correo de origen de cada cifra. Al final dime qué correos o adjuntos no pudiste leer.`,
    seguimiento: [
      "Desde el correo del gerente financiero, usa Programar con Copilot para crear una revisión de 45 minutos con agenda y las áreas con variaciones sin explicar.",
      "Redacta un recordatorio corto y cordial para las áreas pendientes, con la fecha límite de cierre.",
      "Haz el resumen en inglés más breve, en 5 viñetas, para pegarlo en la presentación del comité."
    ],
    verificar: [
      "Cruza cada cifra de la tabla con el sistema contable o el archivo oficial de cierre.",
      "Revisa que el resumen en inglés use bien los términos, por ejemplo budget variance y year to date.",
      "Confirma que la convocatoria tenga los asistentes y la fecha correctos antes de enviarla.",
      "Comprueba que ninguna explicación de variación fue inventada por Copilot y que todas vienen de un correo."
    ]
  },
  {
    area: "talento",
    titulo: "Comunicado de onboarding y dudas repetidas sobre beneficios",
    donde: "Copilot Chat en Outlook (botón Copilot) para buscar dudas en el buzón, Nuevo correo > icono de Copilot > Borrador para el comunicado, y Entrenamiento de Copilot antes de enviar.",
    antes: "Si las dudas llegan a un buzón compartido de talento humano, ábrelo en el nuevo Outlook o la web. Si el comunicado está en texto sin formato, cámbialo a HTML para que Borrador funcione. Ten a mano la fecha de ingreso del grupo nuevo.",
    prompt: `ROL
Eres un asistente para una profesional de talento humano de Allianz Colombia encargada de onboarding y beneficios.

CONTEXTO
El [fecha] ingresa un grupo de [número] personas nuevas. En las últimas semanas he recibido muchas preguntas repetidas por correo sobre beneficios: póliza de salud, días de bienestar y auxilio educativo. Quiero un comunicado de bienvenida que responda las dudas más comunes. Los datos están anonimizados.

FUENTES
Busca en mi buzón y en el buzón compartido de talento humano los correos de los últimos 45 días con preguntas sobre beneficios u onboarding. Usa solo la información de beneficios que esté en correos oficiales de talento humano. No uses internet ni inventes condiciones.

INSTRUCCIÓN
1. Agrupa las preguntas recibidas por tema y cuenta cuántas veces se repite cada una.
2. Para cada tema dime si ya existe una respuesta oficial en algún correo y de quién es.
3. Redacta un comunicado de bienvenida de máximo 250 palabras, cálido y claro, con la agenda de la primera semana y las respuestas a las 5 dudas más frecuentes.
4. Usa un asunto corto y atractivo.
5. Lista las dudas que no tienen respuesta oficial para que yo las consulte.

FORMATO DE SALIDA
Tabla de dudas con columnas: tema, número de veces, respuesta oficial sí o no, fuente. Luego el comunicado con asunto. Al final la lista de dudas sin respuesta.

LÍMITES
No inventes beneficios, montos ni requisitos. Marca [VERIFICAR] cualquier condición de un beneficio y [SUPUESTO] lo que deduzcas. Si un beneficio no tiene respuesta oficial, escribe PENDIENTE. No incluyas datos personales de nadie. No envíes nada por mí.

CONTROL DE CALIDAD
Cita el correo de origen de cada respuesta oficial. Al final dime qué correos no pudiste leer.`,
    seguimiento: [
      "Pasa el comunicado por Entrenamiento de Copilot y dime cómo lo percibirá alguien en su primer día y qué parte es confusa.",
      "Haz una versión más corta del comunicado, de 120 palabras, para enviar como recordatorio el día anterior al ingreso.",
      "¿Qué personas me escribieron con dudas de beneficios y aún no tienen respuesta mía?"
    ],
    verificar: [
      "Confirma cada condición de beneficio con la política vigente de talento humano.",
      "Revisa que el comunicado no incluya nombres ni datos personales de los nuevos colaboradores.",
      "Verifica que el conteo de dudas repetidas sea razonable revisando algunos correos tú misma.",
      "Lee el comunicado completo y ajusta el tono a la voz de Allianz antes de enviarlo."
    ]
  },
  {
    area: "tecnologia",
    titulo: "Incidente en producción y avance del proyecto: resumen, mensaje al proveedor en inglés y reunión",
    donde: "Botón «Resumen por Copilot» arriba del hilo del incidente, Copilot Chat en Outlook para buscar el avance del proyecto, y Programar con Copilot desde el correo del incidente.",
    antes: "Abre el hilo del incidente. Si es muy largo, revisa el aviso de Copilot sobre mensajes omitidos. Para buscar en el buzón y programar usa el nuevo Outlook o la web. Ten a mano el número de incidente anonimizado y el nombre del proyecto.",
    prompt: `ROL
Eres un asistente para un líder de tecnología y operaciones de Allianz Colombia.

CONTEXTO
Ayer hubo un incidente en [sistema, por ejemplo el portal de expedición de pólizas] que afectó a varios canales. El hilo tiene correos del equipo interno, de la mesa de ayuda y del proveedor externo, que escribe en inglés. Además debo reportar el avance del proyecto [nombre del proyecto]. Los datos están anonimizados.

FUENTES
Usa los correos de este hilo y busca en mi buzón los correos de los últimos 14 días sobre [nombre del proyecto]. No uses internet. Si omitiste mensajes del hilo por su longitud, dímelo.

INSTRUCCIÓN
1. Resume el incidente: inicio, impacto, causa probable, acciones tomadas y estado actual.
2. Lista los compromisos del proveedor y del equipo interno con su fecha.
3. Del proyecto, dime qué hitos se cumplieron, cuáles están atrasados y qué riesgos se mencionan.
4. Redacta en inglés un correo al proveedor de máximo 150 palabras pidiendo el análisis de causa raíz y una fecha de entrega.
5. Propón una agenda de 30 minutos para la revisión del incidente.

FORMATO DE SALIDA
Línea de tiempo del incidente en máximo 8 viñetas con hora. Tabla de compromisos con columnas: compromiso, responsable, fecha, estado. Tabla de hitos del proyecto. Correo en inglés. Agenda en 4 puntos.

LÍMITES
No atribuyas culpas ni afirmes una causa raíz que no esté confirmada. Marca [VERIFICAR] toda hora, cifra de impacto y fecha, y [SUPUESTO] lo que deduzcas. Si un dato no consta, escribe PENDIENTE. No envíes ni convoques nada por mí.

CONTROL DE CALIDAD
Cita el correo de origen de cada hecho. Al final dime qué no pudiste confirmar y qué mensajes no leíste.`,
    seguimiento: [
      "Usa Programar con Copilot desde el correo del incidente para crear la revisión con la agenda, el resumen del hilo y los asistentes clave.",
      "Escribe un comunicado corto en español para los canales afectados, sin detalles técnicos y con el estado actual.",
      "Haz el correo al proveedor más firme y agrega una referencia al acuerdo de nivel de servicio marcada para verificar."
    ],
    verificar: [
      "Contrasta la línea de tiempo con el registro de la herramienta de gestión de incidentes.",
      "Revisa que el correo en inglés no reconozca responsabilidad de Allianz ni culpe al proveedor sin evidencia.",
      "Confirma el estado de cada hito con el plan del proyecto y no se quede en los correos.",
      "Verifica los asistentes y la agenda de la convocatoria antes de enviarla."
    ]
  }
];
