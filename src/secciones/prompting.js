const SEC_PROMPTING = [
{
  area: "suscripcion",
  titulo: "Correo difícil: declinar un riesgo y pedir información",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el formulario y el informe de inspección.",
  antes: "Ten a la mano el formulario de solicitud y el informe de inspección de la planta (datos anonimizados). Ten claro qué se declina y qué se puede reconsiderar.",
  prompt: `ROL
Eres un suscriptor senior de seguros generales, ramo todo riesgo daño material, con 10 años en pymes del sector alimentos.

OBJETIVO
Redactar un correo al corredor del cliente [cliente pyme] que explique por qué no podemos ofrecer la cobertura de [cobertura] en las condiciones pedidas y qué información permitiría reconsiderar.

CONTEXTO
Planta de [tipo de producción] con cadena de frío. El corredor está molesto porque esperaba cotización esta semana. Todos los datos están anonimizados.

FUENTES
Usa solo los archivos adjuntos (formulario e informe de inspección) y el texto que pego aquí: [pega las condiciones de apetito de riesgo o la política que aplica]. No uses conocimiento general sobre coberturas ni condiciones de otras aseguradoras.

INSTRUCCIÓN
1. Lee los adjuntos y lista los hallazgos de riesgo que motivan la decisión.
2. Redacta el correo con asunto, saludo, decisión, motivos y lista de documentos que reabrirían el caso.
3. Cada motivo debe apoyarse en un hallazgo concreto de los adjuntos.

EXPECTATIVAS
Correo de máximo 220 palabras, tono firme y cordial, sin jerga interna. Después del correo, una tabla de hallazgos con columnas hallazgo, documento y página.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. Si falta un dato, escribe [SUPUESTO] y di qué asumiste. Si algo depende de una norma interna o una circular que no pegué, escribe [VERIFICAR]. No prometas cotización ni plazos. Si el informe de inspección contradice el formulario, señala la diferencia en lugar de elegir una versión.

AUTOCHEQUEO
Al final entrega una tabla con cuatro columnas: afirmación, fuente (archivo y ubicación), nivel de confianza (alto, medio, bajo) y qué debo verificar. Incluye todas las afirmaciones del correo.`,
  seguimiento: [
    "Acorta el correo a 120 palabras y cambia el tono a más cálido, sin perder los motivos ni la lista de documentos. Conserva las marcas SUPUESTO y VERIFICAR que sigan vigentes.",
    "Endurece los límites: elimina cualquier frase que no tenga fuente en los adjuntos, quita adjetivos y deja solo hechos verificables. Actualiza la tabla de autochequeo con los cambios.",
    "Dame una segunda versión dirigida al director comercial del canal, no al corredor. Resume la decisión en 5 líneas y explica el impacto en la relación comercial, sin repetir el detalle técnico."
  ],
  verificar: [
    "Cada hallazgo citado contra el informe de inspección original, página por página.",
    "La decisión y los motivos contra el manual de suscripción o la política de apetito vigente.",
    "Coberturas, deducibles y sublímites mencionados contra la solicitud y el esquema de producto.",
    "Nombres, cargos y plazos contra el sistema de cotización antes de enviar el correo."
  ]
},
{
  area: "siniestros",
  titulo: "Análisis de reclamación: coberturas, exclusiones y faltantes",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la póliza (condiciones) y la carta de reclamación.",
  antes: "Ten la póliza anonimizada y la reclamación del asegurado como archivos. Define si el caso es de [ramo] y qué fecha de ocurrencia declaró el asegurado.",
  prompt: `ROL
Eres un ajustador senior de siniestros de seguros generales, con experiencia en reclamaciones complejas de daño material.

OBJETIVO
Preparar una nota técnica interna de análisis de cobertura para el caso [código del siniestro], que sirva de base para decidir si se objeta, se paga o se pide más información.

CONTEXTO
Reclamación por [tipo de evento] en [ramo]. La cobertura puede estar en discusión por una posible exclusión. Todos los datos están anonimizados.

FUENTES
Usa solo la póliza y la carta de reclamación adjuntas, y lo que pego aquí: [pega los hechos del informe del ajustador]. No uses jurisprudencia, normas ni condiciones de otras pólizas.

INSTRUCCIÓN
1. Resume los hechos en 5 líneas, con la fecha de ocurrencia declarada.
2. Identifica coberturas, deducibles, sublímites y exclusiones de la póliza que aplican y cita la cláusula.
3. Lista los documentos que faltan para decidir.
4. Propón una recomendación con dos alternativas y sus riesgos.

EXPECTATIVAS
Nota de máximo 350 palabras con cuatro secciones: hechos, cláusulas aplicables (tabla de cláusula, texto resumido y efecto), faltantes y recomendación.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. Marca [SUPUESTO] todo lo que no esté en los archivos y [VERIFICAR] toda cláusula cuya lectura sea ambigua. No concluyas que hay o no hay cobertura de forma definitiva, deja la decisión a la persona responsable. Si la póliza tiene endosos, indica cuál prevalece y marca la duda en lugar de resolverla tú.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (documento y cláusula o párrafo), nivel de confianza (alto, medio, bajo) y qué debo verificar.`,
  seguimiento: [
    "Acorta la nota a 200 palabras y cambia el tono a uno apto para el comité de siniestros complejos. Deja las cláusulas en una sola tabla y conserva las marcas VERIFICAR.",
    "Endurece los límites: elimina cualquier conclusión sobre cobertura que no cite cláusula textual y reescribe la recomendación como preguntas abiertas para el responsable del caso.",
    "Dame una segunda versión para explicarle al corredor, en lenguaje sencillo, qué documentos faltan y por qué. No menciones la recomendación interna ni las alternativas."
  ],
  verificar: [
    "Cada cláusula citada contra el texto de la póliza vigente a la fecha de ocurrencia.",
    "Fecha de ocurrencia, vigencia y deducible contra el sistema de siniestros.",
    "Lista de documentos faltantes contra el expediente real del caso.",
    "La recomendación contra el criterio del jefe de siniestros y el área jurídica antes de comunicarla."
  ]
},
{
  area: "comercial",
  titulo: "Comparación de dos propuestas para un cliente de canal",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip las dos versiones de la propuesta.",
  antes: "Ten la versión 1 y la versión 2 de la propuesta comercial (anonimizadas) y el correo del intermediario con sus observaciones.",
  prompt: `ROL
Eres un gerente comercial de seguros con experiencia en canales de intermediarios y en renegociación de condiciones.

OBJETIVO
Comparar la versión 1 y la versión 2 de la propuesta para [cliente o canal] y decidir qué argumentos usar en la llamada de cierre.

CONTEXTO
El intermediario pidió ajustes en prima, forma de pago y vigencia del acuerdo. Debo defender la versión 2 frente a mi comité. Todos los datos están anonimizados.

FUENTES
Usa solo las dos propuestas adjuntas y el correo del intermediario que pego aquí: [pega el correo]. No uses precios de competidores ni datos del mercado.

INSTRUCCIÓN
1. Compara ambas versiones en prima, comisión, forma de pago, vigencia, coberturas y condiciones especiales.
2. Marca qué cambió, quién lo pidió y qué impacto tiene en la rentabilidad.
3. Redacta 4 argumentos para defender la versión 2 y 3 concesiones posibles.

EXPECTATIVAS
Tabla con columnas concepto, versión 1, versión 2 y cambio. Luego los argumentos en viñetas de máximo 25 palabras cada una.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. Marca [SUPUESTO] todo cálculo de rentabilidad que no tenga datos en los archivos y [VERIFICAR] cualquier comisión o condición que aparezca distinta entre documentos. No propongas descuentos que no estén autorizados en el texto. Si una cifra aparece distinta en la propuesta y en el correo, muéstrala en ambas versiones sin elegir una.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (archivo y sección), nivel de confianza (alto, medio, bajo) y qué debo verificar. Incluye cada diferencia de la tabla comparativa.`,
  seguimiento: [
    "Acorta los argumentos a 3 viñetas de 15 palabras y cambia el tono a uno más conversacional para una llamada. Mantén las cifras tal como están en los archivos.",
    "Endurece los límites: elimina las concesiones que no tengan respaldo en las propuestas y marca como VERIFICAR cualquier diferencia de comisión que aún no hayas confirmado.",
    "Dame una segunda versión de los argumentos para presentarlos al comité interno, con foco en rentabilidad y riesgo, y otra línea sobre qué pedir al intermediario a cambio."
  ],
  verificar: [
    "Prima, comisión y forma de pago contra la propuesta final y el sistema de cotización.",
    "Los cambios atribuidos al intermediario contra su correo original.",
    "Concesiones posibles contra la matriz de autorizaciones comerciales vigente.",
    "Cálculos de rentabilidad contra el área técnica antes de usarlos en la llamada."
  ]
},
{
  area: "servicio",
  titulo: "Respuesta a una queja escalada con cronología y compromisos",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el historial de la queja y el texto del reclamo.",
  antes: "Ten el historial de contactos de la queja (anonimizado, sin cédula ni teléfono) y el procedimiento interno de respuesta a quejas.",
  prompt: `ROL
Eres un líder de calidad en servicio al cliente de una aseguradora, con experiencia en respuestas a quejas ante la superintendencia.

OBJETIVO
Redactar la respuesta formal a una queja escalada sobre [motivo de la queja] y dejar claro qué compromisos asumimos y en qué fecha.

CONTEXTO
El cliente lleva [número] contactos sin respuesta definitiva por canal [canal]. La respuesta debe ser empática y precisa. Todos los datos están anonimizados.

FUENTES
Usa solo el historial adjunto, el texto del reclamo y el procedimiento que pego aquí: [pega los pasos y plazos del procedimiento]. No uses información de otros casos ni promesas de otras áreas.

INSTRUCCIÓN
1. Arma una cronología de contactos con fecha, canal y resultado.
2. Identifica en qué punto falló el servicio y cuál fue el plazo incumplido.
3. Redacta la carta con reconocimiento del problema, explicación, acción y fecha de respuesta final.

EXPECTATIVAS
Cronología en tabla de fecha, canal y resultado. Carta de máximo 230 palabras, tono empático y sin jerga de seguros, con un solo compromiso verificable por párrafo.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. Marca [SUPUESTO] lo que no conste en el historial y [VERIFICAR] cualquier plazo o compromiso que dependa de otra área. No admitas responsabilidad legal ni prometas pagos. Si el historial tiene huecos entre contactos, indícalos como periodos sin registro y no los rellenes.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (documento y línea del historial), nivel de confianza (alto, medio, bajo) y qué debo verificar. Incluye cada fecha y compromiso de la carta.`,
  seguimiento: [
    "Acorta la carta a 150 palabras y cambia el tono a uno más cercano, sin perder el reconocimiento del error ni la fecha de respuesta final. Mantén las marcas VERIFICAR.",
    "Endurece los límites: quita cualquier frase que asuma responsabilidad que no consta en el historial y reescribe cada compromiso con fecha, responsable y canal.",
    "Dame una segunda versión como resumen para el director de servicio, en 6 líneas, con causa del fallo, impacto y acción correctiva. Sin tono de carta al cliente."
  ],
  verificar: [
    "Fechas y canales de la cronología contra el CRM o el sistema de PQR.",
    "Plazos de respuesta contra el procedimiento de quejas y la normativa interna vigente.",
    "Compromisos de la carta contra lo que cada área confirmó por escrito.",
    "Datos del cliente y número de radicado contra el sistema antes de enviar."
  ]
},
{
  area: "tecnica",
  titulo: "Nota técnica de ajuste de tarifa con sustento y supuestos",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la tabla de siniestralidad y la nota técnica anterior.",
  antes: "Ten la siniestralidad por ramo (anonimizada, agregada) y la nota técnica vigente. Define el ramo y el período a revisar.",
  prompt: `ROL
Eres un actuario senior con experiencia en tarificación de seguros generales y redacción de notas técnicas.

OBJETIVO
Redactar el borrador de una nota técnica que sustente el ajuste de tarifa del ramo [ramo] para el período [período], explicando los cambios frente a la nota vigente.

CONTEXTO
La siniestralidad del último período subió en [segmento]. El comité de tarifas necesita un borrador que identifique supuestos y límites. Todos los datos están anonimizados y agregados.

FUENTES
Usa solo la tabla de siniestralidad y la nota técnica vigente adjuntas, más lo que pego aquí: [pega los supuestos de inflación, recargos y gastos]. No uses benchmarks externos ni cifras de memoria.

INSTRUCCIÓN
1. Resume la variación de frecuencia y severidad por segmento.
2. Explica el ajuste propuesto y qué supuesto lo sostiene.
3. Lista las limitaciones de los datos y los análisis que faltan.
4. Redacta la nota con objetivo, metodología, resultados y limitaciones.

EXPECTATIVAS
Nota de máximo 380 palabras con las cuatro secciones. Una tabla de supuestos con columnas supuesto, valor, fuente y sensibilidad.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. No calcules relatividades ni primas puras que no estén en los archivos. Marca [SUPUESTO] todo valor que no esté en la fuente y [VERIFICAR] toda cifra que debas recalcular. Si la tabla tiene períodos incompletos, dilo antes de calcular y no extrapoles tendencias.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (archivo y celda o sección), nivel de confianza (alto, medio, bajo) y qué debo verificar. Incluye cada cifra citada en la nota.`,
  seguimiento: [
    "Acorta la nota a 220 palabras y cambia el tono a uno apto para el comité de tarifas, con la conclusión primero. Mantén la tabla de supuestos completa.",
    "Endurece los límites: elimina cualquier cifra que no puedas rastrear a una celda del archivo y reemplázala por VERIFICAR. Actualiza el autochequeo con los cambios.",
    "Dame una segunda versión para el director comercial, en lenguaje no técnico, con qué cambia en la tarifa, a quién afecta y qué supuestos son más sensibles."
  ],
  verificar: [
    "Cada cifra de la nota contra la tabla de siniestralidad en la fuente original, celda por celda.",
    "Supuestos de inflación, recargos y gastos contra el documento aprobado por el comité.",
    "Metodología y relatividades contra la nota técnica vigente y los modelos del área.",
    "Texto final contra los requisitos regulatorios de la nota técnica con el área de cumplimiento."
  ]
},
{
  area: "juridico",
  titulo: "Resumen de circular y plan de adecuación por área",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el texto de la circular y la política interna relacionada.",
  antes: "Ten el texto de la circular (la parte pública, sin datos de casos) y la política interna que podría verse afectada.",
  prompt: `ROL
Eres un abogado senior de cumplimiento de una aseguradora, con experiencia en circulares de la superintendencia y su implementación interna.

OBJETIVO
Preparar un resumen de la circular [número y fecha] y un plan de adecuación por área, listo para presentar al comité de cumplimiento.

CONTEXTO
La circular modifica obligaciones de [tema, por ejemplo reporte, SARLAFT o conducta con el consumidor]. Las áreas afectadas aún no la conocen. Los datos de ejemplo están anonimizados.

FUENTES
Usa solo el texto de la circular y la política interna adjuntas. No cites otras normas, conceptos ni sentencias que no estén en los archivos, ni completes artículos de memoria.

INSTRUCCIÓN
1. Resume las obligaciones nuevas en viñetas, cada una con el numeral de la circular.
2. Compara cada obligación con la política interna y marca si hay brecha.
3. Propone una acción por brecha con área responsable sugerida.
4. Lista las preguntas que deben resolverse con el regulador o con la dirección jurídica.

EXPECTATIVAS
Resumen de máximo 250 palabras y tabla con obligación, numeral, brecha, acción y área sugerida. Preguntas abiertas en una lista aparte.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. No des concepto jurídico definitivo. Marca [SUPUESTO] toda interpretación que no esté en el texto y [VERIFICAR] toda fecha de entrada en vigencia o plazo. Si la circular remite a otra norma que no adjunté, anótalo como referencia pendiente y no la resumas.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (documento y numeral), nivel de confianza (alto, medio, bajo) y qué debo verificar.`,
  seguimiento: [
    "Acorta el resumen a 150 palabras y cambia el tono a uno ejecutivo para el comité, con las tres obligaciones de mayor impacto primero. Conserva los numerales.",
    "Endurece los límites: elimina cualquier interpretación sin numeral de respaldo y marca como VERIFICAR todo plazo. Reescribe las acciones como propuestas sujetas a validación jurídica.",
    "Dame una segunda versión como comunicado para las áreas operativas, en lenguaje sencillo, con qué deben hacer, para cuándo y a quién preguntar."
  ],
  verificar: [
    "Cada numeral citado contra el texto oficial publicado de la circular.",
    "Fechas de vigencia y plazos de implementación contra la circular y el calendario regulatorio.",
    "Las brechas contra la versión vigente de la política interna.",
    "La interpretación y las acciones contra el concepto de la dirección jurídica antes de circular el comunicado."
  ]
},
{
  area: "finanzas",
  titulo: "Explicación de variaciones del cierre para el CFO",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el balance de comprobación y el cierre del mes anterior.",
  antes: "Ten el balance del mes y el del mes anterior (anonimizados o agregados), más la lista de partidas conciliatorias abiertas.",
  prompt: `ROL
Eres un contador senior de una aseguradora, con experiencia en cierre mensual, reservas técnicas y análisis de variaciones.

OBJETIVO
Redactar la nota de variaciones del cierre de [mes] para el CFO, que explique las diferencias frente al mes anterior y deje claras las partidas pendientes.

CONTEXTO
El cierre tiene diferencias en [cuenta o rubro, por ejemplo primas por cobrar, reservas de siniestros o comisiones]. El CFO quiere una explicación breve y sin ambigüedades. Todos los datos están anonimizados.

FUENTES
Usa solo los archivos adjuntos (balances y partidas abiertas) y lo que pego aquí: [pega los comentarios de los analistas]. No uses cifras de memoria ni presupuestos que no estén en los archivos.

INSTRUCCIÓN
1. Calcula la variación absoluta y porcentual por rubro, solo con las cifras de los archivos.
2. Selecciona las 5 variaciones más relevantes y explica la causa si consta en los comentarios.
3. Lista las partidas abiertas con responsable y fecha prevista de conciliación.
4. Redacta la nota para el CFO.

EXPECTATIVAS
Nota de máximo 250 palabras. Tabla con rubro, mes anterior, mes actual, variación y causa. Partidas abiertas en tabla aparte.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. Si una causa no consta en los comentarios, escribe [SUPUESTO] y explica la hipótesis o escribe [VERIFICAR]. No afirmes que una partida está conciliada si no hay evidencia. Si dos comentarios de analistas se contradicen, preséntalos ambos y pide cuál prevalece.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (archivo y celda o línea), nivel de confianza (alto, medio, bajo) y qué debo verificar. Incluye cada cifra de la nota.`,
  seguimiento: [
    "Acorta la nota a 120 palabras y cambia el tono a uno de resumen ejecutivo, con las dos variaciones críticas primero. Mantén las cifras exactas de los archivos.",
    "Endurece los límites: elimina cualquier causa que no esté documentada y reescribe esas variaciones como pendientes con el nombre del responsable de explicarlas.",
    "Dame una segunda versión para el equipo de contabilidad, con las partidas abiertas por responsable, fecha y acción necesaria para cerrar. Sin análisis de causas."
  ],
  verificar: [
    "Cada cifra y porcentaje contra el balance de comprobación en el sistema contable.",
    "Las causas de variación contra las conciliaciones y los soportes de cada analista.",
    "Partidas abiertas, responsables y fechas contra el listado oficial del cierre.",
    "Reservas y comisiones contra los reportes de las áreas técnica y comercial."
  ]
},
{
  area: "talento",
  titulo: "Comunicado de cambio de política y guía de preguntas",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el borrador de la política y el reglamento actual.",
  antes: "Ten el borrador de la política (por ejemplo teletrabajo o beneficios) y el reglamento interno vigente, sin datos de personas.",
  prompt: `ROL
Eres un especialista de talento humano en una aseguradora, con experiencia en comunicación interna y relaciones laborales.

OBJETIVO
Redactar el comunicado a todos los colaboradores sobre el cambio de la política de [tema] y una guía de preguntas frecuentes para los jefes de equipo.

CONTEXTO
El cambio entra en vigencia en [fecha] y modifica reglas de [horarios, modalidad o beneficios]. Hay inquietud en los equipos. Los datos de ejemplo están anonimizados.

FUENTES
Usa solo el borrador de la política y el reglamento adjuntos. No uses prácticas de otras empresas, normas laborales ni cifras de beneficios que no estén en los archivos.

INSTRUCCIÓN
1. Identifica qué cambia, a quién aplica y desde cuándo.
2. Redacta el comunicado con contexto, cambios, fecha y canal de consulta.
3. Prepara 8 preguntas frecuentes con respuesta basada solo en el texto, incluyendo las dudas más probables de un jefe de equipo.
4. Señala qué puntos requieren validación jurídica antes de publicar.

EXPECTATIVAS
Comunicado de máximo 220 palabras, tono claro y respetuoso. Preguntas frecuentes en tabla con pregunta, respuesta y fuente (sección del documento).

LÍMITES
No inventes cifras, fechas, nombres ni coberturas. Marca [SUPUESTO] toda respuesta que no esté en el texto y [VERIFICAR] toda interpretación de derechos laborales. No prometas excepciones ni beneficios que no estén escritos. Si la política no responde una pregunta, dilo con claridad. Si el reglamento y el borrador chocan, indícalo como conflicto y no lo resuelvas por tu cuenta.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (documento y sección), nivel de confianza (alto, medio, bajo) y qué debo verificar.`,
  seguimiento: [
    "Acorta el comunicado a 120 palabras y cambia el tono a uno más cercano, sin perder la fecha de vigencia ni el canal de consulta. Conserva las marcas VERIFICAR.",
    "Endurece los límites: elimina cualquier respuesta de las preguntas frecuentes que no tenga sección de respaldo y reemplázala por «consultar con Talento Humano».",
    "Dame una segunda versión dirigida a los jefes de equipo, con qué decir, qué evitar y cómo escalar casos particulares, en 6 viñetas."
  ],
  verificar: [
    "Cada respuesta contra la política aprobada y el reglamento interno vigente.",
    "Fecha de vigencia y a quién aplica contra la decisión formal de la dirección.",
    "Puntos de derecho laboral contra el concepto del área jurídica antes de publicar.",
    "Canal de consulta y nombres de contacto contra la estructura actual de Talento Humano."
  ]
},
{
  area: "tecnologia",
  titulo: "Informe de estado de un proyecto con riesgos y decisiones",
  donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el cronograma exportado y el acta del último comité.",
  antes: "Ten el cronograma del proyecto (exportado a Excel o PDF), el registro de riesgos y el acta anonimizada del último comité.",
  prompt: `ROL
Eres un líder de proyectos de tecnología de una aseguradora, con experiencia en sistemas de pólizas, integraciones y gestión de riesgos.

OBJETIVO
Redactar el informe de estado del proyecto [nombre del proyecto] para el comité de proyectos, con avance, riesgos y decisiones requeridas.

CONTEXTO
El proyecto está en la fase [fase], con entrega prevista en [fecha]. Hay dependencias con [áreas o proveedores]. Todos los datos están anonimizados.

FUENTES
Usa solo el cronograma, el registro de riesgos y el acta adjuntos. No uses estimaciones propias, porcentajes de avance no escritos ni información de otros proyectos.

INSTRUCCIÓN
1. Resume el avance por hito con estado: a tiempo, en riesgo o retrasado.
2. Lista los 5 riesgos principales con probabilidad, impacto y responsable según el registro.
3. Identifica las decisiones que el comité debe tomar y qué pasa si no se toman.
4. Señala las inconsistencias entre cronograma y acta.

EXPECTATIVAS
Informe de máximo 300 palabras. Tabla de hitos con hito, fecha plan, estado y observación. Tabla de riesgos y lista de decisiones requeridas en viñetas.

LÍMITES
No inventes cifras, fechas, nombres ni coberturas funcionales. Marca [SUPUESTO] todo estado que no conste en los archivos y [VERIFICAR] toda fecha que difiera entre cronograma y acta. No califiques un hito como a tiempo sin evidencia. Si el acta y el cronograma discrepan en un hito, preséntalas lado a lado y no promedies fechas.

AUTOCHEQUEO
Al final entrega una tabla con afirmación, fuente (archivo y fila o párrafo), nivel de confianza (alto, medio, bajo) y qué debo verificar.`,
  seguimiento: [
    "Acorta el informe a 150 palabras y cambia el tono a uno ejecutivo, con las decisiones requeridas primero. Mantén las tablas con solo los hitos en riesgo o retrasados.",
    "Endurece los límites: marca como VERIFICAR todo hito sin evidencia de avance en los archivos y elimina cualquier estimación de fecha que no venga del cronograma.",
    "Dame una segunda versión para el patrocinador del negocio, sin jerga técnica, con qué significa el retraso para el área y qué apoyo se necesita."
  ],
  verificar: [
    "Estado y fechas de cada hito contra el cronograma vigente en la herramienta de gestión.",
    "Riesgos, probabilidad e impacto contra el registro de riesgos oficial.",
    "Decisiones y responsables contra el acta firmada del comité.",
    "Dependencias y compromisos de proveedores contra los contratos o correos de confirmación."
  ]
}
];
