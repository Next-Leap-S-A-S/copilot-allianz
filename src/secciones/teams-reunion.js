const SEC_TEAMS_REUNION = [
  {
    area: "suscripcion",
    titulo: "Cierre de la reunión con la pyme de alimentos: acuerdos y huecos",
    donde: "Panel de Copilot de la reunión en Teams, o pestaña de resumen (Recap) de la reunión ya terminada.",
    antes: "Úsalo con la reunión ya terminada y la transcripción activada. Ten a la mano la lista de documentos que le pediste al cliente.",
    prompt: `ROL
Eres un suscriptor senior de seguros generales, especializado en pymes del sector alimentos (ramos de daños, transporte de mercancías y responsabilidad civil).

CONTEXTO
Acabo de terminar una reunión de 30 minutos con un cliente pyme que quiere asegurar su planta y su inventario. Los datos están anonimizados, con nombres de ejemplo. Necesito dejar listo el seguimiento de la cotización sin volver a ver la grabación.

FUENTES
Usa solo la transcripción de esta reunión. No uses correos, chats ni archivos. Si algo no se dijo en la reunión, no lo completes con conocimiento general del ramo.

INSTRUCCIÓN
1. Lista las decisiones tomadas sobre coberturas, sumas aseguradas, deducibles y condiciones de la cadena de frío. Cada decisión lleva una cita textual corta y quién la dijo.
2. Arma la tabla de pendientes: tarea, responsable, fecha límite y documento que falta (estados financieros, planos, inventario valorizado, certificados de fumigación).
3. Señala los puntos en que cliente y suscriptor no coincidieron, por ejemplo la suma asegurada del inventario o la exclusión de lucro cesante.
4. Identifica riesgos que quedaron abiertos para la cotización (almacenamiento, incendio, contaminación de producto).
5. Escribe un resumen ejecutivo de 5 líneas para el director técnico, que no asistió.

FORMATO DE SALIDA
Cuatro secciones con estos títulos: Decisiones (viñetas), Pendientes (tabla de 4 columnas), Desacuerdos y riesgos (viñetas, máximo 6) y Resumen ejecutivo (5 líneas).

LÍMITES
Si no se dijo el responsable o la fecha, escribe PENDIENTE. No inventes cifras ni nombres. Marca con [VERIFICAR] cualquier valor numérico que se mencionó una sola vez o de forma ambigua. Marca con [SUPUESTO] lo que dedujiste y no se dijo.

CONTROL DE CALIDAD
Al final indica, para cada decisión y cada pendiente, en qué momento de la transcripción aparece, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: llegué 10 minutos tarde. Dime en 5 viñetas qué se ha acordado sobre coberturas y qué documentos pidió el suscriptor, sin repetir saludos ni presentaciones.",
      "Durante la reunión: ¿quién quedó de enviar qué y para cuándo? Respóndeme en una tabla de 3 columnas y marca PENDIENTE donde no se dijo fecha.",
      "Valida contra la transcripción: toma tu tabla de pendientes y para cada fila cita la frase exacta de la que sale. Si no encuentras la frase, quita la fila y dime cuál fue."
    ],
    verificar: [
      "Que cada suma asegurada, deducible o porcentaje coincida con lo dicho en la transcripción y no con valores típicos del ramo.",
      "Que los responsables sean quienes asumieron la tarea en voz alta, no quienes solo estaban presentes.",
      "Que los documentos pendientes correspondan a los que el suscriptor pidió de verdad.",
      "Que los desacuerdos reflejen posiciones distintas del cliente y del equipo, y no simples preguntas aclaratorias."
    ]
  },
  {
    area: "siniestros",
    titulo: "Reunión semanal de siniestros complejos: decisión por caso y reservas",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la reunión ya terminada.",
    antes: "Úsalo cuando termine la reunión. Los casos deben haberse mencionado con su código interno y no con el nombre del asegurado.",
    prompt: `ROL
Eres un coordinador senior de siniestros complejos de seguros generales, con experiencia en ajuste, reservas y reaseguro.

CONTEXTO
Terminó la reunión semanal de siniestros complejos. Cada caso se nombró con su código interno (por ejemplo SIN-0001) y los datos están anonimizados. Necesito el estado de cada caso para el seguimiento del jefe de siniestros y para el reporte de reservas.

FUENTES
Usa solo la transcripción de esta reunión. No consultes otros siniestros ni expedientes. Si un caso se retomó varias veces, une lo dicho y cita ambos momentos.

INSTRUCCIÓN
1. Por cada caso mencionado, escribe la decisión tomada (aceptar, objetar, pedir peritaje, escalar a jurídico, informar a reaseguro) con una cita textual corta y quién la dijo.
2. Arma una tabla de pendientes con caso, acción, ajustador responsable y fecha de la próxima acción.
3. Señala los casos con desacuerdo entre ajustador, jefe o jurídico, y describe cada posición en una línea.
4. Lista riesgos por caso: prescripción, reserva insuficiente, cobertura dudosa, posible fraude, demora en peritaje.
5. Escribe un resumen ejecutivo de 6 líneas para la gerencia, que no asistió, ordenado por casos de mayor exposición.

FORMATO DE SALIDA
Una ficha por caso con 3 viñetas (decisión, desacuerdo, riesgo), luego una tabla única de pendientes y al final el resumen ejecutivo de 6 líneas.

LÍMITES
Si no se dijo ajustador o fecha, escribe PENDIENTE. No calcules reservas ni montos que nadie mencionó. Marca [VERIFICAR] cualquier valor o plazo legal dicho de memoria. Marca [SUPUESTO] cualquier inferencia tuya.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada decisión y cada fecha, y lista los casos donde no pudiste confirmar quién quedó responsable.`,
    seguimiento: [
      "Durante la reunión: entré tarde. Dime qué casos ya se discutieron, qué se decidió en cada uno y cuál es el que se está tratando ahora, en máximo 2 líneas por caso.",
      "Durante la reunión: ¿qué ajustador quedó de hacer qué y para cuándo en el caso que se está discutiendo? Responde solo con lo que se dijo y marca PENDIENTE lo que falte.",
      "Valida contra la transcripción: revisa tus fichas y dime qué decisión o fecha no tiene una cita directa. Corrígela o márcala como VERIFICAR antes de que la copie a Planner."
    ],
    verificar: [
      "Que los códigos de siniestro coincidan con los dichos en la reunión y no se hayan mezclado entre casos.",
      "Que cada fecha de próxima acción corresponda a un compromiso dicho, no a un plazo sugerido por Copilot.",
      "Que las decisiones de objeción o de aceptación sean las que tomó quien tiene autoridad en la reunión.",
      "Que los riesgos de prescripción o reserva sean mencionados por el equipo y no inferidos."
    ]
  },
  {
    area: "comercial",
    titulo: "Comité semanal de ventas: compromisos por canal y cuentas en riesgo",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams, o panel de Copilot una vez termina el comité.",
    antes: "Úsalo con el comité terminado y la transcripción activada. Ten a la mano la meta semanal de primas por canal para contrastar.",
    prompt: `ROL
Eres un gerente comercial de seguros con experiencia en intermediarios, corredores y bancaseguros.

CONTEXTO
Terminó el comité semanal de ventas. Se habló de pipeline, renovaciones, cotizaciones pendientes y metas de prima por canal. Los clientes y corredores están anonimizados con nombres de ejemplo. Necesito dejar los compromisos claros para la semana y un resumen para la gerencia regional.

FUENTES
Usa solo la transcripción de esta reunión. No uses el CRM ni correos. Las cifras de prima o de cumplimiento solo valen si las dijo alguien en voz alta.

INSTRUCCIONES
1. Lista las decisiones del comité (descuentos autorizados, cuentas priorizadas, campañas con un canal) con cita corta y quién las dijo.
2. Arma una tabla de compromisos por ejecutivo comercial: cuenta o corredor, acción, responsable, fecha y prima estimada si se mencionó.
3. Señala los desacuerdos, por ejemplo sobre condiciones de una renovación o sobre quién atiende un corredor.
4. Identifica cuentas en riesgo de fuga o renovaciones sin cotización enviada.
5. Redacta un resumen ejecutivo de 5 líneas para quien no asistió, con la lectura del cumplimiento frente a la meta.

FORMATO DE SALIDA
Decisiones (viñetas), Compromisos (tabla de 5 columnas), Desacuerdos y cuentas en riesgo (viñetas, máximo 6) y Resumen ejecutivo (5 líneas).

LÍMITES
Si falta responsable o fecha, escribe PENDIENTE. No estimes primas, comisiones ni probabilidades de cierre que no se dijeron. Usa [VERIFICAR] para cifras dichas de memoria. Usa [SUPUESTO] para cualquier deducción.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada compromiso y cada cifra, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: llegué tarde. Dime qué cuentas y canales se han tratado, qué se autorizó y qué cifras de cumplimiento se han dicho, en 5 viñetas.",
      "Durante la reunión: ¿a quién le asignaron la renovación o la cotización que se acaba de mencionar y con qué fecha? Si no lo dijeron, respóndeme PENDIENTE.",
      "Valida contra la transcripción: revisa la tabla de compromisos y dime cuáles filas no tienen una frase dicha que las respalde. Márcalas con VERIFICAR y no las quites sin avisarme."
    ],
    verificar: [
      "Que las cifras de prima y de cumplimiento coincidan con las dichas por quien presentó el pipeline.",
      "Que cada compromiso lo haya asumido el ejecutivo nombrado, no otro participante.",
      "Que las cuentas en riesgo las haya señalado el equipo y no las deduzca Copilot.",
      "Que las autorizaciones de descuento sean de quien tiene la facultad en el comité."
    ]
  },
  {
    area: "servicio",
    titulo: "Reunión de calidad con las quejas de la semana: causas y acciones",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la reunión ya terminada.",
    antes: "Úsalo con la reunión terminada. Ten a mano el indicador de tiempo de respuesta para contrastar lo que se dijo.",
    prompt: `ROL
Eres un líder de calidad en servicio al cliente de una aseguradora, con experiencia en PQRS, tiempos de respuesta y trato con el consumidor financiero.

CONTEXTO
Terminó la reunión de calidad donde se revisaron las quejas de la semana por canal (línea de atención, correo, oficina, redes). Los datos están anonimizados y las quejas se mencionan por código. Necesito acciones con dueño y un resumen para la gerencia de servicio.

FUENTES
Usa solo la transcripción de esta reunión. No uses el sistema de PQRS ni correos. No agregues causas que el equipo no mencionó.

INSTRUCCIÓN
1. Agrupa las quejas discutidas por causa raíz y di cuántas se mencionaron por grupo.
2. Para cada grupo, anota la decisión tomada con cita corta y quién la dijo.
3. Arma una tabla de acciones: acción, responsable, fecha, indicador que mostrará si funcionó (por ejemplo días de respuesta o reincidencia).
4. Señala los desacuerdos entre áreas, como servicio, siniestros o tecnología, sobre de quién es la causa.
5. Lista riesgos de incumplimiento: quejas cerca del plazo legal, clientes que escalan a la Superintendencia, reincidencias.
6. Escribe un resumen ejecutivo de 5 líneas para quien no asistió.

FORMATO DE SALIDA
Causas (tabla de 3 columnas: causa, cantidad, decisión), Acciones (tabla de 4 columnas), Desacuerdos y riesgos (viñetas, máximo 5) y Resumen ejecutivo (5 líneas).

LÍMITES
Si falta responsable o fecha, escribe PENDIENTE. No inventes plazos legales ni cantidades. Marca [VERIFICAR] los plazos o cifras dichos sin soporte. Marca [SUPUESTO] cualquier causa que dedujiste.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción sale cada causa y cada acción, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: entré tarde. Dime qué grupos de quejas se han revisado, qué causa se identificó en cada uno y qué acción se propuso hasta ahora, en máximo 6 viñetas.",
      "Durante la reunión: ¿quién quedó de resolver la queja o la acción que se acaba de discutir y para cuándo? Si no se dijo, respóndeme PENDIENTE.",
      "Valida contra la transcripción: revisa tu tabla de causas y dime cuáles cantidades o causas no están respaldadas por lo dicho. Marca esas filas con VERIFICAR y explica por qué."
    ],
    verificar: [
      "Que la cantidad de quejas por grupo coincida con lo dicho y no con un recuento propio de Copilot.",
      "Que cada causa raíz haya sido nombrada por el equipo y no sea una interpretación.",
      "Que los plazos legales o internos citados sean los que se dijeron en la reunión.",
      "Que el indicador de cada acción haya sido acordado y no sugerido por Copilot sin avisar."
    ]
  },
  {
    area: "tecnica",
    titulo: "Revisión de tarifas: decisiones, supuestos y pendientes del modelo",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la revisión ya terminada.",
    antes: "Úsalo con la reunión terminada. Las cifras deben ser de ejemplo o estar anonimizadas, y no deben incluir tarifas vigentes reales.",
    prompt: `ROL
Eres un actuario senior con experiencia en tarificación de seguros generales (autos, hogar, responsabilidad civil) y en reservas técnicas.

CONTEXTO
Terminó la reunión de revisión de tarifas de un ramo. Se discutieron frecuencia, severidad, siniestralidad, gastos, recargo de seguridad y ajustes por zona. Todas las cifras son de ejemplo y los datos están anonimizados. Necesito dejar trazabilidad de lo decidido antes de pasar a comité técnico.

FUENTES
Usa solo la transcripción de esta reunión. No uses bases de datos, notas técnicas ni circulares. Si alguien mencionó una norma de la Superintendencia, trátala como [VERIFICAR] y no la completes de memoria.

INSTRUCCIÓN
1. Lista las decisiones sobre la tarifa (aumento, congelación, cambio de segmentación, recálculo) con cita corta y quién la dijo.
2. Extrae los supuestos actuariales que se dieron por buenos (inflación, tendencia de severidad, base de siniestros, período de experiencia).
3. Arma la tabla de pendientes: análisis, responsable, fecha y dato que falta para completarlo.
4. Señala desacuerdos entre actuaría, técnica y comercial sobre el impacto de la tarifa.
5. Lista riesgos: datos con poca credibilidad, cambios regulatorios, rezago frente al mercado.
6. Escribe un resumen ejecutivo de 6 líneas para el comité técnico, que no asistió.

FORMATO DE SALIDA
Decisiones (viñetas), Supuestos (tabla de 3 columnas: supuesto, valor dicho, quién lo dijo), Pendientes (tabla de 4 columnas), Desacuerdos y riesgos (viñetas) y Resumen ejecutivo (6 líneas).

LÍMITES
No recalcules tarifas ni hagas operaciones actuariales. No inventes porcentajes. Si falta responsable o fecha, escribe PENDIENTE. Usa [SUPUESTO] para lo deducido.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada decisión y cada cifra, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: llegué tarde. Dime qué supuestos actuariales se han dado por aceptados hasta ahora y qué decisión de tarifa está en discusión, en 5 viñetas.",
      "Durante la reunión: ¿quién quedó de entregar el análisis o el dato que se acaba de pedir y para qué fecha? Si no se dijo, respóndeme PENDIENTE.",
      "Valida contra la transcripción: compara tu tabla de supuestos con lo dicho y señala cada valor que no aparezca textual. Márcalo con VERIFICAR y no lo uses en el resumen ejecutivo."
    ],
    verificar: [
      "Que cada porcentaje, factor o tendencia coincida con lo dicho en la reunión y no con un valor típico del ramo.",
      "Que los supuestos listados se hayan aceptado en la reunión y no apenas mencionado como opción.",
      "Que el dato que falta para cada pendiente sea el que el equipo pidió.",
      "Que las referencias regulatorias se hayan dicho y no las haya agregado Copilot."
    ]
  },
  {
    area: "juridico",
    titulo: "Comité de cumplimiento: decisiones, alertas SARLAFT y plazos",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot, solo para uso interno del comité.",
    antes: "Úsalo con la reunión terminada. Confirma que la transcripción y el uso de Copilot estén permitidos para el tema y no pegues datos de personas reales.",
    prompt: `ROL
Eres un abogado senior de cumplimiento en una aseguradora, con experiencia en SARLAFT, protección de datos, conflictos de interés y relación con la Superintendencia Financiera.

CONTEXTO
Terminó el comité de cumplimiento. Se trataron alertas de operaciones inusuales, hallazgos de auditoría, una circular nueva y la actualización de políticas. Los casos están anonimizados y se mencionan por código. Necesito el acta de trabajo y el seguimiento sin redactar jurídicamente nada nuevo.

FUENTES
Usa solo la transcripción de esta reunión. No cites normas ni circulares de memoria. Si alguien mencionó una norma, anótala como la dijeron y márcala con [VERIFICAR].

INSTRUCCIÓN
1. Lista las decisiones del comité (cierre de alerta, reporte a la UIAF, escalamiento, ajuste de política) con cita corta y quién las dijo.
2. Arma una tabla de pendientes: tema, responsable, fecha de cumplimiento y evidencia que debe quedar archivada.
3. Registra los desacuerdos de criterio entre cumplimiento, jurídico y negocio, con la posición de cada uno en una línea.
4. Lista los riesgos de incumplimiento que quedaron abiertos, con plazo si se dijo.
5. Escribe un resumen ejecutivo de 5 líneas para el oficial de cumplimiento o la junta, que no asistió.

FORMATO DE SALIDA
Decisiones (viñetas), Pendientes (tabla de 4 columnas), Desacuerdos (viñetas, máximo 5), Riesgos (viñetas con plazo o PENDIENTE) y Resumen ejecutivo (5 líneas).

LÍMITES
No emitas conceptos jurídicos ni confirmes que algo cumple una norma. No inventes plazos. Si falta responsable o fecha, escribe PENDIENTE. Marca [SUPUESTO] lo deducido.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada decisión y cada plazo, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: llegué tarde. Dime qué alertas o hallazgos ya se trataron y cuál se decidió en cada uno, en una línea por tema, sin incluir datos de personas.",
      "Durante la reunión: ¿quién quedó a cargo del reporte o de la acción que se acaba de acordar y con qué plazo? Si no se dijo, respóndeme PENDIENTE.",
      "Valida contra la transcripción: toma cada riesgo y cada plazo de tu respuesta y cita la frase de origen. Si no hay frase, márcalo VERIFICAR y dime que no lo puedes respaldar."
    ],
    verificar: [
      "Que cada plazo normativo mencionado lo haya dicho alguien en la reunión y se confirme con la fuente oficial.",
      "Que las decisiones de cierre o escalamiento las haya tomado quien tiene esa facultad en el comité.",
      "Que ningún dato de persona identificable haya pasado al resumen.",
      "Que los desacuerdos reflejen posiciones distintas reales y no una pregunta aclaratoria."
    ]
  },
  {
    area: "finanzas",
    titulo: "Coordinación del cierre mensual: bloqueos, ajustes y calendario",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la reunión de cierre ya terminada.",
    antes: "Úsalo al terminar la reunión de coordinación. Ten a mano el calendario del cierre para comparar las fechas dichas con las oficiales.",
    prompt: `ROL
Eres un controller financiero de una aseguradora que coordina el cierre contable mensual (primas emitidas, reservas técnicas, comisiones, reaseguro y conciliaciones).

CONTEXTO
Terminó la reunión de coordinación del cierre mensual. Se habló del día de cierre, reservas, conciliaciones bancarias, cuentas por cobrar de primas, cesiones de reaseguro y ajustes pendientes. Las cifras son de ejemplo y los datos están anonimizados. Necesito el estado del cierre y qué tarea bloquea a cuál.

FUENTES
Usa solo la transcripción de esta reunión. No uses el ERP ni hojas de cálculo. Los montos solo valen si alguien los dijo en voz alta.

INSTRUCCIÓN
1. Lista las decisiones tomadas (fecha de corte, tratamiento de un ajuste, aplazamiento de una conciliación) con cita corta y quién las dijo.
2. Arma la tabla de tareas del cierre: tarea, responsable, fecha, dependencia y soporte que falta.
3. Marca las tareas que bloquean a otras y propón el orden de ejecución, indicando que es una propuesta.
4. Señala desacuerdos, por ejemplo sobre el criterio de una provisión o sobre quién entrega un soporte.
5. Lista riesgos de retraso del cierre y de errores en estados financieros.
6. Escribe un resumen ejecutivo de 5 líneas para el director financiero, que no asistió.

FORMATO DE SALIDA
Decisiones (viñetas), Tareas del cierre (tabla de 5 columnas), Bloqueos (viñetas), Desacuerdos y riesgos (viñetas, máximo 6) y Resumen ejecutivo (5 líneas).

LÍMITES
No hagas cálculos contables ni cambies montos. Si falta responsable o fecha, escribe PENDIENTE. Marca [VERIFICAR] los montos dichos de memoria. Marca [SUPUESTO] el orden de ejecución que propongas.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada tarea y cada fecha, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: llegué tarde. Dime qué tareas del cierre ya se dieron por cerradas, cuáles siguen abiertas y cuál es el bloqueo principal, en máximo 6 viñetas.",
      "Durante la reunión: ¿quién quedó de entregar la conciliación o el soporte que se acaba de pedir y para qué día? Si no se dijo, respóndeme PENDIENTE.",
      "Valida contra la transcripción: revisa tu tabla de tareas y cita la frase de origen de cada fecha y dependencia. Marca con VERIFICAR las que no tengan frase y no las quites."
    ],
    verificar: [
      "Que cada fecha de entrega coincida con la dicha en la reunión y con el calendario oficial del cierre.",
      "Que los montos mencionados sean los dichos y no una cifra recalculada.",
      "Que las dependencias entre tareas las haya señalado el equipo y no el modelo.",
      "Que el responsable de cada ajuste sea quien asumió la tarea."
    ]
  },
  {
    area: "talento",
    titulo: "Reunión de onboarding: compromisos, accesos y primeras semanas",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la reunión de onboarding ya terminada.",
    antes: "Úsalo con la reunión terminada. No pegues datos personales de quien ingresa, usa un nombre de ejemplo o el cargo.",
    prompt: `ROL
Eres un especialista de talento humano con experiencia en inducción y vinculación de personal en una aseguradora.

CONTEXTO
Terminó la reunión de onboarding de una persona que ingresa al área comercial. Participaron el jefe, talento humano y tecnología. Los datos están anonimizados y se usa el cargo en lugar del nombre. Necesito dejar claro qué se acordó, quién hace qué y qué le toca a la persona nueva, sin releer la grabación.

FUENTES
Usa solo la transcripción de esta reunión. No uses el contrato, la hoja de vida ni políticas internas. No completes con procesos que no se mencionaron.

INSTRUCCIÓN
1. Lista las decisiones del onboarding (fecha de ingreso, esquema de trabajo, mentor asignado, cursos obligatorios) con cita corta y quién las dijo.
2. Arma una tabla de pendientes por responsable (jefe, talento humano, tecnología, persona nueva): tarea, fecha relativa al día 1 y requisito previo (accesos, equipo, afiliaciones).
3. Señala desacuerdos o dudas sin resolver, como el horario o la fecha de acceso a sistemas.
4. Lista riesgos para el arranque: accesos que no estarán el día 1, cursos sin cupo, falta de mentor.
5. Escribe un resumen ejecutivo de 5 líneas para el director del área, que no asistió.

FORMATO DE SALIDA
Decisiones (viñetas), Pendientes (tabla de 4 columnas), Dudas abiertas y riesgos (viñetas, máximo 6) y Resumen ejecutivo (5 líneas).

LÍMITES
No inventes fechas, salarios ni beneficios. Si falta responsable o fecha, escribe PENDIENTE. Marca [VERIFICAR] cualquier política mencionada sin detalle. Marca [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada tarea y cada decisión, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: llegué tarde. Dime qué se ha acordado sobre fecha de ingreso, mentor y accesos, y qué falta por definir, en máximo 5 viñetas.",
      "Durante la reunión: ¿quién quedó de solicitar los accesos o el equipo de la persona nueva y para cuándo? Si no se dijo, respóndeme PENDIENTE.",
      "Valida contra la transcripción: revisa las tareas con fecha relativa al día 1 y cita la frase de origen de cada una. Las que no tengan frase, márcalas VERIFICAR y dime por qué."
    ],
    verificar: [
      "Que las fechas relativas al día 1 coincidan con lo dicho y no con un plan genérico de inducción.",
      "Que cada responsable sea quien asumió la tarea en la reunión.",
      "Que ningún dato personal de quien ingresa haya pasado al resumen.",
      "Que los cursos y accesos listados sean los mencionados y no los habituales."
    ]
  },
  {
    area: "tecnologia",
    titulo: "Comité de proyectos: estado, bloqueos y decisiones de alcance",
    donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con el comité ya terminado.",
    antes: "Úsalo con el comité terminado. Ten a mano la lista de proyectos y su fecha de entrega comprometida para contrastar.",
    prompt: `ROL
Eres un líder de PMO en tecnología y operaciones de una aseguradora, con experiencia en proyectos de core de seguros, integraciones y migraciones.

CONTEXTO
Terminó el comité de proyectos. Se revisaron avances, bloqueos, riesgos, cambios de alcance y prioridades entre proyectos (por ejemplo migración de pólizas, integración con corredores y portal de autogestión). Los datos están anonimizados y los proyectos se nombran con código. Necesito el estado de cada uno y las decisiones con trazabilidad.

FUENTES
Usa solo la transcripción de esta reunión. No uses el tablero de proyectos ni correos. Los porcentajes de avance y las fechas solo valen si se dijeron en voz alta.

INSTRUCCIÓN
1. Por cada proyecto mencionado, escribe estado (en curso, bloqueado, en riesgo, cerrado), la decisión tomada y una cita corta con quién la dijo.
2. Arma una tabla de pendientes: acción, responsable, fecha y proyecto afectado.
3. Señala desacuerdos, por ejemplo sobre prioridad, recursos compartidos o cambios de alcance.
4. Lista riesgos y dependencias entre proyectos (ambientes de prueba, proveedor, ventana de despliegue).
5. Escribe un resumen ejecutivo de 6 líneas para la vicepresidencia, que no asistió, con los 3 temas que requieren su decisión.

FORMATO DE SALIDA
Una ficha por proyecto (estado, decisión, riesgo en 3 viñetas), la tabla de pendientes de 4 columnas y el resumen ejecutivo de 6 líneas.

LÍMITES
No estimes fechas ni esfuerzo. Si falta responsable o fecha, escribe PENDIENTE. Marca [VERIFICAR] los porcentajes de avance sin soporte. Marca [SUPUESTO] cualquier dependencia que dedujiste.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada estado y cada fecha, y lista lo que no pudiste confirmar.`,
    seguimiento: [
      "Durante la reunión: llegué tarde. Dime qué proyectos ya se revisaron, cuáles quedaron bloqueados y qué se decidió sobre prioridad, en una línea por proyecto.",
      "Durante la reunión: ¿quién quedó de resolver el bloqueo del proyecto que se está discutiendo y con qué fecha? Si no se dijo, respóndeme PENDIENTE.",
      "Valida contra la transcripción: revisa el estado de cada proyecto y cita la frase de la que sale. Si un estado lo deduces tú y no se dijo, cámbialo a SUPUESTO y avísame."
    ],
    verificar: [
      "Que el estado de cada proyecto lo haya dicho su responsable y no sea una interpretación.",
      "Que las fechas de entrega y de despliegue coincidan con lo dicho en el comité.",
      "Que los cambios de alcance los haya aprobado quien tiene autoridad en la reunión.",
      "Que las dependencias entre proyectos se mencionaron y no se infirieron."
    ]
  }
];
