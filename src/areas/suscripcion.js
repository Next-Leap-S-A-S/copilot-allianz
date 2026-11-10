const MAS_SUSCRIPCION = {
  "teams-chats": [
    {
      necesidad: "Información faltante al corredor",
      titulo: "Mensaje al corredor pidiendo lo que falta para cotizar",
      donde: "Chat de Teams con el corredor, en el cuadro de redacción, con Copilot en Redactar o Copilot Chat.",
      antes: "Ten a la mano la lista de datos que ya llegaron y la que falta. Anonimiza razón social y NIT.",
      prompt: `ROL
Eres un suscriptor de seguros generales de Allianz Colombia que escribe a un corredor por Teams con claridad y sin rodeos.

CONTEXTO
Estoy cotizando una póliza multirriesgo para una pyme [sector, por ejemplo textiles o alimentos] con sede en [ciudad]. Los datos del cliente están anonimizados. El corredor es [nombre del corredor] y tiene otros tres negocios abiertos conmigo, por eso el mensaje debe ser fácil de contestar desde el celular. Quiero cotizar antes del [fecha límite].

FUENTES
Usa solo la lista que pego abajo y los mensajes de este chat. No inventes requisitos del manual de suscripción.
Recibido: [formulario de solicitud firmado, estados financieros 2024, relación de siniestros de 3 años].
Falta: [valores asegurados por sede, año de construcción, sistema contra incendio, últimos 5 años de siniestros en Excel, plano de la bodega].

INSTRUCCIÓN
1. Redacta un mensaje de máximo 120 palabras que agradezca lo recibido en una línea.
2. Lista lo que falta en viñetas numeradas, ordenadas por impacto en la tasa, con la razón de cada ítem en menos de 12 palabras.
3. Marca con PRIORIDAD ALTA los tres ítems sin los cuales no puedo emitir cotización.
4. Propone una fecha de respuesta realista y explica en una frase qué pasa si no llega.
5. Escribe una segunda versión de 40 palabras, tono más cercano, para recordatorio a los dos días.

FORMATO DE SALIDA
Dos bloques con rótulos VERSIÓN 1 y VERSIÓN 2. Español de Colombia, tuteo, sin saludos largos ni cierres de manual.

LÍMITES
No prometas tasa, descuento ni aprobación. Si un dato que necesito depende de una política interna, escríbelo como [VERIFICAR]. Si algo del mensaje es una suposición tuya, márcalo [SUPUESTO].

CONTROL DE CALIDAD
Antes de entregar, cuenta las palabras de cada versión, confirma que cada ítem faltante aparece una sola vez y que ninguno de los recibidos se vuelve a pedir.`,
      seguimiento: [
        "Reescribe la versión 1 con un tono más firme, porque es la segunda vez que pido esta información, sin sonar molesto y en menos de 100 palabras.",
        "Convierte la lista de faltantes en una tabla con columnas Dato, Por qué lo necesito, Quién lo entrega y Fecha.",
        "Dame el mismo mensaje en inglés neutro para un corredor internacional, manteniendo los términos de seguros."
      ],
      verificar: [
        "Que los datos listados como faltantes coincidan con el checklist vigente del ramo.",
        "Que no pidas un documento que el corredor ya envió.",
        "Que la fecha de respuesta sea posible según el calendario de cotización.",
        "Que el mensaje no insinúe una tasa ni una decisión de apetito."
      ]
    },
    {
      necesidad: "Buscar condiciones de una renovación",
      titulo: "Buscar en chats lo acordado con el cliente antes de renovar",
      donde: "Copilot Chat, pestaña Trabajo, con acceso a tus chats y canales de Teams.",
      antes: "Ten el nombre interno del cliente (anonimizado en el prompt) y el rango de fechas de la póliza anterior.",
      prompt: `ROL
Eres un asistente de apoyo para un suscriptor de pymes que prepara una renovación y necesita reconstruir lo que se acordó durante el año.

CONTEXTO
Voy a renovar la póliza de [cliente anonimizado, sector] que vence el [fecha]. Durante el año hubo ajustes de deducible, una exclusión por [tema, por ejemplo robo en bodega] y una recomendación de ingeniería. Los datos están anonimizados y no quiero cifras de otros clientes.

FUENTES
Busca solo en mis chats y canales de Teams de los últimos [30] días y en el canal [nombre del canal]. No uses internet, no uses archivos adjuntos y no leas imágenes. Si algo importante parece estar en un archivo o imagen, dilo.

INSTRUCCIÓN
1. Encuentra todo mensaje donde se hable de deducibles, sublímites, exclusiones, garantías o recomendaciones de ingeniería de este cliente.
2. Ordénalos por fecha, de más antiguo a más reciente.
3. Para cada hallazgo escribe: Fecha, Quién lo dijo, Qué se acordó, Estado (cumplido, pendiente o no se sabe).
4. Señala contradicciones, por ejemplo dos deducibles distintos para la misma cobertura.
5. Termina con las 5 preguntas que debo resolver antes de renovar, ordenadas por riesgo.

FORMATO DE SALIDA
Tabla con las cuatro columnas del punto 3 y debajo una lista numerada de preguntas. Máximo 350 palabras en total.

LÍMITES
No concluyas que algo se cumplió si nadie lo confirmó, escribe PENDIENTE. Si la búsqueda no encuentra nada de un tema, di que no hay mensajes y no lo rellenes. Marca [SUPUESTO] y [VERIFICAR] cuando corresponda.

CONTROL DE CALIDAD
Revisa que cada fila cite el mensaje o la persona de origen, que las fechas estén en orden y que no haya filas duplicadas.`,
      seguimiento: [
        "De la tabla, deja solo los acuerdos pendientes y propón quién debería cerrar cada uno antes del vencimiento.",
        "Redacta un mensaje corto para el ejecutivo comercial confirmando los tres acuerdos más importantes y pidiendo que los valide.",
        "Busca ahora los mensajes donde el cliente o el corredor se quejó de algo y resúmelos en 5 líneas."
      ],
      verificar: [
        "Que cada acuerdo coincida con el texto de la póliza anterior y sus anexos.",
        "Que las fechas citadas existan en los mensajes originales.",
        "Que no se mezclen decisiones de dos clientes con nombres parecidos.",
        "Que lo marcado como cumplido tenga confirmación explícita."
      ]
    },
    {
      necesidad: "Mensaje en inglés al reasegurador",
      titulo: "Mensaje en inglés al reasegurador sobre un riesgo facultativo",
      donde: "Chat de Teams con el contacto de reaseguro, usando Redactar o Copilot Chat para la versión en inglés.",
      antes: "Ten el resumen del riesgo en español y los valores asegurados totales que vas a mencionar.",
      prompt: `ROL
Eres un suscriptor técnico de Allianz Colombia que se comunica con un reasegurador internacional en inglés claro y profesional.

CONTEXTO
Necesito apoyo facultativo para un riesgo de una pyme industrial [sector] en [ciudad]. Los datos están anonimizados. Valor asegurado total: [cifra en COP y USD aproximado]. Cobertura: todo riesgo daño material con pérdida de beneficios. Lo que complica el riesgo: [por ejemplo, planta con instalación eléctrica antigua y sin rociadores]. Tengo hasta el [fecha] para responder al cliente.

FUENTES
Usa solo este texto en español que pego: [resumen del riesgo en 5 a 8 líneas]. No agregues datos que no estén ahí y no traduzcas nombres de coberturas si no existe equivalente claro.

INSTRUCCIÓN
1. Traduce y reescribe el resumen en un mensaje de máximo 180 palabras en inglés.
2. Ordena así: qué riesgo es, valor asegurado, qué lo hace especial, qué pido (capacidad, condiciones y fecha de respuesta).
3. Mantén los términos técnicos en inglés estándar de seguros: sum insured, deductible, sublimit, loss of profits, facultative.
4. Agrega una línea final con las dos preguntas que quiero que el reasegurador responda primero.
5. Entrega además una versión de 60 palabras para el chat, sin saludo formal.

FORMATO DE SALIDA
Dos bloques rotulados MENSAJE COMPLETO y MENSAJE CORTO, y debajo una lista breve de términos que dudaste al traducir.

LÍMITES
No inventes cifras ni coberturas. No ofrezcas condiciones comerciales. Marca [VERIFICAR] los términos cuya traducción dependa del contrato de reaseguro y [SUPUESTO] lo que asumas.

CONTROL DE CALIDAD
Compara cada cifra del inglés con el español y confirma que la petición al reasegurador es clara, única y con fecha.`,
      seguimiento: [
        "Revisa mi versión en inglés que pego abajo y corrige gramática y tono sin cambiar el contenido técnico.",
        "Escribe una respuesta corta en inglés agradeciendo la cotización del reasegurador y pidiendo aclarar el deducible propuesto.",
        "Traduce al español la respuesta que pego del reasegurador y resume en 5 viñetas qué condiciones impone."
      ],
      verificar: [
        "Que valores asegurados y fechas sean idénticos en ambos idiomas.",
        "Que los términos técnicos coincidan con los del tratado o contrato facultativo.",
        "Que el mensaje no revele el nombre real del cliente.",
        "Que la petición de capacidad sea la correcta según el límite de retención."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Reunión con corredor sobre cotización",
      titulo: "Decisiones y pendientes de la reunión con el corredor",
      donde: "Panel de Copilot de la reunión en Teams, durante o al terminar, con la transcripción activada.",
      antes: "Activa la transcripción antes de empezar. Recuerda que lo que preguntas solo lo ves tú.",
      prompt: `ROL
Eres un asistente de apoyo para un suscriptor de pymes que acaba de salir de una reunión con un corredor.

CONTEXTO
La reunión trató una cotización multirriesgo para una pyme [sector, por ejemplo agroindustria] y las objeciones del corredor a la tasa y a dos exclusiones. Los datos están anonimizados. Quiero saber qué quedó acordado, qué me pidió el corredor y qué compromisos tengo yo.

FUENTES
Usa solo la transcripción de esta reunión y el chat de la reunión. No uses correos ni información externa. Si algo se dijo en voz baja o se entiende mal, dilo.

INSTRUCCIÓN
1. Resume la reunión en 5 líneas, empezando por lo que el corredor quería lograr.
2. Lista las decisiones tomadas con una cita corta de quién la dijo y en qué momento aproximado.
3. Lista las objeciones del corredor y la respuesta que di yo, marcando las que quedaron sin responder.
4. Arma una tabla de pendientes con columnas Responsable, Qué, Fecha acordada, Fecha dicha en reunión o PENDIENTE.
5. Identifica cualquier compromiso que yo adquirí sobre tasa, deducible o plazo y que requiera aprobación de mi jefe.
6. Propone 3 preguntas que debí hacer y no hice.

FORMATO DE SALIDA
Secciones con rótulos RESUMEN, DECISIONES, OBJECIONES, PENDIENTES, COMPROMISOS QUE REQUIEREN APROBACIÓN, PREGUNTAS NO HECHAS. Máximo 400 palabras.

LÍMITES
Si no hubo decisión clara sobre un tema, escribe SIN DECISIÓN. No completes fechas ni cifras que nadie dijo. Marca [VERIFICAR] lo que dependa de políticas internas y [SUPUESTO] lo que deduzcas.

CONTROL DE CALIDAD
Verifica que cada decisión tenga su cita, que no hayas mezclado objeciones con decisiones y que la tabla no tenga responsables inventados.`,
      seguimiento: [
        "Redacta el correo de confirmación al corredor con lo acordado, en 120 palabras, tono cordial y sin prometer condiciones que no se decidieron.",
        "Dime en qué momento de la reunión el corredor mostró más resistencia y qué argumentos usó.",
        "Prepara una nota para mi jefe con los dos compromisos que necesitan su aprobación y el riesgo de no darla."
      ],
      verificar: [
        "Que las citas coincidan con la transcripción.",
        "Que ningún compromiso de tasa se haya dado por hecho sin aprobación.",
        "Que las fechas del cuadro sean las dichas en reunión.",
        "Que las objeciones sin respuesta tengan un responsable propuesto."
      ]
    },
    {
      necesidad: "Comité de casos especiales en vivo",
      titulo: "Ponerme al día y seguir el comité de casos especiales",
      donde: "Panel de Copilot de la reunión en Teams, mientras el comité está en curso.",
      antes: "Activa la transcripción. Ten en mente cuál es el caso que te toca presentar para hacer la pregunta correcta.",
      prompt: `ROL
Eres un asistente que me acompaña en vivo durante un comité de casos especiales de suscripción en Allianz Colombia.

CONTEXTO
Llegué tarde al comité y debo presentar mi caso [descripción corta anonimizada, por ejemplo restaurante con asador industrial y siniestro previo por incendio]. Se están discutiendo varios riesgos con aprobación por encima de mi autonomía. Los datos están anonimizados.

FUENTES
Usa solo lo dicho en esta reunión hasta ahora. No uses manuales, correos ni normas que nadie haya mencionado.

INSTRUCCIÓN
1. Resume en 6 líneas lo que pasó desde el inicio hasta ahora.
2. Dime qué casos ya se decidieron, con el resultado: aprobado, rechazado, aprobado con condiciones o aplazado.
3. Para cada decisión con condiciones, lista las condiciones tal como se dijeron.
4. Identifica qué criterios usó el comité para decidir (siniestralidad, medidas de protección, valor asegurado, reaseguro) y cuáles se repitieron.
5. Dime cuántos minutos se han dedicado a cada caso y cuántos casos faltan antes del mío.
6. Sugiere 3 preguntas que el comité probablemente me haga a mí según los criterios que he visto.

FORMATO DE SALIDA
Primero RESUMEN en párrafo corto. Luego tabla con columnas Caso, Decisión, Condiciones, Criterio principal. Cierra con PREGUNTAS PROBABLES.

LÍMITES
No supongas decisiones que no se dijeron. Si un caso no se cerró, escribe SIN CIERRE. Marca [SUPUESTO] cuando infieras el criterio y [VERIFICAR] cuando no quede claro.

CONTROL DE CALIDAD
Comprueba que la tabla incluya todos los casos mencionados, que las condiciones no se hayan mezclado entre casos y que las preguntas probables salgan de lo dicho en reunión.`,
      seguimiento: [
        "Resume en 3 líneas la discusión del último caso y dime si hubo acuerdo o quedó abierto.",
        "Qué dijo el comité sobre garantías de protección contra incendio y a qué casos las aplicó.",
        "Prepárame una intervención de 60 segundos para presentar mi caso usando los criterios que el comité ya mencionó."
      ],
      verificar: [
        "Que el resultado de cada caso sea el que se dijo, no el que parecía lógico.",
        "Que las condiciones queden asignadas al caso correcto.",
        "Que los tiempos por caso sean aproximados y no se usen como evidencia.",
        "Que las preguntas probables sean coherentes con la política de apetito vigente."
      ]
    },
    {
      necesidad: "Preparar la siguiente reunión de renovación",
      titulo: "Preparar la próxima reunión de renovación con la anterior",
      donde: "Copilot Chat con la reunión anterior seleccionada o el panel Copilot de la reunión ya terminada.",
      antes: "Elige la reunión previa con el cliente o corredor. Ten la fecha de vencimiento de la póliza.",
      prompt: `ROL
Eres un asistente que me ayuda a preparar una reunión de renovación con base en lo que se habló en la anterior.

CONTEXTO
Voy a reunirme con [corredor o cliente anonimizado] el [fecha] para renovar la póliza multirriesgo de una pyme [sector]. La póliza vence el [fecha de vencimiento]. En la reunión anterior hubo temas de tasa, siniestralidad y recomendaciones de ingeniería. Los datos están anonimizados.

FUENTES
Usa solo la transcripción y el resumen de la reunión anterior. No uses cifras de siniestralidad que nadie haya dicho ni información de otros clientes.

INSTRUCCIÓN
1. Lista los compromisos que se hicieron en la reunión anterior, quién los tenía y su estado conocido.
2. Señala los temas que quedaron abiertos y los que el cliente evitó responder.
3. Propone una agenda de 45 minutos con tiempos por tema, empezando por lo que más pesa en la renovación.
4. Escribe las 5 preguntas que debo hacer al cliente o corredor, cada una con el motivo en una frase.
5. Identifica los 3 riesgos de que la renovación se pierda, con la señal que los muestra en la reunión anterior.
6. Sugiere qué documentos debo tener listos, en lista corta.

FORMATO DE SALIDA
Secciones COMPROMISOS PREVIOS, TEMAS ABIERTOS, AGENDA, PREGUNTAS, RIESGOS DE PÉRDIDA, DOCUMENTOS. Máximo 400 palabras, con tabla solo para la agenda.

LÍMITES
Si no hay evidencia del estado de un compromiso, escribe PENDIENTE. No propongas cambios de tasa ni condiciones. Marca [VERIFICAR] lo que dependa de políticas internas y [SUPUESTO] lo que asumas.

CONTROL DE CALIDAD
Revisa que cada compromiso salga de la reunión anterior, que los tiempos de la agenda sumen 45 minutos y que los riesgos tengan una señal concreta.`,
      seguimiento: [
        "Convierte la agenda en una invitación breve para el corredor, en 80 palabras, con objetivo y qué debe traer.",
        "Dime qué cambió desde la reunión anterior en lo que se habló de siniestros y qué debería preguntar por eso.",
        "Redacta una apertura de 30 segundos para empezar la reunión retomando lo pendiente."
      ],
      verificar: [
        "Que los compromisos listados aparezcan en la transcripción anterior.",
        "Que la agenda sume exactamente los minutos pedidos.",
        "Que los riesgos de pérdida no se presenten como hechos.",
        "Que los documentos sugeridos estén en el checklist de renovación vigente."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Comité de casos especiales",
      titulo: "Facilitator para el comité semanal de casos especiales",
      donde: "Chat de la reunión programada de Teams, escribiéndole a Facilitator al abrirla.",
      antes: "La reunión debe estar programada en Teams y Facilitator permitido por el administrador. Ten la lista de casos del día.",
      prompt: `ROL
Eres Facilitator de una reunión de Allianz Colombia. Mantienes el orden, el tiempo y el registro de un comité de casos especiales de suscripción.

CONTEXTO
Comité semanal de 60 minutos con suscripción, reaseguro, técnica y comercial. Se revisan riesgos que superan la autonomía del suscriptor. Los casos están anonimizados: [caso A bodega frigorífica, caso B clínica pyme, caso C flota de transporte de carga]. Decide el jefe de suscripción [nombre].

FUENTES
Usa solo lo que se diga en la reunión y el chat. No inventes cifras ni decisiones.

INSTRUCCIÓN
1. Propón esta agenda y avisa 3 minutos antes de cada cambio: [0 a 5 min apertura y reglas], [5 a 20 min caso A], [20 a 35 min caso B], [35 a 50 min caso C], [50 a 60 min decisiones y cierre].
2. Lleva las notas por caso con esta estructura: Caso, Riesgo planteado, Información que falta, Condiciones propuestas, Decisión.
3. Etiqueta cada punto como DECISIÓN, CONDICIÓN, PENDIENTE o RIESGO.
4. Si un caso supera 15 minutos, avisa y pregunta si se aplaza.
5. En el minuto 35 haz un recap de decisiones y pendientes.
6. Al cierre entrega el resumen y una tabla con columnas Caso, Decisión, Condiciones, Responsable, Fecha.
7. Ofrece generar un borrador en Word con la estructura de acta pegada abajo: [Asistentes, Casos, Decisiones, Condiciones, Pendientes, Próximo comité].

FORMATO DE SALIDA
Mensajes cortos de máximo 40 palabras durante la reunión. Resumen final de máximo 250 palabras.

LÍMITES
No decidas por el comité. Si no hay decisión clara, escribe SIN DECISIÓN. Marca [VERIFICAR] lo que dependa de autonomías internas.

CONTROL DE CALIDAD
Al final confirma que cada caso tiene decisión o SIN DECISIÓN y responsable.`,
      seguimiento: [
        "Cuánto tiempo llevamos en el caso B y qué falta decidir de ese caso antes de pasar al siguiente.",
        "Genera la tabla de pendientes con columnas Cubo, Tarea, Responsable, Fecha y Prioridad para pegarla en Planner.",
        "Escribe el borrador del acta en Word con la estructura pegada, dejando PENDIENTE donde falte información."
      ],
      verificar: [
        "Que las decisiones queden con el nombre de quien las tomó.",
        "Que las condiciones de cada caso no se crucen con otro caso.",
        "Que el acta use la estructura pegada y no una plantilla supuesta.",
        "Que los pendientes tengan responsable y fecha o digan PENDIENTE."
      ]
    },
    {
      necesidad: "Revisión de renovaciones con corredor",
      titulo: "Facilitator para la revisión trimestral de renovaciones",
      donde: "Chat de la reunión programada de Teams con el corredor y el equipo comercial.",
      antes: "Reunión programada en Teams. Ten la lista de renovaciones del trimestre con sus vencimientos.",
      prompt: `ROL
Eres Facilitator de una reunión programada de revisión de renovaciones entre Allianz Colombia y un corredor aliado.

CONTEXTO
Reunión de 45 minutos para revisar las renovaciones de pymes que vencen en los próximos 90 días. Participan suscripción, comercial y el corredor. Los datos están anonimizados. Hay cuentas con alza de tasa, cuentas con siniestros recientes y cuentas sin información actualizada.

FUENTES
Usa solo lo dicho en la reunión y en el chat. No uses cifras de siniestralidad que nadie haya mencionado.

INSTRUCCIÓN
1. Sigue esta agenda y avisa 3 minutos antes de cada cambio: [0 a 10 min cuentas con alza de tasa], [10 a 25 min cuentas con siniestros], [25 a 35 min información faltante], [35 a 45 min compromisos y cierre].
2. Registra cada cuenta con esta estructura: Cuenta, Vence, Tema, Postura del corredor, Postura de suscripción, Siguiente paso.
3. Etiqueta cada punto como ACUERDO, DESACUERDO, PENDIENTE o RIESGO DE PÉRDIDA.
4. A los 25 minutos haz un recap breve con cuentas cerradas y abiertas.
5. Al final entrega un resumen para el equipo comercial y una tabla para Planner con columnas Cuenta, Tarea, Responsable, Fecha, Prioridad, Criterio de hecho.
6. Si una cuenta consume más de 8 minutos, sugiere llevarla a una reunión aparte.

FORMATO DE SALIDA
Avisos de máximo 30 palabras. Resumen final de máximo 250 palabras con rótulos ACUERDOS, DESACUERDOS, PENDIENTES.

LÍMITES
No propongas tasas ni descuentos. Si algo no se aclaró, escribe SIN ACUERDO. Marca [SUPUESTO] y [VERIFICAR] cuando corresponda.

CONTROL DE CALIDAD
Revisa que todas las cuentas mencionadas aparezcan en el resumen y que cada pendiente tenga responsable y fecha.`,
      seguimiento: [
        "Dime qué cuentas quedaron con riesgo de pérdida y qué las motivó según lo dicho.",
        "Redacta el correo de seguimiento al corredor con acuerdos y pendientes en 150 palabras.",
        "Muestra solo las cuentas en las que suscripción y el corredor no están de acuerdo y la razón de cada una."
      ],
      verificar: [
        "Que cada cuenta tenga su fecha de vencimiento correcta.",
        "Que los acuerdos reflejen lo que dijeron ambas partes.",
        "Que no se registre una tasa que nadie mencionó.",
        "Que la tabla para Planner tenga responsable en cada fila."
      ]
    },
    {
      necesidad: "Revisión de inspección de riesgo",
      titulo: "Facilitator para revisar la inspección de un riesgo industrial",
      donde: "Chat de la reunión programada de Teams con ingeniería de riesgos y suscripción.",
      antes: "Reunión programada en Teams. Ten el informe de inspección a mano para leerlo en pantalla.",
      prompt: `ROL
Eres Facilitator de una reunión programada de 40 minutos para revisar el informe de inspección de un riesgo industrial y decidir condiciones de suscripción.

CONTEXTO
Se revisa la inspección de una planta pyme [sector, por ejemplo plásticos] con riesgo de incendio y explosión. Participan ingeniería de riesgos, suscripción y reaseguro. Los datos están anonimizados. La decisión es si se asegura, con qué recomendaciones y con qué garantías.

FUENTES
Usa solo lo que se diga en la reunión y en el chat. No uses el informe si nadie lo cita. No inventes hallazgos ni calificaciones.

INSTRUCCIÓN
1. Propón esta agenda y avisa 3 minutos antes de cada cambio: [0 a 8 min hallazgos principales], [8 a 20 min protección contra incendio y electricidad], [20 a 30 min recomendaciones y plazos], [30 a 40 min decisión y condiciones].
2. Lleva las notas con esta estructura: Hallazgo, Severidad dicha, Recomendación, Plazo propuesto, Responsable.
3. Etiqueta como RECOMENDACIÓN, GARANTÍA, EXCLUSIÓN o PENDIENTE.
4. Si alguien propone una condición sin plazo, pregunta el plazo.
5. A los 20 minutos haz un recap.
6. Al cierre, entrega una lista de condiciones de aceptación y una tabla para Planner con columnas Tarea, Responsable, Plazo, Prioridad.
7. Ofrece un borrador en Word con la estructura pegada: [Riesgo, Hallazgos, Recomendaciones, Garantías, Decisión].

FORMATO DE SALIDA
Avisos de máximo 30 palabras. Resumen final de 250 palabras como máximo.

LÍMITES
No califiques el riesgo por tu cuenta. Marca [VERIFICAR] los plazos que no vengan de la inspección y [SUPUESTO] cualquier inferencia.

CONTROL DE CALIDAD
Confirma que cada recomendación tiene plazo y responsable, o PENDIENTE.`,
      seguimiento: [
        "Lista solo las garantías que el equipo propuso y quién las pidió.",
        "Diferencia entre recomendaciones y garantías en lo hablado hasta ahora y marca cuáles no tienen plazo.",
        "Escribe un borrador de condiciones para comunicar al corredor, sin lenguaje técnico excesivo, en 150 palabras."
      ],
      verificar: [
        "Que cada hallazgo se haya dicho en la reunión y no se tomara del informe sin citarlo.",
        "Que las garantías coincidan con las del manual de suscripción.",
        "Que los plazos sean los acordados, no supuestos.",
        "Que el borrador no cambie la severidad de los hallazgos."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Renovación de portafolio pyme",
      titulo: "Meta: renovar 40 pólizas pyme que vencen en 60 días",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Ten el plan premium de Planner abierto y la lista de pólizas por vencer, aunque sea sin nombres.",
      prompt: `ROL
Eres un coordinador de suscripción de seguros generales que convierte una cartera de renovaciones en un plan con cubos, tareas y subtareas.

CONTEXTO
Objetivo: renovar 40 pólizas multirriesgo de pymes de distintos sectores (datos anonimizados) que vencen en los próximos 60 días. Resultado esperado: cada póliza con decisión de renovar, renovar con cambios o no renovar, comunicada al corredor al menos 15 días antes del vencimiento. Fecha final: [fecha]. Restricciones: dos suscriptores atienden la cartera, el área técnica entrega ajustes de tasa los miércoles y hay 6 cuentas con siniestros que requieren revisión de ingeniería.

FUENTES
Usa solo este texto y los archivos que adjunte: [lista de vencimientos, política de renovación, reglas de tasa]. No inventes políticas.

INSTRUCCIÓN
1. Crea cubos por etapa: Priorización, Información, Análisis, Tarifa y condiciones, Comunicación al corredor, Emisión.
2. Dentro de cada cubo escribe entre 3 y 6 tareas con verbo de acción.
3. Divide las 6 cuentas con siniestros en subtareas de revisión.
4. Asigna un rol responsable a cada tarea: Suscriptor 1, Suscriptor 2, Técnica, Ingeniería o Comercial.
5. Define prioridad Alta, Media o Baja según días al vencimiento, siniestros y alza de tasa.
6. Agrega un criterio de hecho en cada tarea.
7. Propón hitos semanales.

FORMATO DE SALIDA
Plan listo para generar en Planner, con campos Cubo, Tarea, Responsable, Fecha relativa, Prioridad, Criterio de hecho.

LÍMITES
No decidas la renovación de ninguna póliza. Marca [SUPUESTO] los plazos que no vengan de la política y [VERIFICAR] los que dependan de Técnica o Ingeniería.

CONTROL DE CALIDAD
Revisa que ninguna tarea quede sin responsable, que las fechas respeten los 15 días de aviso y que las 6 cuentas con siniestros tengan su propia ruta.`,
      seguimiento: [
        "Genera el informe de estado del plan: renovaciones decididas, en análisis y atrasadas, y las 3 cuentas con mayor riesgo de perderse.",
        "Revisa el plan y lista las tareas sin responsable, las vencidas y las que dependen de la respuesta de Técnica.",
        "Respaldo en Copilot Chat: devuelve una tabla pegable con Cubo, Tarea, Responsable, Fecha relativa, Prioridad y Criterio de hecho."
      ],
      verificar: [
        "Que las 40 pólizas estén cubiertas por el plan y no se pierda ninguna.",
        "Que las fechas respeten el aviso previo al corredor.",
        "Que los responsables existan en el equipo real.",
        "Que las prioridades sigan la política de renovación y no la fecha como único criterio."
      ]
    },
    {
      necesidad: "Cotizaciones pendientes: estado y revisión",
      titulo: "Informe de estado y revisión del plan de cotizaciones",
      donde: "Planner Agent sobre un plan existente de cotizaciones, o Copilot Chat con el plan exportado como respaldo.",
      antes: "Ten abierto el plan donde llevas las cotizaciones en curso, con fechas y responsables ya cargados.",
      prompt: `ROL
Eres un analista de operaciones de suscripción que revisa un plan de Planner con cotizaciones y prepara un informe de estado para el jefe.

CONTEXTO
Hay 18 cotizaciones pyme en curso (datos anonimizados). Algunas esperan información del corredor, otras esperan respuesta de reaseguro o ingeniería. El jefe de suscripción [nombre] pidió saber cuáles se pueden cotizar esta semana y cuáles están trabadas. Fecha del informe: [fecha].

FUENTES
Usa solo el plan abierto con sus tareas, fechas, responsables y comentarios. No uses reuniones ni correos, Planner no los lee por sí solo.

INSTRUCCIÓN
1. Cuenta las tareas completadas, en curso, atrasadas y sin iniciar.
2. Lista las cotizaciones trabadas con el motivo del bloqueo y quién debe destrabarlas.
3. Detecta tareas sin responsable, sin fecha o con fecha vencida.
4. Detecta dependencias rotas, por ejemplo tarifar sin que ingeniería haya respondido.
5. Propón un reordenamiento de prioridades para que las cotizaciones con mayor prima potencial salgan primero. Si no hay prima potencial en el plan, dilo y no la inventes.
6. Escribe las 3 decisiones que necesito del jefe.
7. Redacta el informe en 250 palabras, con frases cortas y sin adjetivos, pensando en que el jefe lo leerá en dos minutos antes de su comité de las 8 de la mañana. Usa fechas con día y mes, y cuenta los días de atraso.

FORMATO DE SALIDA
Informe con rótulos AVANCE, TRABADAS, RIESGOS, DECISIONES QUE NECESITO, y debajo una tabla con columnas Cotización, Estado, Bloqueo, Responsable, Fecha.

LÍMITES
No cambies fechas ni asignaciones sin avisarme. Marca [VERIFICAR] los datos que parezcan desactualizados y [SUPUESTO] lo que deduzcas.

CONTROL DE CALIDAD
Revisa que los conteos sumen 18 y que cada cotización trabada aparezca una sola vez.`,
      seguimiento: [
        "Dame la versión de 5 líneas del informe para pegar en un chat de Teams con el jefe.",
        "Muestra solo las tareas vencidas hace más de 5 días y propón una nueva fecha para cada una.",
        "Haz una tabla con las cotizaciones que dependen de reaseguro y cuánto llevan esperando."
      ],
      verificar: [
        "Que los conteos coincidan con lo que muestra Planner.",
        "Que las trabadas lo estén por motivo real y no por falta de actualización.",
        "Que las dependencias señaladas existan en el plan.",
        "Que no se mencionen primas que el plan no contiene."
      ]
    },
    {
      necesidad: "Plan desde un nuevo manual de suscripción",
      titulo: "Plan para aplicar el nuevo manual de suscripción pyme",
      donde: "Planner, pestaña Metas, Agregar meta, adjuntando el documento, y luego Generar tareas.",
      antes: "Ten el plan premium de Planner y el documento del nuevo manual o circular en PDF o Word.",
      prompt: `ROL
Eres un líder de implementación de suscripción que convierte un documento normativo interno en un plan de trabajo.

CONTEXTO
Llegó el nuevo manual de suscripción para el ramo multirriesgo pyme, con cambios en apetito, deducibles mínimos y exclusiones. Debe estar aplicado por el equipo de [número] suscriptores el [fecha]. Los ejemplos del equipo están anonimizados. Hay tres cosas que cambian el día a día: formularios, flujo de aprobación y plantillas de carta de condiciones.

FUENTES
Usa solo el documento adjunto [nombre del archivo]. No uses otras normas ni inventes cambios. Si una sección es ambigua, dilo.

INSTRUCCIÓN
1. Extrae del documento los cambios que afectan el trabajo del suscriptor y agrúpalos por tema.
2. Crea cubos: Lectura y dudas, Formularios y plantillas, Flujo de aprobación, Capacitación del equipo, Prueba con casos reales, Cierre.
3. Escribe entre 3 y 5 tareas por cubo, con verbo de acción.
4. Asigna un rol responsable a cada una.
5. Define prioridad por impacto en cotizaciones activas.
6. Agrega un criterio de hecho medible a cada tarea.
7. Incluye una tarea para validar con Cumplimiento cualquier punto ambiguo.

FORMATO DE SALIDA
Primero una lista numerada de los cambios detectados, máximo 10, cada uno en una línea. Luego el plan con campos Cubo, Tarea, Responsable, Fecha relativa, Prioridad, Criterio de hecho.

LÍMITES
No interpretes el manual más allá del texto. Marca [VERIFICAR] lo que dependa de aprobación interna y [SUPUESTO] los plazos que no estén en el documento.

CONTROL DE CALIDAD
Revisa que cada cambio detectado tenga al menos una tarea y que ninguna tarea cite algo que no esté en el documento.`,
      seguimiento: [
        "Lista los puntos del manual que parecen ambiguos y propón la pregunta exacta para Cumplimiento.",
        "Genera el informe de estado del plan para el jefe con avance, riesgos y 3 decisiones.",
        "Convierte las tareas del cubo Capacitación en una agenda de dos sesiones de 45 minutos."
      ],
      verificar: [
        "Que cada cambio listado exista en el documento adjunto.",
        "Que los deducibles y límites citados coincidan con el texto.",
        "Que las fechas respeten la fecha de entrada en vigor.",
        "Que las ambigüedades hayan pasado por Cumplimiento antes de aplicarse."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Notas de visita de inspección",
      titulo: "Notas de la visita a planta ordenadas como hallazgos",
      donde: "OneNote, página con tus apuntes de la visita, icono de Copilot o panel de chat.",
      antes: "Ten tus apuntes tal como quedaron en la visita, sin ordenar. Anonimiza razón social, dirección y NIT.",
      prompt: `ROL
Eres un asistente de suscripción que ordena apuntes de una visita de inspección a una planta pyme.

CONTEXTO
Estas son mis notas de una visita a una planta de [sector, por ejemplo empaques plásticos] para un riesgo multirriesgo. Los datos están anonimizados. Las notas están desordenadas, con frases cortas, medidas, observaciones y dudas. Debo entregar un informe de hallazgos a mi jefe de suscripción y a ingeniería de riesgos antes del viernes. Las medidas están en metros y los valores en pesos colombianos.

FUENTES
Usa solo el texto de esta página de OneNote. No uses internet ni normas técnicas que no estén en mis notas. No inventes medidas ni calificaciones.

INSTRUCCIÓN
1. Agrupa las notas en estos temas: construcción y ocupación, protección contra incendio, instalaciones eléctricas, almacenamiento, seguridad física, mantenimiento y siniestros previos.
2. Para cada tema, lista los hallazgos como viñetas de una línea.
3. Separa lo OBSERVADO de lo que me DIJERON los administradores.
4. Marca como RECOMENDACIÓN lo que yo sugerí exigir y como PENDIENTE lo que quedó por verificar.
5. Detecta contradicciones, por ejemplo dos fechas de última revisión del sistema contra incendio.
6. Detecta huecos: temas donde no anoté nada y que normalmente se revisan.
7. Redacta un resumen de 5 líneas con los 3 hallazgos más relevantes para la tasa.

FORMATO DE SALIDA
Secciones por tema con los rótulos anteriores, y al final RESUMEN, CONTRADICCIONES y HUECOS. Máximo 400 palabras.

LÍMITES
No conviertas una impresión mía en un hecho. Si una nota es ambigua, déjala tal cual y márcala [VERIFICAR]. Marca [SUPUESTO] cualquier inferencia.

CONTROL DE CALIDAD
Comprueba que toda nota aparezca en algún tema, que no se hayan perdido cifras ni fechas y que lo observado y lo dicho no se mezclen.`,
      seguimiento: [
        "Convierte los hallazgos en una lista de recomendaciones con prioridad Alta, Media y Baja y un plazo sugerido para cada una.",
        "Redacta el párrafo de hallazgos principales para el informe de inspección, en 120 palabras y tono técnico.",
        "Dame las preguntas que debo hacerle al cliente para cerrar los huecos que detectaste."
      ],
      verificar: [
        "Que las medidas y fechas sean las anotadas.",
        "Que lo observado no se confunda con lo dicho por el cliente.",
        "Que ninguna recomendación sea de otra visita.",
        "Que los huecos sean temas que de verdad se revisan en el ramo."
      ]
    },
    {
      necesidad: "Decisiones del comité vs ideas",
      titulo: "Separar decisiones de ideas en mis notas del comité",
      donde: "OneNote, página con tus notas del comité de casos especiales, icono de Copilot.",
      antes: "Ten tus notas del comité en la página, aunque sean desordenadas. Anonimiza clientes y valores.",
      prompt: `ROL
Eres un asistente que ordena las notas de un comité de casos especiales de suscripción y separa lo decidido de lo que solo se planteó.

CONTEXTO
Estas son mis notas de un comité de 60 minutos con varios riesgos anonimizados. Hubo discusión sobre exclusiones, deducibles, garantías y capacidad de reaseguro. No todo lo que se dijo fue una decisión. Necesito un registro limpio para enviar al equipo.

FUENTES
Usa solo el contenido de esta página. No completes decisiones que no escribí. No uses información externa.

INSTRUCCIÓN
1. Identifica cada caso discutido y crea una sección por caso.
2. En cada caso separa cuatro listas: DECISIONES, CONDICIONES ACORDADAS, IDEAS O PROPUESTAS sin decidir y PREGUNTAS ABIERTAS.
3. Para cada decisión, indica quién la tomó si lo anoté. Si no, escribe SIN RESPONSABLE.
4. Extrae los pendientes con responsable y fecha. Si faltan, escribe PENDIENTE.
5. Señala contradicciones, por ejemplo un deducible distinto para el mismo caso.
6. Señala los casos que quedaron sin decisión.
7. Escribe un resumen de 5 líneas para quienes no asistieron, con tono neutro, sin nombres de clientes reales y empezando por las decisiones que más cambian el trabajo de la semana. Usa los nombres de caso A, B y C tal como los anoté.

FORMATO DE SALIDA
Una sección por caso con las cuatro listas, luego una tabla de pendientes con columnas Caso, Tarea, Responsable, Fecha, y al final RESUMEN PARA NO ASISTENTES.

LÍMITES
Si una frase puede ser decisión o idea, trátala como idea y márcala [VERIFICAR]. No agregues condiciones que no escribí. Marca [SUPUESTO] cuando infieras algo.

CONTROL DE CALIDAD
Revisa que todos los casos de mis notas tengan sección, que ninguna idea haya quedado como decisión y que cada pendiente tenga responsable o PENDIENTE.`,
      seguimiento: [
        "Redacta el correo al equipo con solo las decisiones y condiciones acordadas, en 150 palabras y tono neutro.",
        "Dame solo las preguntas abiertas y propón quién debería responder cada una.",
        "Prepara una lista de 5 puntos para la agenda del próximo comité a partir de lo que quedó sin decidir."
      ],
      verificar: [
        "Que ninguna idea figure como decisión.",
        "Que las condiciones estén asignadas al caso correcto.",
        "Que los responsables sean los que anoté.",
        "Que el resumen no agregue nada que no esté en la página."
      ]
    },
    {
      necesidad: "Cuaderno de una cuenta en renovación",
      titulo: "Resumir y consultar el cuaderno de una cuenta pyme",
      donde: "OneNote, sección de la cuenta dentro del cuaderno, icono de Copilot o panel de chat.",
      antes: "Abre la sección con todas las páginas de la cuenta: visitas, correos pegados, condiciones y llamadas.",
      prompt: `ROL
Eres un asistente de suscripción que lee el cuaderno de una cuenta pyme y me prepara para la renovación.

CONTEXTO
Esta sección reúne un año de notas de la cuenta [cliente anonimizado, sector]: visitas, llamadas, correos pegados, condiciones acordadas y siniestros. Los datos están anonimizados. La póliza vence el [fecha] y debo decidir en qué condiciones renovar.

FUENTES
Usa solo las páginas de esta sección. No uses otras secciones ni internet. No inventes siniestros, fechas ni valores.

INSTRUCCIÓN
1. Resume la cuenta en 8 líneas: quién es el cliente, qué se cubre, quién es el corredor y qué ha pasado en el año.
2. Haz una línea de tiempo con los eventos importantes: Fecha, Evento, Página de origen.
3. Lista las condiciones vigentes: deducibles, sublímites, garantías y exclusiones mencionadas.
4. Lista los compromisos pendientes del cliente y de nuestra parte.
5. Señala información que cambió durante el año, por ejemplo ampliaciones de planta o nuevos valores.
6. Responde estas preguntas sobre el cuaderno: [¿hubo siniestros? ¿se cumplió la recomendación de ingeniería? ¿qué quejas hubo?].
7. Termina con las 5 cosas que debo confirmar antes de renovar.

FORMATO DE SALIDA
Secciones RESUMEN, LÍNEA DE TIEMPO, CONDICIONES VIGENTES, PENDIENTES, CAMBIOS, RESPUESTAS, POR CONFIRMAR. Máximo 450 palabras.

LÍMITES
Si el cuaderno no responde una pregunta, escribe NO CONSTA. Responde con frases cortas, en pesos colombianos y con fechas de día y mes, para poder pegarlo en mi informe de renovación sin reescribirlo. No mezcles condiciones de años distintos sin señalarlo. Marca [VERIFICAR] lo que debe contrastarse con la póliza y [SUPUESTO] lo que inferiste.

CONTROL DE CALIDAD
Revisa que cada evento tenga su página de origen y que las condiciones vigentes no tengan versiones contradictorias.`,
      seguimiento: [
        "Dame el resumen de la cuenta en 3 líneas para pegar en un chat con mi jefe.",
        "Lista solo los siniestros que aparecen en el cuaderno con fecha, causa y valor, y marca los datos que faltan.",
        "Redacta la lista de preguntas para el corredor antes de la renovación, con base en los vacíos del cuaderno."
      ],
      verificar: [
        "Que cada dato citado exista en una página del cuaderno.",
        "Que las condiciones vigentes sean las de la última versión.",
        "Que los siniestros coincidan con el sistema.",
        "Que NO CONSTA no se haya llenado con suposiciones."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Análisis de riesgo de un documento",
      titulo: "Análisis del riesgo a partir de los estados financieros y la solicitud",
      donde: "Copilot Chat, pestaña Trabajo, adjuntando con el clip el formulario y los estados financieros.",
      antes: "Anonimiza los documentos antes de adjuntarlos. Ten claro el ramo y el apetito vigente.",
      prompt: `ROL
Eres un analista de suscripción de seguros generales con experiencia en pymes, que prepara un análisis de riesgo para un suscriptor.

CONTEXTO
Voy a decidir si cotizo una póliza [ramo, por ejemplo multirriesgo o responsabilidad civil] para una pyme del sector [sector]. Adjunto la solicitud y los estados financieros 2024, ambos anonimizados. El público del análisis es mi jefe de suscripción. Necesito una lectura rápida y con evidencia.

FUENTES
Usa solo los documentos adjuntos. Cita de qué documento y sección sale cada dato. No uses internet ni supuestos del sector sin marcarlos.

INSTRUCCIÓN
1. Resume en 6 líneas qué hace la empresa, dónde opera y qué se quiere asegurar.
2. Extrae los datos clave: valor asegurado propuesto, ventas, número de empleados, número de sedes y antigüedad.
3. Evalúa solidez financiera con tres indicadores que encuentres en los estados: liquidez, endeudamiento y variación de ventas. Si no hay datos para uno, escribe NO CONSTA.
4. Lista los factores que agravan el riesgo y los que lo mejoran, cada uno con su fuente.
5. Señala inconsistencias entre la solicitud y los estados financieros.
6. Propone preguntas que debo hacer al corredor antes de cotizar, máximo 6.
7. Cierra con una recomendación preliminar: cotizar, cotizar con condiciones o pedir más información, con el motivo en tres líneas.

FORMATO DE SALIDA
Secciones con rótulos RESUMEN, DATOS CLAVE, SOLIDEZ FINANCIERA, FACTORES, INCONSISTENCIAS, PREGUNTAS, RECOMENDACIÓN. Tabla solo para los datos clave. Máximo 450 palabras.

LÍMITES
No fijes tasa. Marca [SUPUESTO] lo que infieras y [VERIFICAR] lo que deba contrastarse con la política de apetito.

CONTROL DE CALIDAD
Antes de responder, revisa que cada cifra tenga fuente, que los indicadores estén bien calculados y que la recomendación no contradiga los factores listados.`,
      seguimiento: [
        "Redacta la recomendación en un párrafo de 100 palabras para presentarla en el comité de casos especiales.",
        "Revisa solo las inconsistencias y dime cuáles son errores de digitación probables y cuáles pueden cambiar la decisión.",
        "Convierte las preguntas para el corredor en un correo de 120 palabras con plazo de respuesta."
      ],
      verificar: [
        "Que cada cifra exista en el documento citado.",
        "Que los indicadores se hayan calculado con las cuentas correctas.",
        "Que la recomendación respete el apetito de riesgo vigente.",
        "Que lo marcado NO CONSTA no se haya completado con suposiciones."
      ]
    },
    {
      necesidad: "Comparar condiciones y exclusiones",
      titulo: "Comparar condiciones y exclusiones entre dos versiones de póliza",
      donde: "Copilot Chat, pestaña Trabajo, adjuntando las dos versiones del clausulado o de la carta de condiciones.",
      antes: "Ten las dos versiones en Word o PDF, la vigente y la propuesta. Anonimiza datos del asegurado.",
      prompt: `ROL
Eres un analista técnico de suscripción que compara condiciones de póliza y explica los cambios a un suscriptor.

CONTEXTO
Estoy renovando una póliza multirriesgo de una pyme [sector]. Adjunto la versión vigente y la propuesta para el próximo año, ambas anonimizadas. El corredor pregunta qué cambió y debo responderle con precisión, sin errores en coberturas ni exclusiones.

FUENTES
Usa solo los dos documentos adjuntos. Cita la cláusula o el numeral de cada cambio. No uses otros clausulados ni interpretaciones jurídicas.

INSTRUCCIÓN
1. Compara coberturas, deducibles, sublímites, exclusiones, garantías y condiciones de pago.
2. Presenta una tabla con columnas Tema, Versión vigente, Versión propuesta, Cambio, Impacto para el cliente (a favor, en contra o neutro).
3. Resalta los 5 cambios que más afectan al cliente, en orden de impacto.
4. Identifica exclusiones nuevas o ampliadas y explícalas en lenguaje simple, en máximo 25 palabras cada una.
5. Identifica coberturas que se reducen o desaparecen.
6. Redacta un resumen de 100 palabras para explicárselo al corredor.
7. Lista las dudas que deben resolver con Jurídico antes de enviar la propuesta, máximo 5, cada una con la cláusula que la origina y la pregunta exacta en una frase. Ordénalas de la más urgente a la menos urgente según el riesgo de reclamo del cliente.

FORMATO DE SALIDA
Tabla, luego CAMBIOS CLAVE, EXCLUSIONES NUEVAS, COBERTURAS REDUCIDAS, RESUMEN PARA EL CORREDOR y DUDAS PARA JURÍDICO.

LÍMITES
No interpretes jurídicamente. Si el texto es ambiguo, cítalo tal cual y márcalo [VERIFICAR]. Marca [SUPUESTO] cuando asumas la intención de un cambio.

CONTROL DE CALIDAD
Revisa que cada fila de la tabla tenga cláusula en ambas versiones, que no hayas omitido ningún cambio de deducible y que el resumen para el corredor no contradiga la tabla.`,
      seguimiento: [
        "Redacta el correo para el corredor explicando los 3 cambios más sensibles, en tono profesional y sin términos jurídicos innecesarios.",
        "Muestra solo los cambios en contra del cliente y propón qué podría negociarse según lo que dice el documento.",
        "Revisa si algún cambio se contradice con otra cláusula de la misma versión y cítalo."
      ],
      verificar: [
        "Que cada cambio tenga cláusula en ambas versiones.",
        "Que los deducibles y sublímites coincidan con el texto original.",
        "Que las exclusiones explicadas no cambien de sentido al simplificarlas.",
        "Que Jurídico revise las dudas antes de enviar."
      ]
    },
    {
      necesidad: "Respuesta a un corredor molesto",
      titulo: "Respuesta al corredor que reclama por el alza de tasa en renovación",
      donde: "Copilot Chat, pestaña Trabajo. Pega el correo del corredor, anonimizado.",
      antes: "Ten el correo del corredor, la tasa anterior y la nueva con su justificación técnica.",
      prompt: `ROL
Eres un suscriptor senior de Allianz Colombia con buen manejo de relaciones con corredores, que responde de forma clara y firme sin perder la relación.

CONTEXTO
Un corredor reclama por el aumento de tasa de una renovación multirriesgo de una pyme [sector]. Dice que otra aseguradora ofrece menos y que el cliente no tuvo siniestros graves. Los datos están anonimizados. Tasa anterior: [x por mil]. Tasa propuesta: [y por mil]. Justificación técnica: [por ejemplo tendencia de siniestralidad del sector, costo de reaseguro y reposición de valores]. Quiero conservar la cuenta si hay espacio, pero sin ceder fuera de mi autonomía.

FUENTES
Usa solo el correo que pego abajo y los datos de este mensaje. No inventes cifras de mercado ni de la competencia.
Correo del corredor: [pegar aquí].

INSTRUCCIÓN
1. Resume en 3 líneas lo que reclama el corredor y lo que realmente pide.
2. Redacta una respuesta de máximo 200 palabras que reconozca la preocupación, explique en 3 puntos por qué sube la tasa y cierre con una propuesta concreta.
3. Incluye dos opciones que no impliquen bajar la tasa, por ejemplo subir deducible o ajustar una garantía, marcadas [VERIFICAR] si requieren aprobación.
4. Propone una fecha para hablar por teléfono.
5. Entrega además una versión de 80 palabras para el chat de Teams.
6. Señala las dos frases del correo del corredor que no debo contestar y por qué.

FORMATO DE SALIDA
RESUMEN, RESPUESTA POR CORREO, VERSIÓN CORTA, FRASES A NO CONTESTAR. Tono cordial, firme, tuteo profesional.

LÍMITES
No prometas descuentos ni cambios de tasa. No critiques a la competencia. Marca [SUPUESTO] cualquier dato que asumas.

CONTROL DE CALIDAD
Revisa que las tasas citadas coincidan con las que di, que no haya promesas y que el tono no sea defensivo.`,
      seguimiento: [
        "Reescribe la respuesta con un tono más cercano, porque es un corredor con quien llevo diez años trabajando.",
        "Dame un guion de 5 puntos para la llamada con el corredor, con las objeciones probables y mi respuesta.",
        "Prepara una nota interna de 80 palabras para mi jefe explicando la situación y la posición que tomé."
      ],
      verificar: [
        "Que las tasas y la justificación coincidan con el estudio técnico.",
        "Que las opciones ofrecidas estén dentro de mi autonomía.",
        "Que no haya referencias a otra aseguradora ni a cifras de mercado inventadas.",
        "Que el correo no incluya datos reales del cliente."
      ]
    }
  ]
};
