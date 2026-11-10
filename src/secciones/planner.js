const SEC_PLANNER = [
{
  area: "suscripcion",
  titulo: "Meta: emitir la póliza pyme de alimentos en 15 días hábiles",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Ten el plan premium de Planner abierto y los archivos de apoyo listos: acta o resumen de la reunión con el cliente, lista de requisitos de suscripción del ramo y la solicitud de seguro diligenciada.",
  prompt: `ROL
Eres un coordinador de suscripción de seguros generales que convierte una reunión comercial en un plan de trabajo con cubos, tareas y subtareas.

CONTEXTO
Objetivo: emitir la póliza multirriesgo de una pyme del sector alimentos (datos anonimizados). Resultado esperado: póliza emitida, con inspección de riesgo hecha y condiciones aceptadas por el cliente. Fecha de entrega: [fecha de emisión] (si no la tengo, usa 15 días hábiles desde hoy). Restricciones: el cliente solo envía documentos los martes y jueves, y el reaseguro necesita 3 días hábiles para responder.

FUENTES
Usa solo los archivos que adjunto: resumen de la reunión, lista de requisitos y solicitud de seguro. No uses datos de otras cuentas ni inventes requisitos que no estén en los archivos.

INSTRUCCIÓN
1. Crea estos cubos: Documentación del cliente, Inspección y análisis del riesgo, Cotización y condiciones, Reaseguro y aprobaciones, Emisión y entrega.
2. Dentro de cada cubo genera entre 3 y 5 tareas, cada una con máximo 2 subtareas.
3. Asigna responsable por rol (suscriptor, ejecutivo comercial, inspector, analista de reaseguro, operaciones). Nunca escribas nombres de personas.
4. Pon fechas relativas al día 1 de la meta, por ejemplo día 3 o día 10.
5. Marca prioridad alta, media o baja.
6. Cierra cada tarea con un criterio de hecho, por ejemplo «formulario firmado y cargado».

FORMATO DE SALIDA
Cubos con sus tareas, cada tarea con título de máximo 10 palabras, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No inventes montos, tasas ni coberturas. Si un dato falta, escribe PENDIENTE en la tarea. Marca con [SUPUESTO] cualquier plazo que no venga de los archivos.

CONTROL DE CALIDAD
Al final indica de qué archivo sale cada plazo y cada requisito importante, y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado de este plan para el jefe de suscripción: tareas completadas, en curso y atrasadas, riesgos para la fecha de emisión y las 3 decisiones que necesito de él.",
    "Revisa el plan existente y lista las tareas sin responsable, las vencidas y las que dependen de otra que aún no termina. Propón cómo reordenar los cubos para no perder la fecha de emisión.",
    "Respaldo para Copilot Chat: con la reunión adjunta, devuelve una tabla lista para pegar en Planner con columnas Cubo, Tarea, Rol responsable, Fecha relativa, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que cada documento exigido al cliente aparezca en la lista de requisitos que adjuntaste.",
    "Que los plazos de reaseguro y de inspección coincidan con los acuerdos de la reunión.",
    "Que ninguna tarea tenga un nombre de persona inventado como responsable.",
    "Que la fecha de entrega y el orden de los cubos tengan sentido con los 3 días de reaseguro."
  ]
},
{
  area: "siniestros",
  titulo: "Meta: cerrar los siniestros complejos con reserva y plan de acción",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Reúne el acta de la reunión semanal, el listado de siniestros complejos (sin datos personales) y el procedimiento interno de reservas y objeciones. Adjúntalos como archivos de apoyo.",
  prompt: `ROL
Eres un coordinador de siniestros que organiza el trabajo de ajustadores, abogados y analistas alrededor de casos complejos.

CONTEXTO
Objetivo: resolver los siniestros complejos de la reunión semanal (datos anonimizados). Resultado esperado: cada caso con reserva revisada, decisión de pago, objeción o rechazo, y comunicación enviada al asegurado. Fecha de entrega: [fecha del próximo comité]. Restricciones: los casos con posible fraude pasan primero por la unidad antifraude, y ninguna objeción sale sin revisión jurídica.

FUENTES
Usa solo el acta, el listado de casos y el procedimiento que adjunto. No uses información de otros ramos ni normas que no aparezcan en esos archivos.

INSTRUCCIÓN
1. Crea estos cubos: Casos nuevos, Pendiente de documentos, En peritaje o inspección, Revisión jurídica y antifraude, Decisión y comunicación.
2. Por cada caso del listado crea una tarea con el número de siniestro de ejemplo en el título y máximo 3 subtareas (documentos, peritaje, decisión).
3. Responsable por rol: ajustador, perito, abogado de siniestros, analista de reservas, líder de siniestros. Nunca nombres propios.
4. Fechas relativas al día de la reunión, por ejemplo día 2 o día 7.
5. Prioridad alta si hay términos legales por vencer o reserva alta, media si falta documentación, baja si solo espera respuesta.
6. Cada tarea termina con un criterio de hecho, por ejemplo «reserva actualizada en el sistema y nota de decisión archivada».

FORMATO DE SALIDA
Cubos con tareas, y por tarea: título corto, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No calcules reservas ni indemnizaciones. No propongas rechazos. Si un caso no tiene responsable en el acta, escribe PENDIENTE. Marca [VERIFICAR] los plazos legales que no estén en el procedimiento.

CONTROL DE CALIDAD
Al final indica en qué parte del acta o del listado se apoya cada prioridad y cada plazo, y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado para el líder de siniestros: casos cerrados, casos en riesgo de término vencido, cuellos de botella por rol y las decisiones que debe tomar esta semana.",
    "Revisa el plan existente: lista las tareas sin ajustador responsable, las vencidas y los casos que esperan revisión jurídica sin fecha. Ordena lo urgente primero y propón una acción por cada una.",
    "Respaldo para Copilot Chat: con el acta adjunta devuelve una tabla lista para pegar en Planner con Cubo, Caso, Tarea, Rol, Fecha relativa, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que cada caso del listado tenga su tarea y ninguno se haya duplicado ni omitido.",
    "Que las prioridades altas correspondan a términos legales o reservas que de verdad mencionan los archivos.",
    "Que los casos de posible fraude estén en el cubo de antifraude antes de la decisión.",
    "Que ningún responsable sea un nombre inventado ni se hayan añadido montos."
  ]
},
{
  area: "comercial",
  titulo: "Meta: plan de la semana para cerrar las oportunidades del comité",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Ten a mano el resumen del pipeline, las notas del comité semanal y la meta de ventas del trimestre. Adjunta esos archivos como apoyo, sin nombres reales de clientes.",
  prompt: `ROL
Eres un gerente comercial de seguros con experiencia en canales de intermediarios, que baja las decisiones del comité a un plan semanal.

CONTEXTO
Objetivo: avanzar las oportunidades del pipeline que el comité semanal priorizó (clientes e intermediarios anonimizados). Resultado esperado: cada oportunidad prioritaria con siguiente paso ejecutado, cotización enviada o cierre registrado en el CRM. Fecha de entrega: [viernes de esta semana]. Restricciones: las cotizaciones de más de [monto de ejemplo] requieren visto bueno de suscripción, y los corredores solo reciben propuestas en el formato oficial.

FUENTES
Usa solo el pipeline, las notas del comité y la meta del trimestre que adjunto. No uses cifras de otras semanas ni supongas el estado de una oportunidad.

INSTRUCCIÓN
1. Crea estos cubos: Cierres de la semana, Cotizaciones por enviar, Visitas y reuniones con corredores, Apoyo de otras áreas, Seguimiento de renovaciones.
2. Genera una tarea por oportunidad y como máximo 2 subtareas, por ejemplo preparar propuesta y confirmar recepción.
3. Responsable por rol: asesor comercial, gerente de canal, ejecutivo de cuenta, analista comercial, suscriptor de apoyo. Nunca nombres.
4. Fechas relativas al día del comité, entre día 1 y día 5.
5. Prioridad alta para cierres de la semana, media para cotizaciones, baja para exploración.
6. Criterio de hecho por tarea, por ejemplo «propuesta enviada y confirmada por el corredor».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título de máximo 10 palabras, oportunidad o canal, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No inventes primas, comisiones ni probabilidades de cierre. Si el comité no nombró responsable, escribe PENDIENTE. Marca [SUPUESTO] cualquier fecha que no venga de las notas.

CONTROL DE CALIDAD
Al final indica qué nota del comité respalda cada tarea de prioridad alta y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado de la semana para la gerencia comercial: oportunidades cerradas, en curso y estancadas, bloqueos que dependen de otras áreas y 3 decisiones que necesito.",
    "Revisa el plan existente y señala tareas sin asesor responsable, vencidas y cotizaciones que esperan visto bueno de suscripción. Propón qué mover a la próxima semana y por qué.",
    "Respaldo para Copilot Chat: con las notas del comité adjuntas devuelve una tabla lista para pegar en Planner con Cubo, Oportunidad, Tarea, Rol, Fecha relativa, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que cada oportunidad del comité tenga una tarea y que no aparezcan oportunidades nuevas.",
    "Que las fechas relativas caigan dentro de la semana y respeten los días de entrega al corredor.",
    "Que los umbrales de aprobación mencionados coincidan con la política vigente.",
    "Que los responsables sean roles y no personas inventadas."
  ]
},
{
  area: "servicio",
  titulo: "Meta: reducir las quejas recurrentes con un plan de 30 días",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Prepara el resumen de quejas de la semana sin datos personales, el acta de la reunión de calidad y el indicador de tiempos de respuesta del último mes. Adjúntalos como archivos de apoyo.",
  prompt: `ROL
Eres un líder de calidad en servicio al cliente de una aseguradora, enfocado en bajar el volumen de quejas por causa raíz.

CONTEXTO
Objetivo: reducir las quejas recurrentes que se vieron en la reunión de calidad (datos anonimizados, sin nombres de clientes). Resultado esperado: una acción correctiva por causa raíz, ejecutada y medida con un indicador. Fecha de entrega: 30 días calendario desde hoy. Restricciones: no se cambian procesos de siniestros ni de cartera sin aprobación del área dueña, y cada queja respondida debe cumplir el plazo de respuesta de la entidad de control.

FUENTES
Usa solo el resumen de quejas, el acta y el indicador que adjunto. No supongas causas que los archivos no mencionen.

INSTRUCCIÓN
1. Crea estos cubos: Respuesta inmediata, Causas en procesos internos, Capacitación y guiones, Comunicación al cliente, Medición y cierre.
2. En cada cubo genera de 3 a 4 tareas con máximo 2 subtareas.
3. Responsable por rol: jefe de contact center, analista de calidad, líder de canal digital, capacitador, dueño del proceso afectado. Nunca nombres.
4. Fechas relativas, en semanas, por ejemplo semana 1 o semana 3.
5. Prioridad alta para quejas con plazo de respuesta en riesgo, media para causas de proceso, baja para mejoras de guion.
6. Criterio de hecho medible por tarea, por ejemplo «tiempo de respuesta bajo de [X] a [Y] días en el indicador».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, semana, prioridad, indicador y criterio de hecho.

LÍMITES
No inventes metas numéricas, usa los corchetes para que yo las complete. Si una causa no tiene dueño, escribe PENDIENTE y sugiere el rol. Marca [VERIFICAR] los plazos regulatorios.

CONTROL DE CALIDAD
Al final indica qué parte del resumen o del acta respalda cada causa y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado para el comité de calidad: acciones completadas, en curso y atrasadas, evolución esperada del indicador y los 3 bloqueos que requieren decisión de un dueño de proceso.",
    "Revisa el plan existente: lista tareas sin responsable, vencidas y acciones que dependen de otra área sin fecha acordada. Propón un orden de ejecución para las próximas dos semanas.",
    "Respaldo para Copilot Chat: con el acta adjunta devuelve una tabla lista para pegar en Planner con Cubo, Causa, Tarea, Rol, Semana, Prioridad, Indicador y Criterio de hecho."
  ],
  verificar: [
    "Que cada causa raíz del plan aparezca en el resumen de quejas o en el acta.",
    "Que los indicadores y plazos de respuesta coincidan con los datos adjuntos.",
    "Que ninguna acción invada procesos de otra área sin marcar al dueño.",
    "Que los datos personales no hayan pasado a ninguna tarea."
  ]
},
{
  area: "tecnica",
  titulo: "Meta: implementar los ajustes de tarifa aprobados en la revisión",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Ten listos el acta de la revisión de tarifas, la tabla de ajustes aprobados por ramo (cifras de ejemplo o anonimizadas) y la nota técnica vigente. Adjúntalos como apoyo.",
  prompt: `ROL
Eres un coordinador técnico actuarial que lleva a producción los ajustes de tarifa aprobados, con control de versiones y validaciones.

CONTEXTO
Objetivo: implementar los ajustes de tarifa aprobados en la revisión de [ramo] (datos anonimizados y cifras de ejemplo). Resultado esperado: tarifas ajustadas, validadas por un segundo actuario, documentadas en la nota técnica y publicadas en el sistema de cotización. Fecha de entrega: [fecha de vigencia]. Restricciones: ningún ajuste se publica sin validación, y los cambios que exijan comunicación a la entidad de control deben tener su radicación lista antes de la vigencia.

FUENTES
Usa solo el acta, la tabla de ajustes y la nota técnica que adjunto. No uses cifras de otros ramos ni propongas ajustes nuevos.

INSTRUCCIÓN
1. Crea estos cubos: Preparación de datos y bases, Cálculo y parametrización, Validación independiente, Documentación y nota técnica, Publicación y comunicación.
2. Por cada ajuste aprobado crea una tarea y máximo 3 subtareas.
3. Responsable por rol: actuario responsable, actuario validador, analista de datos, líder de tecnología, líder de producto. Nunca nombres.
4. Fechas relativas a la fecha de vigencia, por ejemplo vigencia menos 10 días.
5. Prioridad alta para lo que bloquea la publicación, media para documentación, baja para comunicaciones internas.
6. Criterio de hecho por tarea, por ejemplo «validación firmada y evidencia guardada en la carpeta del ramo».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, ajuste y ramo, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No calcules ni sugieras factores de tarifa. Si falta responsable, escribe PENDIENTE. Marca [VERIFICAR] los requisitos regulatorios que no estén en los archivos.

CONTROL DE CALIDAD
Al final indica qué parte del acta o de la tabla respalda cada tarea de prioridad alta y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado para la dirección técnica: ajustes validados, en cálculo y pendientes, riesgos para la fecha de vigencia y las decisiones que necesito sobre prioridades.",
    "Revisa el plan existente y lista tareas sin responsable, vencidas y publicaciones que dependen de una validación que aún no empieza. Propón cómo adelantar la validación independiente.",
    "Respaldo para Copilot Chat: con la tabla de ajustes adjunta devuelve una tabla lista para pegar en Planner con Cubo, Ajuste, Tarea, Rol, Fecha relativa, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que cada ajuste de la tabla tenga su tarea de validación independiente.",
    "Que las fechas relativas respeten la vigencia y la radicación ante la entidad de control.",
    "Que no aparezca ninguna cifra o factor que no esté en los archivos.",
    "Que los roles de calculista y validador sean distintos en cada ajuste."
  ]
},
{
  area: "juridico",
  titulo: "Meta: cumplir los compromisos del comité antes de cada vencimiento",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Reúne el acta del comité de cumplimiento, el calendario de vencimientos regulatorios y las circulares que motivan cada compromiso. Adjúntalos como apoyo, sin datos personales.",
  prompt: `ROL
Eres un abogado de cumplimiento de una aseguradora que controla compromisos con fecha regulatoria y deja evidencia de cada uno.

CONTEXTO
Objetivo: ejecutar los compromisos del comité de cumplimiento (datos anonimizados) para atender circulares, reportes y capacitaciones obligatorias. Resultado esperado: cada compromiso con responsable, evidencia archivada y reporte enviado antes de su vencimiento. Fecha de entrega: la del vencimiento más cercano que traiga el calendario. Restricciones: los reportes a la entidad de control los firma el oficial de cumplimiento y ninguna tarea se da por cerrada sin evidencia.

FUENTES
Usa solo el acta, el calendario y las circulares que adjunto. No cites normas que no estén en esos documentos.

INSTRUCCIÓN
1. Crea estos cubos: Reportes regulatorios, Actualización de políticas y manuales, Capacitación y sensibilización, SARLAFT y debida diligencia, Evidencias y auditoría.
2. Por cada compromiso del acta genera una tarea y máximo 3 subtareas: borrador, revisión y envío.
3. Responsable por rol: oficial de cumplimiento, abogado de cumplimiento, analista de riesgos, líder del área afectada. Nunca nombres.
4. Fechas relativas al vencimiento, por ejemplo vencimiento menos 15 días.
5. Prioridad alta para lo que vence en menos de 15 días, media entre 15 y 45, baja después.
6. Criterio de hecho por tarea, por ejemplo «reporte radicado y constancia guardada en la carpeta de cumplimiento».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, norma o circular de origen, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No interpretes normas ni des concepto legal. Si una tarea no tiene norma de origen, escribe PENDIENTE. Marca [VERIFICAR] cada fecha que no coincida con el calendario.

CONTROL DE CALIDAD
Al final indica qué documento respalda cada vencimiento y cada norma citada, y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado para el oficial de cumplimiento: compromisos cumplidos, en curso y próximos a vencer, riesgos de incumplimiento y las 3 decisiones que necesito del comité.",
    "Revisa el plan existente: lista tareas sin responsable, vencidas o sin evidencia, y las que dependen de una aprobación pendiente. Ordénalas por fecha de vencimiento y propón la acción inmediata de cada una.",
    "Respaldo para Copilot Chat: con el acta adjunta devuelve una tabla lista para pegar en Planner con Cubo, Compromiso, Norma de origen, Rol, Fecha relativa, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que cada vencimiento coincida con el calendario regulatorio adjunto.",
    "Que cada norma o circular citada exista en los documentos que diste.",
    "Que las prioridades altas sean las que vencen en menos de 15 días.",
    "Que ninguna tarea se marque como hecha sin evidencia."
  ]
},
{
  area: "finanzas",
  titulo: "Meta: cerrar el mes contable en el calendario acordado",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Ten el calendario de cierre del mes anterior, el acta de coordinación del cierre y la lista de conciliaciones pendientes. Adjúntalos como archivos de apoyo, con cifras de ejemplo.",
  prompt: `ROL
Eres un controller financiero que coordina el cierre mensual de una aseguradora y cuida las dependencias entre áreas.

CONTEXTO
Objetivo: completar el cierre contable de [mes] (cifras de ejemplo, datos anonimizados). Resultado esperado: estados financieros del mes listos para revisión, con conciliaciones hechas y reservas técnicas contabilizadas. Fecha de entrega: día hábil [N] del mes siguiente. Restricciones: la contabilización de reservas no empieza hasta que siniestros entregue su corte, y las conciliaciones bancarias deben cerrar antes de la revisión del controller.

FUENTES
Usa solo el calendario, el acta y la lista de conciliaciones que adjunto. No supongas saldos ni fechas que no estén allí.

INSTRUCCIÓN
1. Crea estos cubos: Cortes de información (siniestros, producción, cartera), Conciliaciones, Reservas y provisiones, Ajustes y asientos, Revisión y reportes.
2. Genera de 4 a 6 tareas por cubo con máximo 2 subtareas.
3. Responsable por rol: contador de cuentas por pagar, contador de reservas, analista de tesorería, controller, líder de siniestros. Nunca nombres.
4. Fechas relativas al último día del mes, por ejemplo día hábil 2 o día hábil 5.
5. Indica en cada tarea de qué otra tarea depende.
6. Prioridad alta para las que están en la ruta crítica, media o baja para el resto. Criterio de hecho por tarea, por ejemplo «conciliación firmada con diferencia en cero».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, fecha relativa, dependencia, prioridad y criterio de hecho. Al final, una línea con la ruta crítica.

LÍMITES
No calcules saldos ni propongas asientos. Si falta responsable, escribe PENDIENTE. Marca [SUPUESTO] cualquier plazo que no venga del calendario.

CONTROL DE CALIDAD
Al final indica qué parte del calendario o del acta respalda cada dependencia y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado del cierre para el controller: tareas completadas, en ruta crítica y atrasadas, áreas que no entregaron su corte, riesgo para la fecha de entrega y decisiones pendientes.",
    "Revisa el plan existente: lista tareas sin responsable, vencidas y dependencias que no se están cumpliendo. Dime qué tarea bloquea a más tareas y cómo reordenar el día siguiente.",
    "Respaldo para Copilot Chat: con el calendario adjunto devuelve una tabla lista para pegar en Planner con Cubo, Tarea, Rol, Fecha relativa, Dependencia, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que las dependencias entre cortes, conciliaciones y reservas respeten el calendario del cierre.",
    "Que la ruta crítica indicada sea coherente con las fechas relativas de cada tarea.",
    "Que no se hayan añadido saldos ni asientos que no estén en los archivos.",
    "Que cada tarea tenga un rol y no un nombre inventado."
  ]
},
{
  area: "talento",
  titulo: "Meta: onboarding de 30 días para una persona nueva del área comercial",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Prepara el cargo y funciones de la vacante, el cronograma de inducción corporativa y la lista de accesos y equipos que se piden a tecnología. Adjúntalos como apoyo, sin datos personales.",
  prompt: `ROL
Eres un especialista de talento humano con experiencia en procesos de inducción y acompañamiento de personas nuevas en una aseguradora.

CONTEXTO
Objetivo: lograr que la persona que ingresa al área comercial sea autónoma en sus primeras tareas al cabo de 30 días (datos anonimizados, sin nombres). Resultado esperado: inducción corporativa completada, accesos activos, formación en productos hecha y primera evaluación de seguimiento con el jefe. Fecha de entrega: día 30 desde el ingreso. Restricciones: los accesos a sistemas se solicitan 5 días antes del ingreso y la persona no atiende clientes hasta cerrar la formación de ramos.

FUENTES
Usa solo el cargo, el cronograma de inducción y la lista de accesos que adjunto. No inventes políticas internas ni cursos que no figuren allí.

INSTRUCCIÓN
1. Crea estos cubos: Antes del ingreso, Semana 1 bienvenida y accesos, Semana 2 productos y ramos, Semana 3 práctica acompañada, Semana 4 evaluación y ajustes.
2. En cada cubo genera máximo 5 tareas con máximo 2 subtareas.
3. Responsable por rol: jefe directo, analista de talento humano, líder de tecnología, capacitador, la persona nueva. Nunca nombres.
4. Fechas relativas al día 1, por ejemplo día menos 5, día 3 o día 21.
5. Prioridad alta para accesos y formación obligatoria, media para reuniones con otras áreas, baja para actividades de integración.
6. Criterio de hecho por tarea, por ejemplo «usuario activo y primer ingreso al CRM confirmado».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título de máximo 10 palabras, rol, fecha relativa al día 1, prioridad y criterio de hecho.

LÍMITES
No incluyas datos personales ni salariales. Si una tarea no tiene responsable claro, escribe PENDIENTE. Marca [SUPUESTO] los plazos que no estén en el cronograma.

CONTROL DE CALIDAD
Al final indica qué archivo respalda cada tarea obligatoria y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado del onboarding para el jefe directo: tareas completadas, pendientes y atrasadas, accesos que faltan, cómo va la formación de ramos y qué ajustar antes de la evaluación del día 30.",
    "Revisa el plan existente: lista tareas sin responsable, vencidas y las que dependen de accesos de tecnología aún sin activar. Propón qué mover para que la persona no pierda días de formación.",
    "Respaldo para Copilot Chat: con el cronograma adjunto devuelve una tabla lista para pegar en Planner con Cubo, Tarea, Rol, Fecha relativa al día 1, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que las tareas obligatorias coincidan con el cronograma de inducción que adjuntaste.",
    "Que los accesos se soliciten con la anticipación indicada.",
    "Que ninguna tarea contenga datos personales de la persona nueva.",
    "Que el máximo de 5 tareas por cubo se haya respetado."
  ]
},
{
  area: "tecnologia",
  titulo: "Meta: entregar el proyecto priorizado en el comité con plan por fases",
  donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas",
  antes: "Ten listos el acta del comité de proyectos, el alcance o acta de constitución del proyecto y el cronograma de lanzamientos de la compañía. Adjúntalos como apoyo, con información anonimizada.",
  prompt: `ROL
Eres un project manager de tecnología en una aseguradora, responsable de convertir la decisión del comité en un plan por fases con riesgos controlados.

CONTEXTO
Objetivo: entregar el proyecto [nombre de ejemplo] que el comité priorizó, por ejemplo la migración de un módulo de cotización (datos anonimizados). Resultado esperado: solución en producción, usuarios capacitados y soporte listo. Fecha de entrega: [fecha de salida a producción]. Restricciones: no hay pases a producción en la semana de cierre contable, y todo cambio pasa por el comité de cambios con 5 días de anticipación.

FUENTES
Usa solo el acta, el alcance y el cronograma que adjunto. No supongas tecnologías, proveedores ni presupuestos que no estén en los archivos.

INSTRUCCIÓN
1. Crea estos cubos: Levantamiento y diseño, Desarrollo y configuración, Pruebas y aceptación de usuarios, Pase a producción, Capacitación y soporte.
2. Genera de 3 a 5 tareas por cubo y subtareas solo donde haya entregable técnico.
3. Responsable por rol: líder de proyecto, arquitecto, desarrollador, analista de calidad, dueño de negocio, líder de infraestructura. Nunca nombres.
4. Fechas relativas a la salida a producción, por ejemplo producción menos 20 días.
5. Marca los hitos y las dependencias entre cubos.
6. Prioridad alta para hitos y bloqueos, media para entregables, baja para documentación. Criterio de hecho por tarea, por ejemplo «pruebas aceptadas con acta firmada por el dueño de negocio».

FORMATO DE SALIDA
Cubos con tareas. Por tarea: título corto, rol, fecha relativa, dependencia, prioridad y criterio de hecho. Al final, lista de 5 riesgos con su responsable por rol.

LÍMITES
No definas arquitectura ni estimes costos. Si falta responsable, escribe PENDIENTE. Marca [SUPUESTO] cada plazo que no venga del cronograma.

CONTROL DE CALIDAD
Al final indica qué parte del acta o del alcance respalda cada hito y qué no pudiste confirmar.`,
  seguimiento: [
    "Genera el informe de estado del proyecto para el comité: hitos cumplidos, en riesgo y atrasados, bloqueos con su dueño, impacto en la fecha de producción y las decisiones que necesito del comité.",
    "Revisa el plan existente: lista tareas sin responsable, vencidas y dependencias entre cubos que no tienen fecha. Dime qué hito está más en riesgo y cómo recuperar tiempo sin saltar pruebas.",
    "Respaldo para Copilot Chat: con el acta adjunta devuelve una tabla lista para pegar en Planner con Cubo, Tarea, Rol, Fecha relativa, Dependencia, Prioridad y Criterio de hecho."
  ],
  verificar: [
    "Que los hitos y fechas coincidan con el cronograma y con las restricciones de pases a producción.",
    "Que cada tarea de pruebas tenga como responsable al dueño de negocio o a calidad, no a desarrollo.",
    "Que no se hayan añadido tecnologías, proveedores o costos ajenos al alcance.",
    "Que los riesgos listados provengan del acta o estén marcados como supuesto."
  ]
}
];
