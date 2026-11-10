const SEC_ONENOTE = [
{
  area: "suscripcion",
  titulo: "Notas de la reunión con la pyme de alimentos a página limpia",
  donde: "OneNote, página con tus notas, icono de Copilot o panel de chat",
  antes: "Ten tus apuntes de la reunión de 30 minutos escritos o pegados en la página, tal como quedaron, sin ordenar. Anonimiza el nombre del cliente y los NIT.",
  prompt: `ROL
Eres un suscriptor de daños con experiencia en pymes del sector alimentos, que convierte apuntes sueltos en un expediente claro para decidir la cotización.

CONTEXTO
Estas notas son de una reunión de 30 minutos con un cliente pyme de alimentos (planta de producción, bodega y flota liviana de reparto). Están escritas de afán, sin orden. Los datos están anonimizados.

FUENTES
Trabaja solo con el texto de esta página de OneNote. No uses otras páginas, correos ni conocimiento externo sobre el cliente. Si algo no está en la página, no lo completes.

INSTRUCCIÓN
1. Ordena las notas por tema: actividad y procesos, activos y valores asegurados, siniestralidad previa, coberturas pedidas (incendio, sustracción, transporte de mercancías, responsabilidad civil, lucro cesante), medidas de protección y cadena de frío.
2. Extrae los pendientes con responsable y fecha cuando aparezcan. Si falta alguno, escribe PENDIENTE.
3. Separa lo que se DECIDIÓ de lo que fue solo una IDEA o una duda.
4. Detecta contradicciones (por ejemplo, dos valores distintos para la misma bodega) y huecos de información que un suscriptor necesitaría antes de cotizar.
5. Deja una página limpia con estas secciones, en este orden: Perfil del riesgo, Coberturas solicitadas, Información que falta, Decisiones, Ideas por evaluar, Pendientes.

FORMATO DE SALIDA
Cada sección con su título y máximo 5 viñetas de una línea. La sección Pendientes va como tabla con las columnas Tarea, Responsable, Fecha y Estado. Al final, una línea con las contradicciones encontradas.

LÍMITES
No inventes valores asegurados, tasas, primas ni deducibles. No sugieras aceptar o rechazar el riesgo. Marca [SUPUESTO] lo que dedujiste y [VERIFICAR] lo que parece una cifra dudosa. No borres nada del texto original, solo propón la versión limpia debajo.

CONTROL DE CALIDAD
Al final indica, para cada decisión y cada pendiente, de qué línea o párrafo de mis notas sale. Lista aparte lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección Perfil del riesgo para que un suscriptor que no estuvo en la reunión la entienda. Frases cortas, sin abreviaturas internas y sin agregar datos que no estén en mis notas.",
    "Convierte los pendientes en una tabla con Tarea, Responsable, Fecha límite y Prioridad, lista para pegar en Planner. Deja PENDIENTE donde falte responsable o fecha y no inventes ninguno.",
    "Redacta una lista de 6 preguntas para pedirle al cliente la información que falta antes de cotizar, ordenadas por impacto en el riesgo. Usa solo los huecos que detectaste en las notas."
  ],
  verificar: [
    "Cada valor asegurado, área o cantidad de vehículos coincide con lo que anotaste y no con un número que Copilot completó.",
    "Las decisiones no incluyen ideas que solo se mencionaron como posibilidad.",
    "Los responsables y fechas de la tabla aparecen en tus notas y no fueron asignados por Copilot.",
    "Las contradicciones señaladas son reales y no diferencias de redacción entre dos líneas."
  ]
},
{
  area: "siniestros",
  titulo: "Notas de la reunión de siniestros complejos a cuaderno de casos",
  donde: "OneNote, página con las notas de la reunión semanal, panel de chat de Copilot",
  antes: "Pega o escribe en la página tus apuntes de la reunión, con un caso por bloque aunque estén desordenados. Reemplaza nombres de asegurados por códigos de ejemplo.",
  prompt: `ROL
Eres un analista senior de siniestros complejos que prepara el registro semanal de casos para el líder del equipo.

CONTEXTO
Estas notas vienen de la reunión semanal de siniestros complejos: casos con posible fraude, reservas altas, discusión de cobertura o litigio en curso. Están desordenadas y mezclan varios casos. Los datos están anonimizados con códigos de ejemplo.

FUENTES
Usa únicamente el texto de esta página. No consultes otras páginas del cuaderno ni asumas condiciones de la póliza que no estén escritas. No uses normas ni jurisprudencia.

INSTRUCCIÓN
1. Agrupa las notas por caso (código del siniestro) y, dentro de cada caso, por tema: hechos, cobertura, reserva, ajuste o peritaje, recobro o subrogación.
2. Para cada caso separa lo DECIDIDO en la reunión de lo que es solo una hipótesis o una idea de estrategia.
3. Extrae los pendientes con responsable y fecha si aparecen. Si no, escribe PENDIENTE.
4. Detecta contradicciones entre notas (fechas del evento distintas, reservas que no coinciden) y huecos (falta el informe del perito, falta la carta de objeción).
5. Arma la página limpia con estas secciones: Resumen de la semana, Casos (uno por subtítulo), Decisiones de reserva, Casos escalados, Pendientes de la semana.

FORMATO DE SALIDA
Resumen de la semana en 4 viñetas. Cada caso con máximo 4 viñetas. Pendientes de la semana en tabla con Caso, Tarea, Responsable, Fecha y Estado.

LÍMITES
No concluyas si hay o no cobertura y no sugieras pagar o negar. No inventes montos de reserva. Marca [VERIFICAR] toda cifra o fecha que aparezca dos veces con valores distintos y [SUPUESTO] lo que deduzcas del contexto.

CONTROL DE CALIDAD
Al final indica de qué parte de las notas sale cada decisión y cada pendiente, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección del caso más complejo para que quien no estuvo en la reunión entienda hechos, estado y siguiente paso en 6 líneas. Usa solo lo que está en mis notas.",
    "Pasa los pendientes a una tabla con Caso, Tarea, Responsable, Fecha límite y Prioridad, lista para pegar en Planner. Si falta responsable o fecha, escribe PENDIENTE y no los inventes.",
    "Lista los casos con contradicciones o huecos de información y, para cada uno, la pregunta exacta que hay que hacerle al ajustador o al área jurídica antes de la próxima reunión."
  ],
  verificar: [
    "Cada código de siniestro quedó en el caso correcto y no se mezclaron notas de dos casos.",
    "Las reservas y fechas de la página limpia son las mismas de tus apuntes.",
    "Ninguna decisión sobre cobertura fue redactada como definitiva si en la reunión solo era una hipótesis.",
    "Los casos escalados son los que se dijeron en la reunión y no los que Copilot consideró graves."
  ]
},
{
  area: "comercial",
  titulo: "Notas del comité de ventas a cuaderno comercial con compromisos",
  donde: "OneNote, página con tus apuntes del comité, clic derecho o icono de Copilot",
  antes: "Ten tus notas del comité semanal en la página, aunque estén mezcladas por asesor o por canal. Quita nombres de clientes reales y deja códigos o rubros.",
  prompt: `ROL
Eres un gerente comercial de una aseguradora que organiza las notas del comité semanal de ventas para dar seguimiento a canales y asesores.

CONTEXTO
Estas son mis notas del comité de ventas: cumplimiento de metas de primas, negocios en cotización, renovaciones por vencer, corredores y canales (agencias, bancaseguros, corredores independientes) y solicitudes a las áreas técnicas. Están desordenadas. Los datos están anonimizados.

FUENTES
Usa solo el texto de esta página. No uses cifras de otras páginas, ni de correos, ni mi conocimiento del mercado. Si una meta o una prima no está escrita, no la calcules.

INSTRUCCIÓN
1. Ordena las notas por tema: avance frente a la meta, negocios en cotización, renovaciones en riesgo, canales y corredores, solicitudes a Técnica, Suscripción o Servicio.
2. Extrae los compromisos con asesor o corredor responsable y fecha de entrega. Si faltan, escribe PENDIENTE.
3. Separa las DECISIONES del comité (por ejemplo, ajustar un descuento o priorizar un negocio) de las IDEAS comerciales que solo se plantearon.
4. Señala contradicciones (dos cifras de avance distintas para el mismo ramo) y huecos (negocio sin fecha de cierre estimada).
5. Deja una página limpia con las secciones: Foto de la semana, Negocios en juego, Renovaciones en riesgo, Canales, Solicitudes a otras áreas, Compromisos.

FORMATO DE SALIDA
Foto de la semana en 3 viñetas. Cada otra sección en máximo 5 viñetas con el formato Negocio o canal, situación, siguiente paso. Compromisos en tabla con Responsable, Compromiso, Fecha y Canal.

LÍMITES
No inventes primas, comisiones ni porcentajes de cumplimiento. No juzgues el desempeño de ningún asesor. Marca [VERIFICAR] las cifras dudosas y [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Al final indica de qué línea de mis notas sale cada compromiso y cada decisión, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección Foto de la semana para un correo a la dirección comercial. Tono formal, 5 líneas y solo con las cifras que aparecen en mis notas.",
    "Convierte los compromisos en una tabla con Responsable, Compromiso, Cliente o canal, Fecha límite y Prioridad, lista para pegar en Planner. Deja PENDIENTE donde falte un dato.",
    "Ordena los negocios en juego por probabilidad de cierre según lo que dicen mis notas. Si no hay dato de probabilidad, indícalo y no la estimes."
  ],
  verificar: [
    "Las cifras de avance y las metas son las que anotaste y no un cálculo hecho por Copilot.",
    "Cada compromiso quedó con el asesor o corredor que realmente lo asumió.",
    "Las ideas comerciales no aparecen como decisiones del comité.",
    "Los negocios y renovaciones en riesgo coinciden con los que se nombraron en la reunión."
  ]
},
{
  area: "servicio",
  titulo: "Notas de la reunión de calidad a cuaderno de quejas y mejoras",
  donde: "OneNote, página con los apuntes de la reunión de calidad, panel de chat de Copilot",
  antes: "Ten en la página tus notas de la reunión con las quejas de la semana. Usa solo canal, motivo y días de demora, sin nombres ni cédulas de clientes.",
  prompt: `ROL
Eres un líder de calidad en servicio al cliente de una aseguradora que ordena las notas de la reunión semanal de quejas para mejorar procesos.

CONTEXTO
Estas notas recogen las quejas de la semana (canal de atención, motivo, días de demora) y lo que se habló en la reunión de calidad: causas, responsables de proceso y acciones de mejora. Están desordenadas. Los datos están anonimizados y sin información personal.

FUENTES
Trabaja solo con el texto de esta página. No uses otras páginas, no consultes la norma de protección al consumidor financiero y no supongas causas que nadie mencionó.

INSTRUCCIÓN
1. Agrupa las quejas por causa: demora en pagos, información confusa sobre coberturas, fallas en la línea de atención, trámites de cancelación, cobros de prima.
2. Dentro de cada causa cuenta cuántas quejas aparecen en las notas y por qué canal entraron. Si no puedes contarlas con certeza, dilo.
3. Extrae los pendientes con responsable y fecha. Si faltan, escribe PENDIENTE.
4. Separa las DECISIONES de mejora de las IDEAS que se plantearon sin acuerdo.
5. Detecta contradicciones (la misma queja con dos causas distintas) y huecos (acción sin responsable, causa sin dato que la respalde).
6. Deja una página limpia con las secciones: Quejas por causa, Casos críticos por demora, Acciones acordadas, Ideas por evaluar, Lo que falta para confirmar causas.

FORMATO DE SALIDA
Quejas por causa en tabla con Causa, Número de quejas, Canal principal y Acción propuesta. Las demás secciones en máximo 4 viñetas. Cierra con 3 preguntas abiertas para la próxima reunión.

LÍMITES
No cambies el tono de ninguna queja ni la minimices. No inventes cifras ni plazos. Marca [VERIFICAR] los conteos dudosos y [SUPUESTO] las causas que deduzcas.

CONTROL DE CALIDAD
Al final indica de qué parte de mis notas sale cada causa y cada acción, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección Casos críticos por demora para que un jefe de área entienda en 5 líneas qué pasó, cuántos días tardó y qué se acordó. No agregues datos que no estén en mis notas.",
    "Convierte las acciones acordadas en una tabla con Acción, Responsable, Fecha límite y Causa que ataca, lista para pegar en Planner. Escribe PENDIENTE si falta responsable o fecha.",
    "Propón cómo medir si cada acción funcionó, con un indicador simple por acción basado en los datos que ya aparecen en mis notas. Marca como supuesto lo que falte de base."
  ],
  verificar: [
    "El conteo de quejas por causa coincide con las quejas que realmente anotaste.",
    "Ninguna causa fue asignada a una queja sin que alguien lo dijera en la reunión.",
    "Los responsables de cada acción son los que se acordaron y no los que Copilot sugirió.",
    "La página limpia no contiene nombres, cédulas ni números de póliza reales."
  ]
},
{
  area: "tecnica",
  titulo: "Notas de la revisión de tarifas a cuaderno de decisiones y supuestos",
  donde: "OneNote, página con los apuntes de la revisión de tarifas, icono de Copilot",
  antes: "Escribe o pega en la página tus notas de la revisión de un ramo, con las cifras de ejemplo que se mencionaron. No pegues tablas con datos reales de la cartera.",
  prompt: `ROL
Eres un actuario senior de seguros generales que documenta la revisión de tarifas de un ramo para que otro actuario pueda auditarla.

CONTEXTO
Estas notas son de la reunión de revisión de tarifas de un ramo (por ejemplo, autos o incendio). Mencionan frecuencia, severidad, siniestralidad, recargos, gastos, margen técnico y ajustes propuestos. Las cifras son de ejemplo y los datos están anonimizados.

FUENTES
Usa solo el texto de esta página. No uses otras tablas, bases técnicas ni tarifas del mercado. No recalcules nada que no esté escrito en las notas.

INSTRUCCIÓN
1. Ordena las notas por tema: diagnóstico de siniestralidad, supuestos de frecuencia y severidad, ajustes propuestos por segmento, impacto esperado y validaciones pendientes.
2. Separa las DECISIONES tomadas de las IDEAS o escenarios que solo se exploraron.
3. Para cada decisión escribe el supuesto que la sostiene y el dato de las notas que lo respalda. Si no hay respaldo, marca SIN RESPALDO.
4. Extrae pendientes con responsable y fecha de entrega. Si faltan, escribe PENDIENTE.
5. Detecta contradicciones (dos porcentajes de ajuste para el mismo segmento, una siniestralidad distinta entre líneas) y huecos (falta el periodo de la información).
6. Deja una página limpia con las secciones: Alcance de la revisión, Hallazgos, Decisiones y supuestos, Escenarios descartados, Validaciones antes de publicar, Pendientes.

FORMATO DE SALIDA
Decisiones y supuestos en tabla con Decisión, Supuesto, Dato que lo respalda y Estado. Las demás secciones en máximo 5 viñetas. Pendientes en tabla con Tarea, Responsable y Fecha.

LÍMITES
No propongas ajustes de tarifa nuevos ni modifiques cifras. No concluyas si una tarifa es suficiente. Marca [VERIFICAR] toda cifra que no cuadre entre dos líneas y [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Al final indica de qué línea de mis notas sale cada cifra y cada decisión, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección Hallazgos para que un directivo sin formación actuarial la entienda en 6 líneas, sin cambiar ninguna cifra y sin agregar interpretaciones que no estén en mis notas.",
    "Pasa las validaciones pendientes a una tabla con Validación, Responsable, Fecha límite y Requisito para publicar, lista para pegar en Planner. Escribe PENDIENTE si falta un dato.",
    "Lista los supuestos marcados como SIN RESPALDO y, para cada uno, indica qué dato o análisis faltaría para sustentarlo. No propongas el valor del supuesto."
  ],
  verificar: [
    "Cada porcentaje y cifra de la página limpia es idéntico al de tus notas.",
    "Los supuestos sin respaldo quedaron marcados y no se presentaron como hechos.",
    "Los escenarios descartados no pasaron a la sección de decisiones.",
    "El periodo de la información y el ramo son los mismos que se mencionaron en la reunión."
  ]
},
{
  area: "juridico",
  titulo: "Notas del comité de cumplimiento a cuaderno de obligaciones",
  donde: "OneNote, página con los apuntes del comité, panel de chat de Copilot",
  antes: "Ten tus notas del comité en la página, con los temas tal como se hablaron. Quita nombres de personas investigadas o de clientes y usa códigos de ejemplo.",
  prompt: `ROL
Eres un analista de cumplimiento de una aseguradora que ordena las notas del comité mensual para dejar un registro claro de obligaciones y alertas.

CONTEXTO
Estas son las notas del comité de cumplimiento: gestión de riesgo de lavado de activos y financiación del terrorismo (SARLAFT), reportes a la autoridad, circulares nuevas, protección de datos personales, quejas con riesgo regulatorio y hallazgos de auditoría. Están desordenadas. Los datos están anonimizados.

FUENTES
Usa solo el texto de esta página. No cites artículos, circulares ni sentencias que no aparezcan en mis notas. No hagas interpretación jurídica propia.

INSTRUCCIÓN
1. Ordena las notas por tema: señales de alerta y operaciones inusuales, reportes y plazos, circulares o normas en revisión, datos personales, hallazgos de auditoría.
2. Extrae cada obligación o pendiente con responsable y fecha límite. Si faltan, escribe PENDIENTE.
3. Separa las DECISIONES del comité (por ejemplo, escalar un caso o actualizar una política) de las OPINIONES o ideas que no se votaron.
4. Detecta contradicciones (dos plazos distintos para el mismo reporte) y huecos (obligación sin responsable, norma mencionada sin referencia).
5. Deja una página limpia con las secciones: Alertas del periodo, Obligaciones y plazos, Normas en revisión, Decisiones del comité, Opiniones sin decisión, Pendientes.

FORMATO DE SALIDA
Obligaciones y plazos en tabla con Obligación, Norma o fuente que se mencionó, Responsable y Fecha límite. Las demás secciones en máximo 5 viñetas. Cierra con una lista de 3 puntos que requieren revisión del área jurídica.

LÍMITES
No concluyas si hubo incumplimiento ni califiques ninguna operación como sospechosa. No inventes plazos ni citas normativas. Marca [VERIFICAR] toda referencia a una norma y [SUPUESTO] lo que dedujiste. Marca PENDIENTE lo que no tenga fecha.

CONTROL DE CALIDAD
Al final indica de qué línea de mis notas sale cada obligación y cada decisión, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección Alertas del periodo para el informe del oficial de cumplimiento. Tono formal, 6 líneas y sin calificar ninguna operación que mis notas no califiquen.",
    "Convierte las obligaciones y pendientes en una tabla con Obligación, Responsable, Fecha límite y Prioridad, lista para pegar en Planner. Deja PENDIENTE donde falte responsable o fecha.",
    "Lista las normas o circulares que mencionan mis notas y para cada una la pregunta que debería responder el área jurídica. No cites el contenido de la norma."
  ],
  verificar: [
    "Cada norma o circular mencionada aparece en tus notas y su referencia no fue completada por Copilot.",
    "Los plazos de la tabla son los que se dijeron en el comité.",
    "Ninguna alerta quedó calificada como incumplimiento sin que el comité lo decidiera.",
    "La página limpia no incluye nombres de personas ni de clientes reales."
  ]
},
{
  area: "finanzas",
  titulo: "Notas de coordinación del cierre mensual a cuaderno de cierre",
  donde: "OneNote, página con los apuntes de la reunión de cierre, icono de Copilot o clic derecho",
  antes: "Escribe o pega en la página tus notas de la reunión de cierre, con cuentas y procesos como los nombraron. Usa cifras de ejemplo y no pegues saldos reales.",
  prompt: `ROL
Eres un coordinador de cierre contable de una aseguradora que deja ordenado el estado del cierre mensual para el contador general.

CONTEXTO
Estas son mis notas de la reunión de coordinación del cierre mensual: conciliación de primas, reservas técnicas, comisiones, cuentas por cobrar a intermediarios, reaseguro cedido, impuestos y ajustes pendientes entre áreas. Están desordenadas. Los datos están anonimizados y las cifras son de ejemplo.

FUENTES
Usa solo el texto de esta página. No uses otros archivos, extractos ni saldos. No calcules diferencias que no estén escritas.

INSTRUCCIÓN
1. Ordena las notas por proceso del cierre: primas y cartera, reservas técnicas, comisiones, reaseguro, impuestos, conciliaciones bancarias.
2. Para cada proceso indica su estado según las notas: listo, en curso o bloqueado, y qué lo bloquea.
3. Extrae los ajustes y pendientes con cuenta o proceso afectado, responsable, fecha y soporte que falta. Si algo falta, escribe PENDIENTE.
4. Separa las DECISIONES (por ejemplo, contabilizar un ajuste este mes) de las IDEAS o dudas que quedaron abiertas.
5. Detecta contradicciones (dos fechas de entrega para la misma conciliación) y huecos (ajuste sin soporte).
6. Deja una página limpia con las secciones: Estado del cierre, Bloqueos, Ajustes pendientes, Decisiones, Dudas abiertas, Calendario de entregas.

FORMATO DE SALIDA
Estado del cierre en tabla con Proceso, Estado, Responsable y Fecha de entrega. Ajustes pendientes en tabla con Ajuste, Cuenta o proceso, Responsable, Soporte que falta y Fecha. Las demás secciones en máximo 4 viñetas.

LÍMITES
No inventes montos, cuentas ni fechas. No propongas asientos contables. Marca [VERIFICAR] las cifras dudosas y [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Al final indica de qué línea de mis notas sale cada estado y cada ajuste, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección Bloqueos para el correo al contador general. Máximo 5 líneas, cada bloqueo con quién lo resuelve y para cuándo. Usa solo lo que dicen mis notas.",
    "Convierte los ajustes pendientes en una tabla con Ajuste, Responsable, Fecha límite y Soporte requerido, lista para pegar en Planner. Escribe PENDIENTE donde falte un dato.",
    "Ordena el calendario de entregas por fecha y señala los procesos cuya entrega depende de otro proceso que aún está bloqueado. No muevas fechas."
  ],
  verificar: [
    "Cada proceso quedó con el estado que se dijo en la reunión y no con uno que Copilot supuso.",
    "Los montos, cuentas y fechas son los de tus notas.",
    "Los ajustes pendientes tienen el soporte que realmente falta y no uno genérico.",
    "Las dudas abiertas no se convirtieron en decisiones."
  ]
},
{
  area: "talento",
  titulo: "Notas del onboarding a cuaderno de inducción de la persona nueva",
  donde: "OneNote, página con los apuntes de la reunión de onboarding, panel de chat de Copilot",
  antes: "Ten en la página tus notas de la reunión de onboarding, con lo que se habló de herramientas, accesos y primera semana. No incluyas datos personales de la persona que ingresa.",
  prompt: `ROL
Eres un especialista de talento humano que convierte las notas de una reunión de onboarding en un cuaderno de inducción fácil de seguir.

CONTEXTO
Estas notas son de la reunión de onboarding de una persona que ingresa a un área de la aseguradora: presentación del equipo, accesos y equipos, capacitaciones obligatorias, políticas clave, plan de los primeros 30 días y a quién preguntar. Están desordenadas. Los datos están anonimizados y sin información personal.

FUENTES
Usa solo el texto de esta página. No uses el reglamento interno ni otras páginas. Si una política o un acceso no se menciona, no lo agregues.

INSTRUCCIÓN
1. Ordena las notas por tema: bienvenida y cultura, accesos y herramientas, capacitaciones obligatorias, políticas clave, plan de la primera semana, contactos.
2. Extrae cada tarea de inducción con responsable (jefe, talento humano, tecnología o la persona nueva) y fecha relativa al día 1. Si faltan, escribe PENDIENTE.
3. Separa lo que está ACORDADO de lo que fue solo una sugerencia o una idea.
4. Detecta contradicciones (dos fechas para la misma capacitación) y huecos (acceso sin responsable, capacitación sin fecha).
5. Arma la página limpia como cuaderno de la persona nueva con estas secciones: Bienvenida, Primera semana día a día, Accesos y herramientas, Capacitaciones, Políticas clave, A quién preguntar, Preguntas frecuentes.

FORMATO DE SALIDA
Primera semana día a día en tabla con Día, Actividad y Responsable. Cada otra sección en máximo 5 viñetas con lenguaje sencillo. Preguntas frecuentes con máximo 6 preguntas y su respuesta de una línea, solo con lo que dicen mis notas.

LÍMITES
No inventes políticas, plazos ni contactos. No uses tono de manual. Marca [VERIFICAR] lo que parezca una regla interna sin fuente y [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Al final indica de qué parte de mis notas sale cada tarea y cada respuesta de preguntas frecuentes, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección Políticas clave para una persona que ingresa y no conoce la compañía. Frases cortas, sin jerga interna y sin agregar reglas que no estén en mis notas.",
    "Convierte las tareas de inducción en una tabla con Tarea, Responsable, Fecha relativa al día 1 y Estado, lista para pegar en Planner. Escribe PENDIENTE donde falte responsable o fecha.",
    "Redacta un mensaje de bienvenida de 5 líneas para la persona nueva con su plan de la primera semana, usando solo lo que aparece en mis notas y sin datos personales."
  ],
  verificar: [
    "Las políticas y reglas internas de la página limpia salen de tus notas y no de conocimiento general de Copilot.",
    "Cada responsable de la tabla es el que se dijo en la reunión.",
    "Los accesos y herramientas listados coinciden con los que realmente se van a solicitar.",
    "Los contactos y nombres de la sección A quién preguntar existen y están vigentes."
  ]
},
{
  area: "tecnologia",
  titulo: "Notas del comité de proyectos a cuaderno de portafolio y riesgos",
  donde: "OneNote, página con los apuntes del comité de proyectos, icono de Copilot o panel de chat",
  antes: "Ten tus notas del comité en la página, aunque mezclen varios proyectos. Usa nombres de proyecto de ejemplo y sin datos de infraestructura sensibles ni credenciales.",
  prompt: `ROL
Eres un líder de oficina de proyectos de tecnología y operaciones de una aseguradora que ordena las notas del comité para dar visibilidad a la dirección.

CONTEXTO
Estas son mis notas del comité de proyectos: migración del core de pólizas, integración con canales digitales, automatización de siniestros, cambios en el ambiente de producción, incidentes y dependencias con áreas de negocio. Están desordenadas y mezclan varios proyectos. Los datos están anonimizados.

FUENTES
Usa solo el texto de esta página. No uses otras páginas, cronogramas ni tableros. No estimes avances que no estén escritos.

INSTRUCCIÓN
1. Agrupa las notas por proyecto y, dentro de cada uno, por tema: avance, riesgos, dependencias, cambios de alcance y presupuesto.
2. Extrae cada pendiente con responsable y fecha de entrega. Si faltan, escribe PENDIENTE.
3. Separa las DECISIONES del comité (aprobar un paso a producción, aplazar un hito) de las PROPUESTAS que quedaron sin decisión.
4. Detecta contradicciones (dos fechas de salida en vivo para el mismo proyecto) y huecos (riesgo sin dueño, dependencia sin fecha).
5. Deja una página limpia con las secciones: Portafolio en una vista, Proyectos (uno por subtítulo), Riesgos y dependencias, Decisiones, Propuestas sin decisión, Pendientes.

FORMATO DE SALIDA
Portafolio en una vista en tabla con Proyecto, Estado según las notas (verde, amarillo o rojo), Próximo hito y Responsable. Cada proyecto en máximo 4 viñetas. Pendientes en tabla con Proyecto, Tarea, Responsable y Fecha.

LÍMITES
No inventes porcentajes de avance, presupuestos ni fechas. No asignes el color del estado si las notas no dan base, escribe PENDIENTE. Marca [VERIFICAR] las fechas que se contradicen y [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Al final indica de qué línea de mis notas sale cada estado, decisión y pendiente, y lista lo que no pudiste confirmar.`,
  seguimiento: [
    "Reescribe con claridad la sección del proyecto más crítico para que la dirección entienda en 6 líneas el estado, el riesgo principal y la decisión que se necesita. Solo con lo que dicen mis notas.",
    "Convierte los pendientes en una tabla con Proyecto, Tarea, Responsable, Fecha límite y Prioridad, lista para pegar en Planner. Escribe PENDIENTE donde falte responsable o fecha.",
    "Lista los riesgos sin dueño y las dependencias sin fecha, y para cada una redacta la pregunta que hay que hacerle al área involucrada antes del próximo comité."
  ],
  verificar: [
    "El color de estado de cada proyecto se apoya en algo que dicen tus notas.",
    "Las fechas de salida en vivo y los hitos son los de tus apuntes.",
    "Las propuestas no pasaron a la sección de decisiones sin que el comité las aprobara.",
    "Ninguna nota de un proyecto quedó dentro de otro proyecto."
  ]
}
];
